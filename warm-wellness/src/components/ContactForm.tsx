"use client";
import { useState } from "react";
import { Icon } from "@/lib/icons";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const field = "mt-1 w-full rounded-xl border border-muted/50 bg-white px-4 py-3 text-navy outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/30";
  const label = "text-sm font-semibold text-navy";

  if (sent) {
    return (
      <div className="card p-8 text-center">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-olive-050 text-olive"><Icon.check width={28} height={28} /></span>
        <h3 className="mt-4 font-display text-2xl text-navy">Thank you!</h3>
        <p className="mt-2 text-ink">Your message has been prepared. Our office will be in touch soon. For anything urgent, please call 972-427-2050.</p>
        <button onClick={() => setSent(false)} className="btn btn-ghost mt-6">Send another message</button>
      </div>
    );
  }

  return (
    <form
      className="card space-y-5 p-8"
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Your name <span className="text-olive">*</span></label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email <span className="text-olive">*</span></label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
        <div>
          <label htmlFor="subject" className={label}>Subject</label>
          <input id="subject" name="subject" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className={label}>Your message <span className="text-olive">*</span></label>
        <textarea id="message" name="message" required rows={5} className={field} />
      </div>
      <p className="text-xs text-ink">Please do not include sensitive medical information in this form. This site is protected by reCAPTCHA.</p>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">Send message<Icon.arrow width={18} height={18} /></button>
    </form>
  );
}
