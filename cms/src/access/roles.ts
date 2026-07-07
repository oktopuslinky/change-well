import type { Access, FieldAccess } from 'payload'

/** Public content is readable by anyone (the marketing site is public). */
export const anyone: Access = () => true

/** Any authenticated staff member. */
export const isLoggedIn: Access = ({ req: { user } }) => Boolean(user)

/** Administrators only. */
export const isAdmin: Access = ({ req: { user } }) => user?.role === 'admin'

/** Administrators or editors — the roles allowed to change content. */
export const isAdminOrEditor: Access = ({ req: { user } }) =>
  user?.role === 'admin' || user?.role === 'editor'

/** Field-level: only admins may edit this field. */
export const isAdminFieldLevel: FieldAccess = ({ req: { user } }) => user?.role === 'admin'
