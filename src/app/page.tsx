import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[750px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-rose-50 to-blue-50 animate-gradient" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1920&q=80')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
          <div className="relative container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
              <Sparkles className="w-12 h-12 text-amber-500 animate-pulse" />
              <Sparkles className="w-10 h-10 text-rose-400 animate-pulse delay-100" />
              <Sparkles className="w-12 h-12 text-blue-400 animate-pulse delay-200" />
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-600 via-rose-500 to-blue-500 bg-clip-text text-transparent mb-6 animate-slide-up">
              Les Secrets d'Elloriane
            </h1>
            <p className="text-amber-700 text-xl md:text-2xl font-medium mb-4 tracking-widest uppercase animate-slide-up delay-100">
              ✨ Marseille • Italo-Maltaise ✨
            </p>
            <p className="text-gray-700 text-xl md:text-2xl max-w-3xl mx-auto mb-10 font-light leading-relaxed animate-slide-up delay-200">
              L'élégance méditerranéenne à son apogée. Une collection exclusive
              pour sublimer votre beauté naturelle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
              <a
                href="#collection"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-rose-500 text-white px-10 py-4 rounded-full hover:from-amber-600 hover:to-rose-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-medium text-lg"
              >
                Découvrir la collection
                <ArrowRight size={20} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-700 px-10 py-4 rounded-full hover:bg-amber-50 transition-all duration-300 font-medium text-lg"
              >
                Notre histoire
              </a>
            </div>
          </div>
        </section>

        {/* Collection Section */}
        <section id="collection" className="container mx-auto px-4 py-24">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-rose-500 to-blue-500 bg-clip-text text-transparent mb-6 tracking-tight">
              Notre Collection
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Des pièces inspirées par la Méditerranée, sélectionnées avec amour
              pour sublimer votre élégance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="bg-gradient-to-br from-amber-50 via-rose-50 to-blue-50 py-24"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-rose-500 to-blue-500 bg-clip-text text-transparent mb-8 tracking-tight">
                À propos d'Elloriane
              </h2>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 md:p-16 shadow-2xl border border-amber-100">
                <p className="text-gray-700 text-xl leading-relaxed mb-8 font-light">
                  Née entre les ruelles ensoleillées de Marseille et les
                  traditions italo-maltaises, Elloriane incarne l'essence même
                  de l'élégance méditerranéenne.
                </p>
                <p className="text-gray-700 text-xl leading-relaxed mb-8 font-light">
                  Chaque pièce de notre collection raconte une histoire : celle
                  du soleil couchant sur le Vieux-Port, des marchés colorés de
                  Sicile, et de l'artisanat ancestral de Malte. Nous
                  sélectionnons avec soin des créations qui subliment votre
                  beauté naturelle.
                </p>
                <p className="text-gray-700 text-xl leading-relaxed mb-10 font-light">
                  Rejoignez notre communauté de 1,530 abonnés sur Instagram pour
                  suivre notre voyage et découvrir nos nouveautés exclusives.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://instagram.com/elloriane.camazzati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-medium text-lg"
                  >
                    <Sparkles className="w-5 h-5" />
                    Suivre sur Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Features Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-rose-500 to-blue-500 bg-clip-text text-transparent mb-6 tracking-tight">
              L'Expérience Elloriane
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto font-light">
              Des services exclusifs pour une expérience d'achat exceptionnelle
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-amber-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                Qualité Premium
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Chaque pièce est sélectionnée pour sa qualité exceptionnelle et
                son authenticité
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-amber-100">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                Livraison Soignée
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Packaging élégant et livraison rapide pour une expérience
                mémorable
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-amber-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                Service Personnalisé
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Conseils personnalisés et accompagnement pour chaque achat
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
