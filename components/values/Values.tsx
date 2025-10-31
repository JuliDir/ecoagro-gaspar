"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";

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

const valueVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  }
};

const values = [
  {
    image: "/images/values/innovacion.png",
    title: "Innovación",
    description: "Búsqueda constante de soluciones innovadoras y efectivas."
  },
  {
    image: "/images/values/compromiso.png",
    title: "Compromiso",
    description: "Dedicación total hacia el productor y el cuidado del medio ambiente"
  },
  {
    image: "/images/values/transparencia.png",
    title: "Transparencia",
    description: "Honestidad y claridad en todas nuestras relaciones comerciales"
  }
];

export default function Values() {
  return (
    <motion.section
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-36">
        <motion.div
          className="text-center mb-16"
          variants={valueVariants}
        >
          <h2 className="text-4xl font-avenir-cyr-heavy text-primary mb-4">
            Aplicamos ciencia para lograr sustentabilidad con            
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              variants={valueVariants}
            >
              {/* Imagen grande del valor */}
              <div className="relative w-full h-84 mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Título con color primary y fuente cyr-heavy */}
              <h3 className="text-3xl font-avenir-cyr-heavy text-primary mb-4">
                {value.title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-700 text-xl leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
