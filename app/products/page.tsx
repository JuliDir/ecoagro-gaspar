import AllProducts from "@/components/product/AllProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Productos | Ecoagro Gaspar",
    description: "Descubre nuestra línea completa de productos fitosanitarios a base de cobre para el manejo sustentable de enfermedades foliares.",
    openGraph: {
        title: "Productos | Ecoagro Gaspar",
        description: "Descubre nuestra línea completa de productos fitosanitarios a base de cobre para el manejo sustentable de enfermedades foliares.",
        url: "https://ecoagrogaspar.com.ar/products",
        siteName: "Ecoagro Gaspar",
    },
}

export default function AllProductsPage() {
    return (
        <AllProducts />
    )
}