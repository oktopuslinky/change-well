import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/lib/icons";
import { couples } from "@/content/site";

export const metadata: Metadata = {
  title: "Couples Therapy & Relationship Counseling",
  description: "Couples therapy, private intensives, semi-private retreats, and Gottman Method workshops at Change-Well in Plano, TX.",
};

export default function CouplesPage() {
  return (
    <>
      <PageHero eyebrow="Just for couples" title="Couples therapy &amp; relationship counseling" intro="We help partners strengthen communication, rebuild trust, and navigate challenges together, through weekly sessions or focused intensive formats." />
      <Section tone="cream">
        <Container>
          <SectionHeading eyebrow="Choose your format" title="Ways to work on your relationship" intro="Couples may seek support for communication, life transitions, recurring conflict, or rebuilding trust. Each format offers a different pace and depth." center />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {couples.map((c) => (
              <div key={c.slug} className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-muted/30 bg-white soft-shadow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.image} alt={c.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy">{c.price}</span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-olive">{c.duration}</p>
                  <h3 className="mt-2 font-display text-xl text-navy leading-snug">{c.title}</h3>
                  <p className="mt-1 text-sm font-medium text-ink">{c.tagline}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink line-clamp-4">{c.summary}</p>
                  <Link href={`/couples/${c.slug}`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-olive hover:underline">Learn more<Icon.arrow width={16} height={16} /></Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-2xl text-center text-ink">Interested in couples therapy, an intensive, or an upcoming workshop? Contact the Change-Well office to learn more or schedule a consultation.</p>
          <div className="mt-6 flex justify-center"><Button href="/contact">Contact the office</Button></div>
        </Container>
      </Section>
      <CTABand />
    </>
  );
}
