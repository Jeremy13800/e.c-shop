import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { XCircle, Sparkles } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12 flex-1">
        <div className="flex flex-col items-center justify-center py-20">
          <div className="bg-gradient-to-br from-rose-100 to-rose-50 p-8 rounded-full mb-6">
            <XCircle size={64} className="text-rose-500" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent mb-4">
            Paiement annulé
          </h1>
          <p className="text-gray-600 text-lg mb-8 text-center max-w-md">
            Le paiement a été annulé. Votre panier est toujours disponible.
          </p>
          <div className="flex gap-4">
            <Link
              href="/cart"
              className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-xl hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              <Sparkles size={20} />
              Retour au panier
            </Link>
            <Link
              href="/"
              className="border border-rose-200 px-8 py-4 rounded-xl hover:bg-rose-50 transition-colors font-medium text-gray-700"
            >
              Retour à la boutique
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
