"use client";
import { useState } from "react";
import Link from "next/link";
import { nav, site } from "@/content/site";
import { Icon } from "@/lib/icons";
import { Logo } from "@/components/Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="hidden md:block border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-8 flex items-center justify-between py-2 text-sm text-ink">
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 font-medium hover:text-navy"><Icon.phone width={15} height={15} className="text-olive" />{site.phone}</a>
            <span className="inline-flex items-center gap-2"><Icon.pin width={15} height={15} className="text-olive" />Plano &amp; Austin, Texas</span>
            <span className="inline-flex items-center gap-2"><Icon.mail width={15} height={15} className="text-olive" />{site.email}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-navy"><Icon.linkedin width={16} height={16} /></a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-navy"><Icon.facebook width={16} height={16} /></a>
            <a href={site.portal} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy hover:text-olive">Client Portal &rarr;</a>
          </div>
        </div>
      </div>

      <div className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between h-[68px]">
          <Logo />
          <nav className="hidden lg:flex items-center" aria-label="Primary">
            {nav.map((item) => (
              <div key={item.label} className="nav-group relative">
                <Link href={item.href} className="inline-flex items-center gap-1 px-3.5 py-2 text-[0.82rem] font-semibold uppercase tracking-wide text-navy/80 hover:text-navy transition font-display">
                  {item.label}
                  {item.children && <Icon.chevron width={13} height={13} className="opacity-50" />}
                </Link>
                {item.children && (
                  <div className="nav-panel absolute left-0 top-full pt-2 z-50">
                    <div className="w-72 rounded-md bg-white p-1.5 shadow-xl border border-line">
                      {item.children.map((c) => (
                        <Link key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} className="block border-l-2 border-transparent px-3.5 py-2.5 text-sm text-ink hover:border-olive hover:bg-cream hover:text-navy transition">{c.label}</Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Link href="/contact" className="btn btn-primary">Book a Consult</Link>
          </div>
          <button className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-navy" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <Icon.close /> : <Icon.menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-b border-line bg-white max-h-[75vh] overflow-y-auto">
          <div className="px-5 py-4 space-y-1">
            {nav.map((item) => (
              <div key={item.label} className="border-b border-line/70 last:border-0 py-1">
                <div className="flex items-center justify-between">
                  <Link href={item.href} onClick={() => setOpen(false)} className="py-2 font-display font-semibold uppercase text-sm tracking-wide text-navy">{item.label}</Link>
                  {item.children && (
                    <button onClick={() => setSub(sub === item.label ? null : item.label)} aria-label={`Expand ${item.label}`} className="p-2 text-navy/60">
                      <Icon.chevron width={18} height={18} className={sub === item.label ? "rotate-180 transition" : "transition"} />
                    </button>
                  )}
                </div>
                {item.children && sub === item.label && (
                  <div className="pl-3 pb-2 space-y-0.5">
                    {item.children.map((c) => (
                      <Link key={c.label} href={c.href} onClick={() => setOpen(false)} className="block py-1.5 text-sm text-ink">{c.label}</Link>
                    ))}
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
