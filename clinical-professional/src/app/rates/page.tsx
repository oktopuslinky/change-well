import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/lib/icons";
import { rates, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Rates, Insurance & Payment",
  description: "Therapy pricing, in-network insurance, and payment options at Change-Well in Plano, TX.",
};

export default function RatesPage() {
  return (
    <>
      <PageHero eyebrow="Rates &amp; Services" title="Rates, insurance &amp; payment" intro={rates.intro} />
      <Section tone="cream">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <div className="card overflow-hidden p-0">
                <ul>
                  {rates.items.map((it, i) => (
                    <li key={it.label} className={`flex items-center justify-between gap-6 px-6 py-4 ${i % 2 ? "bg-sky/40" : "bg-white"}`}>
                      <span className="text-sm text-navy sm:text-base">{it.label}</span>
                      <span className="shrink-0 font-display text-lg font-semibold text-olive">{it.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 rounded-2xl bg-olive-050 p-6">
                <div className="flex items-start gap-3">
                  <Icon.leaf width={22} height={22} className="mt-0.5 shrink-0 text-olive" />
                  <p className="text-ink italic">{rates.note}</p>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="card p-6">
                <p className="eyebrow mb-3">In-network insurance</p>
                <div className="flex flex-wrap gap-2">
                  {rates.inNetwork.map((n) => (
                    <span key={n} className="rounded-full bg-sky px-3 py-1 text-sm font-medium text-navy">{n}</span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-ink">Self-pay options are available. Our office can verify your coverage before your first appointment.</p>
              </div>

              <div className="card p-6">
                <p className="eyebrow mb-3">Payment</p>
                <p className="text-sm leading-relaxed text-ink">Upon onboarding you will receive access to a secure client portal to enter payment details. Charges are processed on the day services are provided.</p>
                <a href={site.payment} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4 w-full">Make a payment<Icon.arrow width={18} height={18} /></a>
              </div>

              <div className="rounded-2xl bg-navy p-6 text-white">
                <p className="font-display text-lg">Cancellation policy</p>
                <p className="mt-2 text-sm text-white/75">{rates.cancellation}</p>
              </div>
            </aside>
          </div>

          <div className="mt-12 text-center">
            <SectionHeading title="Questions about coverage?" center />
            <p className="mx-auto mt-3 max-w-xl text-ink">Call our office and we will walk you through your options.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={site.phoneHref} className="btn btn-secondary"><Icon.phone width={17} height={17} />{site.phone}</a>
              <Button href="/contact" variant="ghost">Send a message</Button>
            </div>
          </div>
        </Container>
      </Section>
      <CTABand />
    </>
  );
}
