import Contact from "@/components/contact/Contact";
import { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import Values from "@/components/values/Values";
import Stats from "@/components/stats/Stats";
import AboutUs from "@/components/about-us/AboutUs";

export const metadata: Metadata = {
  title: "Ecoagro Gaspar | Soluciones Sustentables para la Sanidad Vegetal",
  description:
    "Más de 60 años desarrollando productos derivados del cobre para el manejo eficiente y amigable con el medio ambiente de enfermedades foliares en cultivos.",
  openGraph: {
    title: "Ecoagro Gaspar | Soluciones Sustentables para la Sanidad Vegetal",
    description:
      "Más de 60 años desarrollando productos derivados del cobre para el manejo eficiente y amigable con el medio ambiente de enfermedades foliares en cultivos.",
    url: "https://ecoagrogaspar.com.ar/",
    siteName: "Ecoagro Gaspar",
  }
}

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <Values />
      <Stats />
      <AboutUs />
      <Contact />
    </main>
  );
}