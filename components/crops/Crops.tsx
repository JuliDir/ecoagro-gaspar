"use client";

import { easeIn, easeOut, motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const crops = [
  {
    name: "Soja",
    description:
      "Leguminosa de gran importancia económica, rica en proteínas y aceites. Fija nitrógeno atmosférico y es fundamental en la rotación de cultivos.",
    iconFilename: "soy.svg",
    backgroundImage: "/images/crops/soja.jpg",
    slug: "soja"
  },
  {
    name: "Papa",
    description:
      "Tubérculo versátil y nutritivo, cuarto cultivo alimenticio más importante del mundo. Requiere suelos sueltos y buen drenaje.",
    iconFilename: "potato.svg",
    backgroundImage: "/images/crops/papas.jpg",
    slug: "papa"
  },
  {
    name: "Vid",
    description:
      "Cultivo fundamental para producción de uvas de mesa y vinificación. Requiere manejo sanitario específico para prevenir enfermedades fúngicas.",
    iconFilename: "vid.svg",
    backgroundImage: "/images/crops/vid.jpg",
    slug: "vid"
  },
  {
    name: "Garbanzo",
    description:
      "Leguminosa de grano seco con alta demanda nutricional. Sensible a excesos de humedad y requiere manejo preventivo de enfermedades foliares.",
    iconFilename: "bean.svg",
    backgroundImage: "/images/crops/garbanzo.jpg",
    slug: "garbanzo"
  },
  {
    name: "Limón",
    description:
      "Cítrico perenne de gran valor comercial, rico en vitamina C y aceites esenciales. Requiere climas cálidos y suelos bien drenados.",
    iconFilename: "lemon.svg",
    backgroundImage: "/images/crops/limon.jpg",
    slug: "limon"
  },
  {
    name: "Ver otros",
    description:
      "Descubre nuestra amplia gama de cultivos especializados y soluciones nutricionales personalizadas para tu producción.",
    iconFilename: "leaf.svg",
    backgroundImage: "/images/crops/ver-otros.jpeg",
    slug: "todos-los-cultivos"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

// Header animation variants - igual que en products
const headerVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeIn
    }
  }
};

export default function Crops() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const handleCardMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <motion.section 
      className="w-full py-20 bg-white mb-10" 
      id="cultivos"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-primary mb-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            CULTIVOS
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
              }
            }}
          >
            Atendemos las necesidades de tus cultivos y te ofrecemos un plan nutricional
            completo para optimizar la producción.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {crops.map((crop, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100 h-64 cursor-pointer ${
                activeCard === index ? 'scale-105 shadow-2xl' : ''
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${crop.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              onClick={() => handleCardClick(index)}
              onMouseLeave={handleCardMouseLeave}
            >
              {/* Default state - Icon only */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                activeCard === index ? 'opacity-0' : 'group-hover:opacity-0'
              }`}>
                <Image
                  src={`/icons/${crop.iconFilename}`}
                  alt={`${crop.name} icon`}
                  width={80}
                  height={80}
                  className="brightness-0 invert"
                />
              </div>

              {/* Hover/Click Overlay with Content */}
              <div className={`absolute inset-0 transition-opacity duration-300 ${
                activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}>
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center text-white">
                  <h4 className="text-2xl font-bold mb-3">{crop.name}</h4>
                  <p className="text-sm leading-relaxed mb-4">{crop.description}</p>
                  {crop.name === "Ver otros" ? (
                    <Link
                      href="/crops"
                      className="relative z-20 inline-block bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      Ver Todos
                    </Link>
                  ) : (
                    <Link
                      href={`/crops/${crop.slug}`}
                      className="relative z-20 inline-block bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      Conocer Más
                    </Link>
                  )}
                </div>
              </div>

              {/* Decorative border */}
              <div className={`absolute inset-0 border-2 border-dark-gray transition-opacity duration-300 rounded-xl pointer-events-none ${
                activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}