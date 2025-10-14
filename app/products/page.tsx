import { Suspense } from "react"
import AllProducts from "@/components/product/AllProducts"

export const metadata = {
  title: "Productos - Ecoagro Gaspar",
  description: "Explora nuestra línea completa de fungicidas, fertilizantes y coadyuvantes para la protección y nutrición de tus cultivos.",
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Cargando productos...</p>
      </div>
    </div>}>
      <AllProducts />
    </Suspense>
  )
}
