import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button, IconBadge } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Therapy & Psychological Testing Services",
  description: "Evidence-based therapy, psychological evaluations, group programs, and coaching for children, adolescents, adults, couples, and families.",
};

const groups = [
  {
    icon: "clipboard", title: "Psychological Evaluations",
    intro: "Comprehensive psychological testing and diagnostic clarification.",
    items: ["ADHD", "Autism", "Anxiety and depression", "Mood and personality disorders", "Learning differences", "Diagnostic clarification", "Bariatric / surgical readiness"],
  },
  {
    icon: "heart", title: "Therapy Services",
    intro: "For individuals, couples, and families, in person in Plano or via secure telehealth.",
    items: ["Anxiety", "Depression", "Trauma", "Family conflict and counseling", "Life transitions", "Loss and grief", "Relationship concerns", "Substance abuse", "Eating disorders"],
  },
  {
    icon: "users", title: "Group Therapy & Classes",
    intro: "Support, education, and skill-building in a collaborative environment.",
    items: ["Therapy groups for shared experiences", "Skills groups for coping and communication", "Emotional regulation groups", "Parent training groups", "Educational workshops and classes"],
  },
  {
    icon: "activity", title: "Coaching & Training",
    intro: "Practical development for performance, parenting, and relationships.",
    items: ["Parent training", "Coaching classes", "Performance coaching", "Intensive couples retreats", "Workshops and educational programs"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Rates &amp; Services" title="Therapy &amp; psychological testing services" intro="Change-Well provides evidence-based care for children, adolescents, adults, couples, and families, designed to support emotional well-being, clarity, and long-term growth." />
      <Section tone="cream">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {groups.map((g) => (
              <div key={g.title} className="card p-8">
                <IconBadge name={g.icon as never} />
                <h2 className="mt-5 font-display text-2xl text-navy">{g.title}</h2>
                <p className="mt-2 text-ink">{g.intro}</p>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm text-ink"><Icon.check width={16} height={16} className="mt-0.5 shrink-0 text-olive" />{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/rates">View rates</Button>
            <Button href="/couples" variant="ghost">Couples programs</Button>
            <Button href="/coaching" variant="ghost">Coaching</Button>
          </div>
        </Container>
      </Section>

      <Section tone="navy">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow" style={{ color: "#c7d68a" }}>Treating the total person</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium">Heart, mind, body, and spirit.</h2>
              <p className="mt-4 text-white/75 leading-relaxed">We combine proven, evidence-based therapies with integrative, holistic care, and we work with area physicians to provide personalized treatment plans and accurate diagnoses.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[["Children","& adolescents"],["Adults","& seniors"],["Couples","& families"],["Physicians","& referrals"]].map(([a,b]) => (
                <div key={a} className="rounded-2xl bg-white/10 p-5 border border-white/10">
                  <p className="font-display text-lg text-white">{a}</p>
                  <p className="text-sm text-white/60">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
