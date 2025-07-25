import AllCrops from "@/components/crops/AllCrops";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cultivos | Ecoagro Gaspar",
    description: "Descubre nuestra amplia gama de cultivos especializados y soluciones nutricionales personalizadas para tu producción agrícola.",
    openGraph: {
        title: "Cultivos | Ecoagro Gaspar",
        description: "Descubre nuestra amplia gama de cultivos especializados y soluciones nutricionales personalizadas para tu producción agrícola.",
        url: "https://ecoagrogaspar.com.ar/cultivos",
        siteName: "Ecoagro Gaspar",
    },
}

export default function AllCropsPage() {
    return (
        <AllCrops />
    )
}