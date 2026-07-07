import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "@/lib/icons";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children, className = "", tone = "white",
}: { children: ReactNode; className?: string; tone?: "cream" | "white" | "sky" | "navy" | "olive" }) {
  const tones: Record<string, string> = {
    cream: "bg-cream", white: "bg-white", sky: "bg-sky",
    navy: "bg-navy text-white", olive: "bg-olive text-white",
  };
  return <section className={`py-16 sm:py-24 ${tones[tone]} ${className}`}>{children}</section>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-4">{children}</p>;
}

export function Button({
  href, children, variant = "primary", icon = true, external = false, className = "",
}: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "ghost"; icon?: boolean; external?: boolean; className?: string }) {
  const cls = `btn btn-${variant} ${className}`;
  const inner = (<>{children}{icon && <Icon.arrow width={17} height={17} />}</>);
  if (external || href.startsWith("http") || href.startsWith("tel") || href.startsWith("mailto"))
    return <a href={href} className={cls} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{inner}</a>;
  return <Link href={href} className={cls}>{inner}</Link>;
}

export function SectionHeading({
  eyebrow, title, intro, center = false,
}: { eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={`${center ? "mx-auto text-center [&_.eyebrow]:justify-center" : ""} max-w-2xl`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="display-1 text-3xl sm:text-4xl balance">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-ink">{intro}</p>}
    </div>
  );
}

export function IconBadge({ name, className = "" }: { name: IconName; className?: string }) {
  const Cmp = Icon[name];
  return (
    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-white ${className}`}>
      <Cmp width={24} height={24} />
    </span>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white px-3 py-1 text-sm font-medium text-navy">
      {children}
    </span>
  );
}
