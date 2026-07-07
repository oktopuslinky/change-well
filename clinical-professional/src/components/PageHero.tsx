import { Container, Eyebrow } from "@/components/ui";

export function PageHero({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <section className="border-b border-line bg-cream">
      <Container className="py-14 sm:py-20">
        <div className="max-w-3xl border-l-4 border-olive pl-6">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="display-1 text-4xl sm:text-5xl balance">{title}</h1>
          {intro && <p className="mt-4 text-lg leading-relaxed text-ink max-w-2xl">{intro}</p>}
        </div>
      </Container>
    </section>
  );
}
