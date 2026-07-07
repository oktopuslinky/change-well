import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/lib/icons";
import { coaching, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Performance & Conflict Resolution Coaching",
  description: "Coaching for confidence, focus, resilience, and conflict resolution at Change-Well in Plano, TX.",
};

export default function CoachingPage() {
  return (
    <>
      <PageHero eyebrow="Coaching services" title="Performance &amp; conflict resolution coaching" intro={coaching.intro} />
      <Section tone="cream">
        <Container>
          <div className="space-y-8">
            {coaching.coaches.map((c) => (
              <div key={c.name} className="card grid gap-8 p-8 lg:grid-cols-[0.6fr_1.4fr]">
                <div className="mx-auto w-full max-w-[15rem]">
                  <div className="overflow-hidden rounded-2xl bg-sky-deep">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.image} alt={c.name} className="w-full object-cover object-top" loading="lazy" />
                  </div>
                </div>
                <div>
                  <p className="eyebrow">{c.role}</p>
                  <h2 className="mt-2 font-display text-2xl text-navy">{c.name}</h2>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-olive-050 px-4 py-1.5 text-sm font-semibold text-olive">{c.price}</div>
                  <p className="mt-4 leading-relaxed text-ink">{c.bio}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {c.priceHref === "/coaching/pricing" && <Button href="/coaching/pricing">See packages &amp; pricing</Button>}
                    <a href={`tel:9724272050`} className="btn btn-ghost"><Icon.phone width={17} height={17} />Schedule: {site.phone}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-ink">Interested in coaching? Contact Change-Well to learn more about availability and scheduling, or email <a href={`mailto:${site.email}`} className="font-semibold text-olive hover:underline">{site.email}</a>.</p>
        </Container>
      </Section>
      <CTABand />
    </>
  );
}
