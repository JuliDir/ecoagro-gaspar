"use client";

import { easeInOut, easeOut, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MessageSquare } from "lucide-react";
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

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: easeOut }
    }
};

const faqVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: easeOut }
    }
};

const floatingVariants = {
    animate: {
        y: [-10, 10, -10],
        rotate: [0, 5, -5, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: easeInOut
        }
    }
};

// Viewport optimizado para mejor detección
const optimizedViewport = { 
    once: true, 
    amount: 0.05, 
    margin: "0px 0px -100px 0px" 
}

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

// Iconos decorativos flotantes
const decorativeIcons = [
    { src: "/icons/bean.svg", alt: "Bean", className: "w-16 h-16 opacity-20", delay: 0 },
    { src: "/icons/corn.svg", alt: "Corn", className: "w-20 h-20 opacity-15", delay: 1 },
    { src: "/icons/garlic.svg", alt: "Garlic", className: "w-14 h-14 opacity-25", delay: 2 },
    { src: "/icons/leaf.svg", alt: "Leaf", className: "w-18 h-18 opacity-20", delay: 3 },
    { src: "/icons/lemon.svg", alt: "Lemon", className: "w-16 h-16 opacity-15", delay: 4 },
    { src: "/icons/olive.svg", alt: "Olive", className: "w-12 h-12 opacity-30", delay: 5 },
    { src: "/icons/orange.svg", alt: "Orange", className: "w-18 h-18 opacity-20", delay: 6 },
    { src: "/icons/peanut.svg", alt: "Peanut", className: "w-14 h-14 opacity-25", delay: 0.5 },
    { src: "/icons/potato.svg", alt: "Potato", className: "w-16 h-16 opacity-20", delay: 1.5 },
    { src: "/icons/soy.svg", alt: "Soy", className: "w-15 h-15 opacity-25", delay: 2.5 },
    { src: "/icons/tangerine.svg", alt: "Tangerine", className: "w-14 h-14 opacity-20", delay: 3.5 },
    { src: "/icons/wheat.svg", alt: "Wheat", className: "w-20 h-20 opacity-15", delay: 4.5 }
];

