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
        <div>
            <h1>About Us</h1>
            <p>Learn more about our company and values.</p>
        </div>
    )
}