import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-lg">

          <div
            className="font-cormorant text-[10rem] font-light leading-none mb-6"
            style={{
              background: "linear-gradient(135deg, #E8D5A3 0%, #C9A96E 50%, #9A7A45 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.4,
            }}
          >
            404
          </div>

          <span className="font-lato text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-5 block">
            Page introuvable
          </span>

          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-[#2A2A2A] mb-4">
            Cette page n&apos;existe pas
          </h1>

          <div className="divider-gold mb-8" />

          <p className="font-lato text-[#7A7A7A] font-light leading-relaxed mb-12">
            La page que vous recherchez a peut-être été déplacée ou n&apos;existe plus.
            Retournez à notre boutique pour découvrir notre collection.
          </p>

          <Link href="/" className="btn-primary inline-flex">
            Retour à la boutique
            <ArrowRight size={14} />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
