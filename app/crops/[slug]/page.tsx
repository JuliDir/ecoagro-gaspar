import { Metadata } from "next";
import { notFound } from "next/navigation";
import CropDetail from "@/components/crops/CropDetail";
import { cultivosData } from "@/lib/data/crops";

// Generar metadata dinámica
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cultivo = cultivosData[slug as keyof typeof cultivosData];
  
  if (!cultivo) {
    return {
      title: "Cultivo no encontrado | Ecoagro Gaspar"
    };
  }

  return {
    title: `${cultivo.name} - Manejo Sanitario | Ecoagro Gaspar`,
    description: cultivo.description,
    openGraph: {
      title: `${cultivo.name} - Manejo Sanitario | Ecoagro Gaspar`,
      description: cultivo.description,
      url: `https://ecoagrogaspar.com.ar/cultivos/${slug}`,
      siteName: "Ecoagro Gaspar",
    },
  };
}

// Generar rutas estáticas
export async function generateStaticParams() {
  return Object.keys(cultivosData).map((slug) => ({
    slug: slug,
  }));
}

export default async function CultivoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cultivo = cultivosData[slug as keyof typeof cultivosData];

  if (!cultivo) {
    notFound();
  }

  return <CropDetail cultivo={cultivo} />;
}