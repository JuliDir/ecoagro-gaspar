"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageSquare, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
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

// Lista simple de 10 FAQs
const faqs = [
    {
        question: "¿Cuál es la diferencia entre Cobrestable, Bordocald y Trikopper 50?",
        answer: "Cobrestable es un fungicida preventivo y curativo con acción sistémica, ideal para aplicaciones preventivas. Bordocald combina cobre con caldos bordeleses para mayor adherencia y persistencia. Trikopper 50 ofrece una concentración más alta de cobre elemental para casos de alta presión de enfermedades."
    },
    {
        question: "¿Los productos de Ecoagro Gaspar son orgánicos?",
        answer: "Sí, todos nuestros productos están basados en cobre, un elemento naturalmente presente en el suelo y aprobado para agricultura orgánica. Cuentan con certificación SENASA y son compatibles con protocolos de producción sustentable."
    },
    {
        question: "¿Cuál es la dosis recomendada para cada cultivo?",
        answer: "Las dosis varían según el cultivo y la presión de enfermedad. Generalmente: Soja 200-300g/100L, Papa 250-400g/100L, Vid 300-500g/100L, Cítricos 200-400g/100L. Consulte siempre la etiqueta del producto y nuestro equipo técnico para recomendaciones específicas."
    },
    {
        question: "¿Cuál es el mejor momento para aplicar?",
        answer: "Aplique en horas de menor temperatura (temprano en la mañana o al atardecer), con humedad relativa alta (>60%) y viento mínimo (<10 km/h). Para aplicaciones preventivas, inicie antes de la aparición de síntomas."
    },
    {
        question: "¿En qué cultivos puedo usar productos de cobre?",
        answer: "Nuestros productos son efectivos en soja, papa, vid, cítricos, garbanzo, maní, trigo, tomate, frutales de pepita y carozo, hortalizas, olivo, palto y muchos otros cultivos. Cada producto tiene cultivos específicos autorizados en su registro."
    },
    {
        question: "¿Ofrecen asesoramiento técnico personalizado?",
        answer: "Sí, contamos con un equipo de ingenieros agrónomos especializados que brindan asesoramiento personalizado sin costo. Pueden visitarlo en campo o atenderlo telefónicamente según sus necesidades."
    },
    {
        question: "¿Cuánto tiempo duran los productos almacenados?",
        answer: "Nuestros productos tienen una vida útil de 3 años desde la fecha de fabricación si se almacenan en condiciones adecuadas: lugar seco, fresco, protegido de la luz solar directa y en su envase original cerrado."
    },
    {
        question: "¿Puedo mezclar los productos de cobre con otros fitosanitarios?",
        answer: "En general, nuestros productos son compatibles con la mayoría de fitosanitarios. Sin embargo, recomendamos realizar una prueba de compatibilidad previa y consultar la etiqueta. Evitar mezclas con productos altamente alcalinos o que contengan azufre."
    },
    {
        question: "¿Cuál es el intervalo de seguridad?",
        answer: "El intervalo de seguridad varía según el cultivo: Hortalizas 7 días, Frutales 14-21 días, Cereales 30 días. Consulte la etiqueta específica de cada producto para información detallada."
    },
    {
        question: "¿El cobre puede generar fitotoxicidad?",
        answer: "En condiciones normales de uso, nuestros productos no generan fitotoxicidad. Puede ocurrir con sobredosis, aplicaciones en condiciones de estrés hídrico extremo o en variedades muy sensibles. Siempre respete las dosis recomendadas."
    }
];

export default function FAQsSection() {
    // Mostrar todas las FAQs sin filtros

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <motion.section
                className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-28 md:py-32 overflow-hidden"
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
                            <span className="text-white">Preguntas</span>{" "}
                            <span className="text-primary-200">frecuentes</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                            variants={sectionVariants}
                        >
                            Encuentra respuestas rápidas a las consultas más comunes sobre nuestros 
                            productos, aplicaciones y servicios técnicos especializados.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>



            {/* FAQs */}
            <motion.section
                className="py-20"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
                        variants={cardVariants}
                    >
                        <div className="p-8">
                            <Accordion type="single" collapsible className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`faq-${index}`}
                                        className="border border-gray-200 rounded-lg px-6 py-2 hover:border-primary-300 transition-colors"
                                    >
                                        <AccordionTrigger className="text-left hover:no-underline">
                                            <span className="font-semibold text-gray-900 pr-4">
                                                {faq.question}
                                            </span>
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* CTA de contacto */}
            <motion.section
                className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-3xl mx-auto text-center"
                        variants={cardVariants}
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            ¿No encontraste lo que buscabas?
                        </h2>
                        <p className="text-white/90 mb-8">
                            Nuestro equipo técnico especializado está disponible para resolver 
                            todas tus consultas y brindarte asesoramiento personalizado.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="flex flex-col items-center space-y-3">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Llamada directa</h4>
                                    <p className="text-sm text-white/80">+54 9 261 399 0081</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-col items-center space-y-3">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                                    <p className="text-sm text-white/80">Respuesta inmediata</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-col items-center space-y-3">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Email</h4>
                                    <p className="text-sm text-white/80">contacto@ecoagrogaspar.com.ar</p>
                                </div>
                            </div>
                        </div>
                        
                        <Link
                            href="/#contacto"
                            className="inline-block bg-white/20 border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
                        >
                            Contactar Especialista
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}