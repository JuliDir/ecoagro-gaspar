"use client"
import { useState, useEffect, useRef, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
    const [scrolledPastHero, setScrolledPastHero] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [activeSection, setActiveSection] = useState("")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
    const lastScrollY = useRef(0)
    const pathname = usePathname()

    const products = [
        { name: "Cobrestable", href: "/products/cobrestable" },
        { name: "Bordocald", href: "/products/bordocald" },
        { name: "Trikopper 50", href: "/products/trikkoper-50" },
    ]

    const navItems = useMemo(() => [
        { 
            name: "Productos", 
            href: "#productos", 
            id: "productos",
            hasDropdown: true
        },
        { name: "Cultivos", href: "#cultivos", id: "cultivos" },
        { name: "Testimonios", href: "#testimonios", id: "testimonios" },
        { name: "Contacto", href: "#contacto", id: "contacto" },
        { name: "Nosotros", href: "/about-us", id: "about-us" },
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
        // Check if we're on about-us page
        if (pathname === "/about-us") {
            setActiveSection("about-us")
            return
        }

        // Check if we're on a product page
        if (pathname.startsWith("/products/")) {
            setActiveSection("productos")
            return
        }

        const observers: IntersectionObserver[] = []

        const observerOptions = {
            threshold: 0.1,
            rootMargin: "-80px 0px -40% 0px"
        }

        const idsToObserve = [...navItems.filter(item => !item.hasDropdown && item.href.startsWith("#")).map(i => i.id), "hero"]

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
    }, [navItems, pathname])

    const hamburgerVariants = {
        open: { rotate: 180 },
        closed: { rotate: 0 },
    }

    const mobileMenuVariants = {
        open: { y: 0, opacity: 1 },
        closed: { y: -20, opacity: 0 },
    }

    const dropdownVariants = {
        open: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 500,
                damping: 30
            }
        },
        closed: { 
            opacity: 0, 
            y: -10,
            transition: {
                duration: 0.2
            }
        }
    }

    const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault()
        
        // Si estamos en about-us u otra página que no es home, navegar primero a home
        if (pathname !== "/") {
            // Navegar a home con el hash de la sección
            window.location.href = `/#${sectionId}`
        } else {
            // Si ya estamos en home, solo hacer scroll
            const section = document.getElementById(sectionId)
            if (section) {
                section.scrollIntoView({ behavior: "smooth" })
            }
        }
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
            <Link className="relative h-12 w-48" href="/">
                <Image src="/images/logo.png" alt="Ecoagro Gaspar Logo" fill className="object-contain" />
            </Link>

            <ul className="hidden md:flex space-x-6 text-lg items-center">
                {navItems.map((item) => (
                    <li key={item.id} className="relative">
                        {item.hasDropdown ? (
                            <div
                                className="relative"
                                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                                onMouseLeave={() => setIsProductsDropdownOpen(false)}
                            >
                                <button
                                    onClick={(e) => handleSectionClick(e, "productos")}
                                    className={cn(
                                        "flex items-center space-x-1 px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer",
                                        "hover:bg-white/10",
                                        activeSection === item.id 
                                            ? "bg-white/20 text-white shadow-lg" 
                                            : "text-white/90 hover:text-white"
                                    )}
                                >
                                    <span>{item.name}</span>
                                    <ChevronDown className={cn(
                                        "w-4 h-4 transition-transform duration-200",
                                        isProductsDropdownOpen ? "rotate-180" : ""
                                    )} />
                                </button>

                                <AnimatePresence>
                                    {isProductsDropdownOpen && (
                                        <motion.div
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                            variants={dropdownVariants}
                                            className="absolute top-full left-0 mt-2 min-w-48 bg-dark-gray text-white rounded-lg shadow-xl border border-gray-700 overflow-hidden"
                                        >
                                            <div className="py-2">
                                                {products.map((product) => (
                                                    <Link
                                                        key={product.href}
                                                        href={product.href}
                                                        className="block px-4 py-3 text-sm hover:bg-gray-700 transition-colors"
                                                        onClick={() => setIsProductsDropdownOpen(false)}
                                                    >
                                                        {product.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : item.href.startsWith("/") ? (
                            // Para enlaces a páginas (como /about-us), usar Link
                            <Link
                                href={item.href}
                                className={cn(
                                    "px-3 py-2 rounded-full transition-all duration-300",
                                    "hover:bg-white/10",
                                    activeSection === item.id 
                                        ? "bg-white/20 text-white shadow-lg" 
                                        : "text-white/90 hover:text-white"
                                )}
                            >
                                {item.name}
                            </Link>
                        ) : (
                            // Para secciones (#contacto, #cultivos, etc), usar button con handleSectionClick
                            <button
                                onClick={(e) => handleSectionClick(e, item.id)}
                                className={cn(
                                    "px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer",
                                    "hover:bg-white/10",
                                    activeSection === item.id 
                                        ? "bg-white/20 text-white shadow-lg" 
                                        : "text-white/90 hover:text-white"
                                )}
                            >
                                {item.name}
                            </button>
                        )}
                    </li>
                ))}
            </ul>

            {/* Mobile Menu */}
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
                        {navItems.map((item) => {
                            if (item.hasDropdown) {
                                return (
                                    <div key={item.id}>
                                        <button
                                            onClick={(e) => {
                                                handleSectionClick(e, "productos")
                                                setIsMobileMenuOpen(false)
                                            }}
                                            className={cn(
                                                "w-full text-left px-6 py-3 transition-colors hover:bg-gray-700 cursor-pointer",
                                                activeSection === item.id ? "bg-gray-600 text-white" : ""
                                            )}
                                        >
                                            {item.name}
                                        </button>
                                        {products.map((product) => (
                                            <Link
                                                key={product.href}
                                                href={product.href}
                                                className="block px-8 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {product.name}
                                            </Link>
                                        ))}
                                    </div>
                                )
                            }
                            
                            // Para items que son enlaces a /about-us, usar Link normal
                            if (item.href.startsWith("/")) {
                                return (
                                    <Link
                                        key={item.id}
                                        href={item.href}
                                        className={cn(
                                            "px-6 py-3 transition-colors hover:bg-gray-700",
                                            activeSection === item.id ? "bg-gray-600 text-white" : ""
                                        )}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            }
                            
                            // Para secciones (#contacto, #cultivos, etc), usar handleSectionClick
                            return (
                                <button
                                    key={item.id}
                                    onClick={(e) => {
                                        handleSectionClick(e, item.id)
                                        setIsMobileMenuOpen(false)
                                    }}
                                    className={cn(
                                        "w-full text-left px-6 py-3 transition-colors hover:bg-gray-700 cursor-pointer",
                                        activeSection === item.id ? "bg-gray-600 text-white" : ""
                                    )}
                                >
                                    {item.name}
                                </button>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </motion.header>
    )
}