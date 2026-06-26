"use client";

import { products } from "@/data/products";
import { useCart } from "@/store/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, use } from "react";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  const addItem = useCart((state) => state.addItem);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const related = products.filter((p) => p.category === product.category && p.id !== product.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />

      <main className="flex-1">
        {/* ── BREADCRUMB ── */}
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-0">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-lato text-[11px] tracking-[0.2em] uppercase text-[#7A7A7A] hover:text-[#C9A96E] transition-colors"
          >
            <ArrowLeft size={12} />
            Retour à la collection
          </Link>
        </div>

        {/* ── PRODUCT ── */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F0EAE0]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#111111] text-[10px] tracking-widest uppercase font-lato px-3 py-1">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
              {/* Gold frame */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[rgba(201,169,110,0.3)] pointer-events-none" />
            </div>

            {/* Info */}
            <div className="lg:pt-8 animate-slide-up">
              <span className="font-lato text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-4 block">
                {product.category}
              </span>

              <h1 className="font-cormorant text-4xl md:text-5xl font-light text-[#2A2A2A] mb-6 leading-tight">
                {product.name}
              </h1>

              <div className="divider-gold-left mb-8" />

              <div
                className="font-cormorant text-4xl font-light mb-8"
                style={{
                  background: "linear-gradient(135deg, #9A7A45, #C9A96E, #E8D5A3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {product.price} €
              </div>

              <p className="font-lato text-[#7A7A7A] font-light leading-relaxed mb-10 text-[15px]">
                {product.description}
              </p>

              {/* Separator */}
              <div className="border-t border-[rgba(201,169,110,0.2)] mb-10" />

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { label: "Livraison offerte" },
                  { label: "Packaging luxe" },
                  { label: "Retour 14 jours" },
                ].map((g) => (
                  <div key={g.label} className="text-center">
                    <div className="font-lato text-[9px] tracking-[0.15em] uppercase text-[#7A7A7A]">
                      {g.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAdd}
                className="btn-primary w-full justify-center gap-3"
              >
                <ShoppingBag size={14} />
                {added ? "Ajouté au panier ✓" : "Ajouter au panier"}
              </button>

              <Link
                href="/cart"
                className="block text-center font-lato text-[11px] tracking-[0.15em] uppercase text-[#7A7A7A] hover:text-[#C9A96E] transition-colors mt-5"
              >
                Voir mon panier
              </Link>
            </div>
          </div>
        </section>

        {/* ── PRODUITS SIMILAIRES ── */}
        {related.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 pb-28">
            <div className="border-t border-[rgba(201,169,110,0.2)] pt-20">
              <div className="text-center mb-14">
                <span className="font-lato text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-4 block">
                  Dans la même collection
                </span>
                <h2 className="font-cormorant text-4xl font-light text-[#2A2A2A]">
                  Vous aimerez aussi
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {related.map((p) => (
                  <Link key={p.id} href={`/product/${p.id}`} className="group flex flex-col gap-4">
                    <div className="relative aspect-[3/4] overflow-hidden bg-[#F0EAE0]">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {p.badge && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-white/90 backdrop-blur-sm text-[#111111] text-[10px] tracking-widest uppercase font-lato px-3 py-1">
                            {p.badge}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      <span className="font-lato text-[10px] tracking-widest uppercase text-[#C9A96E] mb-1 block">{p.category}</span>
                      <h3 className="font-cormorant text-xl font-light text-[#2A2A2A] mb-1">{p.name}</h3>
                      <span className="font-lato text-sm text-[#7A7A7A]">{p.price} €</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
