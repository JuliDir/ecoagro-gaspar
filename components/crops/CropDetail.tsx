"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Leaf,
    Calendar,
    Droplets,
    Thermometer,
    Download,
    ChevronRight,
    Shield,
    AlertCircle,
    FileText,
    TrendingUp,
    DollarSign,
    Clock,
    Wind
} from "lucide-react";

interface CultivoData {
    name: string;
    scientificName: string;
    description: string;
    backgroundImage: string;
    icon: string;

    caracteristicas: {
        ciclo: string;
        temperatura: string;
        suelo: string;
        agua: string;
        siembra: string;
        cosecha: string;
    };

    enfermedadesComunes: Array<{
        nombre: string;
        sintomas: string;
        condiciones: string;
    }>;

    productosRecomendados: Array<{
        nombre: string;
        slug: string;
        aplicacion: string;
        dosis: string;
        momento: string;
    }>;

    guiaAplicacion: {
        etapasClaves: Array<{
            etapa: string;
            descripcion: string;
            productos: string[];
            objetivo: string;
        }>;
        recomendacionesGenerales: string[];
        condicionesOptimas: {
            temperatura: string;
            humedad: string;
            viento: string;
            horario: string;
        };
    };

    documentosDescargables: Array<{
        titulo: string;
        tipo: string;
        tamaño: string;
        url: string;
    }>;

