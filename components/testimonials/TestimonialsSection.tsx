"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Star, Play, Pause, ChevronLeft, ChevronRight, Award, Users, TrendingUp } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import SectionHero from "../ui/SectionHero";

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

export default function TestimonialsSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current && isPlaying) {
            videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
        } else if (videoRef.current) {
            videoRef.current.pause();
        }
    }, [isPlaying, currentTestimonial]);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsPlaying(false);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsPlaying(false);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleVideoLoadStart = () => {
        setVideoLoading(true);
    };

    const handleVideoCanPlay = () => {
        setVideoLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-15">

            {/* Video testimonial principal */}
            <motion.section
                className="py-20 bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0 }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid lg:grid-cols-2 gap-16 items-center"
                        variants={sectionVariants}
                    >
                        {/* Video Section */}
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                <video
                                    ref={videoRef}
                                    key={testimonials[currentTestimonial].video}
                                    className="w-full h-96 md:h-112 object-cover"
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    onLoadStart={handleVideoLoadStart}
                                    onCanPlay={handleVideoCanPlay}
                                >
                                    <source src={testimonials[currentTestimonial].video} type="video/mp4" />
                                    Tu navegador no soporta videos HTML5.
                                </video>

                                {/* Loading Animation */}
                                {videoLoading && (
                                    <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce"></div>
                                            <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                )}

                                {/* Video Controls */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                                {/* Play/Pause Button */}
                                <button
                                    onClick={togglePlayPause}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border-2 border-white/50"
                                >
                                    {isPlaying ? (
                                        <Pause className="w-8 h-8 text-white" />
                                    ) : (
                                        <Play className="w-8 h-8 text-white ml-1" />
                                    )}
                                </button>

                                {/* Video indicator */}
                                <div className="absolute top-6 right-6">
                                    <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-white/60'}`}></div>
                                </div>
                            </div>

                            {/* Navigation Dots */}
                            <div className="flex justify-center mt-8 space-x-3">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setCurrentTestimonial(index);
                                            setIsPlaying(false);
                                        }}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                                            ? 'bg-primary-500 scale-125'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="relative">
                            {/* Quote Icon */}
                            <div className="absolute -top-6 -left-2 text-primary-500/20">
                                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                </svg>
                            </div>

                            {/* Quote Text */}
                            <div className="relative z-10 pl-8">
                                <motion.blockquote
                                    key={currentTestimonial}
                                    className="text-xl md:text-2xl lg:text-3xl font-light text-gray-900 leading-tight mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    &quot;{testimonials[currentTestimonial].quote}&quot;
                                </motion.blockquote>

                                {/* Rating */}
                                <div className="flex items-center mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                    <span className="ml-2 text-gray-600 font-medium">5.0 / 5.0</span>
                                </div>

                                {/* Author */}
                                <div className="flex items-center">
                                    <div className="w-1 h-20 bg-primary-500 mr-6"></div>
                                    <div className="flex items-center space-x-4">
                                        {/* Client Image */}
                                        <div className="relative">
                                            <Image
                                                src={testimonials[currentTestimonial].image}
                                                alt={testimonials[currentTestimonial].name}
                                                className="w-16 h-16 rounded-full object-cover border-3 border-primary-100 shadow-lg"
                                                width={64}
                                                height={64}
                                            />
                                            <div className="absolute inset-0 rounded-full ring-2 ring-primary-500/20"></div>
                                        </div>

                                        {/* Client Info */}
                                        <div>
                                            <p className="text-xl font-medium text-gray-900">
                                                {testimonials[currentTestimonial].name}
                                            </p>
                                            <p className="text-primary-600 font-light text-sm mt-1">
                                                {testimonials[currentTestimonial].role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <div className="flex justify-end mt-12 space-x-4">
                                <button
                                    onClick={prevTestimonial}
                                    className="w-12 h-12 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center justify-center group cursor-pointer"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="w-12 h-12 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center justify-center group cursor-pointer"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Estadísticas rápidas - Movidas aquí */}
            <motion.section
                className="py-20 bg-gray-50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        variants={sectionVariants}
                    >
                        {[
                            {
                                icon: Users,
                                number: "500+",
                                label: "Clientes Satisfechos",
                                description: "Productores que confían en nosotros"
                            },
                            {
                                icon: Award,
                                number: "98%",
                                label: "Satisfacción del Cliente",
                                description: "Índice de recomendación"
                            },
                            {
                                icon: TrendingUp,
                                number: "25%",
                                label: "Incremento Promedio",
                                description: "En rendimiento de cultivos"
                            }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary-100"
                                variants={cardVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                                    <stat.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</h3>
                                <p className="text-gray-600">{stat.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Todos los testimonios en grid */}
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
                        <h2 className="text-4xl font-avenir-cyr-heavy text-primary-800 mb-4">
                            Más testimonios
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Conoce más experiencias de productores que han transformado sus cultivos
                            con nuestras soluciones especializadas
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                                variants={cardVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-center mb-6">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-primary-100"
                                        width={48}
                                        height={48}
                                    />
                                    <div className="ml-4">
                                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                        <p className="text-primary-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>

                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                <blockquote className="text-gray-700 leading-relaxed">
                                    &quot;{testimonial.quote}&quot;
                                </blockquote>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* CTA Final */}
            <motion.section
                className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-2xl mx-auto text-center"
                        variants={sectionVariants}
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            ¿Quieres ser nuestro próximo caso de éxito?
                        </h2>
                        <p className="text-white/90 mb-6">
                            Únete a los cientos de productores que ya han transformado sus cultivos
                            con nuestras soluciones especializadas.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center space-x-3">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+54 9 261 399 0081</span>
                            </div>
                            <div className="flex items-center justify-center space-x-3">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>contacto@ecoagrogaspar.com.ar</span>
                            </div>
                        </div>
                        <Link
                            href="/#contacto"
                            className="inline-block mt-6 bg-white/20 border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
                        >
                            Empezar Ahora
                        </Link>
                    </motion.div>
                </div>
            </motion.section>

            <style jsx>{`
        .h-112 {
          height: 28rem;
        }
      `}</style>
        </div>
    );
}