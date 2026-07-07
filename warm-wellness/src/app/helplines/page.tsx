import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/lib/icons";
import { helplines } from "@/content/site";

export const metadata: Metadata = {
  title: "Crisis Helplines",
  description: "Immediate mental health crisis resources and helplines.",
};

export default function HelplinesPage() {
  return (
    <>
      <PageHero eyebrow="You are not alone" title="Crisis helplines" intro="If you or someone you love is struggling, help is available right now. These free, confidential resources are here 24/7." />
      <Section tone="cream">
        <Container>
          <div className="mb-8 rounded-2xl bg-olive px-6 py-5 text-white">
            <p className="font-display text-lg">In an emergency, call 911.</p>
            <p className="text-sm text-white/85">If you are in immediate danger or thinking about harming yourself, please reach out now.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {helplines.map((h) => (
              <a key={h.name} href={h.href} className="card flex items-start gap-4 p-6 transition hover:-translate-y-1">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-olive-050 text-olive"><Icon.phone width={20} height={20} /></span>
                <span>
                  <span className="block font-display text-lg text-navy">{h.name}</span>
                  <span className="block text-sm text-ink">{h.detail}</span>
                </span>
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink">Change-Well is not a crisis service. For ongoing support, <a href="/contact" className="font-semibold text-olive hover:underline">contact our office</a> to schedule an appointment.</p>
        </Container>
      </Section>
    </>
  );
}
