import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12 flex-1">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-rose-500" />
            <Sparkles className="w-6 h-6 text-rose-400" />
            <Sparkles className="w-8 h-8 text-rose-500" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 bg-clip-text text-transparent mb-4">
            Notre Collection
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez nos pièces exclusives, créées avec passion pour sublimer
            votre beauté
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
