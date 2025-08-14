"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Target,
    CheckCircle,
    Calendar,
    Droplets,
    Download,
    ChevronRight,
    Shield,
    TrendingUp,
    DollarSign,
    Clock,
    Wind,
    Thermometer,
    FileText
} from "lucide-react";
import { CultivoData } from "@/lib/types/Crop";
import ProductCard from "../product/ProductCard";
import CTA from "../ui/CTA";

interface CultivoDetailProps {
    cultivo: CultivoData;
}

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

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeOut }
    }
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: easeOut }
    }
};

export default function CropDetail({ cultivo }: CultivoDetailProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section Simplificado */}
            <motion.section
                className="relative text-white py-24 md:py-32 overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/crops/${cultivo.name.toLocaleLowerCase()}/${cultivo.name.toLocaleLowerCase()}.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-primary-800/20"></div>

                <div className="relative pt-20 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="flex items-center justify-center gap-6"
                        variants={sectionVariants}
                    >
                        <Image
                            src={cultivo.icon}
                            alt={cultivo.name}
                            width={80}
                            height={80}
                            className="brightness-0 invert"
                        />
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-softhits">
                            {cultivo.name}
                        </h1>
                    </motion.div>
                </div>
            </motion.section>

            {/* PROTOCOLO DE APLICACIÓN - SECCIÓN PRINCIPAL */}
            <motion.section
                className="pt-20 pb-4 bg-white"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        variants={sectionVariants}
                    >
                        <h2 className="text-5xl text-primary-800 mb-4 font-avenir-cyr-heavy">
                            Protocolo de aplicación
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Programa completo desarrollado por Ecoagro Gaspar para maximizar el rendimiento y la calidad del cultivo
                        </p>
                    </motion.div>

                    {/* Imagen del protocolo */}
                    <motion.div
                        className="mb-16"
                        variants={cardVariants}
                    >
                        <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={`/crops/mani/mani-protocolo-aplicacion.jpg`}
                                alt={`Protocolo de aplicación para ${cultivo.name}`}
                                width={1400}
                                height={800}
                                className="w-full h-auto"
                                priority
                            />
                        </div>

                        {/* Botones de descarga */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
                            <a
                                href={`/crops/mani/MANÍ.pdf`}
                                download
                                className="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
                            >
                                <Download className="w-5 h-5" />
                                Descargar Protocolo
                            </a>
                            
                            <a
                                href={`/crops/mani/hoja-seguridad-${cultivo.name.toLowerCase()}.pdf`}
                                download
                                className="inline-flex items-center gap-3 bg-secondary-600 hover:bg-secondary-700 text-primary px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl border-2 border-secondary-500"
                            >
                                <FileText className="w-5 h-5" />
                                Descargar hoja de seguridad
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* OBJETIVOS DEL PROGRAMA */}
            <motion.section
                className="py-20 bg-gradient-to-br from-primary-50 to-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        variants={sectionVariants}
                    >
                        <h2 className="text-4xl font-avenir-cyr-heavy text-primary-800 mb-4">
                            Objetivos del Programa
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Beneficios específicos del uso de productos en {cultivo.name}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {cultivo.objetivosPrograma.map((objetivo, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100"
                                variants={cardVariants}
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Target className="w-5 h-5 text-primary-600" />
                                    </div>
                                    <p className="text-gray-700 font-semibold text-xl leading-relaxed">{objetivo}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <CTA />

            {/* Productos Recomendados */}
            <motion.section
                className="py-20 bg-gray-50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        variants={sectionVariants}
                    >
                        <h2 className="text-4xl font-avenir-cyr-heavy text-primary-800 mb-4">
                            Productos Recomendados
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Soluciones específicas para el manejo óptimo del cultivo
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {cultivo.productosRecomendados.map((producto, index) => (
                            <ProductCard
                                key={index}
                                index={index}
                                product={producto}
                            />
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* CTA Final */}
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
                        variants={sectionVariants}
                    >
                        <h2 className="text-3xl font-bold mb-4">¿Necesitas más información?</h2>
                        <p className="text-white/90 mb-6">
                            Nuestro equipo técnico está disponible para asesorarte
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
                            Contactar Ahora
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}