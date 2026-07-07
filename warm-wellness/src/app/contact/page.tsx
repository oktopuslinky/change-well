import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/lib/icons";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Change-Well in Plano, TX. Phone, email, office locations, and secure client portal.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="We look forward to meeting you" title="Contact us" intro="All questions are welcome. Reach out by phone, email, or the form below, and our team will help you take the next step." />
      <Section tone="cream">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-5">
              <a href={site.phoneHref} className="card flex items-center gap-4 p-5 transition hover:-translate-y-1">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-olive-050 text-olive"><Icon.phone width={22} height={22} /></span>
                <span><span className="block text-xs font-semibold uppercase tracking-wider text-olive">Call</span><span className="font-display text-lg text-navy">{site.phone}</span></span>
              </a>
              <a href={`mailto:${site.email}`} className="card flex items-center gap-4 p-5 transition hover:-translate-y-1">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-olive-050 text-olive"><Icon.mail width={22} height={22} /></span>
                <span><span className="block text-xs font-semibold uppercase tracking-wider text-olive">Email</span><span className="font-display text-lg text-navy">{site.email}</span></span>
              </a>
              <a href={site.portal} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-4 p-5 transition hover:-translate-y-1">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-olive-050 text-olive"><Icon.calendar width={22} height={22} /></span>
                <span><span className="block text-xs font-semibold uppercase tracking-wider text-olive">Existing clients</span><span className="font-display text-lg text-navy">Open client portal</span></span>
              </a>
              <div className="card p-5">
                <p className="eyebrow mb-3">Office locations</p>
                {site.offices.map((o) => (
                  <div key={o.label} className="mb-3 last:mb-0">
                    <p className="text-sm font-semibold text-navy">{o.label}</p>
                    {o.lines.map((ln) => <p key={ln} className="text-sm text-ink">{ln}</p>)}
                  </div>
                ))}
                <Link href="/contact/locations" className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-olive hover:underline">Get directions<Icon.arrow width={15} height={15} /></Link>
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
