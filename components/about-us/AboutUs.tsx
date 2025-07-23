"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Target, Eye, Handshake, Users, Award } from "lucide-react";
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 md:py-32 overflow-hidden"
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
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={sectionVariants}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={sectionVariants}
            >
              <span className="text-white">Sobre</span>{" "}
              <span className="text-primary-200">nosotros</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              variants={sectionVariants}
            >
              Más de 50 años desarrollando soluciones fitosanitarias y nutricionales
              para el manejo sustentable de enfermedades foliares en cultivos.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Misión y Visión */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Misión */}
            <motion.div
              className="relative"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 h-full border border-primary-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-800">Misión</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Brindar <strong>soluciones fitosanitarias y nutricionales de alta tecnología</strong>,
                  diseñadas para el manejo sustentable de enfermedades foliares. Nuestro objetivo es
                  optimizar el rendimiento de los cultivos, reduciendo al
                  mismo tiempo el impacto ambiental y contribuyendo a
                  una agricultura más responsable.
                </p>
              </div>
            </motion.div>

            {/* Visión */}
            <motion.div
              className="relative"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 h-full border border-emerald-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mr-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-emerald-800">Visión</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Aspiramos a ser <strong>referentes en el desarrollo de soluciones fitosanitarias y nutricionales sustentables</strong>,
                  capaces de potenciar el control de enfermedades
                  foliares y disminuir la aparición de resistencias,
                  promoviendo una agricultura más eficiente, segura y
                  con visión de largo plazo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Valores */}
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
            <h2 className="text-4xl font-bold text-primary-800 mb-4">Nuestros Valores</h2>
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
                color: "bg-orange-500"
              },
              {
                icon: Users,
                title: "Transparencia",
                description: "Honestidad y claridad en todas nuestras relaciones comerciales",
                color: "bg-blue-500"
              },
              {
                icon: Leaf,
                title: "Sustentabilidad",
                description: "Desarrollo de soluciones que respetan y preservan el ecosistema",
                color: "bg-green-500"
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

      {/* Historia y Experiencia */}
      <motion.section
        className="py-20 bg-primary-800 text-white"
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
            <h2 className="text-4xl font-bold mb-6">Más de 50 Años de Experiencia</h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Décadas de dedicación al desarrollo de soluciones a base de cobre,
              con respaldo técnico y compromiso con la excelencia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                number: "50+",
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

      {/* Nuestro Equipo */}
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
            <h2 className="text-4xl font-bold text-primary-800 mb-4">Nuestro Equipo</h2>
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