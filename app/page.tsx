import Contact from "@/components/contact/Contact";
import Crops from "@/components/crops/Crops";
import CTA from "@/components/ui/CTA";
import Hero from "@/components/hero/Hero";
import Products from "@/components/product/Producst";
import Stats from "@/components/testimonials/Stats";
import Testimonials from "@/components/testimonials/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecoagro Gaspar | Soluciones Sustentables para la Sanidad Vegetal",
  description:
    "Más de 50 años desarrollando productos derivados del cobre para el manejo eficiente y amigable con el medio ambiente de enfermedades foliares en cultivos.",
  openGraph: {
    title: "Ecoagro Gaspar | Soluciones Sustentables para la Sanidad Vegetal",
    description:
      "Más de 50 años desarrollando productos derivados del cobre para el manejo eficiente y amigable con el medio ambiente de enfermedades foliares en cultivos.",
    url: "https://ecoagrogaspar.com.ar/",
    siteName: "Ecoagro Gaspar",
  }
}

export default function Home() {
  return (
      <main className="font-sans">
        <Hero />
        <Products />
        <Crops /> 
        <CTA />
        <Testimonials />
        <Stats />
        <Contact />
      </main>
  );
}
