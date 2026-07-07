import Link from "next/link";
import { site } from "@/content/site";
import { Icon } from "@/lib/icons";

export function CTABand() {
  return (
    <section className="bg-navy text-white relative overflow-hidden">
      <div className="blob" style={{ background: "#6a7a1e", width: 320, height: 320, right: -80, top: -80 }} />
      <div className="blob" style={{ background: "#9ec2d3", width: 260, height: 260, left: -70, bottom: -90 }} />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 relative">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-4" style={{ color: "#c7d68a" }}>Schedule an appointment today</p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium leading-tight balance">Take the first step toward feeling well.</h2>
            <p className="mt-4 text-white/75 max-w-xl leading-relaxed">
              Individual, couples &amp; family therapy · intensives, retreats &amp; workshops · crisis interventions. Most insurance accepted, with self-pay options available. Sessions in person in Plano or online across Texas.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">Send a Message<Icon.arrow width={18} height={18} /></Link>
              <a href={site.phoneHref} className="btn btn-ghost" style={{ background: "transparent", color: "#fff", boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,.35)" }}><Icon.phone width={17} height={17} />{site.phone}</a>
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-6">
            <p className="font-display text-xl">Ready when you are</p>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li className="flex gap-3"><Icon.check width={18} height={18} className="text-[#c7d68a] shrink-0" />Measurable improvement for most clients within 5 sessions</li>
              <li className="flex gap-3"><Icon.check width={18} height={18} className="text-[#c7d68a] shrink-0" />In-person in Plano &amp; secure telehealth statewide</li>
              <li className="flex gap-3"><Icon.check width={18} height={18} className="text-[#c7d68a] shrink-0" />A licensed clinician matched to your needs</li>
            </ul>
            <a href={site.portal} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline">Existing client? Open the portal<Icon.arrow width={16} height={16} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
