"use client"

import { motion, spring } from "framer-motion"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
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

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: spring,
            stiffness: 300,
            damping: 24,
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
    const searchParams = useSearchParams()
    const category = searchParams.get('category')
    
    // Filtrar productos según la categoría
    const filteredProducts = category ? products.filter(product => product.category === category) : products
    
    // Verificar si es una categoría que debe mostrar "Próximamente"
    const showComingSoon = category === 'Fertilizantes' || category === 'Coadyuvantes'
    
    return (
        <div className="min-h-screen pt-15 bg-white">
            {/* Grid de productos o mensaje de próximamente */}
            <motion.section 
                className="py-24 bg-white relative" 
                initial="hidden" 
                animate="visible" 
                variants={containerVariants}
            >
                <div className="mx-auto px-4 sm:px-6 lg:px-36 pb-16">
                    {showComingSoon ? (
                        // Mensaje de Próximamente
                        <motion.div 
                            className="flex flex-col items-center justify-center min-h-[400px] text-center"
                            variants={itemVariants}
                        >
                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-12 max-w-2xl mx-auto shadow-lg border border-green-200">
                                <motion.div
                                    className="text-6xl mb-6"
                                    animate={{ 
                                        rotate: [0, 10, -10, 0],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ 
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 3
                                    }}
                                >
                                    🌱
                                </motion.div>
                                
                                <h2 className="text-4xl font-bold text-[#164A37] mb-4">
                                    {category}
                                </h2>
                                
                                <h3 className="text-2xl font-semibold text-green-700 mb-6">
                                    Próximamente
                                </h3>
                                
                                <p className="text-green-600 text-lg leading-relaxed mb-8">
                                    Estamos trabajando en ampliar nuestro catálogo de {category?.toLowerCase()}. 
                                    Muy pronto tendrás acceso a una amplia gama de productos de alta calidad 
                                    para potenciar tus cultivos.
                                </p>
                                
                                <div className="space-y-4">
                                    <p className="text-green-700 font-medium">
                                        ¿Necesitas estos productos ahora?
                                    </p>
                                    
                                    <Link
                                        href="/#contacto"
                                        className="inline-block bg-[#164A37] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0f3429] transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
                                    >
                                        Contáctanos para más información
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        // Grid de productos normal
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
                            variants={containerVariants}
                        >
                            {filteredProducts.map((product, index) => (
                                <ProductCard product={product} index={index} key={product.id} />
                            ))}
                        </motion.div>
                    )}
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

            {/* CTA Section - Sin animaciones */}
            <section className="py-10 bg-[#164A37] text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-2xl mx-auto text-center">
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
                    </div>
                </div>
            </section>

           
        </div>
    )
}