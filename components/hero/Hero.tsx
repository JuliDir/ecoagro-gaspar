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
    productType?: 'cobrestable' | 'bordocald' | 'trikkoper' | 'default'
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
            imageSrc: "/images/hero/hero-1.jpeg",
            title: "Cobrestable: Protección Total",
            description: "Fungicida y bactericida con triple acción para cultivos saludables.",
            ctaText: "Descubre Cobrestable",
            ctaLink: "/cobrestable",
            productType: "cobrestable"
        },
        {
            imageSrc: "/images/hero/hero-2.webp",
            title: "Bordocald: Innovación Segura",
            description: "Fungicida avanzado, efectivo y respetuoso con el ambiente.",
            ctaText: "Conoce Bordocald",
            ctaLink: "/bordocald",
            productType: "bordocald"
        },
        {
            imageSrc: "/images/hero/hero-3.jpeg",
            title: "Trikkoper 50: Potencia Natural",
            description: "Bioestimulante que mejora defensa y resistencia al estrés.",
            ctaText: "Aprende sobre Trikkoper 50",
            ctaLink: "/trikkoper-50",
            productType: "trikkoper"
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
        const alreadyShown = sessionStorage.getItem("page-loader-shown")

        if (!alreadyShown) {
            const timer = setTimeout(() => {
                setStartAnimation(true)
            }, 1800)

            return () => clearTimeout(timer)
        } else {
            setStartAnimation(true)
        }
    }, [])

    const handleDotClick = (index: number) => {
        if (api) {
            api.scrollTo(index)
        }
    }

    const getButtonClasses = (slide: Slide) => {
        switch (slide.productType) {
            case 'cobrestable':
                return "bg-cobrestable hover:bg-cobrestable text-white"
            case 'bordocald':
                return "bg-bordocald hover:bg-bordocald text-white"
            case 'trikkoper':
                return "bg-trikkoper hover:bg-trikkoper text-white"
            default:
                return "bg-brand-green hover:bg-brand-green text-white"
        }
    }

    const getBrandColor = (slide: Slide) => {
        switch (slide.productType) {
            case 'cobrestable':
                return '#06b6d4'
            case 'bordocald':
                return '#8b5cf6'
            case 'trikkoper':
                return '#10b981'
            default:
                return '#00663b'
        }
    }

    return (
        <section className="w-screen h-screen overflow-hidden relative" id="hero">
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
                            <div
                                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
                                style={{
                                    background: `linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, ${getBrandColor(slide)}20 100%)`
                                }}
                            >
                                {index === 0 ? (
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
                                            className="text-4xl md:text-6xl font-bold leading-tight relative"
                                            style={{
                                                textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
                                            }}
                                        >
                                            <span
                                                style={{ color: getBrandColor(slide) }}
                                            >
                                                {slide.title.split(':')[0]}:
                                            </span>
                                            <span className="text-white">
                                                {slide.title.split(':')[1]}
                                            </span>
                                            <motion.div
                                                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 rounded-full"
                                                style={{
                                                    backgroundColor: getBrandColor(slide),
                                                    width: "0rem",
                                                }}
                                                animate={{
                                                    width: startAnimation ? "20rem" : "0rem",
                                                }}
                                                transition={{
                                                    duration: 0.7,
                                                    delay: 0.5,
                                                    ease: "easeOut",
                                                }}
                                            />
                                        </motion.h2>
                                        {slide.description && (
                                            <motion.p
                                                variants={itemVariants}
                                                className="text-white text-lg md:text-xl mt-6 mb-8"
                                                style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)" }}
                                            >
                                                {slide.description}
                                            </motion.p>
                                        )}
                                        <motion.div variants={itemVariants}>
                                            <Link href={slide.ctaLink} passHref>
                                                <Button
                                                    className={`cursor-pointer px-8 py-6 text-lg shadow-lg transition-all ease-in-out transform font-semibold ${getButtonClasses(slide)}`}
                                                    style={{
                                                        boxShadow: `0 4px 15px ${getBrandColor(slide)}40`
                                                    }}
                                                >
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
                                            className="text-4xl md:text-6xl font-bold leading-tight relative"
                                            style={{
                                                textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
                                            }}
                                        >
                                            <span
                                                style={{ color: getBrandColor(slide) }}
                                                className="drop-shadow-lg"
                                            >
                                                {slide.title.split(':')[0]}:
                                            </span>
                                            <span className="text-white">
                                                {slide.title.split(':')[1]}
                                            </span>
                                            {/* Línea decorativa con color de marca */}
                                            <div
                                                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 w-[20rem] rounded-full"
                                                style={{ backgroundColor: getBrandColor(slide) }}
                                            />
                                        </h2>
                                        {slide.description && (
                                            <p
                                                className="text-white text-lg md:text-xl mt-6 mb-8"
                                                style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)" }}
                                            >
                                                {slide.description}
                                            </p>
                                        )}
                                        <Link href={slide.ctaLink} passHref>
                                            <Button
                                                className={`cursor-pointer px-8 py-6 text-lg shadow-lg transition-all ease-in-out transform font-semibold ${getButtonClasses(slide)}`}
                                                style={{
                                                    boxShadow: `0 4px 15px ${getBrandColor(slide)}40`
                                                }}
                                            >
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
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${current === index + 1
                                        ? "text-white shadow-lg transform scale-110"
                                        : "bg-white/30 text-white group-hover:bg-white/50"
                                        }`}
                                    style={current === index + 1 ? {
                                        backgroundColor: getBrandColor(slide),
                                        boxShadow: `0 2px 10px ${getBrandColor(slide)}60`
                                    } : {}}
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