import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/lib/icons";
import { site, firstVisit, faqs } from "@/content/site";

export const metadata: Metadata = {
  title: "Your First Visit",
  description: "What to expect at your first therapy session at Change-Well in Plano, TX.",
};

export default function FirstVisitPage() {
  return (
    <>
      <PageHero eyebrow="What to expect" title="Your first visit" intro="Whether in person or through telehealth, your first session has two goals: to understand your circumstances and to begin building a relationship rooted in trust." />

      <Section tone="cream">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {firstVisit.goals.map((g, i) => (
              <div key={g.title} className="card p-8">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-olive text-white font-display text-lg">{i + 1}</span>
                <h3 className="mt-5 font-display text-2xl text-navy">{g.title}</h3>
                <p className="mt-3 leading-relaxed text-ink">{g.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="You can expect" title="A safe, supportive space" />
              <ul className="mt-7 space-y-3.5">
                {firstVisit.expect.map((e) => (
                  <li key={e} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-olive-050 text-olive"><Icon.check width={15} height={15} /></span>
                    <span className="text-ink">{e}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/forms">Complete intake forms</Button>
                <Button href="/contact" variant="ghost">Ask a question</Button>
              </div>
            </div>
            <div className="rounded-[2rem] bg-sky p-8 soft-shadow">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-navy"><Icon.shield width={16} height={16} className="text-olive" />Confidentiality</div>
              <p className="mt-5 leading-relaxed text-ink">{firstVisit.confidentiality}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sky">
        <Container>
          <SectionHeading eyebrow="Good to know" title="Frequently asked questions" center />
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white p-5 soft-shadow border border-muted/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-navy">
                  {f.q}
                  <Icon.chevron width={20} height={20} className="shrink-0 text-olive transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 leading-relaxed text-ink">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-ink">Still have questions? Call <a href={site.phoneHref} className="font-semibold text-olive hover:underline">{site.phone}</a>.</p>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
