"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"
import { motion, AnimatePresence, easeOut, easeInOut } from "framer-motion"

interface Slide {
    imageSrc: string
    subtitle?: string
    title: string
    description: string
    ctaText: string
    ctaLink: string
    productType?: 'cobrestable' | 'bordocald' | 'trikopper' | 'default'
}

interface HeroProps {
    slides?: Slide[]
}

export default function Hero({ slides }: HeroProps) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const defaultSlides: Slide[] = [
        {
            imageSrc: "/images/hero/hero-1.jpeg",
            title: "Cobrestable",
            description: "Fungicida, bactericida, triple acción.",
            ctaText: "Descubre Cobrestable",
            ctaLink: "/products/cobrestable",
            productType: "cobrestable"
        },
        {
            imageSrc: "/images/hero/hero-2.webp",
            title: "Bordocald",
            description: "Caldo bordelés coloidal listo para usar.",
            ctaText: "Conoce Bordocald",
            ctaLink: "/products/bordocald",
            productType: "bordocald"
        },
        {
            imageSrc: "/images/hero/hero-3.jpeg",
            title: "Trikopper 50",
            description: "Fungicida, ultra micronizado, máxima adherencia y tenacidad.",
            ctaText: "Aprende sobre Trikopper 50",
            ctaLink: "/products/trikopper-50",
            productType: "trikopper"
        },
    ]

    const currentSlides = slides && slides.length > 0 ? slides : defaultSlides

    // Variantes de animación para el contenido
    const contentVariants = {
        enter: {
            opacity: 0,
            y: 30,
            scale: 0.98,
            transition: {
                duration: 0.8,
                ease: easeInOut,
            }
        },
        center: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: easeInOut,
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 1.02,
            transition: {
                duration: 0.6,
                ease: easeInOut,
            }
        }
    }

    // Variantes para elementos individuales
    const itemVariants = {
        enter: {
            opacity: 0,
            y: 30,
            x: -20,
        },
        center: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.5,
                ease: easeOut,
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            x: 20,
            transition: {
                duration: 0.3,
                ease: easeInOut,
            },
        },
    }

    // Variantes para la imagen de fondo
    const imageVariants = {
        enter: {
            scale: 1.1,
            opacity: 0,
            transition: {
                duration: 0.8,
                ease: easeInOut,
            }
        },
        center: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: easeInOut,
            }
        },
        exit: {
            scale: 0.95,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: easeInOut,
            }
        }
    }

    useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setIsTransitioning(true)
            setCurrent(api.selectedScrollSnap())

            // Reset transition state after animation completes
            setTimeout(() => {
                setIsTransitioning(false)
            }, 600)
        })
    }, [api])

    const handleDotClick = (index: number) => {
        if (api && !isTransitioning) {
            setIsTransitioning(true)
            api.scrollTo(index)
        }
    }

    const getButtonClasses = (slide: Slide) => {
        switch (slide.productType) {
            case 'cobrestable':
                return "bg-cobrestable hover:bg-cobrestable text-white"
            case 'bordocald':
                return "bg-bordocald hover:bg-bordocald text-white"
            case 'trikopper':
                return "bg-trikopper hover:bg-trikopper text-white"
            default:
                return "bg-brand-green hover:bg-brand-green text-white"
        }
    }

    const getBrandColor = (slide: Slide) => {
        switch (slide.productType) {
            case 'cobrestable':
                return '#0098da'
            case 'bordocald':
                return '#9a3388'
            case 'trikopper':
                return '#00a859'
            default:
                return '#266d35'
        }
    }

    return (
        <section className="w-screen h-screen overflow-hidden relative" id="hero">
            <Carousel
                className="w-full h-full"
                plugins={[Autoplay({ delay: 10000, stopOnInteraction: false })]}
                opts={{
                    loop: true,
                    duration: 50,
                }}
                setApi={setApi}
            >
                <CarouselContent className="h-full">
                    {currentSlides.map((slide, index) => (
                        <CarouselItem key={index} className="relative w-full h-screen">
                            {/* Imagen de fondo con animación */}
                            <AnimatePresence mode="wait">
                                {current === index && (
                                    <motion.div
                                        key={`image-${index}`}
                                        variants={imageVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={slide.imageSrc || "/placeholder.svg"}
                                            alt={slide.title}
                                            fill
                                            className="object-cover"
                                            priority={index === 0}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Overlay con gradiente animado */}
                            <motion.div
                                className="absolute inset-0"
                                animate={{
                                    background: current === index
                                        ? `linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, ${getBrandColor(slide)}20 100%)`
                                        : `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, ${getBrandColor(slide)}10 100%)`
                                }}
                                transition={{ duration: 0.8, ease: easeInOut }}
                            />

                            {/* Contenido con animaciones */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                                <AnimatePresence mode="wait">
                                    {current === index && (
                                        <motion.div
                                            key={`content-${index}`}
                                            variants={contentVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            className="flex flex-col items-center"
                                        >
                                            {slide.subtitle && (
                                                <motion.p
                                                    variants={itemVariants}
                                                    className="text-white text-md sm:text-lg md:text-xl font-medium mb-2"
                                                    style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)" }}
                                                >
                                                    {slide.subtitle}
                                                </motion.p>
                                            )}

                                            <motion.h2
                                                variants={itemVariants}
                                                className="text-[2rem] relative sm:text-[2.7rem] md:text-[3.8rem] font-bold leading-tight relative px-8 py-4 rounded-lg font-softhits"
                                                style={{
                                                    backgroundColor: getBrandColor(slide),
                                                    color: 'white',
                                                }}
                                            >
                                                {slide.title}
                                                <span className="align-super text-[0.4em] ml-1 relative top-[-0.2em] font-sans font-normal border border-white/80 border-2 px-[0.2em]">
                                                    R
                                                </span>
                                            </motion.h2>

                                            {slide.description && (
                                                <motion.p
                                                    variants={itemVariants}
                                                    className="text-white text-lg md:text-2xl mt-6 mb-8 max-w-3xl"
                                                    style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)" }}
                                                >
                                                    {slide.description}
                                                </motion.p>
                                            )}

                                            <motion.div
                                                variants={itemVariants}
                                                whileHover={{
                                                    scale: 1.05,
                                                    transition: { duration: 0.2 }
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Link href={slide.ctaLink} passHref>
                                                    <Button
                                                        className={`cursor-pointer px-8 py-6 text-lg shadow-lg transition-all duration-300 ease-in-out transform font-semibold ${getButtonClasses(slide)}`}
                                                        style={{
                                                            boxShadow: `0 4px 15px ${getBrandColor(slide)}40`
                                                        }}
                                                    >
                                                        {slide.ctaText}
                                                    </Button>
                                                </Link>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navegación personalizada con animaciones suaves */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 h-24 flex items-center justify-center px-4 md:px-8 lg:px-16">

                    <div className="flex space-x-8">
                        {currentSlides.map((slide, index) => (
                            <motion.button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className="flex items-center space-x-3 group focus:outline-none cursor-pointer disabled:cursor-not-allowed"
                                disabled={isTransitioning}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-500 ${current === index
                                            ? "text-white shadow-lg"
                                            : "bg-white/30 text-white group-hover:bg-white/50"
                                        }`}
                                    animate={{
                                        backgroundColor: current === index ? getBrandColor(slide) : 'rgba(255,255,255,0.3)',
                                        boxShadow: current === index ? `0 4px 20px ${getBrandColor(slide)}60` : '0 2px 10px rgba(0,0,0,0.3)',
                                        scale: current === index ? 1.1 : 1,
                                    }}
                                    transition={{ duration: 0.4, ease: easeInOut }}
                                >
                                    {index + 1}
                                </motion.div>

                                <motion.span
                                    className={`text-white text-lg font-semibold transition-all duration-300 hidden md:block`}
                                    animate={{
                                        opacity: current === index ? 1 : 0.7,
                                        x: current === index ? 0 : -5,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {slide.title}
                                </motion.span>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </Carousel>
        </section>
    )
}