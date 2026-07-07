import Link from "next/link";
import { site, nav } from "@/content/site";
import { Icon } from "@/lib/icons";
import { Logo } from "@/components/Logo";

const cols = [
  { title: "Clinicians", links: nav[1].children!.slice(0, 4) },
  { title: "Services", links: [
    { label: "Services & Testing", href: "/services" },
    { label: "Rates", href: "/rates" },
    { label: "Couples Therapy", href: "/couples" },
    { label: "Coaching", href: "/coaching" },
  ] },
  { title: "Resources", links: [
    { label: "All Resources", href: "/resources" },
    { label: "What to Expect", href: "/first-visit" },
    { label: "Crisis Helplines", href: "/helplines" },
    { label: "Client Forms", href: "/forms" },
  ] },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <div className="[&_span]:!text-white"><Logo light /></div>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Therapy, psychological testing, and training for children through adults — treating the total person for lasting change and wellness.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"><Icon.linkedin width={17} height={17} /></a>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"><Icon.facebook width={17} height={17} /></a>
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c7d68a]">{col.title}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}><Link href={l.href} className="text-white/70 hover:text-white transition">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10 pt-8 text-sm">
          {site.offices.map((o) => (
            <div key={o.label}>
              <p className="font-semibold text-white">{o.label}</p>
              {o.lines.map((ln) => <p key={ln} className="text-white/65">{ln}</p>)}
            </div>
          ))}
          <div>
            <p className="font-semibold text-white">Contact</p>
            <a href={site.phoneHref} className="block text-white/65 hover:text-white">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="block text-white/65 hover:text-white">{site.email}</a>
            <p className="text-white/65">Fax: {site.fax}</p>
          </div>
          <div>
            <p className="font-semibold text-white">In-Network</p>
            <p className="text-white/65">{site.insurance.join(" · ")}</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-white/5 px-5 py-4 text-sm text-white/70 flex flex-wrap items-center gap-x-2 gap-y-1">
          <Icon.phone width={16} height={16} className="text-[#c7d68a]" />
          <span className="font-semibold text-white">In crisis?</span>
          Call or text 988 (Suicide &amp; Crisis Lifeline), or dial 911 in an emergency.
          <Link href="/helplines" className="font-semibold text-[#c7d68a] hover:underline">More helplines →</Link>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/terms" className="hover:text-white/80">Privacy &amp; Terms</Link>
            <Link href="/contact/locations" className="hover:text-white/80">Directions</Link>
            <Link href="/first-visit" className="hover:text-white/80">Your First Visit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
