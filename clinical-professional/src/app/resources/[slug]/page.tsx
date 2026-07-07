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
          <div className="prose-cw mx-auto max-w-3xl">
            {a.body.map((p, i) => (<p key={i}>{p}</p>))}
            <div className="mt-8 rounded-2xl bg-white p-6 soft-shadow border border-muted/30 not-prose">
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
