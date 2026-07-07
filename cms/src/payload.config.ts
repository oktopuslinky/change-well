import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { s3Storage } from '@payloadcms/storage-s3'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Clinicians, Staff } from './collections/People'
import { Services, CouplesFormats, Offices } from './collections/Practice'
import { Articles, ResourceLinkGroups, FAQs, Helplines } from './collections/Resources'
import {
  SiteSettings, HomeHero, FirstVisit, Rates, Coaching, ContactSettings,
} from './globals'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001'

const csv = (v?: string) => (v ? v.split(',').map((s) => s.trim()).filter(Boolean) : [])
const corsDefaults = [serverURL, process.env.PUBLIC_SITE_URL].filter(Boolean) as string[]
const corsOrigins = csv(process.env.CORS_ORIGINS)
const csrfOrigins = csv(process.env.CSRF_ORIGINS)

// --- Database: chosen by env. sqlite for local/pitch, postgres for production. ---
const db =
  process.env.DATABASE_ADAPTER === 'postgres'
    ? postgresAdapter({ pool: { connectionString: process.env.DATABASE_URI || '' } })
    : sqliteAdapter({ client: { url: process.env.DATABASE_URI || 'file:./change-well.db' } })

// --- Media storage: private S3 when fully configured, else local disk. ---
const s3Enabled = Boolean(
  process.env.S3_BUCKET &&
    process.env.S3_REGION &&
    process.env.S3_ACCESS_KEY_ID &&
    process.env.S3_SECRET_ACCESS_KEY,
)

const plugins = s3Enabled
  ? [
      s3Storage({
        collections: { media: true },
        bucket: process.env.S3_BUCKET as string,
        config: {
          region: process.env.S3_REGION,
          credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
          },
          ...(process.env.S3_ENDPOINT
            ? { endpoint: process.env.S3_ENDPOINT, forcePathStyle: true }
            : {}),
        },
      }),
    ]
  : []

export default buildConfig({
  serverURL,
  admin: {
    user: Users.slug,
    meta: { titleSuffix: ' — Change-Well Admin' },
  },
  editor: lexicalEditor(),
  collections: [
    Users,
    Media,
    Clinicians,
    Staff,
    Services,
    CouplesFormats,
    Offices,
    Articles,
    ResourceLinkGroups,
    FAQs,
    Helplines,
  ],
  globals: [SiteSettings, HomeHero, FirstVisit, Rates, Coaching, ContactSettings],
  db,
  plugins,
  sharp,
  secret: process.env.PAYLOAD_SECRET || '',
  cors: corsOrigins.length ? corsOrigins : corsDefaults,
  csrf: csrfOrigins.length ? csrfOrigins : corsDefaults,
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
})
