import FAQsSection from "@/components/FAQs/FAQsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Preguntas Frecuentes | Ecoagro Gaspar",
    description: "Encuentra respuestas a las preguntas más frecuentes sobre nuestros productos fitosanitarios, aplicaciones, cultivos y servicios técnicos.",
    openGraph: {
        title: "Preguntas Frecuentes | Ecoagro Gaspar",
        description: "Encuentra respuestas a las preguntas más frecuentes sobre nuestros productos fitosanitarios, aplicaciones, cultivos y servicios técnicos.",
        url: "https://ecoagrogaspar.com.ar/faqs",
        siteName: "Ecoagro Gaspar",
    },
}

export default function FAQsPage() {
    return (
        <FAQsSection />
    )
}