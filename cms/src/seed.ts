/**
 * Seed the CMS with the site's current content so the admin portal launches
 * pre-filled and demoable. Idempotent: slug-based collections upsert; others
 * seed only when empty. Images are intentionally skipped — the owner uploads
 * headshots/photos through the admin (or a later migration imports them).
 *
 * Run with:  npm run seed
 */
import 'dotenv/config'
import { getPayload } from 'payload'
import type { Payload } from 'payload'
import config from './payload.config'

// eslint-disable-next-line no-console
const dbg = (m: string) => console.log(`[seed] ${m}`)
// Pure data module (no imports) from the public site — safe to import directly.
import * as c from '../../warm-wellness/src/content/site'

const toParas = (arr?: string[]) => (arr ?? []).map((text) => ({ text }))

async function upsertBySlug(payload: Payload, collection: any, slug: string, data: Record<string, unknown>) {
  const found = await payload.find({ collection, where: { slug: { equals: slug } }, limit: 1 })
  if (found.totalDocs > 0) {
    await payload.update({ collection, id: found.docs[0].id, data })
  } else {
    await payload.create({ collection, data })
  }
}

async function seedIfEmpty(payload: Payload, collection: any, rows: Record<string, unknown>[]) {
  const existing = await payload.count({ collection })
  if (existing.totalDocs > 0) return
  for (const data of rows) await payload.create({ collection, data })
}

const run = async () => {
  dbg(`[seed] starting — secret set: ${Boolean(process.env.PAYLOAD_SECRET)} | adapter: ${process.env.DATABASE_ADAPTER}`)
  const payload = await getPayload({ config })
  dbg('[seed] payload initialized, writing content…')

  // --- Optional initial admin user (from env) ---
  if (process.env.SEED_ADMIN_EMAIL && process.env.SEED_ADMIN_PASSWORD) {
    const existing = await payload.find({
      collection: 'users',
      where: { email: { equals: process.env.SEED_ADMIN_EMAIL } },
      limit: 1,
    })
    if (existing.totalDocs === 0) {
      await payload.create({
        collection: 'users',
        data: {
          name: 'Administrator',
          email: process.env.SEED_ADMIN_EMAIL,
          password: process.env.SEED_ADMIN_PASSWORD,
          role: 'admin',
        },
      })
      payload.logger.info(`Seeded admin user: ${process.env.SEED_ADMIN_EMAIL}`)
    }
  }

  // --- Clinicians ---
  for (let i = 0; i < c.clinicians.length; i++) {
    const x = c.clinicians[i]
    await upsertBySlug(payload, 'clinicians', x.slug, {
      slug: x.slug, name: x.name, credentials: x.credentials, role: x.role,
      quote: x.quote, specialties: x.specialties, bio: toParas(x.bio),
      education: x.education ?? [], order: i,
    })
  }

  // --- Staff ---
  for (let i = 0; i < c.staff.length; i++) {
    const x = c.staff[i]
    await upsertBySlug(payload, 'staff', x.slug, {
      slug: x.slug, name: x.name, role: x.role, email: x.email, bio: toParas(x.bio), order: i,
    })
  }

  // --- Couples formats ---
  for (let i = 0; i < c.couples.length; i++) {
    const x = c.couples[i]
    await upsertBySlug(payload, 'couples-formats', x.slug, {
      slug: x.slug, title: x.title, tagline: x.tagline, price: x.price, duration: x.duration,
      summary: x.summary, quote: x.quote, details: x.details,
      agenda: x.agenda
        ? {
            intro: x.agenda.intro,
            inAdvance: x.agenda.inAdvance,
            partsIntro: x.agenda.partsIntro,
            parts: x.agenda.parts.map((p) => ({ title: p.title, note: p.note, points: p.points })),
            lunchNote: x.agenda.lunchNote,
            closing: x.agenda.closing,
          }
        : undefined,
      guarantee: x.guarantee, register: x.register, registerNote: x.registerNote, order: i,
    })
  }

  // --- Resource articles ---
  for (let i = 0; i < c.articles.length; i++) {
    const x = c.articles[i]
    await upsertBySlug(payload, 'articles', x.slug, {
      slug: x.slug, title: x.title, category: x.category, icon: x.icon, excerpt: x.excerpt,
      body: toParas(x.body), quote: x.quote,
      video: x.video ? { title: x.video.title, youtube: x.video.youtube } : undefined,
      links: x.links ?? [], references: toParas(x.references), order: i,
    })
  }

  // --- Collections without slugs (seed once) ---
  await seedIfEmpty(payload, 'services', c.services.map((s, i) => ({
    title: s.title, icon: s.icon, body: s.body, href: s.href, order: i,
  })))
  await seedIfEmpty(payload, 'resource-link-groups', c.resourceLinks.map((g, i) => ({
    heading: g.heading, links: g.links, order: i,
  })))
  await seedIfEmpty(payload, 'faqs', c.faqs.map((f, i) => ({ q: f.q, a: f.a, order: i })))
  await seedIfEmpty(payload, 'helplines', c.helplines.map((h, i) => ({
    name: h.name, detail: h.detail, href: h.href, order: i,
  })))
  await seedIfEmpty(payload, 'offices', c.site.offices.map((o, i) => ({
    label: o.label, lines: o.lines, maps: o.maps, order: i,
  })))

  // --- Globals ---
  await payload.updateGlobal({ slug: 'site-settings', data: {
    name: c.site.name, legalName: c.site.legalName, tagline: c.site.tagline, intro: c.site.intro,
    phone: c.site.phone, phoneHref: c.site.phoneHref, email: c.site.email, fax: c.site.fax,
    portal: c.site.portal, payment: c.site.payment, social: c.site.social, insurance: c.site.insurance,
  } })
  await payload.updateGlobal({ slug: 'home-hero', data: {
    eyebrow: c.homeHero.eyebrow, title: c.homeHero.title, subtitle: c.homeHero.subtitle,
    founderQuote: c.homeHero.founderQuote,
  } })
  await payload.updateGlobal({ slug: 'first-visit', data: {
    goals: c.firstVisit.goals, expect: c.firstVisit.expect, confidentiality: c.firstVisit.confidentiality,
  } })
  await payload.updateGlobal({ slug: 'rates', data: {
    intro: c.rates.intro, note: c.rates.note, items: c.rates.items, cancellation: c.rates.cancellation,
  } })
  await payload.updateGlobal({ slug: 'coaching', data: {
    intro: c.coaching.intro,
    coaches: c.coaching.coaches.map((co) => ({
      name: co.name, role: co.role, price: co.price, priceHref: co.priceHref, bio: co.bio,
    })),
    pricing: c.coaching.pricing,
  } })

  dbg('✅ Seed complete.')
}

// Top-level await keeps the runtime alive until seeding finishes.
dbg(`[seed] module start; secret=${Boolean(process.env.PAYLOAD_SECRET)}`)
try {
  await run()
  process.exit(0)
} catch (err) {
  dbg('[seed] ERROR: ' + (err instanceof Error ? err.stack : String(err)))
  process.exit(1)
}
