"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Handshake, Users, Award } from "lucide-react";
import Stats from "../testimonials/Stats";
import TeamMembers from "./TeamMembers";

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

export default function AboutUs() {
  return (
    <div>
      {/* Introducción Institucional - Texto izquierda, imagen derecha */}
      <motion.section
        className="py-20 bg-white"
        id="nosotros"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenido textual */}
            <motion.div variants={sectionVariants}>
              <h2 className="text-4xl md:text-5xl font-avenir-cyr-heavy text-primary leading-tight mb-6">
                Nosotros
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                En Ecoagro Gaspar, nos dedicamos a desarrollar productos derivados del cobre
                que representan la perfecta combinación entre eficacia y respeto por el medio ambiente.
                Nuestro compromiso es brindar soluciones que impulsen la productividad de los cultivos
                mientras preservamos el ecosistema.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Con más de seis décadas de experiencia, hemos perfeccionado nuestras fórmulas
                para ofrecer productos que no solo protegen los cultivos, sino que también
                contribuyen a una agricultura más sustentable y rentable.
              </p>
            </motion.div>

            {/* Imagen institucional */}
            <motion.div
              className="relative"
              variants={sectionVariants}
            >
              <div className="relative h-96 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about-us/institucional.jpg"
                  alt="Instalaciones de Ecoagro Gaspar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay sutil para mejorar legibilidad si se necesita */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Misión - Imagen izquierda, texto derecha */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05, margin: "0px 0px -30px 0px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagen */}
            <motion.div
              className="relative order-2 md:order-1"
              variants={sectionVariants}
            >
              <div className="relative h-96 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl overflow-hidden shadow-lg">
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

            {/* Contenido textual */}
            <motion.div
              className="order-1 md:order-2"
              variants={sectionVariants}
            >
              <h2 className="text-4xl md:text-5xl font-avenir-cyr-heavy text-primary leading-tight mb-6">
                Misión
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ofrecer <strong>soluciones fitosanitarias y nutricionales innovadoras</strong>.
                Que impulsen la productividad de los cultivos, minimizando el impacto ambiental
                y promoviendo una agricultura sustentable.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Visión - Texto izquierda, imagen derecha */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenido textual */}
            <motion.div variants={sectionVariants}>
              <h2 className="text-4xl md:text-5xl font-avenir-cyr-heavy text-primary leading-tight mb-6">
                Visión
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ser <strong>referentes clave en soluciones fitosanitarias y nutricionales</strong> que impulsen el máximo
                potencial productivo de los cultivos integrando estrategias de prevención y manejo de
                enfermedades con la optimización avanzada de sus procesos fisiológicos.
              </p>
            </motion.div>

            {/* Imagen */}
            <motion.div
              className="relative"
              variants={sectionVariants}
            >
              <div className="relative h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl overflow-hidden shadow-lg">
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
          </div>
        </div>
      </motion.section>

      {/* Valores con imágenes */}
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
            <h2 className="text-4xl md:text-5xl font-avenir-cyr-heavy text-primary mb-4">Nuestros valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aplicación de ciencia e innovación con compromiso, transparencia y sustentabilidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Handshake,
                title: "Compromiso",
                description: "Dedicación total hacia el productor y el cuidado del medio ambiente",
                color: "bg-primary"
              },
              {
                icon: Users,
                title: "Transparencia",
                description: "Honestidad y claridad en todas nuestras relaciones comerciales",
                color: "bg-primary"
              },
              {
                icon: Leaf,
                title: "Sustentabilidad",
                description: "Desarrollo de soluciones que respetan y preservan el ecosistema",
                color: "bg-primary"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 ${value.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">{value.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats con padding */}

      {/* Nuestro Equipo con QR */}
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
            <h2 className="text-4xl md:text-5xl font-avenir-cyr-heavy text-primary mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-600">
              Liderazgo comprometido con la excelencia y la sustentabilidad
            </p>
          </motion.div>

          <TeamMembers />
        </div>
      </motion.section>

      {/* Historia y Experiencia */}
      <motion.section
        className="pt-20 pb-26 bg-primary-800 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            variants={sectionVariants}
          >
            <h2 className="text-4xl font-avenir-cyr-heavy mb-6">Más de 60 años de experiencia</h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Décadas de dedicación al desarrollo de soluciones a base de cobre,
              con respaldo técnico y compromiso con la excelencia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                number: "60+",
                label: "Años de Experiencia",
                description: "Medio siglo perfeccionando nuestras soluciones"
              },
              {
                icon: Leaf,
                number: "100%",
                label: "Base de Cobre",
                description: "Productos naturales y efectivos"
              },
              {
                icon: Users,
                number: "500+",
                label: "Clientes Satisfechos",
                description: "Productores que confían en nosotros"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={cardVariants}
              >
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-10 h-10 text-primary-200" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-primary-200 mb-3">{stat.label}</div>
                <p className="text-white/80">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}