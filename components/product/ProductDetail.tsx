"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Shield,
  Zap,
  Target,
  FlaskConical,
  Sprout,
  Award,
  Droplets,
  ArrowRight
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

const cropVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: easeOut }
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
      "garbanzo": "/images/crops/garbanzo.jpg",
      "poroto": "/images/crops/poroto.jpg",
      "maní": "/images/crops/mani.jpg",
      "mani": "/images/crops/mani.jpg",
      "soja": "/images/crops/soja.jpg",
      "papa": "/images/crops/papas.jpg",
      "vid": "/images/crops/vid.jpg",
      "trigo": "/images/crops/trigo.jpg",
      "tomate": "/images/crops/tomate.jpg",
      "olivo": "/images/crops/olivo.jpg",
      "palto": "/images/crops/palto.jpg",
      "kiwi": "/images/crops/kiwi.jpg",
      "maíz": "/images/crops/maiz.jpg",
      "maiz": "/images/crops/maiz.jpg",
      "ajo": "/images/crops/ajo.jpg",
      "naranja": "/images/crops/naranja.jpg",
      "limon": "/images/crops/limon.jpg",
      "mandarina": "/images/crops/mandarina.jpg",
      "pomelo": "/images/crops/pomelo.jpg",
      "oliva": "/images/crops/oliva.jpg"
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className={`relative bg-gradient-to-br ${product.gradient} text-white py-28 md:py-32 overflow-hidden w-full`}
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

        <div className="relative pt-20 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Triple Pilar de Acción - Diseño en Triángulo */}
      <motion.section
        className="py-20 bg-white relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8"
            variants={sectionVariants}
          >
            <h2 className="text-4xl font-avenir-cyr-heavy mb-4" style={{ color: product.cssColor }}>
              Triple pilar de acción
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnología avanzada que combina tres mecanismos de acción para máxima efectividad
            </p>
          </motion.div>

          {/* Contenedor del triángulo */}
          <div className="relative max-w-2xl mx-auto">
            {/* SVG para las líneas conectoras */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 800 600"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Líneas del triángulo */}
              <motion.line
                x1="400" y1="80"
                x2="200" y2="400"
                stroke={product.cssColor}
                strokeWidth="25"
                strokeDasharray="5,5"
                className="opacity-30"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              <motion.line
                x1="400" y1="80"
                x2="600" y2="400"
                stroke={product.cssColor}
                strokeWidth="25"
                strokeDasharray="5,5"
                className="opacity-30"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.7 }}
              />
              <motion.line
                x1="200" y1="400"
                x2="600" y2="400"
                stroke={product.cssColor}
                strokeWidth="25"
                strokeDasharray="5,5"
                className="opacity-30"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.9 }}
              />
            </svg>

            {/* Grid personalizado para posicionar elementos en triángulo */}
            <div className="relative z-10 h-[500px] w-[590px]">
              {product.triplePilar.map((pilar, index) => {
                const IconComponent = getPillarIcon(index, product.color);
                
                // Posiciones para formar triángulo
                const positions = [
                  // Elemento superior (centro-arriba)
                  { 
                    position: 'absolute top-10 right-[205]',
                    delay: 0.2
                  },
                  // Elemento inferior izquierdo
                  { 
                    position: 'absolute bottom-25 left-35',
                    delay: 0.4
                  },
                  // Elemento inferior derecho
                  { 
                    position: 'absolute bottom-25 right-14',
                    delay: 0.6
                  }
                ];

                return (
                  <motion.div
                    key={index}
                    className={`${positions[index].position} group`}
                    variants={cardVariants}
                    transition={{ delay: positions[index].delay }}
                    whileHover={{ scale: 1.05, y: -10 }}
                  >
                    {/* Círculo principal del pilar */}
                    <div className="relative">
                      {/* Círculo de fondo con efecto hover */}
                      <motion.div
                        className="w-24 h-24 rounded-full flex items-center justify-center cursor-pointer relative overflow-hidden"
                        style={{ backgroundColor: product.cssColor }}
                        whileHover={{ 
                          boxShadow: `0 20px 40px -10px ${product.cssColor}40`,
                        }}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                        <div className="absolute inset-0 rounded-full border-4 border-white/30" />
                        {/* Efecto de ondas en hover */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-4 border-white/30"
                          initial={{ scale: 1, opacity: 0.5 }}
                          whileHover={{ 
                            scale: 1.2, 
                            opacity: 0,
                            transition: { duration: 0.6, repeat: Infinity }
                          }}
                        />
                      </motion.div>

                      {/* Tooltip/Card de información en hover */}
                      <motion.div
                        className="absolute z-30 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 pointer-events-none group-hover:opacity-100 group-hover:scale-100 opacity-0 scale-90"
                        style={{
                          // Posicionamiento dinámico según el índice
                          ...(index === 0 ? 
                            { top: '100%', left: '50%', transform: 'translateX(-50%) translateY(20px)' } :
                            index === 1 ?
                            { bottom: '100%', right: '-50%', transform: 'translateY(-20px)' } :
                            { bottom: '100%', left: '-50%', transform: 'translateY(-20px)' }
                          )
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Flecha del tooltip */}
                        <div 
                          className="absolute w-3 h-3 rotate-45 bg-white border border-gray-200"
                          style={{ 
                            ...(index === 0 ? 
                              { top: '-6px', left: '50%', transform: 'translateX(-50%) rotate(45deg)', borderBottom: 'none', borderRight: 'none' } :
                              index === 1 ?
                              { bottom: '-6px', right: '60px', transform: 'rotate(45deg)', borderTop: 'none', borderLeft: 'none' } :
                              { bottom: '-6px', left: '60px', transform: 'rotate(45deg)', borderTop: 'none', borderLeft: 'none' }
                            )
                          }}
                        />
                        
                        <div className="relative">
                          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
                              style={{ backgroundColor: product.cssColor }}
                            >
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                            {pilar.title}
                          </h3>
                          <p className="text-gray-600 mb-3 leading-relaxed">
                            {pilar.description}
                          </p>
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {pilar.details}
                          </p>
                        </div>
                      </motion.div>

                      {/* Título visible siempre */}
                      <motion.div 
                        className="mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: positions[index].delay + 0.3 }}
                      >
                        <h3 className="text-lg w-[200px] font-semibold text-center text-gray-800 absolute left-[-45]">
                          {pilar.title}
                        </h3>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Modo de Acción */}
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
            <h2 className="text-4xl font-avenir-cyr-heavy mb-4" style={{ color: product.cssColor }}>Modo de acción</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mecanismo de protección integral para tus cultivos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={cardVariants}>
              <div className="bg-white rounded-2xl p-8 h-full border-l-4 shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ borderColor: product.cssColor }}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: product.cssColor }}>
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl text-gray-800 font-semibold">Cobertura</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{product.modoAccion.cobertura}</p>
              </div>
            </motion.div>

            <motion.div variants={cardVariants}>
              <div className="bg-white rounded-2xl p-8 h-full border-l-4 shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ borderColor: product.cssColor }}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: product.cssColor }}>
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl text-gray-800 font-semibold">Penetración</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{product.modoAccion.penetracion}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Cultivos Mejorados - Círculos visuales y clickeables */}
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
            <h2 className="text-4xl font-avenir-cyr-heavy mb-4" style={{ color: product.cssColor }}>
              Cultivos Recomendados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre todos los cultivos donde puedes aplicar {product.name} para obtener los mejores resultados
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
            {product.cultivos.map((cultivo, index) => (
              <motion.div
                key={index}
                variants={cropVariants}
                className="group cursor-pointer"
              >
                <Link
                  href={`/crops/${getCultivoSlug(cultivo)}`}
                  className="block"
                >
                  <div className="relative">
                    {/* Círculo con imagen de fondo */}
                    <motion.div 
                      className="w-24 h-24 md:w-34 md:h-34 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 border-4 border-white overflow-hidden relative"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${getCultivoImage(cultivo)})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -5
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Overlay con ícono en hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Anillo de color del producto */}
                      <div 
                        className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ borderColor: product.cssColor }}
                      ></div>
                    </motion.div>

                    {/* Nombre del cultivo */}
                    <div className="text-center mt-3">
                      <h4 className="font-semibold text-gray-800 capitalize text-sm md:text-base transition-colors duration-300">
                        {cultivo}
                      </h4>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Call to action para ver más cultivos */}
          <motion.div
            className="text-center mt-12"
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
      </motion.section>

      {/* CTA Final - Unificada con CropDetail y AllCrops */}
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
              Nuestro equipo técnico está disponible para asesorarte sobre el uso específico de {product.name} en tus cultivos.
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