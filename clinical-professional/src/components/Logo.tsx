import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  const ink = light ? "#ffffff" : "#01084a";
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Change-Well home">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-navy">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 20.5S3.8 15.2 3.8 9.2A4.2 4.2 0 0 1 12 6.9a4.2 4.2 0 0 1 8.2 2.3C20.2 15.2 12 20.5 12 20.5z" fill="#6a7a1e"/>
          <path d="M6.6 12h3l1.3-2.8L12.8 14l1.1-2h3.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className="leading-none">
        <span className="font-display block text-lg font-bold tracking-tight" style={{ color: ink }}>Change-Well</span>
        <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.18em]" style={{ color: light ? "rgba(255,255,255,.65)" : "#6a7a1e" }}>Clinical Psychology &middot; Therapy</span>
      </span>
    </Link>
  );
}
