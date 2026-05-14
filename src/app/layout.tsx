import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Inter } from "next/font/google";

import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
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
    "Software engineer at AWS Marketplace — distributed systems, safe migrations, and product you can operate with confidence.",
  applicationName: "Taylor Aukward",
  authors: [{ name: "Taylor Aukward" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Taylor Aukward",
    title: "Taylor Aukward — Software Engineer",
    description:
      "Software engineer at AWS Marketplace — distributed systems, safe migrations, and product you can operate with confidence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taylor Aukward — Software Engineer",
    description:
      "Software engineer at AWS Marketplace — distributed systems, safe migrations, and product you can operate with confidence.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${mono.variable}`}>
      <body className="min-h-dvh bg-void font-sans text-parchment/90">
        <a
          href="#main"
          className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-parchment focus:px-4 focus:py-2 focus:text-void"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
