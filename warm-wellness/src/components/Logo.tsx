import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  const ink = light ? "#ffffff" : "#01084a";
  const accent = "#6a7a1e";
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Change-Well home">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: light ? "rgba(255,255,255,.12)" : "#e9f7ff" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 20.5S3.5 15 3.5 8.8A4.3 4.3 0 0 1 12 6.6a4.3 4.3 0 0 1 8.5 2.2C20.5 15 12 20.5 12 20.5z" fill={accent} opacity="0.9"/>
          <path d="M6.5 12.2h3l1.4-3 1.8 5 1.2-2h3.2" stroke={light ? "#01084a" : "#ffffff"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className="leading-tight">
        <span className="font-display block text-lg font-semibold tracking-tight" style={{ color: ink }}>Change-Well</span>
        <span className="block text-[0.66rem] font-semibold uppercase tracking-[0.2em]" style={{ color: light ? "rgba(255,255,255,.7)" : accent }}>Therapy &amp; Testing</span>
      </span>
    </Link>
  );
}
