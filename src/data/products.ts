import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Collier Éclat Méditerranéen",
    description: "Pièce d'exception en argent 925, ornée d'un pendentif coquillage nacré. Un bijou qui capture la lumière du soleil marseillais.",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
    category: "bijoux",
    badge: "Best-seller",
    stock: 12,
  },
  {
    id: "2",
    name: "Bracelet Croix de Malte",
    description: "Bracelet en or 18k finement ciselé, inspiré de l'héritage maltais. Symbole d'élégance intemporelle et de protection.",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
    category: "bijoux",
    badge: "Édition Limitée",
    stock: 3,
  },
  {
    id: "3",
    name: "Robe Soirée Calanques",
    description: "Robe de soirée en soie italienne, coupée dans les ateliers de Milan. Parfaite pour les grandes occasions sous les étoiles.",
    price: 289,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop",
    category: "vetements",
    badge: "Exclusif",
    stock: 5,
  },
  {
    id: "4",
    name: "Ensemble Dentelle Sicilienne",
    description: "Lingerie de luxe en dentelle française, inspirée des jardins de Sicile. Confort absolu et raffinement extrême.",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop",
    category: "lingerie",
    badge: "Nouveau",
    stock: 8,
  },
  {
    id: "5",
    name: "Eau de Parfum Azure",
    description: "Fragrance créée par un maître parfumeur à Grasse. Notes de tête: bergamote de Calabre, jasmin, et sel marin.",
    price: 145,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop",
    category: "parfums",
    badge: "Signature",
    stock: 0,
  },
  {
    id: "6",
    name: "Sac Main Artisanal",
    description: "Sac en cuir pleine fleur italien, fabriqué à la main par des artisans marseillais. Pièce unique numérotée.",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop",
    category: "accessoires",
    badge: "Pièce Unique",
    stock: 1,
  },
];
