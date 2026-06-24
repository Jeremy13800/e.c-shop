import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Les Secrets d'Elloriane - Boutique Exclusive",
  description: "Découvrez notre collection exclusive de bijoux et lingerie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-gradient-to-br from-rose-50 via-white to-rose-50`}
      >
        {children}
      </body>
    </html>
  );
}
