import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, IconBadge } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/lib/icons";
import { articles } from "@/content/site";

export const metadata: Metadata = {
  title: "Resources & Research",
  description: "Research-informed articles on happiness, gratitude, depression, trauma, relationships, ADHD, anxiety, and heart rate variability.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Learn with us" title="Resources &amp; research" intro="Short, research-informed reflections by Dr. Diann Sanford and the Change-Well team on the science behind well-being, relationships, and healing." />
      <Section tone="cream">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Link key={a.slug} href={`/resources/${a.slug}`} className="card group flex flex-col p-7 transition hover:-translate-y-1.5">
                <IconBadge name={a.icon as never} />
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-olive">{a.category}</p>
                <h2 className="mt-1 font-display text-lg text-navy leading-snug">{a.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink line-clamp-4">{a.excerpt}</p>
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
