import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle, Sparkles } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12 flex-1">
        <div className="flex flex-col items-center justify-center py-20">
          <div className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-full mb-6">
            <CheckCircle size={64} className="text-green-500" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent mb-4">
            Paiement réussi !
          </h1>
          <p className="text-gray-600 text-lg mb-8 text-center max-w-md">
            Merci pour votre commande. Vous recevrez bientôt un email de
            confirmation.
          </p>
          <Link
            href="/"
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
          >
            <Sparkles size={20} />
            Retour à la boutique
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
