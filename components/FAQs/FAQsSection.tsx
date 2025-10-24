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

// Lista de FAQs actualizadas
const faqs = [
    {
        question: "¿Cuál es la diferencia entre nuestros productos a base de cobre?",
        answer: "Cada uno de nuestros formulados está diseñado para un objetivo específico: fungicida, bactericida y en algunos con acción bioestimulante. Aunque todos comparten el mismo principio activo (cobre), la diferencia radica en la forma química y la tecnología de formulación, que determina la velocidad de liberación, la persistencia en el cultivo y la compatibilidad con otras aplicaciones."
    },
    {
        question: "¿Qué diferencia tienen nuestros cobres con respecto a otros productos del mercado?",
        answer: "A diferencia de los cobres tradicionales, nuestros productos presentan mayor biodisponibilidad, es decir, la planta aprovecha más eficientemente el micronutriente; y mayor bioactividad, lo que potencia la acción tanto preventiva como correctiva frente a hongos y bacterias. Esto se traduce en mejores resultados con menores dosis, menor riesgo de acumulación en el suelo y un impacto ambiental más bajo."
    },
    {
        question: "¿En qué cultivos se recomienda el uso de nuestros cobres?",
        answer: "Nuestros productos a base de cobre pueden aplicarse en una amplia variedad de cultivos: frutales, hortalizas, vid, cítricos, nogales, cereales, legumbres y cultivos industriales. Se adaptan tanto a esquemas de producción intensiva como a programas de manejo integrado de plagas y enfermedades en cultivos extensivos."
    },
    {
        question: "¿Cómo actúa el cobre en la planta y en los patógenos?",
        answer: "El cobre inhibe la respiración y el metabolismo de los microorganismos patógenos, bloqueando el desarrollo de hongos y bacterias. En la planta, cumple un rol esencial como micronutriente: participa en la fotosíntesis, enzimología y lignificación, contribuyendo a mejorar la resistencia natural frente a estrés biótico y abiótico."
    },
    {
        question: "¿Cuál es la dosis y el momento de aplicación más recomendado según el cultivo?",
        answer: "En los marbetes de nuestros productos se pueden encontrar dosis dependiendo del cultivo, la fenología y el objetivo de la aplicación (preventiva o curativa), allí se podrá observar que siempre la dosis se encuentra recomendada como cantidad de principio activo por hectárea y no por volumen de caldo. Ante cualquier duda recomendamos siempre consultar a nuestro equipo técnico para ajustar el plan a las condiciones específicas de cada lote."
    },
    {
        question: "¿Por qué las dosis de agroquímicos se expresan por hectárea y no por volumen de caldo?",
        answer: "Porque lo que realmente importa es la cantidad de producto que llega al cultivo por superficie tratada. El agua es solo un vehículo para distribuirlo, y su volumen puede variar según el tipo de cultivo, la densidad del follaje, la etapa de desarrollo o el equipo de aplicación. Al recomendar la dosis por hectárea se asegura que, sin importar cuántos litros de agua se usen, siempre se aplique la cantidad correcta de ingrediente activo, garantizando eficacia, seguridad y uniformidad en el tratamiento."
    },
    {
        question: "¿Nuestros productos son compatibles con otros agroquímicos o bioinsumos?",
        answer: "Sí, en la mayoría de los casos son compatibles, nuestra recomendación es que siempre se introduzcan en primer lugar dentro del caldo. Sin embargo, se recomienda realizar una prueba previa de compatibilidad en pequeño volumen y consultar la tabla de mezclas para el resto de los productos a agregar. Nuestros formulados suelen integrarse bien con programas que incluyen insecticidas biológicos, bioestimulantes y fertilizantes foliares."
    },
    {
        question: "¿Por qué nuestros productos siguen siendo una herramienta clave en la agricultura?",
        answer: "El cobre es uno de los activos más confiables y con mayor trayectoria en el manejo sanitario de cultivos. A diferencia de muchos productos sintéticos, no genera resistencia fácilmente y ofrece un amplio espectro de acción. Nuestros formulados se destacan por su alta biodisponibilidad y bioactividad, lo que los hace más efectivos que otros cobres del mercado. Además, brindan un doble beneficio: control de enfermedades y aporte nutricional para fortalecer a la planta."
    },
    {
        question: "¿El cobre puede aplicarse en agricultura orgánica o bajo certificaciones especiales?",
        answer: "Sí, varios de nuestros productos cumplen con normativas internacionales para su uso en agricultura orgánica (dependiendo del país y de la certificadora). Esto convierte al cobre en una herramienta clave en sistemas de producción sustentable."
    },
    {
        question: "¿Qué precauciones debo tener al manipular agroquímicos de banda azul?",
        answer: "Aunque los productos de banda azul son los de menor riesgo toxicológico, siempre requieren cuidados básicos. Es importante leer la etiqueta antes de usarlos, utilizar equipo de protección personal mínimo (guantes, gafas y ropa adecuada), evitar comer, beber o fumar durante la aplicación y lavarse bien las manos y la ropa al finalizar. Se deben almacenar en lugares seguros, ventilados y fuera del alcance de niños y animales. Estos productos son seguros cuando se usan de forma responsable, siguiendo las recomendaciones de uso y dosificación."
    },
    {
        question: "¿Dónde puedo comprar los productos y cómo acceder al asesoramiento técnico?",
        answer: "Puede adquirir nuestros productos a través de nuestra red de distribuidores oficiales o comunicándose directamente con nosotros. Nuestro equipo técnico brinda acompañamiento en campo y asesoramiento personalizado para garantizar la máxima eficiencia en cada aplicación."
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
            {/* Imagen de fondo */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/faqs/bg-faqs.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
            </div>

            {/* FAQs Section */}
            <motion.section
                className="py-20 relative z-10"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pb-20">
                
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
                                        <AccordionContent className="text-gray-800 leading-relaxed pt-4 text-xl bg-white rounded-lg p-4 mt-3 border border-green-100">
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

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <motion.div
                        className="bg-white/20 rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-3xl mx-auto text-center"
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