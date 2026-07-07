import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend", display: "swap" });
const source = Source_Sans_3({ subsets: ["latin"], variable: "--font-source", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Change-Well | Therapy & Psychological Testing in Plano, Texas",
    template: "%s | Change-Well",
  },
  description:
    "Licensed clinical psychologists and therapists providing therapy and psychological evaluation for individuals, couples, and families in Plano, TX and by secure telehealth across Texas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lexend.variable} ${source.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-3 focus:left-3 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
