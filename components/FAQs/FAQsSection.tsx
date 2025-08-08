"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, HelpCircle, Phone, Mail, MessageSquare, Leaf, Shield, Droplets } from "lucide-react";
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

// Datos de las FAQs organizadas por categorías
const faqCategories = [
    {
        id: "productos",
        name: "Productos",
        icon: Shield,
        color: "bg-primary-600",
        faqs: [
            {
                question: "¿Cuál es la diferencia entre Cobrestable, Bordocald y Trikopper 50?",
                answer: "Cobrestable es un fungicida preventivo y curativo con acción sistémica, ideal para aplicaciones preventivas. Bordocald combina cobre con caldos bordeleses para mayor adherencia y persistencia. Trikopper 50 ofrece una concentración más alta de cobre elemental para casos de alta presión de enfermedades."
            },
            {
                question: "¿Los productos de Ecoagro Gaspar son orgánicos?",
                answer: "Sí, todos nuestros productos están basados en cobre, un elemento naturalmente presente en el suelo y aprobado para agricultura orgánica. Cuentan con certificación SENASA y son compatibles con protocolos de producción sustentable."
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
                question: "¿Qué registro SENASA tienen los productos?",
                answer: "Todos nuestros productos cuentan con registro SENASA vigente. Cobrestable (Registro SENASA N°...), Bordocald (Registro SENASA N°...), y Trikopper 50 (Registro SENASA N°...). Los números específicos se encuentran en cada etiqueta del producto."
            }
        ]
    },
    {
        id: "aplicacion",
        name: "Aplicación",
        icon: Droplets,
        color: "bg-blue-600",
        faqs: [
            {
                question: "¿Cuál es la dosis recomendada para cada cultivo?",
                answer: "Las dosis varían según el cultivo y la presión de enfermedad. Generalmente: Soja 200-300g/100L, Papa 250-400g/100L, Vid 300-500g/100L, Cítricos 200-400g/100L. Consulte siempre la etiqueta del producto y nuestro equipo técnico para recomendaciones específicas."
            },
            {
                question: "¿Cuál es el mejor momento para aplicar?",
                answer: "Aplique en horas de menor temperatura (temprano en la mañana o al atardecer), con humedad relativa alta (>60%) y viento mínimo (<10 km/h). Para aplicaciones preventivas, inicie antes de la aparición de síntomas."
            },
            {
                question: "¿Qué equipos de aplicación puedo usar?",
                answer: "Nuestros productos son compatibles con pulverizadores terrestres, aéreos y sistemas de riego por aspersión. Use boquillas que generen gotas medianas a finas para mejor cobertura. Calibre el equipo según las recomendaciones técnicas."
            },
            {
                question: "¿Cuál es el intervalo de seguridad?",
                answer: "El intervalo de seguridad varía según el cultivo: Hortalizas 7 días, Frutales 14-21 días, Cereales 30 días. Consulte la etiqueta específica de cada producto para información detallada."
            },
            {
                question: "¿Puedo aplicar con lluvia pronosticada?",
                answer: "Evite aplicaciones si se pronostica lluvia en las próximas 4-6 horas. El producto necesita tiempo para adherirse y formar la película protectora en la superficie foliar."
            }
        ]
    },
    {
        id: "cultivos",
        name: "Cultivos",
        icon: Leaf,
        color: "bg-green-600",
        faqs: [
            {
                question: "¿En qué cultivos puedo usar productos de cobre?",
                answer: "Nuestros productos son efectivos en soja, papa, vid, cítricos, garbanzo, maní, trigo, tomate, frutales de pepita y carozo, hortalizas, olivo, palto y muchos otros cultivos. Cada producto tiene cultivos específicos autorizados en su registro."
            },
            {
                question: "¿Los productos de cobre son efectivos contra todas las enfermedades?",
                answer: "Los productos de cobre son especialmente efectivos contra enfermedades bacterianas y fúngicas como tizón tardío, antracnosis, roya, mildiu, cancrosis, bacteriosis, etc. No son efectivos contra enfermedades virales o insectos."
            },
            {
                question: "¿Puedo usar cobre en cultivos hidropónicos?",
                answer: "Sí, nuestros productos pueden usarse en sistemas hidropónicos, pero requieren ajustes en la concentración y frecuencia. Consulte con nuestro equipo técnico para protocolos específicos."
            },
            {
                question: "¿Cómo afecta el cobre a la floración y fructificación?",
                answer: "Aplicado correctamente, el cobre no afecta negativamente la floración. Durante la floración, use concentraciones menores y evite aplicaciones en horas de mayor actividad de polinizadores."
            },
            {
                question: "¿El cobre puede generar fitotoxicidad?",
                answer: "En condiciones normales de uso, nuestros productos no generan fitotoxicidad. Puede ocurrir con sobredosis, aplicaciones en condiciones de estrés hídrico extremo o en variedades muy sensibles. Siempre respete las dosis recomendadas."
            }
        ]
    },
    {
        id: "tecnico",
        name: "Soporte Técnico",
        icon: HelpCircle,
        color: "bg-purple-600",
        faqs: [
            {
                question: "¿Ofrecen asesoramiento técnico personalizado?",
                answer: "Sí, contamos con un equipo de ingenieros agrónomos especializados que brindan asesoramiento personalizado sin costo. Pueden visitarlo en campo o atenderlo telefónicamente según sus necesidades."
            },
            {
                question: "¿Tienen programas de monitoreo de cultivos?",
                answer: "Ofrecemos programas de monitoreo preventivo para detectar tempranamente problemas fitosanitarios. Incluye visitas periódicas, recomendaciones de aplicación y seguimiento de resultados."
            },
            {
                question: "¿Brindan capacitaciones sobre uso de productos?",
                answer: "Realizamos capacitaciones regulares para productores y aplicadores sobre uso correcto de productos, calibración de equipos, y manejo integrado de enfermedades. Consulte nuestro calendario de eventos."
            },
            {
                question: "¿Qué debo hacer si no obtengo los resultados esperados?",
                answer: "Contacte inmediatamente a nuestro equipo técnico. Analizaremos las condiciones de aplicación, timing, dosis y factores ambientales para identificar las causas y ajustar el programa de tratamiento."
            },
            {
                question: "¿Tienen protocolos específicos por región?",
                answer: "Sí, desarrollamos protocolos adaptados a las condiciones climáticas y problemáticas fitosanitarias específicas de cada región productiva de Argentina."
            }
        ]
    }
];

