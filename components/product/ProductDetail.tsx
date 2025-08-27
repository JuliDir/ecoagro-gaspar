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
  Droplets
} from "lucide-react";
import TriangleTripleAction from "./TriangleTripleAction";

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
      "papa": "/crops/papa/papa.jpg",
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

      {/* Certificaciones para BORDOCALD - Fuera del Hero Section */}
      {product.name === "BORDOCALD" && (
        <motion.section
          className="pt-10 bg-white relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="mx-auto px-4 sm:px-6 lg:px-36">
            <motion.div
              className="max-w-5xl mx-auto bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
              variants={cardVariants}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Texto certificación */}
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <span className="text-gray-800 font-bold text-lg">CERTIFICADO PARA AGRICULTURA ORGÁNICA</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Aprobado por entidades certificadoras internacionales
                  </p>
                </div>

                {/* Logos de certificaciones */}
                <div className="flex items-center gap-6">
                  {/* Logo SENASA */}
                  <div className="group cursor-pointer" onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/certificates/bordocald-senasa-certificate.pdf';
                    link.download = 'BORDOCALD-Certificado-SENASA.pdf';
                    link.click();
                  }}>
                    <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-200 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <Image
                        src="/images/products/senasa-logo.png"
                        alt="SENASA"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-center text-gray-700 text-xs mt-2 font-medium">SENASA</p>
                  </div>

                  {/* Logo OIA */}
                  <div className="group cursor-pointer" onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/certificates/bordocald-oia-certificate.pdf';
                    link.download = 'BORDOCALD-Certificado-OIA.pdf';
                    link.click();
                  }}>
                    <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-200 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <Image
                        src="/images/products/oia_logo.png"
                        alt="OIA"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-center text-gray-700 text-xs mt-2 font-medium">OIA</p>
                  </div>

                  {/* Logo ECOCERT */}
                  <div className="group cursor-pointer" onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/certificates/bordocald-ecocert-certificate.pdf';
                    link.download = 'BORDOCALD-Certificado-ECOCERT.pdf';
                    link.click();
                  }}>
                    <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-200 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <Image
                        src="/images/products/ecocert-logo.png"
                        alt="ECOCERT"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-center text-gray-700 text-xs mt-2 font-medium">ECOCERT</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      <TriangleTripleAction
        items={product.triplePilar.map((pilar) => ({
          title: pilar.title,
          description: pilar.description,
          details: pilar.details,
          image: pilar.image,
        }))}
        color={product.cssColor}
        heading="Tres Pilares de Protección"
        subheading="Tecnología avanzada que combina tres mecanismos de acción para máxima efectividad"
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
              className="relative rounded-3xl overflow-hidden shadow-2xl h-96 max-w-6xl mx-auto"
              variants={cardVariants}
            >
              {/* Imagen de fondo */}
              <Image
                src="/crops/citricos/citricos.jpg"
                alt="Cítricos - Especialidad TRIKOPPER-50"
                fill
                className="object-cover"
              />
              
              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30"></div>
              
              {/* Contenido */}
              <div className="absolute inset-0 flex items-center justify-start p-12">
                <div className="max-w-2xl">
                  <h3 className="text-4xl font-bold text-white mb-4">
                    🍊 ESPECIALISTA EN CÍTRICOS
                  </h3>
                  <p className="text-xl text-white/90 mb-6">
                    Formulado especialmente para naranjas, limones, mandarinas y pomelos
                  </p>
                  
                  {/* Badge */}
                  <div className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-full font-bold">
                    <Award className="w-5 h-5 mr-2" />
                    MÁXIMA PROTECCIÓN
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Modo de Acción / Triple Acción */}
      <div className="w-full h-8 relative" style={{ background: product.cssColor }}>
        <div
          className="absolute inset-0"
          style={{
            background: "white",
            clipPath: "polygon(50% 100%, 0 0, 100% 0)"
          }}
        ></div>
      </div>
      <motion.section
        className="pb-20 pt-10"
        initial="hidden"
        whileInView="visible"
        style={{ background: product.cssColor }}
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-36">
          <motion.div
            className="text-center mb-16"
            variants={sectionVariants}
          >
            <h2 className="text-4xl font-avenir-cyr-heavy mb-4 text-white">
              {product.name === "COBRESTABLE" ? "Triple Acción" : "Como Funciona"}
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              {product.name === "COBRESTABLE"
                ? "Acción sistémica con + doble barrera de protección"
                : "Mecanismo de protección integral para tus cultivos"}
            </p>
          </motion.div>

          {product.name === "COBRESTABLE" ? (
            <>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                      <p className="text-white/90 leading-relaxed font-medium backdrop-blur-sm">
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

              {/* Imágenes para COBRESTABLE con efecto glass */}
              <motion.div
                className="grid md:grid-cols-2 gap-8 mt-16"
                variants={containerVariants}
              >
                <motion.div variants={cardVariants}>
                  <div
                    className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 group border border-white/20"
                    style={{
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)'
                    }}
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      {/* Overlay glass */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-sm"></div>

                      <Image
                        src="/images/products/doble-barrera-1.jpeg"
                        alt="Doble Barrera - Imagen 1"
                        width={600}
                        height={400}
                        className="w-full h-64 transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Info overlay con glassmorphism */}
                      <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div
                          className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
                          style={{
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)'
                          }}
                        >
                          <h4 className="font-bold text-white text-sm drop-shadow-lg">Proceso de aplicación</h4>
                          <p className="text-white/80 text-xs mt-1">Visualización del modo de acción</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={cardVariants}>
                  <div
                    className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 group border border-white/20"
                    style={{
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)'
                    }}
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      {/* Overlay glass */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-sm"></div>

                      <Image
                        src="/images/products/doble-barrera-2.jpeg"
                        alt="Doble Barrera - Imagen 2"
                        width={600}
                        height={400}
                        className="w-full h-64 transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Info overlay con glassmorphism */}
                      <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div
                          className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
                          style={{
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)'
                          }}
                        >
                          <h4 className="font-bold text-white text-sm drop-shadow-lg">Resultado final</h4>
                          <p className="text-white/80 text-xs mt-1">Protección completa de la planta</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
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

      <div
        className="w-full h-8"
        style={{
          background: product.cssColor,
          clipPath: "polygon(50% 100%, 0 0, 100% 0)"
        }}
      ></div>

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
                    <div className="bg-white rounded-2xl p-8 shadow-xl border-2" style={{ borderColor: `${product.cssColor}20` }}>
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

                      <div className="relative bg-gray-50 rounded-xl p-4 overflow-hidden">
                        <Image
                          src={retentionCharts.particleSize}
                          alt={`Gráfico de retención por tamaño de partícula - ${product.name}`}
                          width={1200}
                          height={800}
                          className="w-full h-auto object-contain max-h-96 md:max-h-none"
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
                    <div className="bg-white rounded-2xl p-8 shadow-xl border-2" style={{ borderColor: `${product.cssColor}20` }}>
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

                      <div className="relative bg-gray-50 rounded-xl p-4 overflow-hidden">
                        <Image
                          src={retentionCharts.precipitation}
                          alt={`Gráfico de retención por intensidad de precipitación - ${product.name}`}
                          width={1200}
                          height={800}
                          className="w-full h-auto object-contain max-h-96 md:max-h-none"
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
              Cultivos recomendados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre todos los cultivos donde puedes aplicar {product.name} para obtener los mejores resultados
            </p>
          </motion.div>

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
                  scale: 1.03,
                  y: -3,
                  transition: { duration: 0.12 }
                }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href={`/crops/${getCultivoSlug(cultivo)}`}
                  className="block"
                >
                  <div className="relative">
                    <div className="w-24 h-24 md:w-34 md:h-34 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-200 border-4 border-white overflow-hidden relative">
                      <Image
                        src={getCultivoImage(cultivo)}
                        alt={cultivo}
                        fill
                        className="object-cover"
                      />

                      <div className="absolute inset-0 bg-black/30"></div>

                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-150 flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                      </div>
                    </div>

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


    </div>
  );
}