export default function FAQsSection() {
    return (
        <div className="min-h-screen bg-white pt-20 relative overflow-hidden">
            {/* Iconos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Iconos flotantes en diferentes posiciones */}
                <motion.div 
                    className="absolute top-20 left-10"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '0s' }}
                >
                    <Image src="/icons/bean.svg" alt="Bean" width={64} height={64} className="opacity-10" />
                </motion.div>
                
                <motion.div 
                    className="absolute top-32 right-20"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '1s' }}
                >
                    <Image src="/icons/corn.svg" alt="Corn" width={80} height={80} className="opacity-8" />
                </motion.div>

                <motion.div 
                    className="absolute top-60 left-1/4"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '2s' }}
                >
                    <Image src="/icons/leaf.svg" alt="Leaf" width={72} height={72} className="opacity-12" />
                </motion.div>

                <motion.div 
                    className="absolute top-80 right-1/3"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '3s' }}
                >
                    <Image src="/icons/lemon.svg" alt="Lemon" width={56} height={56} className="opacity-15" />
                </motion.div>

                <motion.div 
                    className="absolute bottom-80 left-20"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '4s' }}
                >
                    <Image src="/icons/olive.svg" alt="Olive" width={48} height={48} className="opacity-20" />
                </motion.div>

                <motion.div 
                    className="absolute bottom-60 right-16"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '5s' }}
                >
                    <Image src="/icons/orange.svg" alt="Orange" width={68} height={68} className="opacity-10" />
                </motion.div>

                <motion.div 
                    className="absolute bottom-40 left-1/3"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '6s' }}
                >
                    <Image src="/icons/potato.svg" alt="Potato" width={60} height={60} className="opacity-12" />
                </motion.div>

                <motion.div 
                    className="absolute top-1/2 left-8"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '0.5s' }}
                >
                    <Image src="/icons/soy.svg" alt="Soy" width={52} height={52} className="opacity-18" />
                </motion.div>

                <motion.div 
                    className="absolute top-1/3 right-8"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '1.5s' }}
                >
                    <Image src="/icons/wheat.svg" alt="Wheat" width={76} height={76} className="opacity-8" />
                </motion.div>

                <motion.div 
                    className="absolute bottom-1/3 right-1/4"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '2.5s' }}
                >
                    <Image src="/icons/garlic.svg" alt="Garlic" width={44} height={44} className="opacity-25" />
                </motion.div>

                <motion.div 
                    className="absolute top-1/4 left-1/2"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '3.5s' }}
                >
                    <Image src="/icons/peanut.svg" alt="Peanut" width={50} height={50} className="opacity-15" />
                </motion.div>

                <motion.div 
                    className="absolute bottom-1/4 left-1/2"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '4.5s' }}
                >
                    <Image src="/icons/tangerine.svg" alt="Tangerine" width={54} height={54} className="opacity-20" />
                </motion.div>
            </div>

            {/* FAQs Section */}
            <motion.section
                className="py-20 relative z-10"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                
                    <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                    >
                        <Accordion type="single" collapsible className="space-y-6">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    variants={faqVariants}
                                    className="cursor-pointer"
                                >
                                    <AccordionItem
                                        value={`faq-${index}`}
                                        className="cursor-pointer bg-gradient-to-r from-green-50 via-green-100 to-green-50 border border-green-200 rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:from-green-100 hover:via-green-150 hover:to-green-100 hover:scale-[1.02]"
                                    >
                                        <AccordionTrigger className="text-left hover:no-underline text-xl cursor-pointer [&>svg]:stroke-white [&>svg]:fill-white [&>svg]:bg-green-500 [&>svg]:rounded-full [&>svg]:p-1 [&>svg]:w-6 [&>svg]:h-6">
                                            <span className="font-bold text-gray-900 pr-6 leading-relaxed text-2xl">
                                                {faq.question}
                                            </span>
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-800 leading-relaxed pt-4 text-xl bg-white/60 rounded-lg p-4 mt-3 backdrop-blur-sm border border-green-100">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>

                {/* Waves separator - bottom */}
                <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                    <svg className="w-full h-24 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none">
                        <path
                            d="M0,60 Q150,45 300,50 T600,65 Q750,70 900,55 T1200,60 L1200,120 L0,120 Z"
                            fill="#7cb342"
                            className="opacity-90"
                        />
                        <path
                            d="M0,75 Q100,60 200,65 Q350,70 500,75 Q650,80 800,70 Q950,60 1200,75 L1200,120 L0,120 Z"
                            fill="#4a7c59"
                            className="opacity-80"
                        />
                        <path
                            d="M0,90 Q75,80 150,85 Q300,90 450,95 Q600,100 750,90 Q900,80 1200,90 L1200,120 L0,120 Z"
                            fill="#164A37"
                        />
                    </svg>
                </div>
            </motion.section>

            {/* CTA de contacto - Mejorado */}
            <section className="py-10 bg-[#164A37] text-white relative overflow-hidden">
                {/* Iconos decorativos en el CTA */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
                    <motion.div 
                        className="absolute top-10 left-10"
                        variants={floatingVariants}
                        animate="animate"
                    >
                        <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={40} height={40} />
                    </motion.div>
                    <motion.div 
                        className="absolute top-16 right-20"
                        variants={floatingVariants}
                        animate="animate"
                        style={{ animationDelay: '2s' }}
                    >
                        <Image src="/icons/vid.svg" alt="Vid" width={50} height={50} />
                    </motion.div>
                    <motion.div 
                        className="absolute bottom-10 left-20"
                        variants={floatingVariants}
                        animate="animate"
                        style={{ animationDelay: '1s' }}
                    >
                        <Image src="/icons/leaf.svg" alt="Leaf" width={45} height={45} />
                    </motion.div>
                    <motion.div 
                        className="absolute bottom-16 right-16"
                        variants={floatingVariants}
                        animate="animate"
                        style={{ animationDelay: '3s' }}
                    >
                        <Image src="/icons/olive.svg" alt="Olive" width={35} height={35} />
                    </motion.div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-3xl mx-auto text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={optimizedViewport}
                        variants={containerVariants}
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            ¿No encontraste lo que buscabas?
                        </h2>
                        
                        <p className="text-white/90 mb-8 text-lg">
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

                        <div>
                            <Link
                                href="/#contacto"
                                className="inline-block bg-white/20 border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
                            >
                                Contactar Especialista
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            
        </div>
    );
}