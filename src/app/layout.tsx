import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const description =
  "Fast, reliable car tyre repair, tyre change, new tyre replacement, battery replacement, and emergency roadside assistance across Dubai. We come to you — home, office, or roadside.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Car Tyre Repair Dubai | Mobile Tyre Change & Battery Replacement",
  description,
  icons: {
    icon: "/site-icon.webp",
    shortcut: "/site-icon.webp",
    apple: "/site-icon.webp",
  },
  openGraph: {
    title: "Car Tyre Repair Dubai | Mobile Tyre Change & Battery Replacement",
    description,
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Tyre Repair Dubai | Mobile Tyre Change & Battery Replacement",
    description,
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLACEHOLDER');
          `}
        </Script>
      </head>
      <body className="bg-surface font-body-md text-on-surface selection:bg-primary/20">
        <Navbar />
        {children}
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
