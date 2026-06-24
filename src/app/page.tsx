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
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-rose-50 to-white" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&q=80')] bg-cover bg-center opacity-20" />
          <div className="relative container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-10 h-10 text-rose-500" />
              <Sparkles className="w-8 h-8 text-rose-400" />
              <Sparkles className="w-10 h-10 text-rose-500" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 bg-clip-text text-transparent mb-6">
              Elloriane
            </h1>
            <p className="text-gray-700 text-xl md:text-2xl max-w-2xl mx-auto mb-8">
              Une collection exclusive pour sublimer votre beauté
            </p>
            <a
              href="#collection"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg"
            >
              Découvrir la collection
              <ArrowRight size={20} />
            </a>
          </div>
        </section>

        {/* Collection Section */}
        <section id="collection" className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent mb-4">
              Notre Collection
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des pièces soigneusement sélectionnées pour votre élégance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
