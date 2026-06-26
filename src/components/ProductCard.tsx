"use client";

import { Product } from "@/types/product";
import { useCart } from "@/store/cart";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCart((state) => state.addItem);
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <article
      className="group flex flex-col gap-4 cursor-pointer"
      onClick={() => router.push(`/product/${product.id}`)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-velvet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="bg-white/90 backdrop-blur-sm text-velvet text-[10px] tracking-widest uppercase font-lato px-3 py-1">
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist */}
        <button
          onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110"
          aria-label={isLiked ? "Retirer des favoris" : "Ajouter aux favoris"}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={isLiked ? "#C9A96E" : "none"}
            stroke={isLiked ? "#C9A96E" : "#111111"}
            strokeWidth="1.5"
            className="transition-colors duration-300"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </button>

        {/* Quick add — desktop overlay */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hidden md:block">
          <button
            onClick={handleAdd}
            className="w-full bg-white/95 backdrop-blur-sm text-velvet text-[11px] tracking-widest uppercase font-lato py-3 hover:bg-velvet hover:text-gold transition-colors duration-300"
          >
            {added ? "Ajouté au panier" : "Ajouter au panier"}
          </button>
        </div>
      </div>

      {/* Info Container */}
      <div className="flex flex-col items-center text-center px-2">
        <span className="text-[10px] tracking-widest uppercase text-gold font-lato mb-2">
          {product.category}
        </span>
        <h3 className="font-cormorant text-xl font-medium text-velvet mb-1 leading-tight">
          {product.name}
        </h3>
        <p className="font-lato text-[13px] text-velvet/60 mb-3 line-clamp-1 px-2">
          {product.description}
        </p>
        <span className="font-lato text-[15px] tracking-wide text-velvet">
          {product.price} €
        </span>

        {/* Mobile add button */}
        <button
          onClick={handleAdd}
          className="md:hidden mt-4 w-full border border-gold/30 text-velvet text-[11px] tracking-widest uppercase font-lato py-2.5 active:bg-gold/10 transition-colors duration-300"
        >
          {added ? "Ajouté" : "Ajouter au panier"}
        </button>
      </div>
    </article>
  );
}
