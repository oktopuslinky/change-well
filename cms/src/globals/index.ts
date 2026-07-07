import type { GlobalConfig } from 'payload'
import { anyone, isAdminOrEditor } from '../access/roles'
import { stringList } from '../fields/shared'

const globalAccess = { read: anyone, update: isAdminOrEditor }

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: globalAccess,
  admin: { group: 'Settings' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'legalName', type: 'text' },
    { name: 'tagline', type: 'text' },
    { name: 'intro', type: 'textarea' },
    {
      type: 'row',
      fields: [
        { name: 'phone', type: 'text' },
        { name: 'phoneHref', type: 'text', admin: { description: 'e.g. tel:9724272050' } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'email', type: 'email' },
        { name: 'fax', type: 'text' },
      ],
    },
    { name: 'portal', type: 'text', admin: { description: 'Client portal URL.' } },
    { name: 'payment', type: 'text', admin: { description: 'Payment / register URL.' } },
    {
      name: 'social',
      type: 'group',
      fields: [
        { name: 'linkedin', type: 'text' },
        { name: 'facebook', type: 'text' },
        { name: 'psychologyToday', type: 'text' },
      ],
    },
    stringList('insurance', 'Accepted insurance (in-network)'),
    {
      name: 'images',
      type: 'group',
      admin: { description: 'Brand imagery used across the site.' },
      fields: [
        { name: 'founderPortrait', type: 'upload', relationTo: 'media' },
        { name: 'leaves', type: 'upload', relationTo: 'media' },
        { name: 'confidentiality', type: 'upload', relationTo: 'media' },
        {
          name: 'gallery',
          type: 'array',
          fields: [{ name: 'image', type: 'upload', relationTo: 'media' }],
        },
      ],
    },
  ],
}

export const HomeHero: GlobalConfig = {
  slug: 'home-hero',
  label: 'Home Hero',
  access: globalAccess,
  admin: { group: 'Content' },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'title', type: 'text' },
    { name: 'subtitle', type: 'textarea' },
    { name: 'founderQuote', type: 'textarea' },
  ],
}

export const FirstVisit: GlobalConfig = {
  slug: 'first-visit',
  label: 'First Visit',
  access: globalAccess,
  admin: { group: 'Content' },
  fields: [
    {
      name: 'goals',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'body', type: 'textarea', required: true },
      ],
    },
    stringList('expect', 'What to expect'),
    { name: 'confidentiality', type: 'textarea' },
  ],
}

export const Rates: GlobalConfig = {
  slug: 'rates',
  access: globalAccess,
  admin: { group: 'Practice' },
  fields: [
    { name: 'intro', type: 'textarea' },
    { name: 'note', type: 'textarea' },
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'price', type: 'text', required: true },
      ],
    },
    { name: 'cancellation', type: 'textarea' },
  ],
}

export const Coaching: GlobalConfig = {
  slug: 'coaching',
  access: globalAccess,
  admin: { group: 'Practice' },
  fields: [
    { name: 'intro', type: 'textarea' },
    {
      name: 'coaches',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text' },
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'price', type: 'text' },
        { name: 'priceHref', type: 'text' },
        { name: 'bio', type: 'textarea' },
      ],
    },
    {
      name: 'pricing',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text' },
        { name: 'intro', type: 'textarea' },
        {
          name: 'rows',
          type: 'array',
          fields: [
            { name: 'type', type: 'text', required: true },
            { name: 'standard', type: 'text' },
            { name: 'intro', type: 'text' },
            { name: 'pkg', type: 'text' },
            { name: 'pkgRate', type: 'text' },
          ],
        },
      ],
    },
  ],
}

export const ContactSettings: GlobalConfig = {
  slug: 'contact-settings',
  label: 'Contact Settings',
  access: globalAccess,
  admin: { group: 'Settings' },
  fields: [
    {
      name: 'toEmail',
      type: 'email',
      defaultValue: process.env.CONTACT_FORM_TO_EMAIL || '',
      admin: { description: 'Where contact-form submissions are delivered. Can also be set via CONTACT_FORM_TO_EMAIL env.' },
    },
    { name: 'successMessage', type: 'textarea', defaultValue: 'Thank you — we will be in touch soon.' },
  ],
}
