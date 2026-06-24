import { Sparkles, Instagram, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-900 via-rose-900 to-blue-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-amber-300" />
              <span className="font-serif text-2xl font-bold">
                Les Secrets d'Elloriane
              </span>
            </div>
            <p className="text-amber-200 text-sm leading-relaxed">
              Une boutique inspirée par la Méditerranée, entre Marseille,
              l'Italie et Malte. Découvrez nos pièces soigneusement
              sélectionnées.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-amber-200">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Boutique
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-white transition-colors">
                  Panier
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="https://instagram.com/elloriane.camazzati"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span>@elloriane.camazzati</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>contact@elloriane.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-amber-300 text-sm">
            © 2026 Elloriane • Marseille, France
          </p>
          <p className="flex items-center gap-1 text-amber-300 text-sm">
            Fait avec{" "}
            <Heart size={14} className="fill-amber-400 text-amber-400" /> pour
            vous
          </p>
        </div>
      </div>
    </footer>
  );
}
