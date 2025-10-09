"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    Target,
    FileText,
    Clock,
    X
} from "lucide-react";
import { CultivoData } from "@/lib/types/Crop";
import ProductCard from "../product/ProductCard";
import RootSeparator from "../ui/RootSeparator";

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

// Viewport optimizado para mejor detección
const optimizedViewport = {
    once: true,
    amount: 0.05, // Muy bajo para activación temprana
    margin: "0px 0px -100px 0px" // Margen grande para pre-activación
}

export default function CropDetail({ cultivo }: CultivoDetailProps) {
    const [showPdfModal, setShowPdfModal] = useState(false);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const openPdfModal = () => {
        setShowPdfModal(true);
    };

    const closePdfModal = () => {
        setShowPdfModal(false);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section Simplificado */}
            <motion.section
                className="relative text-white py-24 md:py-32 overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/crops/${cultivo.slug}/${cultivo.slug}.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-primary-800/20"></div>

                <div className="relative pt-20 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <motion.div
                        className="flex items-center justify-center gap-6"
                        variants={sectionVariants}
                    >
                        <div className="text-center">
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-avenir-cyr-heavy">
                                {cultivo.name}
                            </h1>
                            {cultivo.subtitle && (
                                <p className="text-3xl sm:text-4xl md:text-5xl font-medium text-white/85 mt-4">
                                    {cultivo.subtitle}
                                </p>
                            )}
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* PROTOCOLO DE APLICACIÓN - SECCIÓN CONDICIONAL */}
            <motion.section
                className="pt-20 bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <motion.div
                        className="text-center mb-12"
                        variants={sectionVariants}
                    >
                        <h2 className="text-5xl text-primary-800 mb-4 font-avenir-cyr-heavy">
                            Protocolo de Aplicación
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Programa completo desarrollado por Ecoagro Gaspar para maximizar el rendimiento y la calidad del cultivo
                        </p>
                    </motion.div>

                    {/* Contenido condicional del protocolo */}
                    <motion.div
                        className="mb-16"
                        variants={cardVariants}
                    >
                        {cultivo.protocoloAplicacion ? (
                            <>
                                {/* Imagen del protocolo */}
                                <div className="relative w-full mx-auto rounded-2xl overflow-hidden">
                                    <Image
                                        src={cultivo.protocoloAplicacion.image}
                                        alt={`Protocolo de aplicación para ${cultivo.name}`}
                                        width={1400}
                                        height={800}
                                        className="w-full h-auto"
                                        priority
                                    />
                                </div>

                                {/* Botón de descargar protocolo */}
                                <div className="flex items-center justify-center mt-12">
                                    <a
                                        href={cultivo.protocoloAplicacion.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl cursor-pointer"
                                    >
                                        <FileText className="w-5 h-5" />
                                        DESCARGAR PROTOCOLO
                                    </a>
                                </div>
                            </>
                        ) : (
                            /* Mensaje de "Próximamente" */
                            <div className="max-w-4xl mx-auto">
                                <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl p-12 shadow-lg border border-gray-200 relative overflow-hidden">
                                    {/* Gradiente de fondo sutil */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400/5 to-primary-500/10 pointer-events-none"></div>

                                    <div className="text-center relative z-10">
                                        <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary-300/30">
                                            <Clock className="w-10 h-10 text-primary-600" />
                                        </div>

                                        <h3 className="text-3xl font-bold text-primary-800 mb-4">
                                            Próximamente
                                        </h3>

                                        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                            Estamos desarrollando el protocolo específico para <strong>{cultivo.name}</strong>.
                                            Muy pronto estará disponible con todas las recomendaciones técnicas detalladas.
                                        </p>

                                        <div className="inline-flex items-center gap-3 bg-primary-50 text-primary-700 px-6 py-3 rounded-lg border border-primary-200">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-medium">Mantente atento a nuestras actualizaciones</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </motion.section>

            {/* OBJETIVOS DEL PROGRAMA */}
            <motion.section
                className="pb-4 bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <motion.div
                        className="text-center mb-16"
                        variants={sectionVariants}
                    >
                        <h2 className="text-5xl font-avenir-cyr-heavy text-primary-800 mb-4">
                            Objetivos del Programa
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Beneficios específicos del uso de productos en {cultivo.name}
                        </p>
                    </motion.div>

                    <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                        {cultivo.objetivosPrograma.map((objetivo, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-green-50 via-white to-green-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-green-200 relative overflow-hidden"
                                variants={cardVariants}
                                whileHover={{ scale: 1.01, y: -2 }}
                            >
                                {/* Gradiente sutil de fondo */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-emerald-500/10 pointer-events-none"></div>

                                <div className="flex gap-3 items-center relative z-10">
                                    <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center flex-shrink-0 border border-green-300/30">
                                        <Target className="w-4 h-4 text-green-600" />
                                    </div>
                                    <p className="text-gray-700 font-semibold text-lg leading-relaxed">{objetivo}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <div className="py-10">
                <RootSeparator />
            </div>

            {/* Productos Recomendados */}
            <motion.section
                className="pb-40 pt-10 bg-white relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
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

            {/* CTA Final - Actualizado */}
            <section className="py-10 bg-[#164A37] text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <motion.div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-2xl mx-auto text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={optimizedViewport}
                        variants={containerVariants}
                    >
                        <h2 className="text-3xl font-bold mb-4">¿Necesitas más información?</h2>

                        <p className="text-white/90 mb-6">
                            Nuestro equipo técnico está disponible para asesorarte
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
                                Contactar Ahora
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Modal flotante para PDF */}
            {showPdfModal && cultivo.protocoloAplicacion?.pdf && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-2xl max-w-6xl w-full h-5/6 flex flex-col">
                        {/* Header de la modal */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Protocolo de Aplicación - {cultivo.name}
                            </h3>
                            <button
                                onClick={closePdfModal}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                            >
                                <X className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>

                        {/* Contenido del PDF */}
                        <div className="flex-1 p-4">
                            <iframe
                                src={cultivo.protocoloAplicacion.pdf}
                                className="w-full h-full border border-gray-300 rounded"
                                title={`Protocolo de aplicación para ${cultivo.name}`}
                            />
                        </div>

                        {/* Footer con botones */}
                        <div className="flex items-center justify-between p-4 border-t border-gray-200 bg-gray-50">
                            <div className="text-sm text-gray-600">
                                Puedes descargar el archivo usando los controles del visor PDF
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={closePdfModal}
                                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
                                >
                                    Cerrar
                                </button>
                                <a
                                    href={cultivo.protocoloAplicacion.pdf}
                                    download
                                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
                                >
                                    <FileText className="w-4 h-4" />
                                    Descargar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Lightbox Modal para imágenes */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setLightboxImage(null)}
                >
                    <div className="relative max-w-5xl max-h-full">
                        <button
                            onClick={() => setLightboxImage(null)}
                            className="absolute -top-4 -right-4 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-colors z-10 cursor-pointer"
                            aria-label="Cerrar lightbox"
                        >
                            <X size={20} className="text-gray-600" />
                        </button>
                        <div
                            className="bg-white rounded-lg shadow-2xl overflow-hidden cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={lightboxImage}
                                alt="Imagen ampliada"
                                width={1200}
                                height={800}
                                className="w-full h-auto max-h-[80vh] object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}