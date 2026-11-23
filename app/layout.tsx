import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { links, site } from "@/content/site";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://jesselopez-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
    siteName: site.name,
    images: [{ url: "/og.jpg", width: 1200, height: 627, alt: "Jesse Lopez — Marketer, Strategist, Storyteller" }],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.jpg"],
    creator: "@TheJessefromCA",
  },
  robots: { index: true, follow: true },
};

// Tells search engines who this page is about (name, role, photo, profiles).
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: siteUrl,
  image: `${siteUrl}/images/headshot.jpg`,
  jobTitle: site.role,
  description: site.description,
  alumniOf: { "@type": "CollegeOrUniversity", name: "Massachusetts Institute of Technology" },
  sameAs: [links.linkedin, links.sharebird, links.twitter],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
