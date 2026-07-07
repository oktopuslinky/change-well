import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Button } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/lib/icons";
import { clinicians } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Clinicians",
  description: "Meet the licensed clinical psychologists and therapists at Change-Well in Plano and Austin, Texas.",
};

export default function CliniciansPage() {
  return (
    <>
      <PageHero eyebrow="Meet the team" title="Our clinicians" intro="A group of licensed clinical psychologists and therapists offering integrative, evidence-based care for children through adults." />
      <Section tone="cream">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {clinicians.map((c) => (
              <div key={c.slug} className="card flex flex-col gap-6 p-6 sm:flex-row">
                <div className="mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-2xl bg-sky-deep sm:mx-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.image} alt={`${c.name}, ${c.credentials}`} className="h-full w-full object-cover object-top" loading="lazy" />
                </div>
                <div className="min-w-0">
                  <h2 className="font-display text-xl text-navy">{c.name}, <span className="text-base text-ink">{c.credentials}</span></h2>
                  <p className="mt-0.5 text-sm font-semibold text-olive">{c.role}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {c.specialties.slice(0, 3).map((s) => (
                      <span key={s} className="rounded-full bg-sky px-2.5 py-0.5 text-xs font-medium text-navy">{s}</span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink line-clamp-3">&ldquo;{c.quote}&rdquo;</p>
                  <Link href={`/clinicians/${c.slug}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-olive hover:underline">View profile<Icon.arrow width={16} height={16} /></Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center"><Button href="/team" variant="ghost">Meet our office staff</Button></div>
        </Container>
      </Section>
      <CTABand />
    </>
  );
}
