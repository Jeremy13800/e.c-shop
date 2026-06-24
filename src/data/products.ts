import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Collier Élégant",
    description: "Un magnifique collier en argent avec pendentif",
    price: 29,
    image: "/images/collier.jpg",
    category: "bijoux",
  },
  {
    id: "2",
    name: "Bracelet Doré",
    description: "Bracelet en or fin avec pierres précieuses",
    price: 45,
    image: "/images/bracelet.jpg",
    category: "bijoux",
  },
  {
    id: "3",
    name: "Robe de Soirée",
    description: "Robe élégante pour occasions spéciales",
    price: 89,
    image: "/images/robe.jpg",
    category: "vetements",
  },
  {
    id: "4",
    name: "Lingerie Satin",
    description: "Ensemble lingerie en satin de qualité",
    price: 59,
    image: "/images/lingerie1.jpg",
    category: "lingerie",
  },
  {
    id: "5",
    name: "Lingerie Dentelle",
    description: "Ensemble lingerie en dentelle fine",
    price: 69,
    image: "/images/lingerie2.jpg",
    category: "lingerie",
  },
];
