"use client";

import { useCart } from "@/store/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotal, clearCart } = useCart();
  const total = getTotal();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const { url } = await response.json();
      if (url) window.location.href = url;
    } catch (error) {
      console.error("Erreur checkout:", error);
    } finally {
      setIsLoading(false);
    }
  };

  /* ── EMPTY STATE ────────────────────────────────────────── */
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
        <Header />
        <main className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="text-center max-w-md">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-8 border border-[rgba(201,169,110,0.3)] flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <h2 className="font-cormorant text-4xl font-light text-[#2A2A2A] mb-4">
              Votre panier est vide
            </h2>
            <div className="divider-gold mb-6" />
            <p className="font-lato text-[#7A7A7A] font-light mb-10 leading-relaxed">
              Découvrez notre collection exclusive et ajoutez vos pièces favorites.
            </p>
            <Link href="/" className="btn-primary">
              Retour à la boutique
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  /* ── CART ───────────────────────────────────────────────── */
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-6 py-20 w-full">

        {/* Title */}
        <div className="mb-16">
          <span className="font-lato text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-4 block">
            Récapitulatif
          </span>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-[#2A2A2A] mb-4">
            Mon Panier
          </h1>
          <div className="divider-gold-left" style={{ background: "linear-gradient(90deg, #C9A96E, transparent)" }} />
          <p className="font-lato text-[#7A7A7A] font-light text-sm mt-4">
            {items.length} {items.length === 1 ? "article" : "articles"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Items */}
          <div className="lg:col-span-2 space-y-0">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-start gap-6 py-8 ${
                  index < items.length - 1
                    ? "border-b border-[rgba(201,169,110,0.15)]"
                    : ""
                }`}
              >
                {/* Image */}
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden bg-[#F0EAE0]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-cormorant text-xl font-light text-[#2A2A2A] mb-1">
                    {item.name}
                  </h3>
                  <p className="font-lato text-[11px] text-[#7A7A7A] font-light mb-4 line-clamp-1">
                    {item.description}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-0 border border-[rgba(201,169,110,0.3)] w-fit">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-9 h-9 flex items-center justify-center text-[#7A7A7A] hover:text-[#C9A96E] hover:bg-[rgba(201,169,110,0.05)] transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-10 text-center font-lato text-sm text-[#2A2A2A]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-9 h-9 flex items-center justify-center text-[#7A7A7A] hover:text-[#C9A96E] hover:bg-[rgba(201,169,110,0.05)] transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                {/* Price + remove */}
                <div className="flex flex-col items-end gap-4">
                  <span
                    className="font-cormorant text-2xl font-light"
                    style={{
                      background: "linear-gradient(135deg, #9A7A45, #C9A96E)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {item.price * item.quantity}€
                  </span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-[#7A7A7A] hover:text-[#C8768A] transition-colors"
                    aria-label="Supprimer"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}

            {/* Clear */}
            <div className="pt-6">
              <button
                onClick={clearCart}
                className="font-lato text-[11px] tracking-[0.2em] uppercase text-[#7A7A7A] hover:text-[#C8768A] transition-colors"
              >
                Vider le panier
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#FFFDF9] border border-[rgba(201,169,110,0.2)] p-8 sticky top-28">

              <h2 className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-8">
                Récapitulatif
              </h2>

              <div className="space-y-5 mb-8">
                <div className="flex justify-between font-lato text-sm text-[#7A7A7A]">
                  <span>Sous-total</span>
                  <span>{total}€</span>
                </div>
                <div className="flex justify-between font-lato text-sm text-[#7A7A7A]">
                  <span>Livraison</span>
                  <span className="text-[#C9A96E]">Offerte</span>
                </div>
                <div className="flex justify-between font-lato text-sm text-[#7A7A7A]">
                  <span>Packaging cadeau</span>
                  <span className="text-[#C9A96E]">Inclus</span>
                </div>
              </div>

              <div className="border-t border-[rgba(201,169,110,0.2)] pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="font-cormorant text-xl font-light text-[#2A2A2A]">Total</span>
                  <span
                    className="font-cormorant text-3xl font-light"
                    style={{
                      background: "linear-gradient(135deg, #9A7A45, #C9A96E)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {total}€
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isLoading}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="tracking-[0.15em]">Chargement...</span>
                ) : (
                  <span className="tracking-[0.15em]">Procéder au paiement</span>
                )}
              </button>

              <Link
                href="/"
                className="block text-center font-lato text-[11px] tracking-[0.15em] uppercase text-[#7A7A7A] hover:text-[#C9A96E] transition-colors mt-5"
              >
                Continuer mes achats
              </Link>

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-[rgba(201,169,110,0.15)] grid grid-cols-3 gap-3 text-center">
                {[
                  { icon: "🔒", label: "Paiement sécurisé" },
                  { icon: "✦", label: "Packaging luxe" },
                  { icon: "↩", label: "Retour 14j" },
                ].map((b) => (
                  <div key={b.label}>
                    <div className="text-lg mb-1">{b.icon}</div>
                    <div className="font-lato text-[9px] tracking-[0.1em] uppercase text-[#7A7A7A] leading-tight">{b.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