    beneficiosEconomicos: {
        incrementoRendimiento: string;
        reduccionPerdidas: string;
        roi: string;
    };
}

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
            {/* Hero Section con imagen de fondo del cultivo */}
            <motion.section
                className="relative text-white py-20 md:py-32 overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${cultivo.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Overlay decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-primary-800/20"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Contenido de texto */}
                        <motion.div variants={sectionVariants}>
                            <div className="flex items-center gap-3 mb-4">
                                <Image
                                    src={cultivo.icon}
                                    alt={cultivo.name}
                                    width={48}
                                    height={48}
                                    className="brightness-0 invert"
                                />
                                <h1 className="text-4xl md:text-6xl font-bold font-softhits">
                                    {cultivo.name}
                                </h1>
                            </div>
                            <p className="text-lg text-white/80 italic mb-4">{cultivo.scientificName}</p>
                            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                                {cultivo.description}
                            </p>
                        </motion.div>

                        {/* Características rápidas */}
                        <motion.div
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                            variants={sectionVariants}
                        >
                            <h3 className="text-2xl font-bold mb-6">Características del Cultivo</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-primary-300" />
                                    <div>
                                        <p className="text-sm text-white/70">Ciclo</p>
                                        <p className="font-semibold">{cultivo.caracteristicas.ciclo}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Thermometer className="w-5 h-5 text-primary-300" />
                                    <div>
                                        <p className="text-sm text-white/70">Temperatura</p>
                                        <p className="font-semibold">{cultivo.caracteristicas.temperatura}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Droplets className="w-5 h-5 text-primary-300" />
                                    <div>
                                        <p className="text-sm text-white/70">Agua</p>
                                        <p className="font-semibold">{cultivo.caracteristicas.agua}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Leaf className="w-5 h-5 text-primary-300" />
                                    <div>
                                        <p className="text-sm text-white/70">Suelo</p>
                                        <p className="font-semibold">{cultivo.caracteristicas.suelo}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Enfermedades Comunes */}
            <motion.section
                className="py-20 bg-white"
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
                        <h2 className="text-4xl font-bold text-primary-800 mb-4">
                            Enfermedades Comunes
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Principales problemas fitosanitarios que afectan al cultivo
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {cultivo.enfermedadesComunes.map((enfermedad, index) => (
                            <motion.div
                                key={index}
                                className="bg-red-50 rounded-2xl p-8 border border-red-200"
                                variants={cardVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-4">
                                        <AlertCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">{enfermedad.nombre}</h3>
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-700">Síntomas:</p>
                                        <p className="text-gray-600">{enfermedad.sintomas}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-700">Condiciones favorables:</p>
                                        <p className="text-gray-600">{enfermedad.condiciones}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

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
                        <h2 className="text-4xl font-bold text-primary-800 mb-4">
                            Productos Recomendados
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Soluciones específicas para el manejo sanitario del cultivo
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {cultivo.productosRecomendados.map((producto, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary-600"
                                variants={cardVariants}
                                whileHover={{ x: 5 }}
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-primary-800">{producto.nombre}</h3>
                                    <Link
                                        href={`/products/${producto.slug}`}
                                        className="text-primary-600 hover:text-primary-700 transition-colors"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </Link>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-700">Aplicación:</p>
                                        <p className="text-gray-600">{producto.aplicacion}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-700">Dosis:</p>
                                        <p className="text-primary-600 font-medium">{producto.dosis}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-700">Momento:</p>
                                        <p className="text-gray-600">{producto.momento}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Guía de Aplicación */}
            <motion.section
                className="py-20 bg-white"
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
                        <h2 className="text-4xl font-bold text-primary-800 mb-4">
                            Guía de Aplicación
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Protocolo completo para maximizar la efectividad del tratamiento
                        </p>
                    </motion.div>

                    {/* Etapas Claves */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">Etapas Claves</h3>
                        <div className="space-y-6">
                            {cultivo.guiaAplicacion.etapasClaves.map((etapa, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-to-r from-primary-50 to-white rounded-xl p-6 border border-primary-200"
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="grid md:grid-cols-4 gap-6 items-center">
                                        <div>
                                            <h4 className="font-bold text-primary-800">{etapa.etapa}</h4>
                                            <p className="text-sm text-gray-600">{etapa.descripcion}</p>
                                        </div>
                                        <div className="md:col-span-2">
                                            <p className="text-sm font-semibold text-gray-700 mb-2">Productos:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {etapa.productos.map((prod, idx) => (
                                                    <span key={idx} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                                                        {prod}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-700">Objetivo:</p>
                                            <p className="text-sm text-gray-600">{etapa.objetivo}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Condiciones Óptimas de Aplicación */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div variants={cardVariants}>
                            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <Shield className="w-6 h-6 mr-3 text-blue-600" />
                                    Condiciones Óptimas
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <Thermometer className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <p className="text-sm text-gray-600">Temperatura</p>
                                            <p className="font-semibold">{cultivo.guiaAplicacion.condicionesOptimas.temperatura}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Droplets className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <p className="text-sm text-gray-600">Humedad</p>
                                            <p className="font-semibold">{cultivo.guiaAplicacion.condicionesOptimas.humedad}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Wind className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <p className="text-sm text-gray-600">Viento</p>
                                            <p className="font-semibold">{cultivo.guiaAplicacion.condicionesOptimas.viento}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <p className="text-sm text-gray-600">Horario</p>
                                            <p className="font-semibold">{cultivo.guiaAplicacion.condicionesOptimas.horario}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={cardVariants}>
                            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <FileText className="w-6 h-6 mr-3 text-green-600" />
                                    Recomendaciones Generales
                                </h3>
                                <ul className="space-y-3">
                                    {cultivo.guiaAplicacion.recomendacionesGenerales.map((rec, index) => (
                                        <li key={index} className="flex items-start">
                                            <ChevronRight className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{rec}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Beneficios Económicos */}
            <motion.section
                className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white"
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
                        <h2 className="text-4xl font-bold mb-4">Beneficios Económicos</h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Retorno de inversión comprobado con manejo sanitario adecuado
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center"
                            variants={cardVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary-300" />
                            <h3 className="text-2xl font-bold mb-2">Incremento de Rendimiento</h3>
                            <p className="text-3xl font-bold text-primary-300">{cultivo.beneficiosEconomicos.incrementoRendimiento}</p>
                        </motion.div>

                        <motion.div
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center"
                            variants={cardVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Shield className="w-12 h-12 mx-auto mb-4 text-primary-300" />
                            <h3 className="text-2xl font-bold mb-2">Reducción de Pérdidas</h3>
                            <p className="text-3xl font-bold text-primary-300">{cultivo.beneficiosEconomicos.reduccionPerdidas}</p>
                        </motion.div>

                        <motion.div
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center"
                            variants={cardVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary-300" />
                            <h3 className="text-2xl font-bold mb-2">Retorno de Inversión</h3>
                            <p className="text-3xl font-bold text-primary-300">{cultivo.beneficiosEconomicos.roi}</p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Documentos Descargables */}
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
                        <h2 className="text-4xl font-bold text-primary-800 mb-4">
                            Documentación Técnica
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Descarga guías y protocolos específicos para {cultivo.name}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {cultivo.documentosDescargables.map((doc, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                                variants={cardVariants}
                                whileHover={{ y: -3 }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                        <FileText className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                        {doc.tipo} • {doc.tamaño}
                                    </span>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-4">{doc.titulo}</h4>
                                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                                    <Download className="w-4 h-4" />
                                    Descargar
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* CTA Final */}
            <motion.section
                className="py-16 bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div variants={sectionVariants}>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            ¿Necesitas asesoramiento personalizado?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Nuestro equipo técnico está disponible para ayudarte a optimizar el manejo sanitario de tu cultivo de {cultivo.name}
                        </p>
                        <Link
                            href="#contacto"
                            onClick={(e) => {
                                e.preventDefault();
                                // Si estamos en una página de cultivo, navegar a home y luego hacer scroll
                                window.location.href = "/#contacto";
                            }}
                            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                        >
                            Contactar a un Especialista
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

