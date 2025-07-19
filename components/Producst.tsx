"use client";

import { easeOut, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const products = [
    {
        id: 1,
        name: "COBRESTABLE",
        color: "#06b6d4",
        gradient: "from-cyan-400 to-cyan-600",
        description:
            "Cobre complejo con fosfitos que actúa como bactericida, fungicida y bioestimulante. Controla enfermedades y refuerza las defensas naturales de la planta.",
        features: [
            "Triple acción: fungicida, bactericida y bioestimulante",
            "Activa defensas (SAR, fitoalexinas, lignina)",
            "Previene resistencia combinando con sintéticos",
        ],
        icon: "/images/products/cobrestable.png",
        bgIcon: "/icons/wheat.svg",
    },
    {
        id: 2,
        name: "BORDOCALD",
        color: "#8b5cf6",
        gradient: "from-violet-400 to-violet-600",
        description:
            "Caldo bordelés ultramicronizado (≈1 µm), listo para usar. Máxima adherencia post-lluvia, ideal para agricultura orgánica. Alta eficacia con menor dosis de cobre.",
        features: [
            "Alta adherencia incluso con lluvia (hasta 30 mm)",
            "Certificado para agricultura orgánica (ECOCERT, OIA)",
            "Mayor cobertura y residualidad con menor dosis",
        ],
        icon: "/images/products/bordocald.png",
        bgIcon: "/icons/corn.svg",
    },
    {
        id: 3,
        name: "TRIKOPPER 50",
        color: "#10b981",
        gradient: "from-emerald-400 to-emerald-600",
        description:
            "Cobre tribásico coloidal (50 %) con partículas <1.5 µm y adherente siliconado. Alta residualidad (hasta 40 días) y excelente adherencia en citricultura y frutales.",
        features: [
            "Partículas ultrafinas para máxima cobertura",
            "Alta retención incluso tras lluvias fuertes",
            "Ideal para cítricos: cancrosis y mancha negra",
        ],
        icon: "/images/products/trikopper.png",
        bgIcon: "/icons/soy.svg",
    },
];

// Pre-generate stable random values for particles
const generateParticleData = () => {
    const particles = [];
    for (let i = 0; i < 20; i++) {
        particles.push({
            id: i,
            size: Math.floor(Math.random() * 8) + 4,
            left: Math.random() * 100,
            top: Math.random() * 100,
            hue: Math.random() * 360,
            opacity: 0.02 + Math.random() * 0.06,
            blur: Math.random() * 3 + 1,
            duration: 3 + Math.random() * 6,
            delay: Math.random() * 5,
            xOffset: (Math.random() - 0.5) * 40,
            yOffset: (Math.random() - 0.5) * 40,
            rotation: Math.random() * 360,
            scale: 1.2 + Math.random() * 0.8
        });
    }
    return particles;
};

const staticParticles = generateParticleData();

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const productVariants = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: easeOut
        }
    }
};

