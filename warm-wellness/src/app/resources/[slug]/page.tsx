import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, IconBadge, Button } from "@/components/ui";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/lib/icons";
import { articles } from "@/content/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return { title: a?.title ?? "Resource", description: a?.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  const more = articles.filter((x) => x.slug !== a.slug && x.category === a.category).slice(0, 3);
  const fallback = articles.filter((x) => x.slug !== a.slug).slice(0, 3);
  const related = more.length ? more : fallback;

  return (
    <>
      <section className="relative overflow-hidden bg-sky">
        <div className="blob" style={{ background: "#f2f4e7", width: 260, height: 260, right: -70, top: -120 }} />
        <Container className="relative py-14 sm:py-20">
          <Link href="/resources" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy/70 hover:text-navy"><Icon.arrow width={16} height={16} className="rotate-180" />All resources</Link>
          <div className="mt-6 max-w-3xl">
            <IconBadge name={a.icon as never} />
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-olive">{a.category}</p>
            <h1 className="mt-1 display-1 text-4xl sm:text-5xl balance">{a.title}</h1>
            <p className="mt-4 text-lg text-ink">{a.excerpt}</p>
          </div>
        </Container>
      </section>

      <Section tone="cream">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="prose-cw">
              {a.body.map((p, i) => (<p key={i}>{p}</p>))}
              {a.sections?.map((s, i) => (
                <div key={i}>
                  {s.heading && <h2>{s.heading}</h2>}
                  {s.body.map((p, j) => (<p key={j}>{p}</p>))}
                </div>
              ))}
            </div>

            {a.quote && (
              <blockquote className="my-9 rounded-r-xl border-l-4 border-olive bg-white/70 py-4 pl-5 pr-4 font-display text-xl italic leading-relaxed text-navy">
                &ldquo;{a.quote}&rdquo;
              </blockquote>
            )}

            {a.video && (
              <figure className="my-9">
                <div className="aspect-video overflow-hidden rounded-2xl border border-muted/30 soft-shadow">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${a.video.youtube}`}
                    title={a.video.title}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <figcaption className="mt-2 text-center text-sm text-ink/70">{a.video.title}</figcaption>
              </figure>
            )}

            {a.links && a.links.length > 0 && (
              <div className="my-9 rounded-2xl border border-muted/30 bg-white p-6 soft-shadow">
                <p className="eyebrow mb-4">Explore further</p>
                <ul className="space-y-3">
                  {a.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className="group flex gap-2 text-sm leading-snug text-ink hover:text-navy">
                        <Icon.arrow width={15} height={15} className="mt-1 shrink-0 -rotate-45 text-olive transition group-hover:translate-x-0.5" />
                        <span className="hover:underline">{l.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {a.references && a.references.length > 0 && (
              <details className="my-9 rounded-2xl border border-muted/30 bg-white/50 p-5">
                <summary className="cursor-pointer text-sm font-semibold text-navy">References</summary>
                <ul className="mt-3 space-y-2 text-xs leading-relaxed text-ink/80">
                  {a.references.map((r, i) => (<li key={i}>{r}</li>))}
                </ul>
              </details>
            )}

            <div className="mt-8 rounded-2xl bg-white p-6 soft-shadow border border-muted/30">
              <p className="font-display text-lg text-navy">Want to talk it through?</p>
              <p className="mt-1 text-sm text-ink">Our clinicians offer evidence-based support tailored to your goals.</p>
              <div className="mt-4 flex flex-wrap gap-3"><Button href="/contact">Book a consultation</Button><Button href="/services" variant="ghost">Our services</Button></div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sky">
        <Container>
          <h2 className="display-1 text-2xl sm:text-3xl">Keep reading</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/resources/${r.slug}`} className="card group p-6 transition hover:-translate-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-olive">{r.category}</p>
                <h3 className="mt-1 font-display text-lg text-navy leading-snug">{r.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-olive">Read<Icon.arrow width={15} height={15} className="transition group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
