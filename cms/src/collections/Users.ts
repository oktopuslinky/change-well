import type { CollectionConfig } from 'payload'
import { isAdmin } from '../access/roles'

/**
 * Staff accounts for the admin portal.
 * Security: admins manage all users; editors can only see themselves and
 * cannot change roles (prevents privilege escalation). Auth cookies are
 * HTTP-only + SameSite, Secure in production, with lockout on brute force.
 */
export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 60 * 60 * 2, // 2 hours
    maxLoginAttempts: 5,
    lockTime: 15 * 60 * 1000, // 15 minutes
    useAPIKey: false,
    cookies: {
      sameSite: 'Lax',
      secure: process.env.NODE_ENV === 'production',
    },
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'role'],
    group: 'Administration',
  },
  access: {
    // Any logged-in staff member may open the admin panel.
    admin: ({ req: { user } }) => Boolean(user),
    // Admins see everyone; others can only read their own record.
    read: ({ req: { user } }) => {
      if (user?.role === 'admin') return true
      if (user) return { id: { equals: user.id } }
      return false
    },
    create: isAdmin,
    update: ({ req: { user }, id }) => {
      if (user?.role === 'admin') return true
      // editors may update only their own profile
      if (user && id && String(user.id) === String(id)) return true
      return false
    },
    delete: isAdmin,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Administrator', value: 'admin' },
        { label: 'Editor (content only)', value: 'editor' },
      ],
      access: {
        // Only admins may set/alter roles.
        create: ({ req: { user } }) => user?.role === 'admin',
        update: ({ req: { user } }) => user?.role === 'admin',
      },
      admin: { description: 'Editors can manage content but not other users.' },
    },
  ],
}
