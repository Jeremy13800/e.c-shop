"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Retour en haut"
      className="fixed right-5 bottom-5 z-40 w-11 h-11 bg-[#111111] border border-[rgba(201,169,110,0.4)] flex items-center justify-center hover:border-[#C9A96E] hover:bg-[#1E1E1E] transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,169,110,0.2)]"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 19V5M5 12l7-7 7 7" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
