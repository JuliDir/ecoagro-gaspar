"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, Leaf } from "lucide-react";
import { allCrops } from "@/lib/data/crops";

const categories = ["Todos", "Leguminosas", "Cítricos", "Frutales", "Tubérculos", "Oleaginosas"];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: easeOut
        }
    }
};

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeOut }
    }
};

const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: easeOut }
    }
};

export default function AllCropsSection() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Filtrar cultivos basado en búsqueda y categoría
    const filteredCrops = allCrops.filter(crop => {
        const matchesSearch = crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            crop.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "Todos" || crop.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <motion.section
                className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-28 md:py-32 overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full"></div>
                    <Image
                        src="/icons/wheat.svg"
                        alt=""
                        width={120}
                        height={120}
                        className="absolute top-16 right-16 opacity-10 invert rotate-12"
                    />
                    <Image
                        src="/icons/leaf.svg"
                        alt=""
                        width={80}
                        height={80}
                        className="absolute bottom-20 left-20 opacity-15 invert -rotate-45"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center"
                        variants={sectionVariants}
                    >
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6"
                            variants={sectionVariants}
                        >
                            <span className="text-white">Todos los</span>{" "}
                            <span className="text-primary-200">cultivos</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                            variants={sectionVariants}
                        >
                            Explora nuestra amplia gama de cultivos especializados y soluciones nutricionales personalizadas para tu producción agrícola.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Filtros y búsqueda */}
            <motion.section
                className="py-8 bg-white border-b border-gray-200"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                        {/* Barra de búsqueda */}
                        <motion.div
                            className="relative flex-1 max-w-md"
                            variants={filterVariants}
                        >
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Buscar cultivos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        </motion.div>

                        {/* Filtros de categoría */}
                        <motion.div
                            className="flex flex-wrap gap-2"
                            variants={filterVariants}
                        >
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`cursor-pointer px-4 py-2 rounded-full font-medium transition-colors ${selectedCategory === category
                                        ? "bg-primary-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </motion.div>
                    </div>

                    {/* Contador de resultados */}
                    <motion.div
                        className="mt-4 text-gray-600"
                        variants={filterVariants}
                    >
                        {filteredCrops.length === allCrops.length
                            ? `Mostrando todos los cultivos (${allCrops.length})`
                            : `Mostrando ${filteredCrops.length} de ${allCrops.length} cultivos`
                        }
                    </motion.div>
                </div>
            </motion.section>

            {/* Grid de cultivos */}
            <motion.section
                className="py-20"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredCrops.length > 0 ? (
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            variants={containerVariants}
                        >
                            {filteredCrops.map((crop, index) => (
                                <motion.div
                                    key={crop.slug}
                                    variants={cardVariants}
                                    className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 h-80 cursor-pointer"
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    whileHover={{ y: -5 }}
                                >
                                    {/* Imagen de fondo */}
                                    <Image
                                        src={crop.backgroundImage}
                                        alt={crop.name}
                                        fill
                                        quality={60}
                                        className="object-cover"
                                        style={{
                                            zIndex: 0,
                                            filter: 'brightness(0.6)',
                                        }}
                                        loading="lazy"
                                    />

                                    {/* Contenido */}
                                    <div className="relative z-10 h-full flex flex-col">
                                        {/* Header con categoría - Solo visible cuando NO está en hover */}
                                        <div className={`p-4 transition-opacity duration-300 ${hoveredCard === index ? 'opacity-0' : 'opacity-100'
                                            }`}>
                                            <span className="inline-block bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                                                {crop.category}
                                            </span>
                                        </div>

                                        {/* Icono central */}
                                        <div className={`flex-1 flex items-center justify-center transition-all duration-300 ${hoveredCard === index ? 'opacity-20' : 'opacity-100'
                                            }`}>
                                            <Image
                                                src={`/icons/${crop.iconFilename}`}
                                                alt={`${crop.name} icon`}
                                                width={80}
                                                height={80}
                                                className="brightness-0 invert"
                                            />
                                        </div>

                                        {/* Información en hover */}
                                        <motion.div
                                            className={`absolute inset-0 p-6 flex flex-col justify-between transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'
                                                }`}
                                            style={{
                                                background: hoveredCard === index
                                                    ? `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8))`
                                                    : 'transparent'
                                            }}
                                            initial={false}
                                            animate={{
                                                opacity: hoveredCard === index ? 1 : 0,
                                            }}
                                        >
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-2">{crop.name}</h3>
                                                <p className="text-primary-200 text-sm italic mb-3">{crop.scientificName}</p>
                                                <p className="text-white/90 text-sm leading-relaxed">{crop.description}</p>
                                            </div>

                                            <Link
                                                href={`/crops/${crop.slug}`}
                                                className="z-10 mt-4 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold text-center transition-colors inline-block"
                                            >
                                                Ver Detalles
                                            </Link>
                                        </motion.div>

                                        {/* Footer con nombre */}
                                        <div className={`p-4 transition-opacity duration-300 ${hoveredCard === index ? 'opacity-0' : 'opacity-100'
                                            }`}>
                                            <h3 className="text-xl font-bold text-white text-center">{crop.name}</h3>
                                            <p className="text-primary-200 text-sm text-center italic">{crop.scientificName}</p>
                                        </div>
                                    </div>
                                </motion.div>
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
                                    transition: { duration: 0.5, ease: easeOut }
                                }
                            }}
                        >
                            <Leaf className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                No se encontraron cultivos
                            </h3>
                            <p className="text-gray-500 mb-6">
                                Intenta ajustar tu búsqueda o selecciona una categoría diferente.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedCategory("Todos");
                                }}
                                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                            >
                                Limpiar filtros
                            </button>
                        </motion.div>
                    )}
                </div>
            </motion.section>

            {/* CTA Section - Unificada con ProductDetail */}
            <motion.section
                className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-2xl mx-auto text-center"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease: easeOut }
                            }
                        }}
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            ¿No encontrás tu cultivo?
                        </h2>
                        <p className="text-white/90 mb-6">
                            Nuestro equipo técnico puede ayudarte con soluciones personalizadas
                            para cualquier tipo de cultivo.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center space-x-3">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+54 9 261 399 0081</span>
                            </div>
                            <div className="flex items-center justify-center space-x-3">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
        </div>
    );
}