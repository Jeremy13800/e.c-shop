"use client";

import { useState } from "react";

export default function FloatingInstagram() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://instagram.com/elloriane.camazzati"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Suivre sur Instagram"
      className="fixed right-5 bottom-24 z-40 flex items-center gap-3 group"
    >
      {/* Label */}
      <span
        className={`font-lato text-[10px] tracking-[0.2em] uppercase text-[#FFFDF9] bg-[#111111] border border-[rgba(201,169,110,0.4)] px-3 py-1.5 transition-all duration-300 whitespace-nowrap ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        Nous suivre
      </span>

      {/* Bouton */}
      <div className="w-11 h-11 bg-[#111111] border border-[rgba(201,169,110,0.4)] flex items-center justify-center hover:border-[#C9A96E] hover:bg-[#1E1E1E] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(201,169,110,0.2)]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="#C9A96E" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="4.5" stroke="#C9A96E" strokeWidth="1.5" />
          <circle cx="17.5" cy="6.5" r="1" fill="#C9A96E" />
        </svg>
      </div>
    </a>
  );
}
