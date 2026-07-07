import Link from "next/link";
import { Container, Section, Eyebrow, Button, SectionHeading, IconBadge, Pill } from "@/components/ui";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/lib/icons";
import { site, services, clinicians, couples, articles, homeHero } from "@/content/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-line bg-cream">
        <Container className="py-14 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="reveal">
              <Eyebrow>{homeHero.eyebrow}</Eyebrow>
              <h1 className="display-1 text-[2.5rem] leading-[1.08] sm:text-6xl balance">{homeHero.title}</h1>
              <p className="mt-6 text-lg leading-relaxed text-ink max-w-xl">{homeHero.subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact">Book a Consultation</Button>
                <Button href="/services" variant="ghost" icon={false}>Explore Services</Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2.5">
                <Pill><Icon.check width={15} height={15} className="text-olive" />Most insurance accepted</Pill>
                <Pill><Icon.video width={15} height={15} className="text-olive" />In-person &amp; online</Pill>
                <Pill><Icon.pin width={15} height={15} className="text-olive" />Plano &amp; Austin, TX</Pill>
              </div>
            </div>
            <div className="reveal">
              <div className="relative mx-auto w-full max-w-md">
                <div className="overflow-hidden rounded-xl border border-line bg-white shadow-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={site.images.founderPortrait} alt="Dr. Diann Sanford, Psy.D., LPC, LP, founder of Change-Well" className="w-full object-cover" loading="eager" />
                  <div className="flex items-center justify-between gap-3 border-t border-line px-5 py-4">
                    <div>
                      <p className="font-display font-bold text-navy leading-tight">Dr. Diann Sanford</p>
                      <p className="text-xs text-ink">Psy.D., LPC, LP &middot; Founder</p>
                    </div>
                    <span className="rounded-md bg-navy px-3 py-1.5 text-xs font-semibold text-white">Since 2014</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TRUST STRIP */}
      <div className="bg-navy text-white">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
            {[
              { n: "6", l: "Licensed clinicians" },
              { n: "5", l: "Sessions to visible progress" },
              { n: "2", l: "Texas office locations" },
              { n: "100%", l: "Confidential & trauma-informed" },
            ].map((s) => (
              <div key={s.l} className="px-4 py-8 text-center">
                <p className="font-display text-3xl font-bold text-[#c7d68a]">{s.n}</p>
                <p className="mt-1 text-sm text-white/70">{s.l}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* SERVICES */}
      <Section tone="white">
        <Container>
          <SectionHeading eyebrow="How we can support you" title="Care for individuals, couples & families" intro="Our licensed clinicians use evidence-based, trauma-informed approaches tailored to each person, in person in Plano or through secure telehealth." center />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.title} href={s.href ?? "/services"} className="card group p-7">
                <IconBadge name={s.icon as never} />
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink">{s.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-olive">Learn more<Icon.arrow width={16} height={16} className="transition group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHY CHOOSE */}
      <Section tone="cream">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 overflow-hidden rounded-xl border border-line shadow-lg lg:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={site.images.leaves} alt="Sunlight through green leaves" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading eyebrow="Why choose Change-Well" title="Trust is at the heart of meaningful care" intro="Our clinicians take time to truly listen and understand each person, offering thoughtful, evidence-based support tailored to your needs." />
              <ul className="mt-7 space-y-4">
                {[
                  "A space where you feel comfortable, respected, and supported",
                  "Personalized treatment plans built around your goals",
                  "Integrative, holistic care for heart, mind, body, and spirit",
                  "Comprehensive psychological testing with clear, useful feedback",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-navy text-white"><Icon.check width={14} height={14} /></span>
                    <span className="text-ink">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8"><Button href="/first-visit" variant="secondary">What to expect on your first visit</Button></div>
            </div>
          </div>
        </Container>
      </Section>

      {/* TEAM */}
      <Section tone="white">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Meet the team" title="Compassionate, credentialed clinicians" />
            <Button href="/clinicians" variant="ghost">View all clinicians</Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clinicians.slice(0, 6).map((c) => (
              <Link key={c.slug} href={`/clinicians/${c.slug}`} className="card group overflow-hidden p-0">
                <div className="aspect-[4/3] overflow-hidden bg-sky-deep">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.image} alt={`${c.name}, ${c.credentials}`} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]" loading="lazy" />
                </div>
                <div className="border-t border-line p-6">
                  <h3 className="font-display text-lg font-bold text-navy">{c.name}, <span className="text-sm font-normal text-ink">{c.credentials}</span></h3>
                  <p className="mt-1 text-sm font-semibold text-olive">{c.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink line-clamp-3">&ldquo;{c.quote}&rdquo;</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* COUPLES */}
      <Section tone="cream">
        <Container>
          <SectionHeading eyebrow="Just for couples" title="Intensives, retreats & Gottman workshops" intro="Focused, extended formats that help partners make meaningful progress faster than weekly sessions alone." center />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {couples.map((c) => (
              <Link key={c.slug} href={`/couples/${c.slug}`} className="card group overflow-hidden p-0">
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.image} alt={c.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]" loading="lazy" />
                  <span className="absolute left-4 top-4 rounded-md bg-navy px-3 py-1 text-xs font-semibold text-white">{c.price}</span>
                </div>
                <div className="border-t border-line p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-olive">{c.duration}</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-navy leading-snug">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink line-clamp-3">{c.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* PULL QUOTE */}
      <section className="bg-olive text-white">
        <Container className="py-16 sm:py-20 text-center">
          <Icon.quote width={40} height={40} className="mx-auto text-white/60" />
          <p className="mx-auto mt-5 max-w-3xl font-display text-2xl font-semibold leading-snug sm:text-3xl balance">
            &ldquo;Your present circumstances don&rsquo;t determine where you can go; they merely determine where you start.&rdquo;
          </p>
          <p className="mt-5 text-sm uppercase tracking-[0.2em] text-white/75">Nido Qubein</p>
        </Container>
      </section>

      {/* RESOURCES */}
      <Section tone="white">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="From our library" title="Research-informed resources" />
            <Button href="/resources" variant="ghost">Browse all resources</Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 3).map((a) => (
              <Link key={a.slug} href={`/resources/${a.slug}`} className="card group p-7">
                <IconBadge name={a.icon as never} />
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-olive">{a.category}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-navy leading-snug">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink line-clamp-3">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-olive">Read more<Icon.arrow width={16} height={16} className="transition group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
