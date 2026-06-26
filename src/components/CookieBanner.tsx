"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem("cookie-consent", "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-[#111111] border border-[rgba(201,169,110,0.3)] px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <p className="flex-1 font-lato text-[12px] text-[#9A9A9A] font-light leading-relaxed">
          Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement (panier, session).
          Aucun traceur publicitaire.{" "}
          <Link href="/mentions-legales" className="text-[#C9A96E] hover:underline">
            En savoir plus
          </Link>
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={refuse}
            className="font-lato text-[10px] tracking-[0.2em] uppercase text-[#555555] hover:text-[#9A9A9A] transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="font-lato text-[10px] tracking-[0.2em] uppercase bg-[#C9A96E] text-[#111111] px-5 py-2.5 hover:bg-[#E8D5A3] transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
