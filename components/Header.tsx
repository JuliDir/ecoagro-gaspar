"use client"
import { useState, useEffect, useRef, useMemo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
    const [scrolledPastHero, setScrolledPastHero] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [activeSection, setActiveSection] = useState("")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const lastScrollY = useRef(0)

    const navItems = useMemo(() => [
        { name: "Productos", href: "#productos", id: "productos" },
        { name: "Cultivos", href: "#cultivos", id: "cultivos" },
        { name: "Testimonios", href: "#testimonios", id: "testimonios" },
        { name: "Contacto", href: "#contacto", id: "contacto" },
        { name: "Nosotros", href: "#about-us", id: "about-us" },
    ], [])

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setScrolledPastHero(currentScrollY > 0)

            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setIsVisible(false)
            } else if (currentScrollY < lastScrollY.current) {
                setIsVisible(true)
            }
            lastScrollY.current = currentScrollY
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const observers: IntersectionObserver[] = []

        const observerOptions = {
            threshold: 0.1,
            rootMargin: "-80px 0px -40% 0px"
        }

        const idsToObserve = [...navItems.map(i => i.id), "hero"]

        idsToObserve.forEach((id) => {
            const section = document.getElementById(id)
            if (section) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(id === "hero" ? "" : id)
                        }
                    })
                }, observerOptions)
                observer.observe(section)
                observers.push(observer)
            }
        })

        return () => {
            observers.forEach((observer) => observer.disconnect())
        }
    }, [navItems])

    const hamburgerVariants = {
        open: { rotate: 180 },
        closed: { rotate: 0 },
    }

    const mobileMenuVariants = {
        open: { y: 0, opacity: 1 },
        closed: { y: -20, opacity: 0 },
    }

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
                "w-full fixed top-0 z-50 flex items-center justify-between px-4 py-4 md:px-8 lg:px-60",
                scrolledPastHero ? "bg-dark-gray shadow-lg" : "bg-transparent",
                "text-white transition-all duration-500 ease-in-out"
            )}
        >
            <div className="relative h-12 w-48">
                <Image src="/images/logo.png" alt="Ecoagro Gaspar Logo" fill className="object-contain" />
            </div>

            <ul className="hidden md:flex space-x-6 text-lg">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a
                            href={item.href}
                            className={cn(
                                "relative transition-colors duration-300",
                                "hover:text-gray-300",
                                "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 after:ease-out",
                                activeSection === item.id ? "after:w-full" : "after:w-0"
                            )}
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="md:hidden relative">
                <motion.button
                    className="relative z-50 flex h-8 w-8 items-center justify-center rounded-full text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    variants={hamburgerVariants}
                    aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.button>

                <motion.div
                    initial="closed"
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    variants={mobileMenuVariants}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute top-12 right-0 min-w-48 bg-dark-gray text-white rounded-lg shadow-lg overflow-hidden"
                    style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
                >
                    <div className="flex flex-col py-2">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                className={cn(
                                    "relative px-6 py-3 transition-colors hover:bg-gray-700",
                                    "after:absolute after:bottom-0 after:left-6 after:h-[2px] after:bg-current after:transition-all after:duration-300",
                                    activeSection === item.id ? "after:w-[calc(100%-3rem)] text-white" : "after:w-0"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.header>
    )
}
