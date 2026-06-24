"use client";

import { Product } from "@/types/product";
import { useCart } from "@/store/cart";
import { ShoppingBag, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCart((state) => state.addItem);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-amber-100">
      <div className="aspect-square bg-gradient-to-br from-amber-50 to-rose-50 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-amber-500 to-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              {product.badge}
            </span>
          </div>
        )}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-sm"
        >
          <Heart
            size={20}
            className={
              isLiked ? "fill-amber-500 text-amber-500" : "text-gray-600"
            }
          />
        </button>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-serif font-semibold text-lg text-gray-900">
            {product.name}
          </h3>
          <span className="font-serif text-xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
            {product.price}€
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <button
          onClick={() => addItem(product)}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-rose-500 text-white px-4 py-3 rounded-xl hover:from-amber-600 hover:to-rose-600 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
        >
          <ShoppingBag size={18} />
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
