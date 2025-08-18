"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { products } from "@/lib/data/products"
import ProductCard from "./ProductCard"

// Variantes optimizadas
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08, // Reducido para mayor fluidez
            delayChildren: 0.1,    // Reducido el delay inicial
        },
    },
}

// Viewport optimizado para mejor detección
const optimizedViewport = { 
    once: true, 
    amount: 0.05, // Muy bajo para activación temprana
    margin: "0px 0px -100px 0px" // Margen grande para pre-activación
}

export default function AllProducts() {
    return (
        <div className="min-h-screen pt-15 bg-white">
            {/* Grid de productos */}
            <motion.section 
                className="py-24 bg-white relative" 
                initial="hidden" 
                animate="visible" 
                variants={containerVariants}
            >
                <div className="mx-auto px-4 sm:px-6 lg:px-32 pb-16">
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
                        variants={containerVariants}
                    >
                        {products.map((product, index) => (
                            <ProductCard product={product} index={index} key={product.id} />
                        ))}
                    </motion.div>
                </div>

                {/* Waves separator - bottom */}
                <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                    <svg className="w-full h-24 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none">
                        <path
                            d="M0,60 Q150,45 300,50 T600,65 Q750,70 900,55 T1200,60 L1200,120 L0,120 Z"
                            fill="#7cb342"
                            className="opacity-90"
                        />
                        <path
                            d="M0,75 Q100,60 200,65 Q350,70 500,75 Q650,80 800,70 Q950,60 1200,75 L1200,120 L0,120 Z"
                            fill="#4a7c59"
                            className="opacity-80"
                        />
                        <path
                            d="M0,90 Q75,80 150,85 Q300,90 450,95 Q600,100 750,90 Q900,80 1200,90 L1200,120 L0,120 Z"
                            fill="#164A37"
                        />
                    </svg>
                </div>
            </motion.section>

            {/* CTA Section - Solo anima la card */}
            <section className="py-10 bg-[#164A37] text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-2xl mx-auto text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={optimizedViewport}
                        variants={containerVariants}
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            ¿Necesitas asesoramiento técnico?
                        </h2>
                        
                        <p className="text-white/90 mb-6">
                            Nuestro equipo de especialistas está disponible para ayudarte a elegir el producto más adecuado para tus cultivos específicos.
                        </p>
                        
                        <div className="space-y-4 mb-6">
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
                        
                        <div>
                            <Link
                                href="/#contacto"
                                className="inline-block bg-white/20 border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
                            >
                                Contactar Especialista
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bottom waves separator */}
            <div className="w-full overflow-hidden bg-white">
                <svg className="w-full h-24 md:h-32 rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none">
                    <path
                        d="M0,60 Q150,45 300,50 T600,65 Q750,70 900,55 T1200,60 L1200,120 L0,120 Z"
                        fill="#7cb342"
                        className="opacity-90"
                    />
                    <path
                        d="M0,75 Q100,60 200,65 Q350,70 500,75 Q650,80 800,70 Q950,60 1200,75 L1200,120 L0,120 Z"
                        fill="#4a7c59"
                        className="opacity-100"
                    />
                    <path
                        d="M0,90 Q75,80 150,85 Q300,90 450,95 Q600,100 750,90 Q900,80 1200,90 L1200,120 L0,120 Z"
                        fill="#164A37"
                    />
                </svg>
            </div>
        </div>
    )
}