import type { Metadata } from "next";
import { Container, Section, Button } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/lib/icons";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Office Locations & Directions",
  description: "Change-Well office locations in Plano and Austin, Texas, with directions and contact details.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero eyebrow="Directions" title="Office locations" intro="Find us in person in Plano or Austin, Texas, or meet with us online through secure telehealth anywhere in the state." />
      <Section tone="cream">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {site.offices.map((o) => (
              <div key={o.label} className="card overflow-hidden p-0">
                <div className="aspect-[16/9] overflow-hidden bg-sky-deep">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={o.image} alt={`${o.label} exterior`} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-7">
                  <p className="eyebrow">{o.label}</p>
                  <p className="mt-2 font-display text-xl text-navy">{o.lines[0]}</p>
                  <p className="text-ink">{o.lines[1]}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={o.maps} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><Icon.pin width={17} height={17} />Get directions</a>
                    <a href={site.phoneHref} className="btn btn-ghost"><Icon.phone width={17} height={17} />{site.phone}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-navy p-6 text-white sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg">Prefer to meet online?</p>
              <p className="text-sm text-white/70">Secure video sessions are available across Texas. Fax: {site.fax}</p>
            </div>
            <div className="mt-4 sm:mt-0"><Button href="/contact">Request an appointment</Button></div>
          </div>
        </Container>
      </Section>
      <CTABand />
    </>
  );
}
