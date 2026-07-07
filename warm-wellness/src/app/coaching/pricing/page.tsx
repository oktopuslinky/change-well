import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/lib/icons";
import { coaching } from "@/content/site";

export const metadata: Metadata = {
  title: "Performance Coaching Pricing",
  description: "Special 2025 introductory pricing for student and adult performance coaching packages at Change-Well.",
};

export default function PricingPage() {
  const p = coaching.pricing;
  return (
    <>
      <PageHero eyebrow="Performance coaching" title={p.heading} intro={p.intro} />
      <Section tone="cream">
        <Container>
          <Link href="/coaching" className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-navy/70 hover:text-navy"><Icon.arrow width={16} height={16} className="rotate-180" />Back to coaching</Link>
          <div className="overflow-hidden rounded-[1.75rem] border border-muted/30 soft-shadow">
            <div className="hidden bg-navy text-white md:grid md:grid-cols-[1.2fr_1fr_1fr_1.6fr_1.2fr]">
              {["Client type","Standard","Introductory","Package","Package rate"].map((h) => (
                <div key={h} className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-[#c7d68a]">{h}</div>
              ))}
            </div>
            {p.rows.map((r, i) => (
              <div key={r.type} className={`grid gap-1 px-5 py-5 md:grid-cols-[1.2fr_1fr_1fr_1.6fr_1.2fr] md:gap-0 md:px-0 md:py-0 ${i % 2 ? "bg-sky/40" : "bg-white"}`}>
                <div className="font-display text-navy md:px-5 md:py-4">{r.type}</div>
                <div className="text-sm text-ink md:px-5 md:py-4"><span className="md:hidden font-semibold">Standard: </span>{r.standard}</div>
                <div className="text-sm font-semibold text-olive md:px-5 md:py-4"><span className="md:hidden">Intro: </span>{r.intro}</div>
                <div className="text-sm text-ink md:px-5 md:py-4">{r.pkg}</div>
                <div className="text-sm font-semibold text-navy md:px-5 md:py-4">{r.pkgRate}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-olive-050 p-6 text-ink">
            <p><span className="font-semibold text-navy">For students (13&ndash;19):</span> shorter, focused sessions that build the mindset, focus, and resilience to succeed in sport and academics.</p>
            <p className="mt-2"><span className="font-semibold text-navy">For adults (20+):</span> reset, strengthen resilience, and develop the confidence to perform consistently under pressure.</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Get started</Button>
            <Button href="/coaching" variant="ghost">Meet the coaches</Button>
          </div>
        </Container>
      </Section>
      <CTABand />
    </>
  );
}
