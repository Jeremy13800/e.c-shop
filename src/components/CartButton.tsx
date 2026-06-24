"use client";

import { useCart } from "@/store/cart";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CartButton() {
  const getTotalItems = useCart((state) => state.getTotalItems);
  const totalItems = getTotalItems();

  return (
    <Link
      href="/cart"
      className="relative p-2 hover:bg-rose-50 rounded-full transition-colors group"
    >
      <ShoppingBag
        size={24}
        className="text-gray-700 group-hover:text-rose-600 transition-colors"
      />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium shadow-md">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
