# Change-Well — Admin Portal (Payload CMS)

Self-hosted, decoupled admin for the Change-Well website. The public marketing
site (`../warm-wellness`) stays static/fast; this app is the secured place where
staff edit **all** site content and manage images.

Everything is configured through environment variables, so it can be deployed to
production by filling in `.env` — no code changes and nothing hardcoded.

## Stack
- **Payload 3** (TypeScript, on Next.js 16 — the same version the site uses)
- **Database:** SQLite by default (zero setup); switch to **Postgres** via env for production
- **Media:** local disk by default; switch to **private S3** via env for production

## Local setup

```bash
cd cms
npm install
cp .env.example .env
# edit .env: set PAYLOAD_SECRET (required), SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD (optional)
npm run seed     # pre-fills the CMS with the current site content + creates an admin
npm run dev      # admin at http://localhost:3001/admin
```

Generate a secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Going to production (when the company is ready)

Set these env vars on the host (secret manager) — no code changes:

| Purpose | Vars |
| --- | --- |
| Auth signing | `PAYLOAD_SECRET` |
| Admin origin | `NEXT_PUBLIC_SERVER_URL` (e.g. `https://admin.change-well.com`) |
| Database | `DATABASE_ADAPTER=postgres`, `DATABASE_URI=postgres://…` |
| Public site (CORS/CSRF) | `PUBLIC_SITE_URL`, `CORS_ORIGINS`, `CSRF_ORIGINS` |
| Media (private bucket) | `S3_BUCKET`, `S3_REGION`, `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`, optional `S3_ENDPOINT` |
| Contact form destination | `CONTACT_FORM_TO_EMAIL` (or set it in **Settings → Contact Settings**) |

## Security posture (built in)
- Auth: HTTP-only + SameSite cookies (Secure in production), 2-hour token, **lockout after 5 failed logins** (15-min lock).
- **RBAC:** `admin` (full, incl. user management) vs `editor` (content only, cannot change roles).
- CORS/CSRF locked to configured origins; GraphQL + REST behind the same access rules.
- Deploy on its own subdomain, isolated from the public site; put it behind TLS/HSTS and (optionally) an IP allow-list or SSO.
- Recommended before handoff: enable a **2FA/TOTP** plugin, DB + media backups, and run `npm audit`.

## Content model
Mirrors `../warm-wellness/src/content/site.ts`:
- **Collections:** Users, Media, Clinicians, Staff, Services, Couples Formats, Offices, Articles, Resource Link Groups, FAQs, Helplines
- **Globals:** Site Settings, Home Hero, First Visit, Rates, Coaching, Contact Settings

## How the public site consumes it (next phase)
The site will read from this CMS through a small typed data layer (`warm-wellness/src/lib/cms.ts`) using ISR, keeping the exact rendering it has today. Until that wiring lands, the site continues to render from `site.ts` unchanged.
