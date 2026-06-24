import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

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
  title: "Les Secrets d'Elloriane — Boutique Exclusive",
  description:
    "Bijoux, lingerie et accessoires de luxe inspirés de la Méditerranée. Marseille • Italie • Malte.",
  keywords: ["bijoux luxe", "lingerie", "Marseille", "Elloriane", "boutique exclusive"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="font-lato antialiased bg-[#FAF7F2]">{children}</body>
    </html>
  );
}
