import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google";

import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Taylor Aukward — Software Engineer",
    template: "%s · Taylor Aukward",
  },
  description:
    "Software engineer at AWS Marketplace — distributed systems, product craft, and the same care I bring to music and UX.",
  applicationName: "Taylor Aukward",
  authors: [{ name: "Taylor Aukward" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Taylor Aukward",
    title: "Taylor Aukward — Software Engineer",
    description:
      "Software engineer at AWS Marketplace — distributed systems, product craft, and the same care I bring to music and UX.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taylor Aukward — Software Engineer",
    description:
      "Software engineer at AWS Marketplace — distributed systems, product craft, and the same care I bring to music and UX.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#121212",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} ${mono.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.spotify.com" />
        <link rel="dns-prefetch" href="https://i.scdn.co" />
      </head>
      <body className="min-h-dvh font-sans text-parchment/95">
        <a
          href="#main"
          className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-spotify focus:px-4 focus:py-2 focus:text-void"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
