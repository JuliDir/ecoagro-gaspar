import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Testimonios | Ecoagro Gaspar",
    description: "Descubre lo que nuestros clientes dicen sobre nuestros productos y servicios. Casos de éxito y experiencias reales de productores.",
    openGraph: {
        title: "Testimonios | Ecoagro Gaspar",
        description: "Descubre lo que nuestros clientes dicen sobre nuestros productos y servicios. Casos de éxito y experiencias reales de productores.",
        url: "https://ecoagrogaspar.com.ar/testimonials",
        siteName: "Ecoagro Gaspar",
    },
}

export default function TestimonialsPage() {
    return (
        <TestimonialsSection />
    )
}