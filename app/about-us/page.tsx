import AboutUs from "@/components/about-us/AboutUs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nosotros | Ecoagro Gaspar",
    description: "Conoce más sobre nuestra empresa, historia y valores.",
    openGraph: {
        title: "Nosotros | Ecoagro Gaspar",
        description: "Conoce más sobre nuestra empresa, historia y valores.",
        url: "https://ecoagrogaspar.com.ar/about-us",
        siteName: "Ecoagro Gaspar",
    },
}

export default function AboutUsPage() {
    return (
        <AboutUs />
    )
}