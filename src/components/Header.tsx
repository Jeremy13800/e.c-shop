"use client";

import Link from "next/link";
import CartButton from "./CartButton";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FFFDF9]/95 backdrop-blur-md shadow-[0_2px_40px_rgba(0,0,0,0.06)] border-b border-[rgba(201,169,110,0.2)]"
          : "bg-[#FFFDF9]/90 backdrop-blur-sm border-b border-[rgba(201,169,110,0.15)]"
      }`}
    >
      {/* Top bar */}
      <div className="bg-[#111111] py-2 px-4 text-center">
        <p className="text-[10px] tracking-[0.25em] text-[#C9A96E] uppercase font-lato">
          ✦ &nbsp; Livraison offerte dès 150€ &nbsp; ✦ &nbsp; Packaging cadeau inclus &nbsp; ✦
        </p>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Left nav */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink href="/#collection">Collection</NavLink>
          <NavLink href="/#about">Marque</NavLink>
        </nav>

        {/* Logo — center */}
        <Link
          href="/"
          className="flex flex-col items-center gap-0.5 group mx-auto md:mx-0"
        >
          {/* Monogram */}
          <div className="relative">
            <span
              className="font-cormorant text-5xl font-light tracking-widest leading-none text-gold-gradient"
              style={{
                background: "linear-gradient(135deg, #9A7A45 0%, #C9A96E 50%, #E8D5A3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              E
            </span>
          </div>
          <span
            className="font-cormorant text-xs tracking-[0.35em] text-[#7A7A7A] uppercase"
          >
            Les Secrets d&apos;Elloriane
          </span>
        </Link>

        {/* Right nav */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink href="/#valeurs">Valeurs</NavLink>
          <CartButton />
        </nav>

        {/* Mobile right */}
        <div className="flex items-center gap-4 md:hidden">
          <CartButton />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Menu"
          >
            <span className={`block h-px w-6 bg-[#2A2A2A] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px w-6 bg-[#2A2A2A] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-[#2A2A2A] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[rgba(201,169,110,0.2)] bg-[#FFFDF9] px-6 py-6 flex flex-col gap-6">
          <NavLink href="/#collection" onClick={() => setMenuOpen(false)}>Collection</NavLink>
          <NavLink href="/#about" onClick={() => setMenuOpen(false)}>Marque</NavLink>
          <NavLink href="/#valeurs" onClick={() => setMenuOpen(false)}>Valeurs</NavLink>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative font-lato text-[11px] tracking-[0.2em] uppercase text-[#2A2A2A] hover:text-[#C9A96E] transition-colors duration-300 group"
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C9A96E] group-hover:w-full transition-all duration-400" />
    </Link>
  );
}
