"use client";

import React, { useState } from 'react';
import { easeOut, motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail, User, MessageSquare } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.section 
      className="w-full py-20"
      style={{ backgroundColor: '#28292d' }}
      id="contacto"
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        amount: 0.2,
        margin: "-100px" 
      }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 text-primary-500"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: easeOut }
              }
            }}
          >
            CONTACTO
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, delay: 0.2, ease: easeOut }
              }
            }}
          >
            Estamos aquí para ayudarte. Contáctanos para cualquier consulta sobre 
            nuestros servicios y productos.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                {/* Horario */}
                <motion.div 
                  className="flex items-start gap-4"
                  variants={itemVariants}
                >
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#00663b' }}>
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Horario de Atención de Administración
                    </h4>
                    <p className="text-gray-300">
                      Lunes a Viernes de 8:30 a 14:00 hs
                    </p>
                  </div>
                </motion.div>

                {/* Teléfono */}
                <motion.div 
                  className="flex items-start gap-4"
                  variants={itemVariants}
                >
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#00663b' }}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Teléfono</h4>
                    <a 
                      href="tel:+542613990081" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      +54 9 261 399 0081
                    </a>
                  </div>
                </motion.div>

                {/* Dirección */}
                <motion.div 
                  className="flex items-start gap-4"
                  variants={itemVariants}
                >
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#00663b' }}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Dirección</h4>
                    <p className="text-gray-300">
                      Aristóbulo del Valle 465 - Of. 3<br />
                      Ciudad Capital, Mendoza, Argentina<br />
                      CP 5500
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Envíanos un Mensaje
            </h3>
            
            <div className="space-y-6">
              {/* Nombre */}
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Correo electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </motion.div>

              {/* Teléfono */}
              <motion.div variants={itemVariants}>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Teléfono (opcional)
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                    placeholder="Tu número de teléfono"
                  />
                </div>
              </motion.div>

              {/* Mensaje */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="button"
                onClick={() => {}}
                className="w-full py-4 px-6 rounded-lg font-semibold text-white bg-primary-600 hover:bg-primary-700 cursor-pointer"
                variants={itemVariants}
              >
                Enviar Mensaje
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}