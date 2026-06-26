import { Instagram, Mail } from "lucide-react";
import Link from "next/link";
import InstagramFollowersCount from "@/components/InstagramFollowersCount";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#FAF7F2]">

      {/* Gold top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Logo block */}
        <div className="text-center mb-16">
          <div
            className="font-cormorant text-7xl font-light tracking-widest mb-3"
            style={{
              background: "linear-gradient(135deg, #9A7A45 0%, #C9A96E 50%, #E8D5A3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            E
          </div>
          <p className="font-cormorant text-lg font-light italic text-[#C9A96E] tracking-widest mb-2">
            Les Secrets d&apos;Elloriane
          </p>
          <div className="divider-gold mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <h3 className="font-lato text-[10px] tracking-[0.25em] uppercase text-[#C9A96E] mb-5">
              La Marque
            </h3>
            <p className="font-lato text-[13px] leading-relaxed text-[#9A9A9A] font-light">
              Née entre les ruelles ensoleillées de Marseille et les traditions
              italo-maltaises, Elloriane incarne l&apos;élégance méditerranéenne dans toute
              sa splendeur.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:text-center">
            <h3 className="font-lato text-[10px] tracking-[0.25em] uppercase text-[#C9A96E] mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Boutique" },
                { href: "/#collection", label: "Collection" },
                { href: "/#about", label: "Notre histoire" },
                { href: "/cart", label: "Mon panier" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-lato text-[12px] tracking-widest text-[#9A9A9A] hover:text-[#C9A96E] transition-colors duration-300 uppercase"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <h3 className="font-lato text-[10px] tracking-[0.25em] uppercase text-[#C9A96E] mb-5">
              Nous rejoindre
            </h3>
            <div className="space-y-4">
              <a
                href="https://instagram.com/elloriane.camazzati"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#9A9A9A] hover:text-[#C9A96E] transition-colors duration-300 group md:justify-end"
              >
                <Instagram size={16} className="group-hover:scale-110 transition-transform" />
                <span className="font-lato text-[12px] tracking-wider">
                  @elloriane.camazzati
                </span>
              </a>
              <a
                href="mailto:contact@elloriane.com"
                className="flex items-center gap-3 text-[#9A9A9A] hover:text-[#C9A96E] transition-colors duration-300 group md:justify-end"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <span className="font-lato text-[12px] tracking-wider">
                  contact@elloriane.com
                </span>
              </a>
            </div>

            {/* Instagram followers */}
            <div className="mt-6 inline-block border border-[rgba(201,169,110,0.3)] px-4 py-2 text-right md:ml-auto">
              <div
                className="font-cormorant text-2xl font-light"
                style={{
                  background: "linear-gradient(135deg, #9A7A45, #C9A96E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <InstagramFollowersCount />
              </div>
              <div className="font-lato text-[9px] tracking-[0.2em] uppercase text-[#7A7A7A]">
                Abonnées Instagram
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[rgba(201,169,110,0.15)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-lato text-[11px] tracking-widest text-[#555555] uppercase">
            © 2026 Les Secrets d&apos;Elloriane — Marseille, France
          </p>
          <p className="font-lato text-[11px] tracking-widest text-[#555555] uppercase">
            Fait avec amour ✦ Livraison mondiale
          </p>
        </div>
      </div>
    </footer>
  );
}
