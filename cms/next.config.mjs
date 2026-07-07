import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Admin app: no public marketing pages here. Harden the shell.
  poweredByHeader: false,
  reactStrictMode: true,
  // Pin the workspace root to this app (avoids picking up a stray parent lockfile).
  turbopack: { root: import.meta.dirname },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
