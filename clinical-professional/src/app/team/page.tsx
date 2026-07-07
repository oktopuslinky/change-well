import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Button } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/lib/icons";
import { staff } from "@/content/site";

export const metadata: Metadata = {
  title: "Office Staff",
  description: "Meet the welcoming Change-Well office team who guide clients through scheduling, onboarding, and care.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow="Behind the scenes" title="Our office staff" intro="The warm, dedicated team who make every step at Change-Well feel welcoming, organized, and easy." />
      <Section tone="cream">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((s) => (
              <Link key={s.slug} href={`/team/${s.slug}`} className="card group overflow-hidden p-0 transition hover:-translate-y-1.5">
                <div className="aspect-[4/3] overflow-hidden bg-sky-deep">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt={s.name} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-xl text-navy">{s.name}</h2>
                  <p className="text-sm font-semibold text-olive">{s.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink line-clamp-3">{s.bio[0]}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-olive">Read bio<Icon.arrow width={16} height={16} className="transition group-hover:translate-x-1" /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex justify-center"><Button href="/clinicians" variant="ghost">Meet our clinicians</Button></div>
        </Container>
      </Section>
      <CTABand />
    </>
  );
}
