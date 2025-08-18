"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Shield,
  Target,
  Award,
  ArrowRight
} from "lucide-react";
import TriangleTripleAction from "./TriangleTripleAction";
import RootSeparator from "../ui/RootSeparator";

interface ProductData {
  name: string;
  description: string;
  color: string;
  cssColor: string;
  gradient: string;
  icon: string;
  registro: string;
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
}

interface ProductDetailProps {
  product: ProductData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: easeOut }
  }
};

const cropsGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0
    }
  }
};

const cropItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
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

export default function ProductDetail({ product }: ProductDetailProps) {

  // Mapping de cultivos a sus slugs
  const getCultivoSlug = (cultivo: string): string => {
    const cultivoMap: { [key: string]: string } = {
      "garbanzo": "garbanzo",
      "poroto": "poroto",
      "maní": "mani",
      "soja": "soja",
      "papa": "papa",
      "cítricos": "citricos",
      "vid": "vid",
      "trigo": "trigo",
      "tomate": "tomate",
      "frutales de pepita": "frutales-pepita",
      "hortalizas": "hortalizas",
      "frutales de carozo": "frutales-carozo",
      "olivo": "olivo",
      "palto": "palto",
      "kiwi": "kiwi",
      "maíz": "maiz",
      "maiz": "maiz",
      "ajo": "ajo",
      "naranja": "naranja",
      "limon": "limon",
      "mandarina": "mandarina",
      "pomelo": "pomelo",
      "oliva": "oliva"
    };

    return cultivoMap[cultivo.toLowerCase()] || cultivo.toLowerCase().replace(/\s+/g, '-');
  };

  // Mapping de cultivos a sus imágenes
  const getCultivoImage = (cultivo: string): string => {
    const imageMap: { [key: string]: string } = {
      "garbanzo": "/crops/garbanzo/garbanzo.jpg",
      "poroto": "/crops/poroto/poroto.jpg",
      "maní": "/crops/mani/mani.jpg",
      "mani": "/crops/mani/mani.jpg",
      "soja": "/crops/soja/soja.jpg",
      "papa": "/crops/papas/papas.jpg",
      "vid": "/crops/vid/vid.jpg",
      "trigo": "/crops/trigo/trigo.jpg",
      "tomate": "/crops/tomate/tomate.jpg",
      "olivo": "/crops/olivo/olivo.jpg",
      "palto": "/crops/palto/palto.jpg",
      "kiwi": "/crops/kiwi/kiwi.jpg",
      "maíz": "/crops/maiz/maiz.jpg",
      "maiz": "/crops/maiz/maiz.jpg",
      "ajo": "/crops/ajo/ajo.jpg",
      "naranja": "/crops/naranja/naranja.jpg",
      "limon": "/crops/limon/limon.jpg",
      "mandarina": "/crops/mandarina/mandarina.jpg",
      "pomelo": "/crops/pomelo/pomelo.jpg",
      "oliva": "/crops/oliva/oliva.jpg",
      "cítricos": "/crops/citricos/citricos.jpg"
    };

    return imageMap[cultivo.toLowerCase()] || "/images/crops/default.jpg";
  };

  // Mapping de logos de productos
  const getProductLogo = (productName: string): string => {
    const logoMap: { [key: string]: string } = {
      "COBRESTABLE": "/images/products/cobrestable-logo.png",
      "BORDOCALD": "/images/products/bordocald-logo.png",
      "TRIKOPPER 50": "/images/products/trikopper-logo.png"
    };

    return logoMap[productName] || "/images/products/default-logo.jpeg";
  };

  // Función para crear gradiente basado en el color del producto
  const getCardGradient = (index: number): string => {
    // Extraer el valor hex del color
    const baseColor = product.cssColor;
    
    if (index === 0) {
      // Primera card - gradiente más fuerte hacia el blanco
      return `linear-gradient(135deg, ${baseColor}25 0%, ${baseColor}15 50%, ${baseColor}05 100%)`;
    } else {
      // Segunda card - gradiente complementario más fuerte
      return `linear-gradient(135deg, ${baseColor}05 0%, ${baseColor}15 50%, ${baseColor}25 100%)`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className={`relative bg-gradient-to-br ${product.gradient} text-white pb-8 pt-20 overflow-hidden w-full`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background decorations - variadas por producto */}
        {/* Background decorations - iguales a SectionHero */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full"></div>

          {/* Íconos base */}
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
          <Image
            src="/icons/corn.svg"
            alt=""
            width={90}
            height={90}
            className="absolute top-32 left-16 opacity-8 invert rotate-6"
          />
          <Image
            src="/icons/bean.svg"
            alt=""
            width={70}
            height={70}
            className="absolute bottom-32 right-24 opacity-10 invert -rotate-12"
          />
          <Image
            src="/icons/potato.svg"
            alt=""
            width={85}
            height={85}
            className="absolute top-24 left-1/3 opacity-7 invert rotate-25"
          />
          <Image
            src="/icons/orange.svg"
            alt=""
            width={75}
            height={75}
            className="absolute bottom-10 right-1/3 opacity-9 invert -rotate-30"
          />
        </div>

        <div className="relative pt-5 z-10 mx-auto px-4 sm:px-6 lg:px-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenido de texto */}
            <motion.div variants={sectionVariants}>
              {/* Logo del producto */}
              <motion.div
                className="mb-8"
                variants={sectionVariants}
              >
                <Image
                  src={getProductLogo(product.name)}
                  alt={`Logo ${product.name}`}
                  width={700}
                  height={380}
                  className="object-contain"
                />
              </motion.div>

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
              <div className="relative rounded-full flex items-center justify-center ">
                <Image
                  src={product.icon}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <TriangleTripleAction
        items={product.triplePilar.map((pilar, index) => ({
          title: pilar.title,
          description: pilar.description,
          details: pilar.details,
        }))}
        color={product.cssColor}
        heading="Triple pilar de acción"
        subheading="Tecnología avanzada que combina tres mecanismos de acción para máxima efectividad"
      />

       {/* Modo de Acción - CON GRADIENTES MÁS FUERTES */}
      <motion.section
        className="pb-20 pt-10 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-32">
          <motion.div
            className="text-center mb-16"
            variants={sectionVariants}
          >
            <h2 className="text-4xl font-avenir-cyr-heavy mb-4" style={{ color: product.cssColor }}>Modo de acción</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mecanismo de protección integral para tus cultivos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={cardVariants}>
              <div 
                className="bg-white rounded-2xl p-8 h-full border-l-4 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group" 
                style={{ borderColor: product.cssColor }}
              >
                {/* Gradiente de fondo más fuerte */}
                <div 
                  className="absolute inset-0 opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  style={{ background: getCardGradient(0) }}
                ></div>
                
                {/* Contenido */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mr-4 shadow-lg" style={{ backgroundColor: product.cssColor }}>
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl text-gray-800 font-semibold">Cobertura</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{product.modoAccion.cobertura}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={cardVariants}>
              <div 
                className="bg-white rounded-2xl p-8 h-full border-l-4 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group" 
                style={{ borderColor: product.cssColor }}
              >
                {/* Gradiente de fondo más fuerte */}
                <div 
                  className="absolute inset-0 opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  style={{ background: getCardGradient(1) }}
                ></div>
                
                {/* Contenido */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mr-4 shadow-lg" style={{ backgroundColor: product.cssColor }}>
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl text-gray-800 font-semibold">Penetración</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{product.modoAccion.penetracion}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <RootSeparator />

      {/* Cultivos Mejorados - OPTIMIZADO para mejor rendimiento */}
      <motion.section
        className="py-20 bg-white relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Reducido de 0.2 a 0.1 para activación más temprana
        variants={containerVariants}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-32">
          <motion.div
            className="text-center mb-16"
            variants={sectionVariants}
          >
            <h2 className="text-4xl font-avenir-cyr-heavy mb-4" style={{ color: product.cssColor }}>
              Cultivos recomendados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre todos los cultivos donde puedes aplicar {product.name} para obtener los mejores resultados
            </p>
          </motion.div>

          {/* Grid de cultivos con animaciones optimizadas */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '2rem'
            }}
            variants={cropsGridVariants}
          >
            {product.cultivos.map((cultivo, index) => (
              <motion.div
                key={index}
                variants={cropItemVariants}
                className="group cursor-pointer"
                whileHover={{
                  scale: 1.03, // Reducido de 1.05 a 1.03
                  y: -3,       // Reducido de -5 a -3
                  transition: { duration: 0.12 } // Más rápido
                }}
                whileTap={{ scale: 0.97 }} // Reducido de 0.95 a 0.97
              >
                <Link
                  href={`/crops/${getCultivoSlug(cultivo)}`}
                  className="block"
                >
                  <div className="relative">
                    {/* Círculo con imagen de fondo */}
                    <div className="w-24 h-24 md:w-34 md:h-34 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-200 border-4 border-white overflow-hidden relative"
                    >
                      {/* Imagen del cultivo */}
                      <Image
                        src={getCultivoImage(cultivo)}
                        alt={cultivo}
                        fill
                        className="object-cover"
                      />

                      {/* Overlay oscuro */}
                      <div className="absolute inset-0 bg-black/30"></div>

                      {/* Overlay con ícono en hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-150 flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                      </div>
                    </div>

                    {/* Nombre del cultivo */}
                    <div className="text-center mt-3">
                      <h4 className="font-semibold text-gray-800 capitalize text-sm md:text-base transition-colors duration-150">
                        {cultivo}
                      </h4>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action para ver más cultivos */}
          <motion.div
            className="text-center mt-12 pb-10"
            variants={sectionVariants}
          >
            <Link
              href="/crops"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: product.cssColor }}
            >
              <span>Ver todos los cultivos</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
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

      {/* CTA Final - Actualizado */}
      <section className="py-4 bg-[#164A37] text-white relative overflow-hidden">
        <div className="mx-auto px-4 sm:px-6 lg:px-32 relative z-10">
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-2xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={optimizedViewport}
            variants={containerVariants}
          >
            <h2 className="text-3xl font-bold mb-4">¿Necesitas más información?</h2>
            
            <p className="text-white/90 mb-6">
              Nuestro equipo técnico está disponible para asesorarte sobre el uso específico de {product.name} en tus cultivos.
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