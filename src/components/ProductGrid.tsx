"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const CATEGORIES = ["Tous", "bijoux", "lingerie", "vetements", "parfums", "accessoires"] as const;

const LABELS: Record<string, string> = {
  Tous: "Tous",
  bijoux: "Bijoux",
  lingerie: "Lingerie",
  vetements: "Vêtements",
  parfums: "Parfums",
  accessoires: "Accessoires",
};

export default function ProductGrid() {
  const [active, setActive] = useState("Tous");

  const filtered = active === "Tous"
    ? products
    : products.filter((p) => p.category === active);

  return (
    <div>
      {/* Filtres */}
      <div className="flex flex-wrap justify-center gap-2 mb-14">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-lato text-[10px] tracking-[0.25em] uppercase px-5 py-2.5 border transition-all duration-300 ${
              active === cat
                ? "bg-[#111111] text-[#E8D5A3] border-[#C9A96E]"
                : "bg-transparent text-[#7A7A7A] border-[rgba(201,169,110,0.3)] hover:border-[#C9A96E] hover:text-[#2A2A2A]"
            }`}
          >
            {LABELS[cat]}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center font-lato text-[#7A7A7A] font-light py-16">
          Aucun produit dans cette catégorie.
        </p>
      )}
    </div>
  );
}
