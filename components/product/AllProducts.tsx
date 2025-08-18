"use client"

import { easeOut, motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FlaskConical } from "lucide-react"
import { products } from "@/lib/data/products"
import { useSearchParams } from "next/navigation"
import ProductCard from "./ProductCard"

const categories = ["Todos", "Fungicidas", "Fertilizantes", "Coadyuvantes"]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

export default function AllProducts() {
    const searchParams = useSearchParams()
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("Todos")
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    // Efecto para establecer la categoría desde los parámetros de URL
    useEffect(() => {
        const categoryParam = searchParams.get("category")
        if (categoryParam && categories.includes(categoryParam)) {
            setSelectedCategory(categoryParam)
        }
    }, [searchParams])

    // Filtrar productos basado en búsqueda y categoría
    const filteredProducts = products.filter((product) => {
        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen pt-15 bg-white">
            {/* Grid de productos */}
            <motion.section className="py-20 relative" initial="hidden" animate="visible" variants={containerVariants}>
                <div className="mx-auto px-4 sm:px-6 lg:px-32 pb-24">
                    {filteredProducts.length > 0 ? (
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
                            {filteredProducts.map((product, index) => (
                                <ProductCard product={product} index={index} key={product.id} />
                            ))}
                        </motion.div>
                    ) : (
                        /* Estado sin resultados */
                        <motion.div
                            className="text-center py-16"
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: { duration: 0.5, ease: easeOut },
                                },
                            }}
                        >
                            <FlaskConical className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No se encontraron productos</h3>
                            <p className="text-gray-500 mb-6">Intenta ajustar tu búsqueda o selecciona una categoría diferente.</p>
                            <button
                                onClick={() => {
                                    setSearchTerm("")
                                    setSelectedCategory("Todos")
                                }}
                                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                            >
                                Limpiar filtros
                            </button>
                        </motion.div>
                    )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                    <svg className="w-full h-24 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none">
                        {/* First crop row - dark green */}
                        <path
                            d="M0,60 Q150,45 300,50 T600,65 Q750,70 900,55 T1200,60 L1200,120 L0,120 Z"
                            fill="#7cb342"
                            className="opacity-90"
                        />
                        {/* Second crop row - medium green */}
                        <path
                            d="M0,75 Q100,60 200,65 Q350,70 500,75 Q650,80 800,70 Q950,60 1200,75 L1200,120 L0,120 Z"
                            fill="#4a7c59"
                            className="opacity-80"
                        />
                        {/* Third crop row - light green */}
                        <path
                            d="M0,90 Q75,80 150,85 Q300,90 450,95 Q600,100 750,90 Q900,80 1200,90 L1200,120 L0,120 Z"
                            fill="#2d5a3d"
                        />
                    </svg>
                </div>
            </motion.section>

            <motion.section
                className="py-2 bg-[#2d5a3d] text-white relative overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-100">
                    <motion.div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-2xl mx-auto text-center"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease: easeOut },
                            },
                        }}
                    >
                        <h2 className="text-3xl font-bold mb-4">¿Necesitas asesoramiento técnico?</h2>
                        <p className="text-white/90 mb-6">
                            Nuestro equipo de especialistas está disponible para ayudarte a elegir el producto más adecuado para tus
                            cultivos específicos.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center space-x-3">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span>+54 9 261 399 0081</span>
                            </div>
                            <div className="flex items-center justify-center space-x-3">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span>contacto@ecoagrogaspar.com.ar</span>
                            </div>
                        </div>
                        <Link
                            href="/#contacto"
                            className="inline-block mt-6 bg-white/20 border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
                        >
                            Contactar Especialista
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
            <div className="relative -top-1 h-24 md:h-42 w-full">
                <svg className="absolute rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none">
                    {/* First crop row - dark green */}
                    <path
                        d="M0,60 Q150,45 300,50 T600,65 Q750,70 900,55 T1200,60 L1200,120 L0,120 Z"
                        fill="#7cb342"
                        className="opacity-90"
                    />
                    {/* Second crop row - medium green */}
                    <path
                        d="M0,75 Q100,60 200,65 Q350,70 500,75 Q650,80 800,70 Q950,60 1200,75 L1200,120 L0,120 Z"
                        fill="#4a7c59"
                        className="opacity-100"
                    />
                    {/* Third crop row - light green */}
                    <path
                        d="M0,90 Q75,80 150,85 Q300,90 450,95 Q600,100 750,90 Q900,80 1200,90 L1200,120 L0,120 Z"
                        fill="#2d5a3d"
                    />
                </svg>
            </div>
        </div>
    )
}
