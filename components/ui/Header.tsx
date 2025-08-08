"use client"
import { useState, useEffect, useRef, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

type DropdownItem = {
    name: string
    href: string
}

export default function Header() {
    const [scrolledPastHero, setScrolledPastHero] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [activeSection, setActiveSection] = useState("")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
    const [isCropsDropdownOpen, setIsCropsDropdownOpen] = useState(false)
    // Estados para dropdowns móviles
    const [isMobileProductsDropdownOpen, setIsMobileProductsDropdownOpen] = useState(false)
    const [isMobileCropsDropdownOpen, setIsMobileCropsDropdownOpen] = useState(false)
    const lastScrollY = useRef(0)
    const pathname = usePathname()

    // Nuevas categorías de productos
    const products = [
        { name: "Fungicidas", href: "/products?category=Fungicidas" },
        { name: "Fertilizantes", href: "/products?category=Fertilizantes" },
        { name: "Coayugantes", href: "/products?category=Coayugantes" },
        { name: "Ver todos", href: "/products" },
    ]

    const crops = [
        { name: "Soja", href: "/crops/soja" },
        { name: "Papa", href: "/crops/papa" },
        { name: "Vid", href: "/crops/vid" },
        { name: "Garbanzo", href: "/crops/garbanzo" },
        { name: "Limón", href: "/crops/limon" },
        { name: "Ver todos", href: "/crops" },
    ]

    // Navegación actualizada - agregando FAQs
    const navItems = useMemo(() => [
        { name: "Inicio", href: "/", id: "inicio" },
        {
            name: "Productos",
            href: "/products",
            id: "productos",
            hasDropdown: true,
            dropdownType: "products"
        },
        {
            name: "Cultivos",
            href: "/crops",
            id: "cultivos",
            hasDropdown: true,
            dropdownType: "crops"
        },
        { name: "Testimonios", href: "/testimonials", id: "testimonials" },
        { name: "FAQs", href: "/faqs", id: "faqs" },
        { name: "Contacto", href: "#contacto", id: "contacto" },
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
        // Check if we're on home page
        if (pathname === "/") {
            setActiveSection("inicio")
            return
        }

        // Check if we're on a product page or products catalog
        if (pathname.startsWith("/products/") || pathname === "/products") {
            setActiveSection("productos")
            return
        }

        // Check if we're on a crops page or crops catalog
        if (pathname.startsWith("/crops/") || pathname === "/crops") {
            setActiveSection("cultivos")
            return
        }

        // Check if we're on testimonials page
        if (pathname === "/testimonials") {
            setActiveSection("testimonials")
            return
        }

        // Check if we're on FAQs page
        if (pathname === "/faqs") {
            setActiveSection("faqs")
            return
        }

        const observers: IntersectionObserver[] = []

        const observerOptions = {
            threshold: 0.1,
            rootMargin: "-80px 0px -40% 0px"
        }

        const idsToObserve = [...navItems.filter(item => !item.hasDropdown && item.href.startsWith("#")).map(i => i.id), "hero", "contacto"]

        idsToObserve.forEach((id) => {
            const section = document.getElementById(id)
            if (section) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(id === "hero" ? "inicio" : id)
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

    const mobileDropdownVariants = {
        open: {
            height: "auto",
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 400,
                damping: 30,
                delay: 0.1
            }
        },
        closed: {
            height: 0,
            opacity: 0,
            transition: {
                type: "spring" as const,
                stiffness: 400,
                damping: 30
            }
        }
    }

    const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault()

        // Si estamos en una página que no es home, navegar primero a home
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

    const toggleMobileDropdown = (dropdownType: string) => {
        if (dropdownType === "products") {
            setIsMobileProductsDropdownOpen(!isMobileProductsDropdownOpen)
            setIsMobileCropsDropdownOpen(false) // Cerrar el otro dropdown
        } else if (dropdownType === "crops") {
            setIsMobileCropsDropdownOpen(!isMobileCropsDropdownOpen)
            setIsMobileProductsDropdownOpen(false) // Cerrar el otro dropdown
        }
    }

    const renderDropdown = (
        isOpen: boolean,
        items: DropdownItem[],
        onClose: () => void
    ) => (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={dropdownVariants}
                    className="absolute top-full left-0 mt-2 min-w-48 bg-white text-gray-800 rounded-lg shadow-xl border border-gray-200 overflow-hidden"
                >
                    <div className="py-2">
                        {items.map((dropdownItem) => (
                            <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors"
                                onClick={onClose}
                            >
                                {dropdownItem.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )

    const renderMobileDropdown = (
        isOpen: boolean,
        items: DropdownItem[]
    ) => (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={mobileDropdownVariants}
                    className="overflow-hidden bg-gray-50"
                >
                    <div className="pl-4">
                        {items.map((dropdownItem) => (
                            <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors border-l-2 border-gray-200"
                                onClick={() => {
                                    setIsMobileMenuOpen(false)
                                    setIsMobileProductsDropdownOpen(false)
                                    setIsMobileCropsDropdownOpen(false)
                                }}
                            >
                                {dropdownItem.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
                "w-full fixed top-0 z-50 py-1",
                scrolledPastHero
                    ? "bg-white shadow-lg border-b border-gray-100 text-gray-800"
                    : "bg-white/95 backdrop-blur-sm text-gray-800",
                "transition-all duration-500 ease-in-out"
            )}
        >
            {/* Container con margen fijo que se adapta */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link className="relative h-16 w-48 sm:h-20 sm:w-60" href="/">
                        <Image src="/images/logo.png" alt="Ecoagro Gaspar Logo" fill className="object-contain" />
                    </Link>

                    <ul className="hidden md:flex space-x-4 lg:space-x-6 text-base lg:text-lg font-semibold items-center">
                        {navItems.map((item) => (
                            <li key={item.id} className="relative">
                                {item.hasDropdown ? (
                                    <div
                                        className="relative"
                                        onMouseEnter={() => {
                                            if (item.dropdownType === "products") {
                                                setIsProductsDropdownOpen(true)
                                            } else if (item.dropdownType === "crops") {
                                                setIsCropsDropdownOpen(true)
                                            }
                                        }}
                                        onMouseLeave={() => {
                                            if (item.dropdownType === "products") {
                                                setIsProductsDropdownOpen(false)
                                            } else if (item.dropdownType === "crops") {
                                                setIsCropsDropdownOpen(false)
                                            }
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "flex items-center space-x-1 px-2 lg:px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer",
                                                "hover:bg-primary-100",
                                                activeSection === item.id
                                                    ? "bg-primary-100 text-primary-700 shadow-lg"
                                                    : "text-gray-700 hover:text-primary-600"
                                            )}
                                        >
                                            <span>{item.name}</span>
                                            <ChevronDown className={cn(
                                                "w-4 h-4 transition-transform duration-200",
                                                (item.dropdownType === "products" && isProductsDropdownOpen) ||
                                                    (item.dropdownType === "crops" && isCropsDropdownOpen)
                                                    ? "rotate-180" : ""
                                            )} />
                                        </Link>

                                        {item.dropdownType === "products" && renderDropdown(
                                            isProductsDropdownOpen,
                                            products,
                                            () => setIsProductsDropdownOpen(false)
                                        )}

                                        {item.dropdownType === "crops" && renderDropdown(
                                            isCropsDropdownOpen,
                                            crops,
                                            () => setIsCropsDropdownOpen(false)
                                        )}
                                    </div>
                                ) : item.href.startsWith("/") ? (
                                    // Para enlaces a páginas, usar Link
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "px-2 lg:px-3 py-2 rounded-full transition-all duration-300",
                                            "hover:bg-primary-100",
                                            activeSection === item.id
                                                ? "bg-primary-100 text-primary-700 shadow-lg"
                                                : "text-gray-700 hover:text-primary-600"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    // Para secciones (#contacto), usar button con handleSectionClick
                                    <button
                                        onClick={(e) => handleSectionClick(e, item.id)}
                                        className={cn(
                                            "px-2 lg:px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer",
                                            "hover:bg-primary-100",
                                            activeSection === item.id
                                                ? "bg-primary-100 text-primary-700 shadow-lg"
                                                : "text-gray-700 hover:text-primary-600"
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
                            className="relative z-50 flex h-8 w-8 items-center justify-center rounded-full text-gray-700"
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
                            className="absolute top-12 right-0 min-w-48 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                            style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
                        >
                            <div className="flex flex-col py-2">
                                {navItems.map((item) => {
                                    if (item.hasDropdown) {
                                        const dropdownItems = item.dropdownType === "products" ? products : crops
                                        const isDropdownOpen = item.dropdownType === "products"
                                            ? isMobileProductsDropdownOpen
                                            : isMobileCropsDropdownOpen

                                        return (
                                            <div key={item.id}>
                                                <button
                                                    onClick={() => toggleMobileDropdown(item.dropdownType)}
                                                    className={cn(
                                                        "w-full text-left px-6 py-3 transition-colors hover:bg-gray-50 cursor-pointer flex items-center justify-between",
                                                        activeSection === item.id ? "bg-primary-50 text-primary-700" : ""
                                                    )}
                                                >
                                                    <span>{item.name}</span>
                                                    <ChevronDown className={cn(
                                                        "w-4 h-4 transition-transform duration-200",
                                                        isDropdownOpen ? "rotate-180" : ""
                                                    )} />
                                                </button>
                                                {renderMobileDropdown(isDropdownOpen, dropdownItems)}
                                            </div>
                                        )
                                    }

                                    // Para items que son enlaces a páginas, usar Link normal
                                    if (item.href.startsWith("/")) {
                                        return (
                                            <Link
                                                key={item.id}
                                                href={item.href}
                                                className={cn(
                                                    "px-6 py-3 transition-colors hover:bg-gray-50",
                                                    activeSection === item.id ? "bg-primary-50 text-primary-700" : ""
                                                )}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        )
                                    }

                                    // Para secciones (#contacto), usar handleSectionClick
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={(e) => {
                                                handleSectionClick(e, item.id)
                                                setIsMobileMenuOpen(false)
                                            }}
                                            className={cn(
                                                "w-full text-left px-6 py-3 transition-colors hover:bg-gray-50 cursor-pointer",
                                                activeSection === item.id ? "bg-primary-50 text-primary-700" : ""
                                            )}
                                        >
                                            {item.name}
                                        </button>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}