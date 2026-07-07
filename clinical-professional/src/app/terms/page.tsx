import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy & Terms",
  description: "Privacy practices and terms of use for Change-Well.",
};

const sections = [
  { h: "Confidentiality & privacy", p: "Your privacy matters. Information you share in therapy is kept confidential and is protected in accordance with applicable law, including HIPAA. Protected health information is only disclosed with your written consent or where required by law." },
  { h: "Legal exceptions", p: "Therapists are legally required to share information to protect safety in limited situations: suspected abuse of a child, dependent adult, or elderly person; a serious threat of harm to another person; or a risk of self-harm that cannot be safely managed within therapy." },
  { h: "Website use", p: "This website is provided for general informational purposes and does not constitute medical advice or establish a therapist-client relationship. Please do not send sensitive medical information through the contact form or email." },
  { h: "Appointments & cancellations", p: "Please provide at least 24 hours notice by phone or email to cancel or reschedule an appointment, to avoid being charged the full session fee." },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy &amp; terms" intro="How we protect your information and the terms that govern the use of this website." />
      <Section tone="cream">
        <Container>
          <div className="prose-cw mx-auto max-w-3xl">
            {sections.map((s) => (
              <div key={s.h} className="mb-8">
                <h2 className="font-display text-2xl text-navy">{s.h}</h2>
                <p>{s.p}</p>
              </div>
            ))}
            <p className="text-sm text-ink">Questions about our privacy practices? Contact us at <a href={`mailto:${site.email}`} className="font-semibold text-olive hover:underline">{site.email}</a> or {site.phone}.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
