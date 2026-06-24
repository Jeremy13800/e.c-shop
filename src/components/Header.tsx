"use client";

import Link from "next/link";
import CartButton from "./CartButton";
import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-rose-100 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Sparkles className="w-6 h-6 text-rose-500 group-hover:rotate-12 transition-transform" />
          <span className="font-serif text-2xl font-bold bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent">
            Elloriane
          </span>
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-rose-600 transition-colors font-medium relative group"
          >
            Boutique
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <CartButton />
        </nav>
      </div>
    </header>
  );
}
