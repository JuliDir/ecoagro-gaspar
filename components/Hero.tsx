"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"
import { motion, easeOut } from "framer-motion"

interface Slide {
    imageSrc: string
    subtitle?: string
    title: string
    description: string
    ctaText: string
    ctaLink: string
}

interface HeroProps {
    slides?: Slide[]
}

export default function Hero({ slides }: HeroProps) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [startAnimation, setStartAnimation] = useState(false)

    const defaultSlides: Slide[] = [
        {
            imageSrc: "/images/hero-1.jpeg",
            title: "Cobrestable: Protección Total",
            description: "Fungicida y bactericida con triple acción para cultivos saludables.",
            ctaText: "Descubre Cobrestable",
            ctaLink: "/cobrestable",
        },
        {
            imageSrc: "/images/hero-2.webp",
            title: "Bordocald: Innovación Segura",
            description: "Fungicida avanzado, efectivo y respetuoso con el ambiente.",
            ctaText: "Conoce Bordocald",
            ctaLink: "/bordocald",
        },
        {
            imageSrc: "/images/hero-3.jpeg",
            title: "NutriFit: Potencia Natural",
            description: "Bioestimulante que mejora defensa y resistencia al estrés.",
            ctaText: "Aprende sobre NutriFit",
            ctaLink: "/nutrifit",
        },
    ]

    const currentSlides = slides && slides.length > 0 ? slides : defaultSlides

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.10, 
                delayChildren: 0.10,
            },
        },
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4, 
                ease: easeOut, 
            },
        },
    }

    useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartAnimation(true)
        }, 1800)

        return () => clearTimeout(timer)
    }, [])

    const handleDotClick = (index: number) => {
        if (api) {
            api.scrollTo(index)
        }
    }

    return (
        <section className="w-screen h-screen overflow-hidden relative">
            <Carousel
                className="w-full h-full"
                plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
                opts={{ loop: true }}
                setApi={setApi}
            >
                <CarouselContent className="h-full">
                    {currentSlides.map((slide, index) => (
                        <CarouselItem key={index} className="relative w-full h-screen">
                            <Image
                                src={slide.imageSrc || "/placeholder.svg"}
                                alt={slide.title}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
                                {index === 0 ? (
                                    // Animated content for first slide
                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate={startAnimation ? "visible" : "hidden"}
                                    >
                                        {slide.subtitle && (
                                            <motion.p
                                                variants={itemVariants}
                                                className="text-white text-lg md:text-xl font-medium mb-2"
                                                style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)" }}
                                            >
                                                {slide.subtitle}
                                            </motion.p>
                                        )}
                                        <motion.h2
                                            variants={itemVariants}
                                            className="text-white text-4xl md:text-6xl font-bold leading-tight"
                                            style={{
                                                textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
                                            }}
                                        >
                                            {slide.title}
                                        </motion.h2>
                                        {slide.description && (
                                            <motion.p
                                                variants={itemVariants}
                                                className="text-white text-lg md:text-xl mt-4 mb-8"
                                                style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)" }}
                                            >
                                                {slide.description}
                                            </motion.p>
                                        )}
                                        <motion.div variants={itemVariants}>
                                            <Link href={slide.ctaLink} passHref>
                                                <Button className="cursor-pointer px-8 py-6 text-lg bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold">
                                                    {slide.ctaText}
                                                </Button>
                                            </Link>
                                        </motion.div>
                                    </motion.div>
                                ) : (
                                    // Static content for other slides
                                    <div>
                                        {slide.subtitle && (
                                            <p
                                                className="text-white text-lg md:text-xl font-medium mb-2"
                                                style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)" }}
                                            >
                                                {slide.subtitle}
                                            </p>
                                        )}
                                        <h2
                                            className="text-white text-4xl md:text-6xl font-bold leading-tight"
                                            style={{
                                                textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
                                            }}
                                        >
                                            {slide.title}
                                        </h2>
                                        {slide.description && (
                                            <p
                                                className="text-white text-lg md:text-xl mt-4 mb-8"
                                                style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)" }}
                                            >
                                                {slide.description}
                                            </p>
                                        )}
                                        <Link href={slide.ctaLink} passHref>
                                            <Button className="cursor-pointer px-8 py-6 text-lg bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold">
                                                {slide.ctaText}
                                            </Button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* Custom Navigation at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 h-24 flex items-center justify-center px-4 md:px-8 lg:px-16">
                    <div className="flex space-x-8">
                        {currentSlides.map((slide, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className="flex items-center space-x-3 group focus:outline-none cursor-pointer"
                            >
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-colors duration-300 ${current === index + 1 ? "bg-white text-green-800" : "bg-white/30 text-white group-hover:bg-white/50"
                                        }`}
                                >
                                    {index + 1}
                                </div>
                                <span
                                    className={`text-white text-lg font-semibold transition-opacity duration-300 ${current === index + 1 ? "opacity-100" : "opacity-70 group-hover:opacity-100"
                                        } hidden md:block`}
                                >
                                    {slide.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </Carousel>
        </section>
    )
}
