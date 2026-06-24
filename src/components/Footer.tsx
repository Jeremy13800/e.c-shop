import { Sparkles, Instagram, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-rose-900 to-rose-800 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-rose-300" />
              <span className="font-serif text-2xl font-bold">Eloriane</span>
            </div>
            <p className="text-rose-200 text-sm leading-relaxed">
              Une boutique exclusive dédiée à votre beauté et votre élégance.
              Découvrez nos pièces soigneusement sélectionnées.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-rose-200">
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
                href="#"
                className="flex items-center gap-2 text-rose-200 hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span>@eloriane</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-rose-200 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>contact@eloriane.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-rose-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-rose-300 text-sm">
            © 2026 Eloriane. Tous droits réservés.
          </p>
          <p className="flex items-center gap-1 text-rose-300 text-sm">
            Fait avec{" "}
            <Heart size={14} className="fill-rose-400 text-rose-400" /> pour
            vous
          </p>
        </div>
      </div>
    </footer>
  );
}
