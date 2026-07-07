import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, Button, Eyebrow } from "@/components/ui";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/lib/icons";
import { couples } from "@/content/site";

export function generateStaticParams() {
  return couples.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = couples.find((x) => x.slug === slug);
  return { title: c?.title ?? "Couples", description: c?.summary };
}

export default async function CouplesDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = couples.find((x) => x.slug === slug);
  if (!c) notFound();
  const others = couples.filter((x) => x.slug !== c.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-sky">
        <div className="blob" style={{ background: "#9ec2d3", width: 300, height: 300, right: -80, top: -120 }} />
        <Container className="relative py-14 sm:py-20">
          <Link href="/couples" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy/70 hover:text-navy"><Icon.arrow width={16} height={16} className="rotate-180" />Couples therapy</Link>
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>{c.duration}</Eyebrow>
              <h1 className="display-1 text-4xl sm:text-5xl balance">{c.title}</h1>
              <p className="mt-3 text-lg font-medium text-ink">{c.tagline}</p>
              <p className="mt-5 leading-relaxed text-ink">{c.summary}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="rounded-full bg-olive px-4 py-2 font-display text-lg font-semibold text-white">{c.price}</span>
                <Button href="/contact">Request details</Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border-4 border-white soft-shadow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.title} className="h-full w-full object-cover" loading="eager" />
            </div>
          </div>
        </Container>
      </section>

      <Section tone="cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div>
              {c.quote && (
                <blockquote className="mb-8 border-l-4 border-olive pl-5 font-display text-xl italic text-navy">&ldquo;{c.quote}&rdquo;<footer className="mt-2 text-sm not-italic text-ink">&mdash; Dr. Diann Sanford, Psy.D, LPC</footer></blockquote>
              )}
              <h2 className="display-1 text-2xl sm:text-3xl">Is this right for you?</h2>
              <ul className="mt-6 space-y-4">
                {c.details.map((d) => (
                  <li key={d} className="flex gap-3 rounded-2xl bg-white p-5 soft-shadow border border-muted/30">
                    <Icon.check width={20} height={20} className="mt-0.5 shrink-0 text-olive" />
                    <span className="text-ink">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="space-y-6">
              <div className="rounded-2xl bg-navy p-6 text-white">
                <p className="font-display text-lg">Ready to begin?</p>
                <p className="mt-2 text-sm text-white/75">Contact the office to check availability and reserve your dates.</p>
                <a href="tel:9724272050" className="mt-4 inline-flex items-center gap-2 font-semibold text-[#c7d68a] hover:underline"><Icon.phone width={17} height={17} />972-427-2050</a>
              </div>
              <div className="card p-6">
                <p className="eyebrow mb-3">Other couples formats</p>
                <div className="space-y-3">
                  {others.map((o) => (
                    <Link key={o.slug} href={`/couples/${o.slug}`} className="flex items-center gap-3 rounded-xl p-2 hover:bg-sky transition">
                      <span className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-sky-deep">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={o.image} alt={o.title} className="h-full w-full object-cover" loading="lazy" />
                      </span>
                      <span className="text-sm font-medium text-navy">{o.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {c.agenda && (
        <Section tone="white">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Eyebrow>What to expect</Eyebrow>
              <h2 className="display-1 text-2xl sm:text-3xl">Agenda for your {c.slug === "semi-private-retreats" ? "retreat" : "intensive"}</h2>
              <p className="mt-4 leading-relaxed text-ink">{c.agenda.intro}</p>

              <div className="mt-8 rounded-2xl bg-sky p-6">
                <p className="font-display text-lg text-navy">In advance</p>
                <ul className="mt-3 space-y-2">
                  {c.agenda.inAdvance.map((d) => (
                    <li key={d} className="flex gap-2.5 text-sm text-ink"><Icon.check width={18} height={18} className="mt-0.5 shrink-0 text-olive" />{d}</li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 leading-relaxed text-ink">{c.agenda.partsIntro}</p>
              <ol className="mt-6 space-y-5">
                {c.agenda.parts.map((part, i) => (
                  <li key={part.title} className="rounded-2xl border border-muted/30 bg-white p-6 soft-shadow">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-olive font-display text-sm font-semibold text-white">{i + 1}</span>
                      <h3 className="font-display text-lg text-navy">{part.title}</h3>
                    </div>
                    {part.note && <p className="mt-2 pl-11 text-sm italic text-ink/70">{part.note}</p>}
                    <ul className="mt-3 space-y-1.5 pl-11">
                      {part.points.map((p) => (
                        <li key={p} className="flex gap-2 text-sm text-ink"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />{p}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>

              {c.agenda.lunchNote && <p className="mt-5 text-sm italic text-ink/70">{c.agenda.lunchNote}</p>}
              <p className="mt-5 leading-relaxed text-ink">{c.agenda.closing}</p>
            </div>
          </Container>
        </Section>
      )}

      {(c.guarantee || c.register) && (
        <Section tone="sky">
          <Container>
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-muted/40 bg-white p-8 soft-shadow text-center">
              {c.guarantee ? (
                <>
                  <Eyebrow>Money-back guarantee</Eyebrow>
                  <blockquote className="mt-3 font-display text-xl italic leading-relaxed text-navy">&ldquo;{c.guarantee}&rdquo;</blockquote>
                  <p className="mt-3 text-sm text-ink">&mdash; Dr. Diann Sanford, Psy.D, LPC</p>
                </>
              ) : (
                <>
                  <Eyebrow>Ready when you are</Eyebrow>
                  <p className="mt-3 font-display text-xl leading-relaxed text-navy">Contact the office to learn about upcoming dates and reserve your place.</p>
                </>
              )}
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button href="/contact">Contact the office</Button>
                {c.register && <Button href={c.register} variant="ghost" external>Register / Pay</Button>}
              </div>
              {c.registerNote && <p className="mt-4 text-xs text-ink/70">{c.registerNote}</p>}
            </div>
          </Container>
        </Section>
      )}

      <CTABand />
    </>
  );
}
