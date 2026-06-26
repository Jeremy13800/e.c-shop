import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-lg">

          {/* Ornement */}
          <div className="relative w-28 h-28 mx-auto mb-10">
            <div className="absolute inset-0 border border-[rgba(201,169,110,0.15)] rounded-full" />
            <div className="absolute inset-3 border border-[rgba(201,169,110,0.1)] rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="#C9A96E" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <span className="font-lato text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-5 block">
            Paiement annulé
          </span>

          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-[#2A2A2A] mb-4 leading-tight">
            Commande<br />
            <span className="italic text-[#7A7A7A]">non finalisée</span>
          </h1>

          <div className="divider-gold mb-8" />

          <p className="font-lato text-[#7A7A7A] font-light leading-relaxed mb-12">
            Votre paiement a été annulé. Votre panier est toujours disponible —
            vous pouvez reprendre votre commande à tout moment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/cart" className="btn-primary inline-flex">
              Retour au panier
              <ArrowRight size={14} />
            </Link>
            <Link href="/" className="btn-outline-gold inline-flex">
              Continuer mes achats
            </Link>
          </div>

          <p className="mt-8 font-lato text-[11px] tracking-[0.15em] uppercase text-[#7A7A7A]">
            Un problème ?{" "}
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