export default function Products() {
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const [windowWidth, setWindowWidth] = useState(1200); // Default fallback

    useEffect(() => {
        setIsMounted(true);
        setWindowWidth(window.innerWidth);
        
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Don't render animations until mounted
    if (!isMounted) {
        return (
            <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden" id="productos">
                <div className="space-y-0 relative z-10">
                    {products.map((product) => (
                        <div key={product.id} className="relative w-full overflow-hidden">
                            <div className={`relative w-full bg-gradient-to-r ${product.gradient} py-16 lg:py-20`}>
                                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
                                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                        <div className="space-y-6">
                                            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                                                {product.name}
                                            </h3>
                                            <p className="text-xl text-white/90 leading-relaxed mb-8">
                                                {product.description}
                                            </p>
                                            <div className="space-y-4">
                                                {product.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-start space-x-4">
                                                        <div className="w-3 h-3 bg-white/80 rounded-full mt-1 flex-shrink-0" />
                                                        <span className="text-lg font-medium text-white/95">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            <button className="cursor-pointer mt-8 py-4 px-8 rounded-xl bg-white/20 backdrop-blur-sm text-white font-bold text-lg border-2 border-white/30 transition-all duration-300 hover:bg-white/30">
                                                Más Información
                                            </button>
                                        </div>
                                        <div className="hidden lg:flex items-center justify-center relative">
                                            <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                                                <Image src={product.icon} alt={product.name} width={240} height={240} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <motion.section 
            className="w-full bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden" 
            id="productos"
            initial="hidden"
            whileInView="visible"
            viewport={{ 
                once: true, 
                amount: 0.1,
            }}
            variants={containerVariants}
        >
            {/* Products Section */}
            <div className="space-y-0 relative z-10">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        variants={productVariants}
                        onHoverStart={() => setHoveredProduct(product.id)}
                        onHoverEnd={() => setHoveredProduct(null)}
                        className="relative w-full overflow-hidden"
                    >
                        <motion.div
                            className={`relative w-full bg-gradient-to-r ${product.gradient} py-16 lg:py-20`}
                            animate={{
                                scale: hoveredProduct === product.id ? 1.02 : 1,
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            {/* Ícono de fondo */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-end pr-20 overflow-hidden"
                                animate={{
                                    scale: hoveredProduct === product.id ? 1.1 : 1,
                                    rotate: hoveredProduct === product.id ? 5 : 0,
                                    x: hoveredProduct === product.id ? -20 : 0,
                                }}
                                transition={{ duration: 0.6 }}
                            >
                                <Image
                                    src={product.bgIcon}
                                    alt=""
                                    width={300}
                                    height={300}
                                    className="opacity-10 brightness-0 invert lg:w-80 lg:h-80"
                                />
                            </motion.div>

                            {/* Overlay con patrón */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

                            {/* Contenido */}
                            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    {/* Contenido de texto */}
                                    <motion.div
                                        className="space-y-6"
                                        animate={{
                                            x: hoveredProduct === product.id ? 10 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.h3
                                            className="text-4xl lg:text-5xl font-bold text-white mb-4"
                                            animate={{
                                                scale: hoveredProduct === product.id ? 1.05 : 1
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {product.name}
                                        </motion.h3>

                                        <p className="text-xl text-white/90 leading-relaxed mb-8">
                                            {product.description}
                                        </p>

                                        {/* Features */}
                                        <motion.div
                                            className="space-y-4"
                                            animate={{
                                                opacity: hoveredProduct === product.id ? 1 : 0.9
                                            }}
                                        >
                                            {product.features.map((feature, featureIndex) => (
                                                <motion.div
                                                    key={featureIndex}
                                                    className="flex items-start space-x-4"
                                                    initial={{ x: -20, opacity: 0 }}
                                                    whileInView={{ x: 0, opacity: 1 }}
                                                    transition={{ 
                                                        delay: featureIndex * 0.1 + (index * 0.3), 
                                                        duration: 0.5 
                                                    }}
                                                    viewport={{ once: true }}
                                                >
                                                    <motion.div
                                                        className="w-3 h-3 bg-white rounded-full mt-1 flex-shrink-0"
                                                        animate={{
                                                            scale: hoveredProduct === product.id ? [1, 1.3, 1] : 1,
                                                            opacity: hoveredProduct === product.id ? [0.8, 1, 0.8] : 0.8
                                                        }}
                                                        transition={{
                                                            duration: 0.8,
                                                            repeat: hoveredProduct === product.id ? Infinity : 0,
                                                            delay: featureIndex * 0.2
                                                        }}
                                                    />
                                                    <span className="text-lg font-medium text-white/95">
                                                        {feature}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </motion.div>

                                        {/* Botón */}
                                        <motion.button
                                            className="cursor-pointer mt-8 py-4 px-8 rounded-xl bg-white/20 backdrop-blur-sm text-white font-bold text-lg border-2 border-white/30 transition-all duration-300 hover:bg-white/30"
                                            whileHover={{
                                                scale: 1.05,
                                                backgroundColor: "rgba(255, 255, 255, 0.25)"
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                            animate={{
                                                y: hoveredProduct === product.id ? -3 : 0
                                            }}
                                        >
                                            Más Información
                                        </motion.button>
                                    </motion.div>

                                    {/* Espacio para gráficos o imágenes adicionales */}
                                    <motion.div
                                        className="hidden lg:flex items-center justify-center relative"
                                        animate={{
                                            scale: hoveredProduct === product.id ? 1.1 : 1,
                                            rotate: hoveredProduct === product.id ? 2 : 0,
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                                            <span className="text-8xl opacity-70">
                                                <Image src={product.icon} alt={product.name} width={240} height={240} />
                                            </span>
                                        </div>

                                        {/* Partículas flotantes - REDUCIDAS EN VISIBILIDAD */}
                                        <motion.div
                                            className="absolute top-10 right-10 w-3 h-3 bg-white/50 rounded-full shadow-md ring-1 ring-white/20"
                                            animate={{
                                                y: [0, -20, 0],
                                                opacity: hoveredProduct === product.id ? [0.5, 0.7, 0.5] : [0.4, 0.6, 0.4],
                                                scale: hoveredProduct === product.id ? [1, 1.2, 1] : [1, 1.1, 1]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <motion.div
                                            className="absolute bottom-16 left-12 w-4 h-4 bg-white/45 rounded-full shadow-md ring-1 ring-white/25"
                                            animate={{
                                                y: [0, 15, 0],
                                                x: [0, 10, 0],
                                                opacity: hoveredProduct === product.id ? [0.45, 0.65, 0.45] : [0.35, 0.55, 0.35],
                                                scale: hoveredProduct === product.id ? [1, 1.3, 1] : [1, 1.2, 1]
                                            }}
                                            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                        />
                                        <motion.div
                                            className="absolute top-1/2 left-8 w-2 h-2 bg-white/60 rounded-full shadow-sm ring-1 ring-white/30"
                                            animate={{
                                                scale: [1, 2, 1],
                                                opacity: hoveredProduct === product.id ? [0.6, 0.8, 0.6] : [0.5, 0.7, 0.5]
                                            }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                                        />

                                        {/* Resto de partículas... manteniendo el resto del código de partículas igual */}
                                    </motion.div>
                                </div>
                            </div>

                            {/* Efecto de brillo en hover */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                initial={{ x: -200, opacity: 0 }}
                                animate={{
                                    x: hoveredProduct === product.id ? [windowWidth] : -200,
                                    opacity: hoveredProduct === product.id ? [0, 0.3, 0] : 0
                                }}
                                transition={{ duration: 1 }}
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Elementos decorativos de fondo - usando partículas estáticas */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Círculos grandes estáticos */}
                <motion.div
                    className="absolute top-32 left-20 w-40 h-40 bg-cyan-300 opacity-8 rounded-full blur-2xl shadow-xl ring-2 ring-cyan-200/10"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-40 right-32 w-48 h-48 bg-violet-300 opacity-8 rounded-full blur-2xl shadow-xl ring-2 ring-violet-200/10"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -25, 0],
                        y: [0, 25, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                />

                {/* Partículas con datos pre-generados */}
                {staticParticles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full shadow-sm"
                        style={{
                            width: `${particle.size * 4}px`,
                            height: `${particle.size * 4}px`,
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            backgroundColor: `hsl(${particle.hue}, 70%, 80%)`,
                            opacity: particle.opacity,
                            filter: `blur(${particle.blur}px)`
                        }}
                        animate={{
                            scale: [1, particle.scale, 1],
                            x: [0, particle.xOffset, 0],
                            y: [0, particle.yOffset, 0],
                            rotate: [0, particle.rotation]
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: particle.delay
                        }}
                    />
                ))}
            </div>
        </motion.section>
    );
}