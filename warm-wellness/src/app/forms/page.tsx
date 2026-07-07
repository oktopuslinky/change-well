import type { Metadata } from "next";
import { Container, Section, Button } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/lib/icons";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Client Forms",
  description: "New client intake forms and paperwork for Change-Well therapy clients in Plano, TX.",
};

const steps = [
  { title: "Complete your intake forms", body: "Fill out the new client intake and any required paperwork before your first session so we can make the most of your time together." },
  { title: "Access the secure portal", body: "Once onboarded, you will receive access to our secure client portal to manage appointments and payment details." },
  { title: "Bring relevant history", body: "Any relevant medical or psychological history helps your clinician understand your needs from day one." },
];

export default function FormsPage() {
  return (
    <>
      <PageHero eyebrow="Before your visit" title="Client forms" intro="Getting started is simple. Complete the following steps before your first therapy session." />
      <Section tone="cream">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="card p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-olive text-white font-display text-lg">{i + 1}</span>
                <h2 className="mt-4 font-display text-lg text-navy">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-sky p-8 text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-olive"><Icon.clipboard width={28} height={28} /></span>
            <p className="font-display text-xl text-navy">New client intake form</p>
            <p className="max-w-xl text-ink">Access your paperwork through the secure client portal, or contact the office and we will send everything you need.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={site.portal} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open client portal<Icon.arrow width={18} height={18} /></a>
              <Button href="/contact" variant="ghost">Contact the office</Button>
            </div>
          </div>
        </Container>
      </Section>
      <CTABand />
    </>
  );
}
