import type { Metadata } from "next";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductPageClient from "./ProductPageClient";

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image, width: 500, height: 500, alt: product.name }],
    },
  };
}

export default async function ProductPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.id !== product.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />
      <ProductPageClient product={product} related={related} />
      <Footer />
    </div>
  );
}
