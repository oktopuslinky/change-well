import { Container, Eyebrow } from "@/components/ui";

export function PageHero({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden bg-sky">
      <div className="blob" style={{ background: "#9ec2d3", width: 300, height: 300, right: -60, top: -120 }} />
      <div className="blob" style={{ background: "#f2f4e7", width: 260, height: 260, left: -80, bottom: -140, opacity: 0.8 }} />
      <Container className="relative py-16 sm:py-20">
        <div className="max-w-3xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="display-1 text-4xl sm:text-5xl balance">{title}</h1>
          {intro && <p className="mt-5 text-lg leading-relaxed text-ink max-w-2xl">{intro}</p>}
        </div>
      </Container>
    </section>
  );
}
