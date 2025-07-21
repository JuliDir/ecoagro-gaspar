"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Target, Eye, Heart, Users, Award, Briefcase, Phone, Mail } from "lucide-react";

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
              <span className="text-white">&quot;Con</span>{" "}
              <span className="text-primary-200">ciencia</span>{" "}
              <span className="text-white">sustentable&quot;</span>
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
            >
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 h-full border border-primary-200">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-800">Misión</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Brindar <strong>soluciones fitosanitarias y nutricionales de alta tecnología</strong>, 
                  diseñadas para el manejo sustentable de enfermedades foliares. Nuestro objetivo 
                  es optimizar el rendimiento de los cultivos, reducir el impacto ambiental y 
                  contribuir a una agricultura más responsable.
                </p>
              </div>
            </motion.div>

            {/* Visión */}
            <motion.div 
              className="relative"
              variants={cardVariants}
            >
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 h-full border border-emerald-200">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mr-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-emerald-800">Visión</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ser <strong>referentes en soluciones fitosanitarias y nutricionales sustentables</strong>. 
                  Potenciar el control de enfermedades foliares, disminuir la resistencia, y promover 
                  una agricultura eficiente, segura y sostenible a largo plazo.
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
                icon: Heart,
                title: "Compromiso",
                description: "Dedicación total hacia el productor y el cuidado del medio ambiente",
                color: "bg-red-500"
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

      {/* Propósito y Frases Clave */}
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
            <h2 className="text-4xl font-bold text-primary-800 mb-6">Nuestro Propósito</h2>
            <p className="text-2xl text-primary-600 font-semibold mb-8">
              Impulsar una agricultura consciente, saludable y sostenible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              variants={sectionVariants}
            >
              <div className="bg-gradient-to-r from-primary-100 to-primary-50 rounded-2xl p-8 border-l-4 border-primary-600">
                <h3 className="text-xl font-bold text-primary-800 mb-4">
                  &quot;Más eficacia, menos resistencia, mayor sustentabilidad&quot;
                </h3>
                <p className="text-gray-700">
                  Nuestro enfoque moderno busca aumentar la efectividad, minimizar la resistencia 
                  y promover prácticas sostenibles a largo plazo.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-100 to-emerald-50 rounded-2xl p-8 border-l-4 border-emerald-600">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">
                  &quot;Estamos donde nace la vida: desde la semilla&quot;
                </h3>
                <p className="text-gray-700">
                  Nuestro compromiso con la agricultura comienza desde la raíz, acompañando 
                  cada etapa del ciclo productivo con innovación y propósito.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              variants={sectionVariants}
            >
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/crops/ver-otros.jpeg"
                  alt="Agricultura sustentable"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
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

      {/* Nuestro Equipo - Representante Legal */}
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

          <motion.div 
            className="max-w-4xl mx-auto"
            variants={cardVariants}
          >
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-12 shadow-xl border border-primary-100">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Foto de la representante */}
                <div className="md:col-span-1">
                  <div className="relative w-64 h-64 mx-auto">
                    <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-primary-200 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      {/* Placeholder para la foto */}
                      <div className="text-center">
                        <Users className="w-24 h-24 text-primary-600 mx-auto mb-2" />
                        <p className="text-primary-700 font-semibold text-sm">Foto próximamente</p>
                      </div>
                    </div>
                    {/* Decoración circular */}
                    <div className="absolute -top-4 right-4 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Información de la representante */}
                <div className="md:col-span-2 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-primary-800 mb-3">Cecilia Ocaranza</h3>
                  <p className="text-xl text-primary-600 font-semibold mb-6">Representante Legal</p>
                  
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg leading-relaxed">
                      Con más de dos décadas de experiencia en el sector agropecuario, 
                      Cecilia lidera nuestra empresa con una visión comprometida hacia 
                      la sustentabilidad y la innovación.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Su expertise en soluciones fitosanitarias y su dedicación al 
                      desarrollo de productos de alta calidad han sido fundamentales 
                      para posicionar a Ecoagro Gaspar como referente en el mercado.
                    </p>
                  </div>

                  {/* Contacto directo */}
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center justify-center md:justify-start space-x-3">
                      <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700">+54 9 261 6383387</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start space-x-3">
                      <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700">cocaranza@ecoagrogaspar.com.ar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}