import type { Field } from 'payload'
import { anyone, isAdminOrEditor } from '../access/roles'

/** Standard access for public content collections: public read, staff write. */
export const contentAccess = {
  read: anyone,
  create: isAdminOrEditor,
  update: isAdminOrEditor,
  delete: isAdminOrEditor,
}

/** URL-safe identifier used for routing on the public site. */
export const slugField: Field = {
  name: 'slug',
  type: 'text',
  required: true,
  unique: true,
  index: true,
  admin: { description: 'URL-safe id, e.g. "dr-diann-sanford". No spaces.' },
}

/** Manual display-order control (ascending). */
export const orderField: Field = {
  name: 'order',
  type: 'number',
  defaultValue: 0,
  admin: { description: 'Display order — lower numbers appear first.', step: 1 },
}

/** A simple list of short strings (e.g. specialties, bullet points). */
export const stringList = (name: string, label?: string): Field => ({
  name,
  type: 'text',
  hasMany: true,
  label,
})

/** A list of longer text blocks rendered as paragraphs on the site. */
export const paragraphs = (name: string, label?: string): Field => ({
  name,
  type: 'array',
  label,
  labels: { singular: 'Paragraph', plural: 'Paragraphs' },
  fields: [{ name: 'text', type: 'textarea', required: true }],
})

/** A list of {label, href} links. */
export const linkArray = (name: string, label?: string): Field => ({
  name,
  type: 'array',
  label,
  fields: [
    { name: 'label', type: 'text', required: true },
    { name: 'href', type: 'text', required: true },
  ],
})

/** Icon picker constrained to the icon set defined in the public site's lib/icons. */
export const iconField = (name = 'icon'): Field => ({
  name,
  type: 'select',
  options: [
    'heart', 'users', 'clipboard', 'home', 'sun', 'sparkles',
    'brain', 'shield', 'activity', 'wind',
  ].map((v) => ({ label: v, value: v })),
  admin: { description: 'Must match an icon available in the site theme.' },
})
