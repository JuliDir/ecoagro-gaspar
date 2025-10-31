"use client";

import { easeOut, motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

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

const statVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  }
};

const stats = [
  {
    number: 60,
    suffix: "+",
    label: "Años de Experiencia",
    description: "Medio siglo perfeccionando nuestras soluciones"
  },
  {
    number: 100,
    suffix: "%",
    label: "Base de Cobre",
    description: "Productos naturales y efectivos"
  },
  {
    number: 500,
    suffix: "+",
    label: "Clientes Satisfechos",
    description: "Productores que confían en nosotros"
  }
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <motion.div ref={ref} className="text-5xl md:text-6xl font-bold text-white mb-4">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <motion.section
      className="relative py-32 md:py-40 text-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Imagen de fondo sin blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stats/bg-stats.png"
          alt="Background estadísticas"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay oscuro opcional para mejorar legibilidad */}
      <div className="absolute inset-0 z-0 bg-black/30" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-36">
        <motion.div
          className="text-center mb-16"
          variants={statVariants}
        >
          <p className="text-2xl md:text-3xl max-w-3xl mx-auto">
            Décadas de dedicación al desarrollo de soluciones a base de cobre,
            con respaldo técnico y compromiso con la excelencia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={statVariants}
            >
              <AnimatedCounter value={stat.number} suffix={stat.suffix} />
              <div className="text-3xl md:text-4xl font-semibold mb-4">{stat.label}</div>
              <p className="text-white/90 text-xl md:text-2xl">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
