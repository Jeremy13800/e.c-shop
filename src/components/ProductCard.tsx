"use client";

import { Product } from "@/types/product";
import { useCart } from "@/store/cart";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCart((state) => state.addItem);
  const [isLiked, setIsLiked] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article className="group relative bg-[#FFFDF9] border border-[rgba(201,169,110,0.15)] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:border-[rgba(201,169,110,0.4)]">

      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F0EAE0]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-[#111111] text-[#C9A96E] text-[9px] tracking-[0.2em] uppercase font-lato px-3 py-1.5 border border-[rgba(201,169,110,0.4)]">
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white"
          aria-label={isLiked ? "Retirer des favoris" : "Ajouter aux favoris"}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={isLiked ? "#C9A96E" : "none"}
            stroke={isLiked ? "#C9A96E" : "#2A2A2A"}
            strokeWidth="1.5"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </button>

        {/* Quick add — appears on hover */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
          <button
            onClick={handleAdd}
            className="w-full bg-[#111111] text-[#C9A96E] text-[10px] tracking-[0.25em] uppercase font-lato py-4 hover:bg-[#C9A96E] hover:text-[#111111] transition-all duration-300"
          >
            {added ? "✦ Ajouté" : "Ajouter au panier"}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="mb-1">
          <span className="text-[9px] tracking-[0.2em] uppercase text-[#C9A96E] font-lato">
            {product.category}
          </span>
        </div>
        <h3 className="font-cormorant text-xl font-light text-[#2A2A2A] mb-1 leading-tight">
          {product.name}
        </h3>
        <p className="text-[12px] text-[#7A7A7A] font-lato font-light leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span
            className="font-cormorant text-2xl font-light"
            style={{
              background: "linear-gradient(135deg, #9A7A45 0%, #C9A96E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {product.price}€
          </span>

          {/* Mobile add button (always visible) */}
          <button
            onClick={handleAdd}
            className="md:hidden flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase font-lato text-[#2A2A2A] border border-[rgba(201,169,110,0.4)] px-3 py-2 hover:bg-[#111111] hover:text-[#C9A96E] hover:border-[#C9A96E] transition-all duration-300"
          >
            {added ? "✦" : "+"}
          </button>
        </div>
      </div>
    </article>
  );
}
