import type { CollectionConfig } from 'payload'
import { anyone, isAdminOrEditor } from '../access/roles'

/**
 * All site images (clinician & staff headshots, office photos, gallery, etc.).
 * Stored on local disk by default; when S3_* env vars are present the S3
 * storage plugin (see payload.config.ts) transparently uploads to a private
 * bucket served via CDN. Read is public because these appear on the site.
 */
export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: anyone,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  admin: { useAsTitle: 'alt', group: 'Content' },
  upload: {
    mimeTypes: ['image/*'],
    focalPoint: true,
    imageSizes: [
      { name: 'thumbnail', width: 320 },
      { name: 'card', width: 768 },
      { name: 'hero', width: 1600 },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: { description: 'Describe the image for screen readers and SEO.' },
    },
    { name: 'credit', type: 'text', admin: { description: 'Optional photo credit.' } },
  ],
}