export default function FAQsSection() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("todos");

    // Filtrar FAQs basado en búsqueda y categoría
    const filteredFAQs = faqCategories.filter(category => {
        if (activeCategory !== "todos" && category.id !== activeCategory) {
            return false;
        }
        
        if (searchTerm) {
            return category.faqs.some(faq => 
                faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        return true;
    }).map(category => ({
        ...category,
        faqs: category.faqs.filter(faq =>
            !searchTerm || 
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }));

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

            {/* Búsqueda y filtros */}
            <motion.section
                className="py-8 bg-white border-b border-gray-200"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                        {/* Barra de búsqueda */}
                        <motion.div
                            className="relative flex-1 max-w-md"
                            variants={sectionVariants}
                        >
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Buscar en preguntas frecuentes..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        </motion.div>

                        {/* Filtros de categoría */}
                        <motion.div
                            className="flex flex-wrap gap-2"
                            variants={sectionVariants}
                        >
                            <button
                                onClick={() => setActiveCategory("todos")}
                                className={`cursor-pointer px-4 py-2 rounded-full font-medium transition-colors ${
                                    activeCategory === "todos"
                                        ? "bg-primary-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                Todas
                            </button>
                            {faqCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`cursor-pointer px-4 py-2 rounded-full font-medium transition-colors ${
                                        activeCategory === category.id
                                            ? "bg-primary-600 text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </motion.div>
                    </div>

                    {/* Contador de resultados */}
                    <motion.div
                        className="mt-4 text-gray-600"
                        variants={sectionVariants}
                    >
                        {searchTerm ? (
                            `Mostrando ${filteredFAQs.reduce((total, cat) => total + cat.faqs.length, 0)} resultados para "${searchTerm}"`
                        ) : (
                            `${faqCategories.reduce((total, cat) => total + cat.faqs.length, 0)} preguntas frecuentes disponibles`
                        )}
                    </motion.div>
                </div>
            </motion.section>

            {/* FAQs por categoría */}
            <motion.section
                className="py-20"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredFAQs.length > 0 ? (
                        <div className="space-y-12">
                            {filteredFAQs.map((category) => (
                                <motion.div
                                    key={category.id}
                                    variants={cardVariants}
                                    className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
                                >
                                    {/* Header de categoría */}
                                    <div className={`${category.color} px-8 py-6`}>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                                <category.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold text-white">
                                                    {category.name}
                                                </h2>
                                                <p className="text-white/80">
                                                    {category.faqs.length} pregunta{category.faqs.length !== 1 ? 's' : ''}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQs de la categoría */}
                                    <div className="p-8">
                                        <Accordion type="single" collapsible className="space-y-4">
                                            {category.faqs.map((faq, index) => (
                                                <AccordionItem
                                                    key={index}
                                                    value={`${category.id}-${index}`}
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
                            ))}
                        </div>
                    ) : (
                        /* Estado sin resultados */
                        <motion.div
                            className="text-center py-16"
                            variants={cardVariants}
                        >
                            <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                No se encontraron preguntas
                            </h3>
                            <p className="text-gray-500 mb-6">
                                Intenta ajustar tu búsqueda o selecciona una categoría diferente.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm("");
                                    setActiveCategory("todos");
                                }}
                                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                            >
                                Limpiar filtros
                            </button>
                        </motion.div>
                    )}
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