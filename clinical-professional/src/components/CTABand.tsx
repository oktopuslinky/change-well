import Link from "next/link";
import { site } from "@/content/site";
import { Icon } from "@/lib/icons";

export function CTABand() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="lg:border-r lg:border-white/15 lg:pr-10">
            <p className="eyebrow mb-4 [&::before]:bg-[#c7d68a]" style={{ color: "#c7d68a" }}>Schedule an appointment</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight balance">Take the first step toward feeling well.</h2>
            <p className="mt-4 text-white/75 max-w-xl leading-relaxed">
              Individual, couples &amp; family therapy, intensives, retreats &amp; workshops, and crisis interventions. Most insurance accepted, with self-pay options. In person in Plano or online across Texas.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-secondary">Send a Message<Icon.arrow width={17} height={17} /></Link>
              <a href={site.phoneHref} className="btn btn-ghost" style={{ background: "transparent", color: "#fff", boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,.3)" }}><Icon.phone width={17} height={17} />{site.phone}</a>
            </div>
          </div>
          <ul className="space-y-3.5 text-sm text-white/85">
            <li className="flex gap-3"><Icon.check width={18} height={18} className="text-[#c7d68a] shrink-0" />Measurable improvement for most clients within 5 sessions</li>
            <li className="flex gap-3"><Icon.check width={18} height={18} className="text-[#c7d68a] shrink-0" />In-person in Plano and secure telehealth statewide</li>
            <li className="flex gap-3"><Icon.check width={18} height={18} className="text-[#c7d68a] shrink-0" />A licensed clinician matched to your needs</li>
            <li className="pt-2"><a href={site.portal} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-white hover:underline">Existing client? Open the portal<Icon.arrow width={16} height={16} /></a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
