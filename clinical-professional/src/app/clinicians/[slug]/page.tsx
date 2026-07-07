import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, Button, Eyebrow } from "@/components/ui";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/lib/icons";
import { clinicians } from "@/content/site";

export function generateStaticParams() {
  return clinicians.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = clinicians.find((x) => x.slug === slug);
  return { title: c ? `${c.name}, ${c.credentials}` : "Clinician", description: c?.role };
}

export default async function ClinicianPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = clinicians.find((x) => x.slug === slug);
  if (!c) notFound();
  const others = clinicians.filter((x) => x.slug !== c.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-sky">
        <div className="blob" style={{ background: "#9ec2d3", width: 280, height: 280, right: -60, top: -120 }} />
        <Container className="relative py-14 sm:py-20">
          <Link href="/clinicians" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy/70 hover:text-navy"><Icon.arrow width={16} height={16} className="rotate-180" />All clinicians</Link>
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="mx-auto w-full max-w-xs">
              <div className="overflow-hidden rounded-[2rem] border-4 border-white soft-shadow bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={`${c.name}, ${c.credentials}`} className="w-full object-cover object-top" loading="eager" />
              </div>
            </div>
            <div>
              <Eyebrow>{c.role}</Eyebrow>
              <h1 className="display-1 text-4xl sm:text-5xl">{c.name}</h1>
              <p className="mt-2 text-lg font-medium text-ink">{c.credentials}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.specialties.map((s) => (
                  <span key={s} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-navy soft-shadow">{s}</span>
                ))}
              </div>
              <blockquote className="mt-6 border-l-4 border-olive pl-4 font-display text-lg italic text-navy">&ldquo;{c.quote}&rdquo;</blockquote>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <div className="prose-cw max-w-none">
              <h2 className="font-display text-2xl text-navy">About {c.name.split(" ").slice(-1)}</h2>
              {c.bio.map((p, i) => (<p key={i}>{p}</p>))}
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact">Request an appointment</Button>
                <Button href="/services" variant="ghost">View services</Button>
              </div>
            </div>
            <aside className="space-y-6">
              {c.education && (
                <div className="card p-6">
                  <p className="eyebrow mb-3">Education &amp; credentials</p>
                  <ul className="space-y-2.5 text-sm text-ink">
                    {c.education.map((e) => (<li key={e} className="flex gap-2"><Icon.check width={16} height={16} className="mt-0.5 shrink-0 text-olive" />{e}</li>))}
                  </ul>
                </div>
              )}
              <div className="rounded-2xl bg-navy p-6 text-white">
                <p className="font-display text-lg">Ready to connect?</p>
                <p className="mt-2 text-sm text-white/75">In-person in Plano or secure telehealth across Texas.</p>
                <a href="tel:9724272050" className="mt-4 inline-flex items-center gap-2 font-semibold text-[#c7d68a] hover:underline"><Icon.phone width={17} height={17} />972-427-2050</a>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="sky">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="display-1 text-2xl sm:text-3xl">More of our team</h2>
            <Button href="/clinicians" variant="ghost">View all</Button>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/clinicians/${o.slug}`} className="card group overflow-hidden p-0 transition hover:-translate-y-1.5">
                <div className="aspect-[4/3] overflow-hidden bg-sky-deep">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={o.image} alt={o.name} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-navy">{o.name}</h3>
                  <p className="text-sm text-olive">{o.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
