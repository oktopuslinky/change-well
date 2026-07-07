import type { CollectionConfig } from 'payload'
import { contentAccess, slugField, orderField, stringList, paragraphs } from '../fields/shared'

export const Clinicians: CollectionConfig = {
  slug: 'clinicians',
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'credentials', 'role', 'order'], group: 'People' },
  access: contentAccess,
  defaultSort: 'order',
  fields: [
    slugField,
    { name: 'name', type: 'text', required: true },
    { name: 'credentials', type: 'text' },
    { name: 'role', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'quote', type: 'textarea' },
    stringList('specialties'),
    paragraphs('bio'),
    stringList('education'),
    orderField,
  ],
}

export const Staff: CollectionConfig = {
  slug: 'staff',
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'role', 'order'], group: 'People' },
  access: contentAccess,
  defaultSort: 'order',
  fields: [
    slugField,
    { name: 'name', type: 'text', required: true },
    { name: 'role', type: 'text' },
    { name: 'email', type: 'email' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    paragraphs('bio'),
    orderField,
  ],
}
