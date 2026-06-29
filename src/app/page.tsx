import type { Metadata } from "next";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Boutique — Collection Exclusive",
  description:
    "Découvrez notre collection exclusive de bijoux, lingerie et accessoires de luxe inspirés de la Méditerranée.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />
      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">

          {/* Background layers */}
          <div className="absolute inset-0 bg-[#F0EAE0]" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/80 via-transparent to-[#FAF7F2]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent" />

          {/* Decorative vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(201,169,110,0.3)] to-transparent hidden lg:block" />

          {/* Floating ornament */}
          <div
            className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden xl:block"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            <div className="w-48 h-48 border border-[rgba(201,169,110,0.2)] rounded-full flex items-center justify-center">
              <div className="w-36 h-36 border border-[rgba(201,169,110,0.15)] rounded-full flex items-center justify-center">
                <div
                  className="font-cormorant text-6xl font-light"
                  style={{
                    background: "linear-gradient(135deg, #9A7A45, #C9A96E, #E8D5A3)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  E
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
            <div className="max-w-2xl">

              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-10 animate-fade-in">
                <div className="divider-gold-left" style={{ background: "linear-gradient(90deg, #C9A96E, transparent)" }} />
                <span className="font-lato text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]">
                  Marseille · Italie · Malte
                </span>
              </div>

              {/* Main title */}
              <h1 className="font-cormorant font-light leading-[1.05] mb-8 animate-slide-up">
                <span className="block text-6xl md:text-7xl lg:text-8xl text-[#2A2A2A]">
                  Les Secrets
                </span>
                <span
                  className="block text-6xl md:text-7xl lg:text-8xl italic"
                  style={{
                    background: "linear-gradient(135deg, #9A7A45 0%, #C9A96E 50%, #E8D5A3 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  d&apos;Elloriane
                </span>
              </h1>

              {/* Tagline */}
              <p className="font-lato text-[#7A7A7A] text-lg font-light leading-relaxed mb-12 max-w-lg animate-slide-up delay-100">
                L&apos;élégance méditerranéenne à son apogée — une collection exclusive
                de bijoux, lingerie et accessoires pour sublimer votre beauté naturelle.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start gap-4 animate-slide-up delay-200">
                <a href="#collection" className="btn-primary">
                  Découvrir la collection
                  <ArrowRight size={14} />
                </a>
                <a href="#about" className="btn-outline-gold">
                  Notre histoire
                </a>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-10 mt-16 animate-fade-in delay-400">
                <div>
                  <div className="font-cormorant text-3xl font-light text-[#2A2A2A]">6</div>
                  <div className="font-lato text-[9px] tracking-[0.2em] uppercase text-[#C9A96E] mt-0.5">Collections</div>
                </div>
                <div className="w-px h-8 bg-[rgba(201,169,110,0.3)]" />
                <div>
                  <div className="font-cormorant text-3xl font-light text-[#2A2A2A]">100%</div>
                  <div className="font-lato text-[9px] tracking-[0.2em] uppercase text-[#C9A96E] mt-0.5">Exclusif</div>
                </div>
                <div className="w-px h-8 bg-[rgba(201,169,110,0.3)]" />
                <div>
                  <div className="font-cormorant text-3xl font-light text-[#2A2A2A]">2024</div>
                  <div className="font-lato text-[9px] tracking-[0.2em] uppercase text-[#C9A96E] mt-0.5">Depuis</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-700">
            <span className="font-lato text-[9px] tracking-[0.3em] uppercase text-[#7A7A7A]">Défiler</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#C9A96E] to-transparent" />
          </div>
        </section>

        {/* ── COLLECTION ──────────────────────────────────────── */}
        <section id="collection" className="max-w-7xl mx-auto px-6 py-28">

          {/* Section header */}
          <div className="text-center mb-20">
            <span className="font-lato text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-5 block">
              Sélection exclusive
            </span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-[#2A2A2A] mb-6">
              Notre Collection
            </h2>
            <div className="divider-gold mb-6" />
            <p className="font-lato text-[#7A7A7A] font-light max-w-xl mx-auto leading-relaxed">
              Des pièces inspirées par la Méditerranée, sélectionnées avec amour
              pour sublimer votre élégance naturelle.
            </p>
          </div>

          <ProductGrid />
        </section>

        {/* ── BANNER / QUOTE ──────────────────────────────────── */}
        <section className="bg-[#111111] py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&q=80')`,
              backgroundSize: "cover",
            }}
          />
          <div className="h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mb-12" />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <div
              className="font-cormorant text-4xl md:text-5xl font-light italic leading-relaxed mb-6"
              style={{
                background: "linear-gradient(135deg, #9A7A45, #C9A96E, #E8D5A3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              &ldquo;La beauté est un secret que seules les femmes qui osent révèlent.&rdquo;
            </div>
            <div className="divider-gold mb-6" />
            <p className="font-lato text-[10px] tracking-[0.3em] uppercase text-[#555555]">
              Elloriane Camazzati
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mt-12" />
        </section>

        {/* ── ABOUT ───────────────────────────────────────────── */}
        <section id="about" className="py-28 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Image side */}
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/secret.png"
                    alt="Elloriane Camazzati"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gold frame offset */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full border border-[rgba(201,169,110,0.4)] pointer-events-none" />
                </div>
                {/* Badge flottant */}
                <div
                  className="absolute -top-6 -left-6 w-24 h-24 bg-[#111111] border border-[rgba(201,169,110,0.4)] flex flex-col items-center justify-center"
                  style={{ animation: "float 5s ease-in-out infinite" }}
                >
                  <span
                    className="font-cormorant text-3xl font-light"
                    style={{
                      background: "linear-gradient(135deg, #9A7A45, #C9A96E)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    E
                  </span>
                  <span className="font-lato text-[8px] tracking-[0.15em] uppercase text-[#C9A96E] mt-1">
                    2024
                  </span>
                </div>
              </div>

              {/* Text side */}
              <div>
                <span className="font-lato text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-5 block">
                  Notre histoire
                </span>
                <h2 className="font-cormorant text-5xl md:text-6xl font-light text-[#2A2A2A] mb-4 leading-tight">
                  À propos<br />
                  <span className="italic">d&apos;Elloriane</span>
                </h2>
                <div className="divider-gold-left mb-8" style={{ background: "linear-gradient(90deg, #C9A96E, transparent)" }} />

                <p className="font-lato text-[#7A7A7A] font-light leading-relaxed mb-6">
                  Née entre les ruelles ensoleillées de Marseille et les traditions
                  italo-maltaises, Elloriane incarne l&apos;essence même de l&apos;élégance
                  méditerranéenne. Une femme, une vision, une marque.
                </p>
                <p className="font-lato text-[#7A7A7A] font-light leading-relaxed mb-6">
                  Chaque pièce de notre collection raconte une histoire : celle du
                  soleil couchant sur le Vieux-Port, des marchés colorés de Sicile,
                  et de l&apos;artisanat ancestral de Malte.
                </p>
                <p className="font-lato text-[#7A7A7A] font-light leading-relaxed mb-10">
                  Rejoignez notre communauté sur Instagram pour suivre notre voyage
                  et découvrir les coulisses de la collection.
                </p>

                <a
                  href="https://instagram.com/elloriane.camazzati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex"
                >
                  Suivre sur Instagram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── AVIS CLIENTS ────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 py-28">
          <div className="text-center mb-20">
            <span className="font-lato text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-5 block">
              Elles nous font confiance
            </span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-[#2A2A2A] mb-6">
              Avis Clients
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophia M.",
                location: "Paris",
                text: "Le collier Éclat Méditerranéen est absolument magnifique. La qualité est exceptionnelle et le packaging encore plus beau en vrai. Je recommande les yeux fermés.",
                stars: 5,
              },
              {
                name: "Camille R.",
                location: "Lyon",
                text: "J'ai commandé l'ensemble dentelle pour offrir à mon anniversaire. Livraison ultra rapide et le produit est encore plus beau en vrai. Elloriane c'est la classe à l'état pur.",
                stars: 5,
              },
              {
                name: "Inès B.",
                location: "Marseille",
                text: "Ma troisième commande et toujours aussi satisfaite. Le bracelet Croix de Malte est sublime. On sent vraiment la sélection soignée derrière chaque pièce.",
                stars: 5,
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-[#FFFDF9] border border-[rgba(201,169,110,0.2)] p-8 flex flex-col"
              >
                {/* Étoiles */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <span key={i} className="text-[#C9A96E] text-sm">✦</span>
                  ))}
                </div>

                <p className="font-lato text-[13px] text-[#7A7A7A] font-light leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="border-t border-[rgba(201,169,110,0.15)] pt-5">
                  <p className="font-cormorant text-lg font-light text-[#2A2A2A]">{review.name}</p>
                  <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-[#C9A96E]">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── VALEURS ─────────────────────────────────────────── */}
        <section id="valeurs" className="bg-[#F0EAE0] py-28">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-20">
              <span className="font-lato text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-5 block">
                Notre engagement
              </span>
              <h2 className="font-cormorant text-5xl md:text-6xl font-light text-[#2A2A2A]">
                L&apos;Expérience Elloriane
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(201,169,110,0.2)]">
              {[
                {
                  number: "01",
                  title: "Qualité Premium",
                  text: "Chaque pièce est sélectionnée pour sa qualité exceptionnelle et son authenticité méditerranéenne.",
                },
                {
                  number: "02",
                  title: "Livraison Soignée",
                  text: "Packaging luxueux et livraison rapide pour une expérience d'unboxing mémorable.",
                },
                {
                  number: "03",
                  title: "Service Personnalisé",
                  text: "Conseils personnalisés et accompagnement bienveillant pour chaque achat.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="bg-[#F0EAE0] px-10 py-14 group hover:bg-[#111111] transition-colors duration-500"
                >
                  <div
                    className="font-cormorant text-5xl font-light mb-6 transition-all duration-500 group-hover:opacity-80"
                    style={{
                      background: "linear-gradient(135deg, #9A7A45, #C9A96E)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {item.number}
                  </div>
                  <h3 className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-4 group-hover:text-[#FAF7F2] transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="font-lato text-sm text-[#7A7A7A] font-light leading-relaxed group-hover:text-[#9A9A9A] transition-colors duration-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
