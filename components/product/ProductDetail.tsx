"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Download,
  Leaf,
  Shield,
  Zap,
  Target,
  FlaskConical,
  Sprout,
  Phone,
  Mail,
  FileText,
  Award,
  Clock,
  Droplets
} from "lucide-react";

interface ProductData {
  name: string;
  description: string;
  color: string;
  cssColor: string;
  gradient: string;
  icon: string;
  registro: string;
  composicion: Record<string, string>;
  triplePilar: Array<{
    title: string;
    description: string;
    details: string;
  }>;
  modoAccion: {
    cobertura: string;
    penetracion: string;
  };
  cultivos: string[];
  aplicacion: {
    equipos: string;
    compatibilidad: string;
    intervaloSeguridad: string;
  };
  documentacion: string[];
}

interface ProductDetailProps {
  product: ProductData;
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

export default function ProductDetail({ product }: ProductDetailProps) {
  // Íconos para cada pilar según el producto
  const getPillarIcon = (index: number, productColor: string) => {
    const iconMap = {
      cobrestable: [Shield, Zap, Sprout],
      bordocald: [Target, Droplets, Award],
      trikopper: [FlaskConical, Shield, Leaf]
    };

    const icons = iconMap[productColor as keyof typeof iconMap] || [Shield, Zap, Sprout];
    return icons[index] || Shield;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className={`relative bg-gradient-to-br ${product.gradient} text-white py-28 md:py-32 overflow-hidden`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background decorations - variadas por producto */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full"></div>

          {/* Decoraciones específicas por producto */}
          {product.color === 'cobrestable' && (
            <>
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
            </>
          )}

          {product.color === 'bordocald' && (
            <>
              <Image
                src="/icons/corn.svg"
                alt=""
                width={100}
                height={100}
                className="absolute top-20 right-20 opacity-12 invert rotate-45"
              />
              <Image
                src="/icons/potato.svg"
                alt=""
                width={90}
                height={90}
                className="absolute bottom-16 left-16 opacity-10 invert -rotate-30"
              />
            </>
          )}

          {product.color === 'trikopper' && (
            <>
              <Image
                src="/icons/soy.svg"
                alt=""
                width={110}
                height={110}
                className="absolute top-12 right-12 opacity-15 invert rotate-30"
              />
              <Image
                src="/icons/garlic.svg"
                alt=""
                width={70}
                height={70}
                className="absolute bottom-24 left-24 opacity-12 invert -rotate-60"
              />
            </>
          )}
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenido de texto */}
            <motion.div variants={sectionVariants}>
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 font-softhits relative"
                variants={sectionVariants}
              >
                {product.name}
                <span className="align-super text-[0.4em] ml-1 relative top-[-0.2em] font-sans font-normal border border-white/80 border-2 px-[0.2em]">
                  R
                </span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8"
                variants={sectionVariants}
              >
                {product.description}
              </motion.p>
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
                variants={sectionVariants}
              >
                <Award className="w-5 h-5" />
                <span className="font-medium">{product.registro}</span>
              </motion.div>
            </motion.div>

            {/* Imagen del producto */}
            <motion.div
              className="relative flex items-center justify-center"
              variants={sectionVariants}
            >
              <div className="relative h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Image
                  src={product.icon}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Triple Pilar de Acción */}
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
            <h2 className="text-4xl font-bold mb-4" style={{ color: product.cssColor }}>
              Triple Pilar de Acción
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnología avanzada que combina tres mecanismos de acción para máxima efectividad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {product.triplePilar.map((pilar, index) => {
              const IconComponent = getPillarIcon(index, product.color);
              return (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto text-white"
                    style={{ backgroundColor: product.cssColor }}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                    {pilar.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4 leading-relaxed">
                    {pilar.description}
                  </p>
                  <p className="text-sm text-gray-500 text-center leading-relaxed">
                    {pilar.details}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Composición y Modo de Acción */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Composición */}
            <motion.div variants={cardVariants}>
              <div className="bg-white rounded-2xl p-8 h-full border-l-4" style={{ borderColor: product.cssColor }}>
                <div className="flex items-center mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mr-4 text-white"
                    style={{ backgroundColor: product.cssColor }}
                  >
                    <FlaskConical className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Composición</h3>
                </div>
                <div className="space-y-3">
                  {Object.entries(product.composicion).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</span>
                      <span className="font-semibold" style={{ color: product.cssColor }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Modo de Acción */}
            <motion.div variants={cardVariants}>
              <div className="bg-white rounded-2xl p-8 h-full border-l-4 border-gray-400">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-600 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Modo de Acción</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Cobertura</h4>
                    <p className="text-gray-600 leading-relaxed">{product.modoAccion.cobertura}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Penetración</h4>
                    <p className="text-gray-600 leading-relaxed">{product.modoAccion.penetracion}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Cultivos y Aplicación */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Cultivos Recomendados */}
            <motion.div variants={cardVariants}>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mr-4 text-white"
                    style={{ backgroundColor: product.cssColor }}
                  >
                    <Sprout className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Cultivos</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {product.cultivos.map((cultivo, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" style={{ color: product.cssColor }} />
                      <span className="text-gray-700 capitalize">{cultivo}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Información de Aplicación */}
            <motion.div variants={cardVariants}>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-600 rounded-xl flex items-center justify-center mr-4">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Aplicación</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Equipos</h4>
                    <p className="text-gray-600">{product.aplicacion.equipos}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Compatibilidad</h4>
                    <p className="text-gray-600">{product.aplicacion.compatibilidad}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Intervalo de Seguridad</h4>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" style={{ color: product.cssColor }} />
                      <span className="text-gray-600">{product.aplicacion.intervaloSeguridad}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Documentación y Contacto */}
      <motion.section
        className={`py-20 bg-gradient-to-br ${product.gradient} text-white`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Documentación */}
            <motion.div variants={cardVariants}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 mr-4" />
                  <h3 className="text-2xl font-bold">Documentación Disponible</h3>
                </div>
                <div className="space-y-3">
                  {product.documentacion.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span>{doc}</span>
                      <Download className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contacto */}
            <motion.div variants={cardVariants}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">¿Necesitas más información?</h3>
                <p className="text-white/90 mb-6">
                  Nuestro equipo técnico está disponible para asesorarte sobre el uso específico de {product.name} en tus cultivos.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>+54 9 261 399 0081</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <span>contacto@ecoagrogaspar.com.ar</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-block mt-6 bg-white/20 border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
                >
                  Contactar Ahora
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}