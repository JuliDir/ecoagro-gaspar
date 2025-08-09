"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, FlaskConical } from "lucide-react";
import { products } from "@/lib/data/products";
import { useSearchParams } from "next/navigation";
import SectionHero from "../ui/SectionHero";

const categories = ["Todos", "Fungicidas", "Fertilizantes", "Coayugantes"];

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

const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: easeOut }
    }
};

// Mapping de nombres de productos a sus slugs
const PRODUCT_SLUG_MAP: { [key: string]: string } = {
    "COBRESTABLE": "cobrestable",
    "BORDOCALD": "bordocald",
    "TRIKOPPER 50": "trikopper-50"
};

// Mapping de nombres de productos a sus logos
const PRODUCT_LOGO_MAP: { [key: string]: string } = {
    "COBRESTABLE": "/images/products/cobrestable-logo.png",
    "BORDOCALD": "/images/products/bordocald-logo.png", 
    "TRIKOPPER 50": "/images/products/trikopper-logo.png"
};

const getProductSlug = (productName: string): string => {
    return PRODUCT_SLUG_MAP[productName] || productName.toLowerCase().replace(/\s+/g, '-');
};

const getProductLogo = (productName: string): string => {
    return PRODUCT_LOGO_MAP[productName] || "/images/products/default-logo.jpeg";
};

export default function AllProducts() {
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Efecto para establecer la categoría desde los parámetros de URL
    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam && categories.includes(categoryParam)) {
            setSelectedCategory(categoryParam);
        }
    }, [searchParams]);

    // Filtrar productos basado en búsqueda y categoría
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <SectionHero
                title={{
                    primary: "Nuestros",
                    secondary: "productos"
                }}
                subtitle="Descubre nuestra línea completa de productos fitosanitarios a base de cobre para el manejo sustentable de enfermedades foliares."
            />

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
                                placeholder="Buscar productos..."
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
                        {filteredProducts.length === products.length
                            ? `Mostrando todos los productos (${products.length})`
                            : `Mostrando ${filteredProducts.length} de ${products.length} productos`
                        }
                        {selectedCategory !== "Todos" && (
                            <span className="ml-2 text-primary-600 font-medium">
                                - Categoría: {selectedCategory}
                            </span>
                        )}
                    </motion.div>
                </div>
            </motion.section>

            {/* Grid de productos */}
            <motion.section
                className="py-20"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredProducts.length > 0 ? (
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                        >
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    variants={cardVariants}
                                    className="group"
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <Link href={`/products/${getProductSlug(product.name)}`} className="block">
                                        <motion.div
                                            className={`relative rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 h-96 cursor-pointer bg-gradient-to-br ${product.gradient}`}
                                            whileHover={{ y: -5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Ícono de fondo decorativo */}
                                            <div className="absolute inset-0 flex items-center justify-end pr-8 overflow-hidden">
                                                <Image
                                                    src={product.bgIcon}
                                                    alt=""
                                                    width={200}
                                                    height={200}
                                                    className="opacity-10 brightness-0 invert"
                                                />
                                            </div>

                                            {/* Contenido */}
                                            <div className="relative z-10 h-full flex flex-col p-8 text-white">
                                                {/* Header con registro y categoría - siempre visible */}
                                                <div className="mb-4">
                                                    <div className="flex justify-between items-start">
                                                        <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-white/30">
                                                            Registro SENASA
                                                        </span>
                                                        <span className="inline-block bg-white/30 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm border border-white/40 font-medium">
                                                            {product.category}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Logo más grande arriba a la izquierda */}
                                                <div className="mb-6">
                                                    <motion.div
                                                        animate={{
                                                            scale: hoveredCard === index ? 1.05 : 1,
                                                        }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <Image
                                                            src={getProductLogo(product.name)}
                                                            alt={`Logo ${product.name}`}
                                                            width={450}
                                                            height={200}
                                                            className="object-contain"
                                                            priority={index < 3}
                                                        />
                                                    </motion.div>
                                                </div>

                                                {/* Imagen del producto centrada y más grande */}
                                                <div className="flex-1 flex items-center justify-center">
                                                    <motion.div
                                                        className="relative"
                                                        animate={{
                                                            scale: hoveredCard === index ? 1.1 : 1,
                                                            rotate: hoveredCard === index ? 2 : 0,
                                                        }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <Image
                                                            src={product.icon}
                                                            alt={product.name}
                                                            width={350}
                                                            height={350}
                                                            className="object-contain"
                                                            priority={index < 3}
                                                        />
                                                    </motion.div>
                                                </div>
                                            </div>

                                            {/* Efecto de brillo en hover */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
                                                animate={{
                                                    opacity: hoveredCard === index ? [0, 0.3, 0] : 0,
                                                    x: hoveredCard === index ? [-200, 400] : -200,
                                                }}
                                                transition={{ duration: 0.8 }}
                                            />
                                        </motion.div>
                                    </Link>
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
                            <FlaskConical className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                No se encontraron productos
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

            {/* CTA Section */}
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
                            ¿Necesitas asesoramiento técnico?
                        </h2>
                        <p className="text-white/90 mb-6">
                            Nuestro equipo de especialistas está disponible para ayudarte a elegir
                            el producto más adecuado para tus cultivos específicos.
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