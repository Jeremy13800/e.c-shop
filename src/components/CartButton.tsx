"use client";

import { useCart } from "@/store/cart";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartButton() {
  const getTotalItems = useCart((state) => state.getTotalItems);
  const totalItems = getTotalItems();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link
      href="/cart"
      className="relative flex items-center gap-2 group"
      aria-label="Panier"
    >
      {/* Custom bag icon — fine lines */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#2A2A2A] group-hover:text-[#C9A96E] transition-colors duration-300"
      >
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>

      <span className="hidden lg:block font-lato text-[11px] tracking-[0.2em] uppercase text-[#2A2A2A] group-hover:text-[#C9A96E] transition-colors duration-300">
        Panier
      </span>

      {/* Badge */}
      {mounted && totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#111111] border border-[#C9A96E] text-[#C9A96E] text-[10px] w-4.5 h-4.5 min-w-[18px] min-h-[18px] rounded-full flex items-center justify-center font-lato font-400 leading-none">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
