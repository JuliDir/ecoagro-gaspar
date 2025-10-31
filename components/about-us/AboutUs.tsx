"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import TeamMembers from "./TeamMembers";

// Variantes optimizadas con menor delay y duraciones más cortas
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Reducido de 0.2 a 0.1
      delayChildren: 0.05   // Reducido de 0.1 a 0.05
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 }, // Reducido de y: 30 a y: 20
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut } // Reducido de 0.6 a 0.4
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 }, // Reducido de scale: 0.9 a 0.95
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: easeOut } // Reducido de 0.5 a 0.3
  }
};

// Variantes específicas para imágenes con less intensive animations
const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: easeOut }
  }
};

// Viewport optimizado para mejor performance
const optimizedViewport = {
  once: true,
  amount: 0.1, // Reducido de 0.2 a 0.1 para activación más temprana
  margin: "0px 0px -50px 0px" // Margen para activar antes
};

export default function AboutUs() {
  return (
    <div>
      {/* Introducción Institucional - Texto izquierda, imagen derecha */}
      <motion.section
        className="py-20 bg-white"
        id="nosotros"
        initial="hidden"
        whileInView="visible"
        viewport={optimizedViewport}
        variants={containerVariants}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-36">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenido textual */}
            <motion.div variants={sectionVariants}>
              <h2 className="text-4xl md:text-5xl font-avenir-cyr-heavy text-primary leading-tight mb-6">
                Nosotros
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                En Ecoagro Gaspar, nos dedicamos a desarrollar productos derivados del cobre
                que representan la perfecta combinación entre eficacia y respeto por el medio ambiente.
                Nuestro compromiso es brindar soluciones que impulsen la productividad de los cultivos
                mientras preservamos el ecosistema.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Fundada por el Ing. Luis Gaspar, con más de seis décadas de experiencia, hemos perfeccionado nuestras fórmulas
                para ofrecer productos que no solo protegen los cultivos, sino que también
                contribuyen a una agricultura más sustentable y rentable.
              </p>
            </motion.div>

            {/* Imagen institucional */}
            <motion.div
              className="relative"
              variants={imageVariants}
            >
              <div className="relative h-112 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about-us/institucional.jpg"
                  alt="Instalaciones de Ecoagro Gaspar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay sutil para mejorar legibilidad si se necesita */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {/* Label del fundador */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-white font-semibold text-sm">Ing. Luis Gaspar</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Misión y Visión - Grid 2x2: Imagen arriba, texto abajo */}
      <motion.section
        className="pb-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={optimizedViewport}
        variants={containerVariants}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-36">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Misión */}
            <motion.div variants={cardVariants}>
              {/* Imagen arriba */}
              <motion.div
                className="relative mb-8"
                variants={imageVariants}
              >
                <div className="relative h-112 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/about-us/mision.jpg"
                    alt="Productos sostenibles y agricultura responsable"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
                </div>
              </motion.div>

              {/* Texto abajo */}
              <motion.div variants={sectionVariants}>
                <h2 className="text-4xl md:text-5xl font-avenir-cyr-heavy text-primary leading-tight mb-6">
                  Misión
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Brindamos soluciones fitosanitarias y nutricionales de alta tecnología, diseñadas para el manejo sustentable de enfermedades foliares. Nuestro objetivo es optimizar el rendimiento de los cultivos, reduciendo al mismo tiempo el impacto ambiental y contribuyendo a una agricultura más responsable.
                </p>
              </motion.div>
            </motion.div>

            {/* Visión */}
            <motion.div variants={cardVariants}>
              {/* Imagen arriba */}
              <motion.div
                className="relative mb-8"
                variants={imageVariants}
              >
                <div className="relative h-112 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/about-us/vision.jpg"
                    alt="Futuro de la agricultura y tecnología innovadora"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                </div>
              </motion.div>

              {/* Texto abajo */}
              <motion.div variants={sectionVariants}>
                <h2 className="text-4xl md:text-5xl font-avenir-cyr-heavy text-primary leading-tight mb-6">
                  Visión
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Aspiramos a ser referentes en el desarrollo de soluciones fitosanitarias y nutricionales sustentables, capaces de potenciar el control de enfermedades foliares y disminuir la aparición de resistencias, promoviendo una agricultura más eficiente, segura y con visión de largo plazo.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Separador con imagen de fondo */}
      <div className="relative w-full h-64 md:h-142 overflow-hidden">
        <Image
          src="/images/bg-ciencia-sustentable.png"
          alt="Ciencia y Sustentabilidad"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Nuestro Equipo con QR - Sin animaciones complejas para mejor performance */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={optimizedViewport}
        variants={containerVariants}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-36">
          <motion.div
            className="text-center mb-16"
            variants={sectionVariants}
          >
            <h2 className="text-4xl md:text-5xl font-avenir-cyr-heavy text-primary mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-600">
              Liderazgo comprometido con la excelencia y la sustentabilidad
            </p>
          </motion.div>

          <TeamMembers />
        </div>
      </motion.section>
    </div>
  );
}
