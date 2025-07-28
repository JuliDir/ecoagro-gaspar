import { Metadata } from "next";
import { notFound } from "next/navigation";
import { productsData } from "@/lib/data/products";
import ProductDetail from "@/components/product/ProductDetail";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData[slug as keyof typeof productsData];
  
  if (!product) {
    return {
      title: "Producto no encontrado | Ecoagro Gaspar"
    };
  }

  return {
    title: `${product.name} | Ecoagro Gaspar`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Ecoagro Gaspar`,
      description: product.description,
      url: `https://ecoagrogaspar.com.ar/products/${slug}`,
      siteName: "Ecoagro Gaspar",
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({
    slug: slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productsData[slug as keyof typeof productsData];

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}