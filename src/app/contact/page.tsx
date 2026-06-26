"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-transparent border border-[rgba(201,169,110,0.25)] px-4 py-3 font-lato text-[13px] text-[#2A2A2A] placeholder-[#BDBDBD] focus:outline-none focus:border-[#C9A96E] transition-colors duration-300";

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-20 w-full">

        <div className="mb-14">
          <span className="font-lato text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-4 block">
            Nous écrire
          </span>
          <h1 className="font-cormorant text-5xl font-light text-[#2A2A2A] mb-4">
            Contact
          </h1>
          <div className="divider-gold-left mb-6" />
          <p className="font-lato text-[#7A7A7A] font-light text-[14px] leading-relaxed">
            Une question sur un produit, une commande ou simplement envie d&apos;échanger ?
            Nous vous répondons sous 24h ouvrées.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-[#FFFDF9] border border-[rgba(201,169,110,0.3)] p-10 text-center">
            <div className="w-16 h-16 border border-[rgba(201,169,110,0.4)] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-2">Message envoyé</p>
            <p className="font-lato text-[13px] text-[#7A7A7A] font-light">Nous vous répondrons sous 24h ouvrées.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="font-lato text-[10px] tracking-[0.2em] uppercase text-[#7A7A7A] block mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="font-lato text-[10px] tracking-[0.2em] uppercase text-[#7A7A7A] block mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="font-lato text-[10px] tracking-[0.2em] uppercase text-[#7A7A7A] block mb-2">
                Sujet
              </label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Sélectionner un sujet</option>
                <option value="Commande">Ma commande</option>
                <option value="Produit">Question produit</option>
                <option value="Retour">Retour / remboursement</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="font-lato text-[10px] tracking-[0.2em] uppercase text-[#7A7A7A] block mb-2">
                Message *
              </label>
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Votre message..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "error" && (
              <p className="font-lato text-[12px] text-[#C8768A]">
                Une erreur s&apos;est produite. Réessayez ou écrivez directement à contact@elloriane.com
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Envoi en cours..." : (
                <>Envoyer le message <ArrowRight size={14} /></>
              )}
            </button>
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
}
