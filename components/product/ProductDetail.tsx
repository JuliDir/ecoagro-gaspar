"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Target,
  Award,
  ArrowRight,
  BarChart3,
  Droplets,
  Download,
  FileText,
  ShieldCheck,
  Image as ImageIcon,
  ChevronDown,
  X
} from "lucide-react";
import TriangleTripleAction from "./TriangleTripleAction";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
    details?: string;
    image: string;
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
  amount: 0.05,
  margin: "0px 0px -100px 0px"
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [hoveredCropCard, setHoveredCropCard] = useState<number | null>(null);



  // Mapping de cultivos a sus slugs
  const getCultivoSlug = (cultivo: string): string => {

    const cultivoMap: { [key: string]: string } = {
      "ajo": "ajo",
      "alfalfa corte": "alfalfa-corte",
      "alfalfa primer corte": "alfalfa-primer-corte",
      "alfalfa semilla": "alfalfa-semilla",
      "arveja": "arveja",
      "berenjena": "berenjena",
      "brócoli": "broccoli",
      "cebada": "cebada",
      "trigo - cebada": "trigo",
      "cebolla consumo": "cebolla-consumo",
      "cítricos": "citricos",
      "cucurbitáceas": "cucurbitaceas",
      "frutilla": "frutilla",
      "garbanzo": "garbanzo",
      "hortalizas de hoja": "hortalizas-hoja",
      "lenteja": "lenteja",
      "limón": "citricos",
      "maíz grano": "maiz-grano",
      "maíz silo": "maiz-silo",
      "mandarina": "citricos",
      "maní": "mani",
      "melón": "melon",
      "naranja": "citricos",
      "nogal": "nogal",
      "olivo": "olivo",
      "papa": "papa",
      "pecán": "pecan",
      "pistacho": "pistacho",
      "pimiento": "pimiento",
      "pomelo": "citricos",
      "poroto": "poroto",
      "sandía": "sandia",
      "soja": "soja",
      "tomate consumo": "tomate-consumo",
      "tomate industria": "tomate-industria",
      "trigo": "trigo",
      "vid": "vid",
      "zanahoria consumo": "zanahoria-consumo",
      "zanahoria semilla": "zanahoria-semilla",

      "frutales de pepita": "frutales-pepita",
      "frutales de carozo": "frutales-carozo",
      "hortalizas": "hortalizas",
      "palto": "palto",
      "kiwi": "kiwi",
      "tomate": "tomate",              // genérico
    };

    return cultivoMap[cultivo.toLowerCase()] || cultivo.toLowerCase().replace(/\s+/g, '-');
  };

  // Función para obtener el título y subtítulo de un cultivo
  const getCultivoDisplayName = (cultivo: string): { title: string; subtitle?: string } => {
    if (cultivo.toLowerCase() === "cítricos") {
      return {
        title: "Cítricos",
        subtitle: "(limón, mandarina, naranja y pomelo)"
      };
    }
    return { title: cultivo };
  };

  // Mapping de cultivos a sus imágenes
  const getCultivoImage = (cultivo: string): string => {
    const imageMap: { [key: string]: string } = {
      "ajo": "/crops/ajo/ajo.jpg",
      "alfalfa corte": "/crops/alfalfa-corte/alfalfa-corte.jpg",
      "alfalfa primer corte": "/crops/alfalfa-primer-corte/alfalfa-primer-corte.jpg",
      "alfalfa semilla": "/crops/alfalfa-semilla/alfalfa-semilla.jpg",
      "arveja": "/crops/arveja/arveja.jpg",
      "berenjena": "/crops/berenjena/berenjena.jpg",
      "brócoli": "/crops/broccoli/broccoli.jpg",
      "cebada": "/crops/cebada/cebada.jpg",
      "trigo - cebada": "/crops/trigo/trigo.jpg",
      "cebolla consumo": "/crops/cebolla-consumo/cebolla-consumo.jpg",
      "cítricos": "/crops/citricos/citricos.jpg",
      "cucurbitáceas": "/crops/cucurbitaceas/cucurbitaceas.jpg",
      "frutilla": "/crops/frutilla/frutilla.jpg",
      "garbanzo": "/crops/garbanzo/garbanzo.jpg",
      "hortalizas de hoja": "/crops/hortalizas-de-hoja/hortalizas-de-hoja.jpg",
      "lenteja": "/crops/lenteja/lenteja.jpg",
      "limón": "/crops/limon/limon.jpg",
      "maíz grano": "/crops/maiz-grano/maiz-grano.jpg",
      "maíz silo": "/crops/maiz-silo/maiz-silo.jpg",
      "mandarina": "/crops/mandarina/mandarina.jpg",
      "maní": "/crops/mani/mani.jpg",
      "melón": "/crops/melon/melon.jpg",
      "naranja": "/crops/naranja/naranja.jpg",
      "nogal": "/crops/nogal/nogal.jpg",
      "olivo": "/crops/olivo/olivo.jpg",
      "papa": "/crops/papa/papa.jpg",
      "pecán": "/crops/pecan/pecan.jpg",
      "pistacho": "/crops/pistacho/pistacho.jpg",
      "pimiento": "/crops/pimiento/pimiento.jpg",
      "pomelo": "/crops/pomelo/pomelo.jpg",
      "poroto": "/crops/poroto/poroto.jpg",
      "sandía": "/crops/sandia/sandia.jpg",
      "soja": "/crops/soja/soja.jpg",
      "tomate consumo": "/crops/tomate-consumo/tomate-consumo.jpg",
      "tomate industria": "/crops/tomate-industria/tomate-industria.jpg",
      "tomate": "/crops/tomate/tomate.jpg", // genérico
      "trigo": "/crops/trigo/trigo.jpg",
      "vid": "/crops/vid/vid.jpg",
      "zanahoria consumo": "/crops/zanahoria-consumo/zanahoria-consumo.jpg",
      "zanahoria semilla": "/crops/zanahoria-semilla/zanahoria-semilla.jpg",

      // extras de tu cultivoMap original
      "frutales de pepita": "/crops/frutales-pepita/frutales-pepita.jpg",
      "frutales de carozo": "/crops/frutales-carozo/frutales-carozo.jpg",
      "hortalizas": "/crops/hortalizas/hortalizas.jpg",
      "palto": "/crops/palto/palto.jpg",
      "kiwi": "/crops/kiwi/kiwi.jpg",
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

  // Mapping de gráficos de retención por producto - ACTUALIZADO para dos gráficos
  const getRetentionCharts = (productName: string): { particleSize: string; precipitation: string } => {
    const chartMap: { [key: string]: { particleSize: string; precipitation: string } } = {
      "TRIKOPPER 50": {
        particleSize: "/images/products/trikopper-retencion-particula.jpeg",
        precipitation: "/images/products/trikopper-retencion-precipitacion.jpeg"
      },
      "BORDOCALD": {
        particleSize: "/images/products/bordocald-retencion-particula.jpeg",
        precipitation: "/images/products/bordocald-retencion-precipitacion.jpg"
      },
      "COBRESTABLE": {
        particleSize: "",
        precipitation: ""
      }
    };

    return chartMap[productName] || { particleSize: "", precipitation: "" };
  };

  // Función para crear gradiente basado en el color del producto
  const getCardGradient = (index: number): string => {
    const baseColor = product.cssColor;

    if (index === 0) {
      return `linear-gradient(135deg, ${baseColor}25 0%, ${baseColor}15 50%, ${baseColor}05 100%)`;
    } else if (index === 1) {
      return `linear-gradient(135deg, ${baseColor}05 0%, ${baseColor}15 50%, ${baseColor}25 100%)`;
    } else {
      return `linear-gradient(135deg, ${baseColor}15 0%, ${baseColor}25 50%, ${baseColor}15 100%)`;
    }
  };

  // Obtener los gráficos de retención
  const retentionCharts = getRetentionCharts(product.name);
  const hasRetentionCharts = retentionCharts.particleSize || retentionCharts.precipitation;

  // Función para obtener los documentos de descarga
  const getProductDocuments = (productName: string) => {
    const productSlug = productName.toLowerCase().replace(/\s+/g, '-');
    return {
      safetySheet: `/documents/${productSlug}/${productSlug}-hoja-seguridad.pdf`,
      technicalSheet: `/documents/${productSlug}/${productSlug}-informe-tecnico.pdf`,
      marvete: `/documents/${productSlug}/${productSlug}-marbete.jpeg`
    };
  };

  // Función para manejar descargas
  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
  };

  // Función para abrir en nueva pestaña
  const handleOpenInNewTab = (url: string) => {
    window.open(url, '_blank');
  };

  const documents = getProductDocuments(product.name);

  return (
    <div className="min-h-screen" >
      {/* Hero Section */}
      <motion.section
        className="relative text-white pb-8 pt-20 overflow-hidden w-full"
        style={{ backgroundColor: product.cssColor }}
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

        <div className="relative pt-5 z-10 mx-auto px-4 sm:px-6 lg:px-36">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={sectionVariants}>
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

      <div
        className="w-full h-8"
        style={{
          background: product.cssColor,
          clipPath: "polygon(50% 100%, 0 0, 100% 0)",
        }}
      ></div>

      <TriangleTripleAction
        items={product.triplePilar.map((pilar) => ({
          title: pilar.title,
          description: pilar.description,
          details: pilar.details,
          image: pilar.image,
        }))}
        color={product.cssColor}
        heading="Tres Pilares de Protección"
        subheading={product.name === "BORDOCALD" ? "Se adhiere, no se lava y dura" : "Tecnología avanzada que combina tres mecanismos de acción para máxima efectividad"}
      />

      {/* Banner especial para TRIKOPPER-50 - Especialista en Cítricos */}
      {product.name === "TRIKOPPER 50" && (
        <motion.section
          className="pb-16 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="mx-auto px-4 sm:px-6 lg:px-36">
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl h-96 max-w-6xl mx-auto bg-white"
              variants={cardVariants}
            >
              <div className="flex h-full">
                {/* Contenido - 3/4 del ancho */}
                <div className="w-3/4 flex items-center justify-start p-12" style={{ background: `linear-gradient(135deg, ${product.cssColor}10, ${product.cssColor}20)` }}>
                  <div className="max-w-2xl">
                    <h3 className="text-4xl font-bold mb-4" style={{ color: product.cssColor }}>
                      🍊 ESPECIALISTA EN CÍTRICOS
                    </h3>
                    <p className="text-xl mb-6" style={{ color: product.cssColor }}>
                      Formulado especialmente para naranjas, limones, mandarinas y pomelos
                    </p>

                    {/* Badge */}
                    <div className="inline-flex items-center text-white px-6 py-3 rounded-full font-bold" style={{ backgroundColor: product.cssColor }}>
                      <Award className="w-5 h-5 mr-2" />
                      MÁXIMA PROTECCIÓN
                    </div>
                  </div>
                </div>

                {/* Imagen - 1/4 del ancho */}
                <div className="w-1/4 relative">
                  <Image
                    src="/crops/citricos/citricos.jpg"
                    alt="Cítricos (limón, naranja, mandarina y pomelo) - Especialidad TRIKOPPER-50"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Modo de Acción / Triple Acción */}
      {product.name !== "BORDOCALD" && product.name !== "TRIKOPPER 50" && (
        <div className="w-full h-8 relative" style={{ background: product.cssColor }}>
          <div
            className="absolute inset-0"
            style={{
              background: "white",
              clipPath: "polygon(50% 100%, 0 0, 100% 0)"
            }}
          ></div>
        </div>
      )}
      <motion.section
        className={cn(
          product.name === "BORDOCALD" || product.name === "TRIKOPPER 50" ? "" : "pb-20 pt-10",
        )}
        initial="hidden"
        whileInView="visible"
        style={{
          background: product.name === "BORDOCALD" || product.name === "TRIKOPPER 50" ? "white" : product.cssColor
        }}
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-36">
          <motion.div
            className="text-center mb-16"
            variants={sectionVariants}
          >
            <h2 className="text-4xl font-avenir-cyr-heavy mb-4" style={{
              color: product.name === "BORDOCALD" || product.name === "TRIKOPPER 50" ? product.cssColor : "white"
            }}>
              {product.name === "COBRESTABLE" ? "Triple Acción" : "¿Cómo Funciona?"}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{
              color: product.name === "BORDOCALD" || product.name === "TRIKOPPER 50" ? product.cssColor : "white"
            }}>
              {product.name === "COBRESTABLE"
                ? "Acción sistémica con + doble barrera de protección"
                : "Mecanismo de protección integral para cultivos"}
            </p>
          </motion.div>

          {product.name === "COBRESTABLE" ? (
            <>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div variants={cardVariants}>
                  <div
                    className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 h-full shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group border border-white/20"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)'
                    }}
                  >
                    {/* Gradiente de color del producto */}
                    <div
                      className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                      style={{ background: `linear-gradient(135deg, ${product.cssColor}20, transparent 70%)` }}
                    ></div>

                    {/* Efecto de brillo glassmorphism */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/30 via-transparent to-transparent"></div>

                    {/* Efecto de movimiento */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-all duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${product.cssColor}40, ${product.cssColor}20)`,
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                          }}
                        >
                          <Target className="w-8 h-8 text-white drop-shadow-lg" />
                        </div>
                        <h3 className="text-2xl text-white font-bold tracking-tight drop-shadow-lg">Penetración</h3>
                      </div>
                      <p className="text-white/90 leading-relaxed font-medium">
                        Penetra y se moviliza por la planta
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={cardVariants}>
                  <div
                    className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 h-full shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group border border-white/20"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)'
                    }}
                  >
                    {/* Gradiente de color del producto */}
                    <div
                      className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                      style={{ background: `linear-gradient(135deg, ${product.cssColor}20, transparent 70%)` }}
                    ></div>

                    {/* Efecto de brillo glassmorphism */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/30 via-transparent to-transparent"></div>

                    {/* Efecto de movimiento */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-all duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${product.cssColor}40, ${product.cssColor}20)`,
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                          }}
                        >
                          <Shield className="w-8 h-8 text-white drop-shadow-lg" />
                        </div>
                        <h3 className="text-2xl text-white font-bold tracking-tight drop-shadow-lg">Barrera interna</h3>
                      </div>
                      <p className="text-white/90 leading-relaxed font-medium">
                        Deposita cobre creando una barrera interna
                      </p>


                    </div>
                  </div>
                </motion.div>

                <motion.div variants={cardVariants}>
                  <div
                    className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 h-full shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group border border-white/20"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)'
                    }}
                  >
                    {/* Gradiente de color del producto */}
                    <div
                      className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                      style={{ background: `linear-gradient(135deg, ${product.cssColor}20, transparent 70%)` }}
                    ></div>

                    {/* Efecto de brillo glassmorphism */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/30 via-transparent to-transparent"></div>

                    {/* Efecto de movimiento */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-all duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${product.cssColor}40, ${product.cssColor}20)`,
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                          }}
                        >
                          <Shield className="w-8 h-8 text-white drop-shadow-lg" />
                        </div>
                        <h3 className="text-2xl text-white font-bold tracking-tight drop-shadow-lg">Barrera externa</h3>
                      </div>
                      <p className="text-white/90 leading-relaxed font-medium">
                        Parte del cobre queda en el tejido produciendo una barrera externa
                      </p>


                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          ) : product.name === "BORDOCALD" ? (
            <div className="space-y-8">
              {/* Máximo Control - Grande y centrado */}
              <motion.div variants={cardVariants}>
                <div className="bg-white rounded-2xl p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 max-w-4xl mx-auto">
                  <div className="relative h-96 cursor-pointer" onClick={() => setLightboxImage("/images/products/maximo-control.jpeg")}>
                    <Image
                      src="/images/products/maximo-control.jpeg"
                      alt="Máximo Control"
                      fill
                      className="object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Poder Residual y Biodisponibilidad - Lado a lado */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Poder Residual */}
                <motion.div variants={cardVariants}>
                  <div className="bg-white rounded-2xl p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div className="relative h-80 cursor-pointer" onClick={() => setLightboxImage("/images/products/bordocald-poder-residual.jpeg")}>
                      <Image
                        src="/images/products/bordocald-poder-residual.jpeg"
                        alt="BORDOCALD - Poder Residual"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Biodisponibilidad */}
                <motion.div variants={cardVariants}>
                  <div className="bg-white rounded-2xl p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div className="relative h-80 cursor-pointer" onClick={() => setLightboxImage("/images/products/bordocald-biodisponibilidad.jpeg")}>
                      <Image
                        src="/images/products/bordocald-biodisponibilidad.jpeg"
                        alt="BORDOCALD - Biodisponibilidad"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ) : product.name === "TRIKOPPER 50" ? (
            <div className="space-y-8">
              {/* Imagen principal - Grande y centrada */}
              <motion.div variants={cardVariants}>
                <div className="bg-white rounded-2xl p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 max-w-4xl mx-auto">
                  <div className="relative h-96 cursor-pointer" onClick={() => setLightboxImage("/images/products/maximo-control.jpeg")}>
                    <Image
                      src="/images/products/maximo-control.jpeg"
                      alt="TRIKOPPER 50 - Máximo Control"
                      fill
                      className="object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Gráficos secundarios - Lado a lado */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Gráfico 1 */}
                <motion.div variants={cardVariants}>
                  <div className="bg-white rounded-2xl p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div className="relative h-80 cursor-pointer" onClick={() => setLightboxImage("/images/products/trikopper-poder-residual.jpeg")}>
                      <Image
                        src="/images/products/trikopper-poder-residual.jpeg"
                        alt="TRIKOPPER 50 - Poder Residual"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Gráfico 2 */}
                <motion.div variants={cardVariants}>
                  <div className="bg-white rounded-2xl p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div className="relative h-80 cursor-pointer" onClick={() => setLightboxImage("/images/products/trikopper-biodisponibilidad.jpeg")}>
                      <Image
                        src="/images/products/trikopper-biodisponibilidad.jpeg"
                        alt="TRIKOPPER 50 - Biodisponibilidad"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={cardVariants}>
                <div
                  className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 h-full shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group border border-white/20"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)'
                  }}
                >
                  {/* Gradiente de color del producto */}
                  <div
                    className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${product.cssColor}20, transparent 70%)` }}
                  ></div>

                  {/* Efecto de brillo glassmorphism */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/30 via-transparent to-transparent"></div>

                  {/* Efecto de movimiento */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${product.cssColor}40, ${product.cssColor}20)`,
                          boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                        }}
                      >
                        <Shield className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                      <h3 className="text-2xl text-white font-bold tracking-tight drop-shadow-lg">Cobertura</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed font-medium">
                      {product.modoAccion.cobertura}
                    </p>

                    {/* Badge con efecto glass */}
                    <div className="inline-flex items-center mt-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                      <div className="w-2 h-2 rounded-full mr-2" style={{ background: `linear-gradient(45deg, ${product.cssColor}, ${product.cssColor}80)` }}></div>
                      <span className="text-sm font-medium text-white/80">Protección superficial</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={cardVariants}>
                <div
                  className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 h-full shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group border border-white/20"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)'
                  }}
                >
                  {/* Gradiente de color del producto */}
                  <div
                    className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${product.cssColor}20, transparent 70%)` }}
                  ></div>

                  {/* Efecto de brillo glassmorphism */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/30 via-transparent to-transparent"></div>

                  {/* Efecto de movimiento */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${product.cssColor}40, ${product.cssColor}20)`,
                          boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                        }}
                      >
                        <Target className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                      <h3 className="text-2xl text-white font-bold tracking-tight drop-shadow-lg">Penetración</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed font-medium">
                      {product.modoAccion.penetracion}
                    </p>

                    {/* Badge con efecto glass */}
                    <div className="inline-flex items-center mt-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                      <div className="w-2 h-2 rounded-full mr-2" style={{ background: `linear-gradient(45deg, ${product.cssColor}, ${product.cssColor}80)` }}></div>
                      <span className="text-sm font-medium text-white/80">Acción sistémica</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </motion.section>

      {product.name !== "BORDOCALD" && product.name !== "TRIKOPPER 50" && (
        <div
          className="w-full h-8"
          style={{
            background: product.cssColor,
            clipPath: "polygon(50% 100%, 0 0, 100% 0)"
          }}
        ></div>
      )}

      {product.name === "COBRESTABLE" && (
        <>
          {/* Imágenes para COBRESTABLE con efecto glass */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-4 pt-10"
            variants={containerVariants}
          >
            <motion.div variants={cardVariants}>
              <div className="relative w-[600px] h-[280px] cursor-pointer" onClick={() => setLightboxImage("/images/products/doble-barrera-2.jpeg")}>
                <Image
                  src="/images/products/doble-barrera-2.jpeg"
                  alt="Doble Barrera - Imagen 1"
                  fill
                  className="transition-transform duration-700 group-hover:scale-105 hover:scale-110"
                />
              </div>
            </motion.div>

            <motion.div variants={cardVariants}>
              <div className="relative w-[600px] h-[250px] cursor-pointer" onClick={() => setLightboxImage("/images/products/doble-barrera-1.jpeg")}>
                <Image
                  src="/images/products/doble-barrera-1.jpeg"
                  alt="Doble Barrera - Imagen 2"
                  fill
                  className="transition-transform duration-700 group-hover:scale-105 hover:scale-110"
                />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}

      {/* SECCIÓN ACTUALIZADA: Retención del Producto - Dos gráficos */}
      {hasRetentionCharts && (
        <>
          <motion.section
            className="pt-20 pb-4 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <div className="mx-auto px-4 sm:px-6 lg:px-36">
              <motion.div
                className="text-center mb-16"
                variants={sectionVariants}
              >
                <h2 className="text-4xl font-avenir-cyr-heavy mb-4" style={{ color: product.cssColor }}>
                  Retención Superior
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Rendimiento comprobado de {product.name} frente a otros productos del mercado
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Gráfico 1: Retención por tamaño de partícula */}
                {retentionCharts.particleSize && (
                  <motion.div
                    variants={cardVariants}
                  >
                    <div className=" bg-white rounded-2xl p-8 shadow-xl border-2" style={{ borderColor: `${product.cssColor}20` }}>
                      <div className="mb-8 text-center">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                            style={{ backgroundColor: product.cssColor }}
                          >
                            <BarChart3 className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800">Retención vs Tamaño de Partícula</h3>
                        </div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                          Porcentaje de retención del producto en función del tamaño de partícula
                        </p>
                      </div>

                      <div className="relative bg-gray-50 rounded-xl p-4 overflow-hidden cursor-pointer" onClick={() => setLightboxImage(retentionCharts.particleSize)}>
                        <Image
                          src={retentionCharts.particleSize}
                          alt={`Gráfico de retención por tamaño de partícula - ${product.name}`}
                          width={1200}
                          height={800}
                          className="w-full h-auto object-contain max-h-96 md:max-h-none hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Gráfico 2: Retención por intensidad de precipitación */}
                {retentionCharts.precipitation && (
                  <motion.div
                    variants={cardVariants}
                  >
                    <div className=" bg-white rounded-2xl p-8 shadow-xl border-2" style={{ borderColor: `${product.cssColor}20` }}>
                      <div className="mb-8 text-center">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                            style={{ backgroundColor: product.cssColor }}
                          >
                            <Droplets className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800">Retención vs Intensidad de Precipitación</h3>
                        </div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                          Porcentaje de retención del producto en función de la intensidad de la precipitación
                        </p>
                      </div>

                      <div className="relative bg-gray-50 rounded-xl p-4 overflow-hidden cursor-pointer" onClick={() => setLightboxImage(retentionCharts.precipitation)}>
                        <Image
                          src={retentionCharts.precipitation}
                          alt={`Gráfico de retención por intensidad de precipitación - ${product.name}`}
                          width={1200}
                          height={800}
                          className="w-full h-auto object-contain max-h-96 md:max-h-none hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.section>
        </>
      )}

      {/* Certificaciones para BORDOCALD, COBRESTABLE y TRIKOPPER 50 */}
      {(product.name === "COBRESTABLE" || product.name === "TRIKOPPER 50" || product.name === "BORDOCALD") && (
        <motion.section
          className="pt-20 bg-white relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Texto certificación */}
          <div className="mx-auto px-4 sm:px-6 lg:px-36 mb-4">
            <motion.div className="text-center" variants={sectionVariants}>
              <h2 className="text-gray-800 font-bold text-4xl mb-3 font-avenir-cyr-heavy" style={{ color: product.cssColor }}>
                {product.name === "BORDOCALD"
                  ? "CERTIFICADO PARA AGRICULTURA ORGÁNICA"
                  : "APROBADO POR SENASA PARA AGRICULTURA ORGÁNICA"
                }
              </h2>
            </motion.div>
          </div>

          {/* Logos de certificaciones */}
          <div className="w-full px-4">
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-x-6 gap-y-8">
              {/* Logo SENASA */}
              <motion.div variants={cardVariants} className="flex-shrink-0">
                <Image
                  src="/images/products/senasa-logo.png"
                  alt="SENASA"
                  width={160}
                  height={160}
                  className="object-contain hover:scale-110 transition-transform duration-300"
                />
              </motion.div>

              {/* Logo Orgánico Argentina */}
              <motion.div variants={cardVariants} className="flex-shrink-0">
                <Image
                  src="/images/products/organico-argentina-logo.png"
                  alt="Orgánico Argentina"
                  width={160}
                  height={160}
                  className="object-contain hover:scale-110 transition-transform duration-300"
                />
              </motion.div>

              {/* Logo OIA - Solo para BORDOCALD */}
              {product.name === "BORDOCALD" && (
                <motion.div variants={cardVariants} className="flex-shrink-0">
                  <Image
                    src="/images/products/oia-logo.png"
                    alt="OIA"
                    width={160}
                    height={160}
                    className="object-contain hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              )}

              {/* Logo JAS */}
              <motion.div variants={cardVariants} className="flex-shrink-0">
                <Image
                  src="/images/products/jas-logo.png"
                  alt="JAS"
                  width={160}
                  height={160}
                  className="object-contain hover:scale-110 transition-transform duration-300"
                />
              </motion.div>

              {/* Logo UE */}
              <motion.div variants={cardVariants} className="flex-shrink-0">
                <Image
                  src="/images/products/ue-logo.png"
                  alt="Unión Europea"
                  width={160}
                  height={160}
                  className="object-contain hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Sección de Documentos de Descarga */}
      <motion.section
        className="pt-16 pb-10 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-36">
          <motion.div
            className="text-center mb-12"
            variants={sectionVariants}
          >
            <h2 className="text-4xl font-avenir-cyr-heavy mb-4" style={{ color: product.cssColor }}>
              Documentación Técnica
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descarga toda la información técnica y de seguridad de {product.name}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {/* Hoja de Seguridad */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group cursor-pointer"
              onClick={() => handleOpenInNewTab(documents.safetySheet)}
            >
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${product.cssColor}15` }}
                >
                  <ShieldCheck className="w-8 h-8" style={{ color: product.cssColor }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Hoja de Seguridad</h3>
                <p className="text-gray-600 text-sm mb-4">Información completa de seguridad y manejo del producto</p>
                <div className="flex items-center justify-center text-sm font-medium group-hover:text-blue-600 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar PDF
                </div>
              </div>
            </motion.div>

            {/* Ficha Técnica */}
            <motion.div
              variants={cardVariants}
              className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 border border-gray-200 group ${
                product.name === "BORDOCALD" || product.name === "COBRESTABLE"
                  ? "hover:shadow-xl cursor-pointer"
                  : "opacity-60"
              }`}
              onClick={() => {
                if (product.name === "BORDOCALD" || product.name === "COBRESTABLE") {
                  handleOpenInNewTab(documents.technicalSheet);
                }
              }}
            >
              <div className="text-center">
                <div
                  className={`w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center transition-transform duration-300 ${
                    product.name === "BORDOCALD" || product.name === "COBRESTABLE"
                      ? "group-hover:scale-110"
                      : ""
                  }`}
                  style={{ backgroundColor: `${product.cssColor}15` }}
                >
                  <FileText className="w-8 h-8" style={{ color: product.cssColor }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Ficha Técnica</h3>
                <p className="text-gray-600 text-sm mb-4">Especificaciones técnicas y modo de aplicación</p>
                {product.name === "BORDOCALD" || product.name === "COBRESTABLE" ? (
                  <div className="flex items-center justify-center text-sm font-medium group-hover:text-blue-600 transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar PDF
                  </div>
                ) : (
                  <div className="flex items-center justify-center text-sm font-medium text-gray-500">
                    <FileText className="w-4 h-4 mr-2" />
                    Próximamente
                  </div>
                )}
              </div>
            </motion.div>

            {/* Marvete */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group cursor-pointer"
              onClick={() => handleOpenInNewTab(documents.marvete)}
            >
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${product.cssColor}15` }}
                >
                  <ImageIcon className="w-8 h-8" style={{ color: product.cssColor }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Marbete</h3>
                <p className="text-gray-600 text-sm mb-4">Etiqueta oficial del producto con información regulatoria</p>
                <div className="flex items-center justify-center text-sm font-medium group-hover:text-blue-600 transition-colors">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Descargar Marbete
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Cultivos Mejorados */}
      <motion.section
        className="py-20 bg-white relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-36">
          <motion.div
            className="text-center mb-16"
            variants={sectionVariants}
          >
            <h2 className="text-4xl font-avenir-cyr-heavy mb-4" style={{ color: product.cssColor }}>
              Cultivos Recomendados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre todos los cultivos donde puedes aplicar {product.name} para obtener los mejores resultados
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-20"
            variants={cropsGridVariants}
          >
            {product.cultivos.map((cultivo, index) => (
              <motion.div
                key={index}
                variants={cropItemVariants}
                className="group"
                style={{ width: '280px' }}
                onMouseEnter={() => setHoveredCropCard(index)}
                onMouseLeave={() => setHoveredCropCard(null)}
              >
                <Link
                  href={`/crops/${getCultivoSlug(cultivo)}`}
                  className="block cursor-default"
                >
                  <motion.div
                    className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-64"
                    whileHover={{
                      y: -8,
                      scale: 1.02
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Imagen de fondo */}
                    <div className="absolute inset-0">
                      <Image
                        src={getCultivoImage(cultivo)}
                        alt={cultivo}
                        fill
                        className="object-cover"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20"></div>
                    </div>

                    {/* Contenido en hover */}
                    <motion.div
                      className={`absolute inset-0 transition-opacity duration-300 ${hoveredCropCard === index ? 'opacity-100' : 'opacity-0'
                        }`}
                      initial={false}
                      animate={{
                        opacity: hoveredCropCard === index ? 1 : 0,
                      }}
                    >
                      <div className="absolute inset-0 bg-black/60" />
                      <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 text-center text-white">
                        <motion.div
                          className="text-center"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{
                            y: hoveredCropCard === index ? 0 : 20,
                            opacity: hoveredCropCard === index ? 1 : 0
                          }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <h3 className="text-2xl font-bold capitalize">{getCultivoDisplayName(cultivo).title}</h3>
                          {getCultivoDisplayName(cultivo).subtitle && (
                            <p className="text-base text-white/70 mt-2">{getCultivoDisplayName(cultivo).subtitle}</p>
                          )}
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Nombre del cultivo - Siempre visible abajo */}
                    <div className={`absolute bottom-4 left-4 right-4 z-10 transition-opacity duration-300 ${hoveredCropCard === index ? 'opacity-0' : 'opacity-100'
                      }`}>
                      <h3 className="text-lg font-bold text-white text-center capitalize">{getCultivoDisplayName(cultivo).title}</h3>
                      {getCultivoDisplayName(cultivo).subtitle && (
                        <p className="text-sm text-white/65 text-center mt-1">{getCultivoDisplayName(cultivo).subtitle}</p>
                      )}
                    </div>

                    {/* Borde decorativo en hover */}
                    <div className={`absolute inset-0 border-2 border-primary-400 transition-opacity duration-300 rounded-xl pointer-events-none ${hoveredCropCard === index ? 'opacity-100' : 'opacity-0'
                      }`} />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
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

      {/* CTA Final */}
      <section className="py-4 bg-[#164A37] text-white relative overflow-hidden">
        <div className="mx-auto px-4 sm:px-6 lg:px-36 relative z-10">
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

      {/* Lightbox Modal */}
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