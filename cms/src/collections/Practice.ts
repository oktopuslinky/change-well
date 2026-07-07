import type { CollectionConfig } from 'payload'
import { contentAccess, slugField, orderField, stringList, iconField } from '../fields/shared'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'order'], group: 'Practice' },
  access: contentAccess,
  defaultSort: 'order',
  fields: [
    { name: 'title', type: 'text', required: true },
    iconField(),
    { name: 'body', type: 'textarea', required: true },
    { name: 'href', type: 'text', admin: { description: 'Optional link, e.g. /couples.' } },
    orderField,
  ],
}

export const CouplesFormats: CollectionConfig = {
  slug: 'couples-formats',
  labels: { singular: 'Couples Format', plural: 'Couples Formats' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'price', 'order'], group: 'Practice' },
  access: contentAccess,
  defaultSort: 'order',
  fields: [
    slugField,
    { name: 'title', type: 'text', required: true },
    { name: 'tagline', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'price', type: 'text' },
    { name: 'duration', type: 'text' },
    { name: 'summary', type: 'textarea' },
    { name: 'quote', type: 'textarea' },
    stringList('details', 'Details ("Is this right for you?" bullets)'),
    {
      name: 'agenda',
      type: 'group',
      admin: { description: 'Optional structured agenda (intensives & retreats).' },
      fields: [
        { name: 'intro', type: 'textarea' },
        stringList('inAdvance', 'In advance'),
        { name: 'partsIntro', type: 'textarea' },
        {
          name: 'parts',
          type: 'array',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'note', type: 'text' },
            stringList('points'),
          ],
        },
        { name: 'lunchNote', type: 'text' },
        { name: 'closing', type: 'textarea' },
      ],
    },
    { name: 'guarantee', type: 'textarea' },
    { name: 'register', type: 'text', admin: { description: 'Register / Pay URL.' } },
    { name: 'registerNote', type: 'text' },
    orderField,
  ],
}

export const Offices: CollectionConfig = {
  slug: 'offices',
  admin: { useAsTitle: 'label', defaultColumns: ['label', 'order'], group: 'Practice' },
  access: contentAccess,
  defaultSort: 'order',
  fields: [
    { name: 'label', type: 'text', required: true },
    stringList('lines', 'Address lines'),
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'maps', type: 'text', admin: { description: 'Google Maps URL.' } },
    orderField,
  ],
}
