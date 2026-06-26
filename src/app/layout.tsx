import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import FloatingInstagram from "@/components/FloatingInstagram";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Les Secrets d'Elloriane — Boutique Exclusive",
    template: "%s | Les Secrets d'Elloriane",
  },
  description:
    "Bijoux, lingerie et accessoires de luxe inspirés de la Méditerranée. Sélection exclusive par Elloriane Camazzati. Marseille · Italie · Malte.",
  keywords: ["bijoux luxe", "lingerie", "Marseille", "Elloriane", "boutique exclusive", "accessoires méditerranée"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Les Secrets d'Elloriane",
    title: "Les Secrets d'Elloriane — Boutique Exclusive",
    description: "Bijoux, lingerie et accessoires de luxe inspirés de la Méditerranée.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="font-lato antialiased bg-[#FAF7F2]">
        {children}
        <CookieBanner />
        <FloatingInstagram />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
