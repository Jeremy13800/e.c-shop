"use client";

import { useCart } from "@/store/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Minus, Plus, Trash2, ShoppingBag, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotal, clearCart } = useCart();
  const total = getTotal();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });

      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Erreur checkout:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-12 flex-1">
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-gradient-to-br from-rose-100 to-rose-50 p-8 rounded-full mb-6">
              <ShoppingBag size={64} className="text-rose-400" />
            </div>
            <h2 className="font-serif text-3xl font-semibold mb-3 text-gray-900">
              Votre panier est vide
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-md">
              Découvrez notre collection exclusive et ajoutez vos pièces
              favorites
            </p>
            <Link
              href="/"
              className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-xl hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent mb-3">
            Mon Panier
          </h1>
          <p className="text-gray-600">
            {items.length} {items.length === 1 ? "article" : "articles"} dans
            votre panier
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h3 className="font-serif font-semibold text-lg text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {item.description}
                  </p>
                  <p className="font-serif font-bold text-rose-600">
                    {item.price}€
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-rose-50 rounded-xl p-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-white rounded-lg transition-colors text-gray-600 hover:text-rose-600"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center font-medium text-gray-900">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-white rounded-lg transition-colors text-gray-600 hover:text-rose-600"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <p className="font-serif font-bold text-xl w-24 text-right text-gray-900">
                  {item.price * item.quantity}€
                </p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-3 hover:bg-rose-50 text-rose-500 rounded-xl transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-rose-100 p-6 sticky top-24 shadow-sm">
              <h2 className="font-serif text-2xl font-semibold mb-6 text-gray-900">
                Récapitulatif
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Sous-total</span>
                  <span className="font-medium">{total}€</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Livraison</span>
                  <span className="font-medium text-rose-600">Gratuite</span>
                </div>
                <div className="border-t border-rose-100 pt-4 flex justify-between font-serif font-bold text-xl text-gray-900">
                  <span>Total</span>
                  <span className="text-rose-600">{total}€</span>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white py-4 rounded-xl hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  "Chargement..."
                ) : (
                  <>
                    <Sparkles size={20} />
                    Procéder au paiement
                  </>
                )}
              </button>
              <button
                onClick={clearCart}
                className="w-full mt-3 border border-rose-200 py-3 rounded-xl hover:bg-rose-50 transition-colors text-sm text-gray-600 font-medium"
              >
                Vider le panier
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
