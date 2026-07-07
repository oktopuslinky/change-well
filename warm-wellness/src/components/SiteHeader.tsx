"use client";
import { useState } from "react";
import Link from "next/link";
import { nav, site } from "@/content/site";
import { Icon } from "@/lib/icons";
import { Logo } from "@/components/Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);
  const [sub2, setSub2] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-muted/30">
      {/* utility bar */}
      <div className="hidden md:block bg-navy text-white/90">
        <div className="mx-auto max-w-6xl px-8 flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-white"><Icon.phone width={15} height={15} />{site.phone}</a>
            <span className="inline-flex items-center gap-2 text-white/70"><Icon.pin width={15} height={15} />Plano &amp; Austin, Texas</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white"><Icon.linkedin width={16} height={16} /></a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white"><Icon.facebook width={16} height={16} /></a>
            <a href={site.portal} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 px-3 py-1 font-medium hover:bg-white/20">Client Portal</a>
          </div>
        </div>
      </div>

      {/* main bar */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between h-[68px]">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {nav.map((item) => (
            <div key={item.label} className="nav-group relative">
              <Link href={item.href} className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.95rem] font-medium text-navy/90 hover:bg-sky hover:text-navy transition">
                {item.label}
                {item.children && <Icon.chevron width={14} height={14} className="opacity-60" />}
              </Link>
              {item.children && (
                <div className="nav-panel absolute left-0 top-full pt-2 z-50">
                  <div className="w-72 rounded-2xl bg-white p-2 soft-shadow border border-muted/30">
                    {item.children.map((c) =>
                      c.children ? (
                        <div key={c.label} className="nav-subgroup relative">
                          <Link href={c.href} className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm text-ink hover:bg-sky hover:text-navy transition">
                            {c.label}
                            <Icon.chevron width={14} height={14} className="-rotate-90 opacity-50" />
                          </Link>
                          <div className="nav-subpanel absolute left-full top-0 pl-2 z-50">
                            <div className="w-64 rounded-2xl bg-white p-2 soft-shadow border border-muted/30">
                              {c.children.map((g) => (
                                <Link key={g.label} href={g.href} target={g.href.startsWith("http") ? "_blank" : undefined} className="block rounded-xl px-3.5 py-2.5 text-sm text-ink hover:bg-sky hover:text-navy transition">{g.label}</Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} className="block rounded-xl px-3.5 py-2.5 text-sm text-ink hover:bg-sky hover:text-navy transition">{c.label}</Link>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link href="/contact" className="btn btn-primary">Book a Consult<Icon.arrow width={18} height={18} /></Link>
        </div>
        <button className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky text-navy" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <Icon.close /> : <Icon.menu />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-muted/30 bg-white max-h-[75vh] overflow-y-auto">
          <div className="px-5 py-4 space-y-1">
            {nav.map((item) => (
              <div key={item.label} className="border-b border-muted/20 last:border-0 py-1">
                <div className="flex items-center justify-between">
                  <Link href={item.href} onClick={() => setOpen(false)} className="py-2 font-medium text-navy">{item.label}</Link>
                  {item.children && (
                    <button onClick={() => setSub(sub === item.label ? null : item.label)} aria-label={`Expand ${item.label}`} className="p-2 text-navy/60">
                      <Icon.chevron width={18} height={18} className={sub === item.label ? "rotate-180 transition" : "transition"} />
                    </button>
                  )}
                </div>
                {item.children && sub === item.label && (
                  <div className="pl-3 pb-2 space-y-0.5">
                    {item.children.map((c) =>
                      c.children ? (
                        <div key={c.label}>
                          <div className="flex items-center justify-between">
                            <Link href={c.href} onClick={() => setOpen(false)} className="block py-1.5 text-sm text-ink">{c.label}</Link>
                            <button onClick={() => setSub2(sub2 === c.label ? null : c.label)} aria-label={`Expand ${c.label}`} className="p-1.5 text-navy/50">
                              <Icon.chevron width={16} height={16} className={sub2 === c.label ? "rotate-180 transition" : "transition"} />
                            </button>
                          </div>
                          {sub2 === c.label && (
                            <div className="pl-3 pb-1 space-y-0.5">
                              {c.children.map((g) => (
                                <Link key={g.label} href={g.href} onClick={() => setOpen(false)} className="block py-1.5 text-sm text-ink/80">{g.label}</Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link key={c.label} href={c.href} onClick={() => setOpen(false)} className="block py-1.5 text-sm text-ink">{c.label}</Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-full mt-3">Book a Consult</Link>
          </div>
        </div>
      )}
    </header>
  );
}
