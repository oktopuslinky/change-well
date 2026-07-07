import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, Button, Eyebrow } from "@/components/ui";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/lib/icons";
import { staff } from "@/content/site";

export function generateStaticParams() {
  return staff.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = staff.find((x) => x.slug === slug);
  return { title: s ? `${s.name} — ${s.role}` : "Team", description: s?.role };
}

export default async function StaffPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = staff.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-sky">
        <div className="blob" style={{ background: "#f2f4e7", width: 260, height: 260, left: -70, top: -110 }} />
        <Container className="relative py-14 sm:py-20">
          <Link href="/team" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy/70 hover:text-navy"><Icon.arrow width={16} height={16} className="rotate-180" />Office staff</Link>
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="mx-auto w-full max-w-[16rem]">
              <div className="overflow-hidden rounded-[2rem] border-4 border-white soft-shadow bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt={s.name} className="w-full object-cover object-top" loading="eager" />
              </div>
            </div>
            <div>
              <Eyebrow>{s.role}</Eyebrow>
              <h1 className="display-1 text-4xl sm:text-5xl">{s.name}</h1>
              {s.email && (
                <a href={`mailto:${s.email}`} className="mt-4 inline-flex items-center gap-2 font-semibold text-olive hover:underline"><Icon.mail width={18} height={18} />{s.email}</a>
              )}
            </div>
          </div>
        </Container>
      </section>

      <Section tone="cream">
        <Container>
          <div className="prose-cw mx-auto max-w-3xl">
            {s.bio.map((p, i) => (<p key={i}>{p}</p>))}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Get in touch</Button>
              <Button href="/first-visit" variant="ghost">What to expect</Button>
            </div>
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
