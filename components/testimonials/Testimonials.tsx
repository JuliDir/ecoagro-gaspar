"use client";

import { easeOut, motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { testimonials } from '@/lib/data/testimonials';
import Image from 'next/image';

export default function Testimonials() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [videoLoading, setVideoLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Activar animación cuando la sección sea visible
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }

                // Manejar video independientemente
                if (entry.isIntersecting) {
                    if (videoRef.current) {
                        videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
                    }
                } else {
                    if (videoRef.current) {
                        videoRef.current.pause();
                    }
                }
            },
            {
                threshold: 0.1, // Reducido para mejor detección
                rootMargin: '0px 0px -5% 0px' // Menos agresivo
            }
        );

        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, [hasAnimated]);

    // Forzar animación después de un tiempo si no se detecta
    useEffect(() => {
        const fallbackTimer = setTimeout(() => {
            if (!hasAnimated) {
                setHasAnimated(true);
            }
        }, 1000); // Si después de 1 segundo no se animó, forzar

        return () => clearTimeout(fallbackTimer);
    }, [hasAnimated]);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleVideoLoadStart = () => {
        setVideoLoading(true);
    };

    const handleVideoCanPlay = () => {
        setVideoLoading(false);
    };

    const headerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: easeOut }
        }
    };

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

    const videoVariants = {
        hidden: { 
            opacity: 0, 
            x: -50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: easeOut
            }
        }
    };

    const contentVariants = {
        hidden: { 
            opacity: 0, 
            x: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: easeOut,
                delay: 0.2
            }
        }
    };

    return (
        <motion.section
            id="testimonios"
            ref={sectionRef}
            className="py-20 bg-white flex items-center justify-center overflow-hidden"
            initial="hidden"
            animate="visible" // Siempre visible para evitar problemas
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    className="text-center mb-16"
                    variants={headerVariants}
                    animate={hasAnimated ? "visible" : "hidden"}
                >
                    <motion.h2
                        className="text-4xl font-bold text-primary mb-4"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease: "easeOut" }
                            }
                        }}
                    >
                        TESTIMONIOS
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                        variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
                            }
                        }}
                    >
                        Lo que nuestros clientes dicen sobre nosotros
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Video Section */}
                    <motion.div
                        variants={videoVariants}
                        animate={hasAnimated ? "visible" : "hidden"}
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <video
                                ref={videoRef}
                                key={testimonials[currentTestimonial].video}
                                className="w-full h-96 md:h-112 object-cover transition-transform duration-700 group-hover:scale-105"
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

                            {/* Video Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                            {/* Play/Pause Indicator */}
                            <div className="absolute top-6 right-6">
                                <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                            </div>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center mt-8 space-x-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentTestimonial
                                            ? 'bg-primary-500 scale-125'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Testimonial Content */}
                    <motion.div
                        variants={contentVariants}
                        animate={hasAnimated ? "visible" : "hidden"}
                    >
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

                                {/* Author */}
                                <motion.div 
                                    className="flex items-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <div className="w-1 h-20 bg-primary-500 mr-6"></div>
                                    <div className="flex items-center space-x-4">
                                        {/* Client Image */}
                                        <div className="relative">
                                            <Image
                                                src={testimonials[currentTestimonial].image}
                                                alt={testimonials[currentTestimonial].name}
                                                className="w-16 h-16 rounded-full object-cover border-3 border-green-100 shadow-lg"
                                                width={64}
                                                height={64}
                                                loading="eager" // Carga inmediata para mejor UX
                                                onError={(e) => {
                                                    // Fallback en caso de error de imagen
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = '/images/default-avatar.jpg'; // Imagen por defecto
                                                }}
                                            />
                                            <div className="absolute inset-0 rounded-full ring-2 ring-primary-500/20"></div>
                                        </div>

                                        {/* Client Info */}
                                        <div>
                                            <p className="text-xl font-medium text-gray-900">
                                                {testimonials[currentTestimonial].name}
                                            </p>
                                            <p className="text-green-600 font-light text-sm mt-1">
                                                {testimonials[currentTestimonial].role}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <motion.div 
                            className="flex justify-end mt-12 space-x-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 20 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center justify-center group cursor-pointer"
                            >
                                <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center justify-center group cursor-pointer"
                            >
                                <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards 0.2s both;
        }

        .h-112 {
          height: 28rem;
        }
      `}</style>
        </motion.section>
    );
}