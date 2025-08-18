"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";
import { allCrops } from "@/lib/data/crops";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, 
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 60,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: easeOut
        }
    }
};

// Viewport optimizado para mejor detección
const optimizedViewport = { 
    once: true, 
    amount: 0.05, // Muy bajo para activación temprana
    margin: "0px 0px -100px 0px" // Margen grande para pre-activación
}

export default function AllCropsSection() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [imageLoadingStates, setImageLoadingStates] = useState<{ [key: string]: boolean }>({});
    const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

    // Manejar estados de carga de imágenes
    const handleImageLoad = (cropSlug: string) => {
        setImageLoadingStates(prev => ({ ...prev, [cropSlug]: false }));
    };

    const handleImageError = (cropSlug: string) => {
        setImageLoadingStates(prev => ({ ...prev, [cropSlug]: false }));
        setImageErrors(prev => ({ ...prev, [cropSlug]: true }));
    };

    // Inicializar estados de carga para todos los cultivos
    const initializeImageLoading = (crops: typeof allCrops) => {
        const initialStates: { [key: string]: boolean } = {};
        crops.forEach(crop => {
            if (!(crop.slug in imageLoadingStates)) {
                initialStates[crop.slug] = true;
            }
        });
        if (Object.keys(initialStates).length > 0) {
            setImageLoadingStates(prev => ({ ...prev, ...initialStates }));
        }
    };

    // Inicializar estados de carga al montar el componente
    useEffect(() => {
        initializeImageLoading(allCrops);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-15">
            {/* Grid de cultivos */}
            <motion.section
                className="py-20"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="mx-auto px-4 sm:px-6 lg:px-32">
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                    >
                        {allCrops.map((crop, index) => (
                            <motion.div
                                key={crop.slug}
                                variants={cardVariants}
                                className="group"
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <Link 
                                    href={`/crops/${crop.slug}`}
                                    className="block"
                                >
                                    <motion.div
                                        className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-80 cursor-pointer"
                                        whileHover={{ 
                                            y: -8,
                                            scale: 1.02 
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Imagen de fondo con loading */}
                                        <div className="absolute inset-0">
                                            {/* Loading placeholder */}
                                            {(imageLoadingStates[crop.slug] || imageErrors[crop.slug]) && (
                                                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                                    {imageLoadingStates[crop.slug] && (
                                                        <div className="flex flex-col items-center space-y-3">
                                                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                                                            <span className="text-gray-500 text-sm font-medium">Cargando...</span>
                                                        </div>
                                                    )}
                                                    {imageErrors[crop.slug] && (
                                                        <div className="flex flex-col items-center space-y-2">
                                                            <Leaf className="w-12 h-12 text-gray-400" />
                                                            <span className="text-gray-500 text-sm">Imagen no disponible</span>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {/* Imagen de fondo */}
                                            {!imageErrors[crop.slug] && (
                                                <>
                                                    <Image
                                                        src={crop.backgroundImage}
                                                        alt={crop.name}
                                                        fill
                                                        quality={75}
                                                        className="object-cover"
                                                        loading="lazy"
                                                        onLoad={() => handleImageLoad(crop.slug)}
                                                        onError={() => handleImageError(crop.slug)}
                                                    />
                                                    {/* Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20"></div>
                                                </>
                                            )}
                                        </div>
                                        {/* Categoría - Siempre visible arriba */}
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="inline-block bg-primary-600/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium border border-white/20">
                                                {crop.category}
                                            </span>
                                        </div>

                                        {/* Ícono central - Por defecto */}
                                        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                                            hoveredCard === index ? 'opacity-0' : 'opacity-100'
                                        }`}>
                                            <Image
                                                src={`/icons/${crop.iconFilename}`}
                                                alt={`${crop.name} icon`}
                                                width={100}
                                                height={100}
                                                className="brightness-0 invert"
                                            />
                                        </div>

                                        {/* Contenido en hover */}
                                        <motion.div
                                            className={`absolute inset-0 transition-opacity duration-300 ${
                                                hoveredCard === index ? 'opacity-100' : 'opacity-0'
                                            }`}
                                            initial={false}
                                            animate={{
                                                opacity: hoveredCard === index ? 1 : 0,
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-black/60" />
                                            <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 text-center text-white">
                                                <motion.h3 
                                                    className="text-3xl font-bold"
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{
                                                        y: hoveredCard === index ? 0 : 20,
                                                        opacity: hoveredCard === index ? 1 : 0
                                                    }}
                                                    transition={{ duration: 0.3, delay: 0.1 }}
                                                >
                                                    {crop.name}
                                                </motion.h3>
                                            </div>
                                        </motion.div>

                                        {/* Nombre del cultivo - Siempre visible abajo */}
                                        <div className={`absolute bottom-4 left-4 right-4 z-10 transition-opacity duration-300 ${
                                            hoveredCard === index ? 'opacity-0' : 'opacity-100'
                                        }`}>
                                            <h3 className="text-xl font-bold text-white text-center">{crop.name}</h3>
                                        </div>

                                        {/* Efecto de brillo en hover */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 pointer-events-none"
                                            animate={{
                                                opacity: hoveredCard === index ? [0, 0.3, 0] : 0,
                                                x: hoveredCard === index ? [-200, 400] : -200,
                                            }}
                                            transition={{ duration: 0.8 }}
                                        />

                                        {/* Borde decorativo en hover */}
                                        <div className={`absolute inset-0 border-2 border-primary-400 transition-opacity duration-300 rounded-xl pointer-events-none ${
                                            hoveredCard === index ? 'opacity-100' : 'opacity-0'
                                        }`} />
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Waves separator - top */}
            <div className="w-full overflow-hidden bg-white">
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

            {/* CTA Section - Igual que en AllProducts */}
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
                            ¿No encontrás tu cultivo?
                        </h2>
                        
                        <p className="text-white/90 mb-6">
                            Nuestro equipo técnico puede ayudarte con soluciones personalizadas
                            para cualquier tipo de cultivo.
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
    );
}