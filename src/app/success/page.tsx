"use client";

import { useEffect } from "react";
import { useCart } from "@/store/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SuccessPage() {
  const clearCart = useCart((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-lg">

          {/* Ornement */}
          <div className="relative w-28 h-28 mx-auto mb-10">
            <div className="absolute inset-0 border border-[rgba(201,169,110,0.3)] rounded-full animate-pulse-gold" />
            <div className="absolute inset-3 border border-[rgba(201,169,110,0.2)] rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="#C9A96E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <span className="font-lato text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-5 block">
            Commande confirmée
          </span>

          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-[#2A2A2A] mb-4 leading-tight">
            Merci pour<br />
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #9A7A45, #C9A96E, #E8D5A3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              votre confiance
            </span>
          </h1>

          <div className="divider-gold mb-8" />

          <p className="font-lato text-[#7A7A7A] font-light leading-relaxed mb-4">
            Votre commande a bien été enregistrée. Vous recevrez un email de confirmation sous peu.
          </p>
          <p className="font-lato text-[#7A7A7A] font-light leading-relaxed mb-12">
            Votre colis sera préparé avec soin et expédié sous 3 à 5 jours ouvrés dans notre packaging exclusif.
          </p>

          <Link href="/" className="btn-primary inline-flex">
            Retour à la boutique
            <ArrowRight size={14} />
          </Link>

          <p className="mt-8 font-lato text-[11px] tracking-[0.15em] uppercase text-[#7A7A7A]">
            Des questions ?{" "}
            <a href="mailto:contact@elloriane.com" className="text-[#C9A96E] hover:underline">
              contact@elloriane.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
