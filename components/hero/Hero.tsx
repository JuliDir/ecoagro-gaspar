"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface CropSection {
  id: number
  name: string
  image: string
  clip: string
}

const cropSections: CropSection[] = [
  {
    id: 1,
    name: "Garbanzo",
    image: "/images/crops/garbanzo.jpg",
    clip: "polygon(0% 0%, 11.85% 0%, 31.35% 100%, 0% 100%)",
  },
  {
    id: 2,
    name: "Soja",
    image: "/images/crops/soja.jpg",
    clip: "polygon(12.15% 0%, 23.85% 0%, 43.35% 100%, 32.00% 100%)",
  },
  {
    id: 3,
    name: "Mani",
    image: "/images/crops/mani.jpg",
    clip: "polygon(24.15% 0%, 35.85% 0%, 55.35% 100%, 44.00% 100%)",
  },
  {
    id: 4,
    name: "Vid",
    image: "/images/crops/vid.jpg",
    clip: "polygon(36.15% 0%, 47.85% 0%, 67.35% 100%, 56.00% 100%)",
  },
  {
    id: 5,
    name: "Papa",
    image: "/images/crops/papas.jpg",
    clip: "polygon(48.15% 0%, 59.85% 0%, 79.35% 100%, 68.00% 100%)",
  },
  {
    id: 6,
    name: "Limón",
    image: "/images/crops/limon.jpg",
    clip: "polygon(60.15% 0%, 100% 0%, 100% 100%, 80.00% 100%)",
  }
];

const heroTitles = [
  "Innovación para tus cultivos",
  "El futuro del agro hoy",
  "Protección que marca la diferencia",
  "Soluciones que trascienden",
  "Crecimiento sostenible garantizado"
]

export default function Hero() {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  // Cambio automático de títulos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % heroTitles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-white">
      {/* Fondo dinámico */}
      <AnimatePresence mode="wait">
        {hoveredSection && (
          <motion.div
            key={hoveredSection}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={cropSections.find(s => s.id === hoveredSection)?.image || ""}
              alt="Background"
              fill
              className="object-cover filter blur-sm"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fondo por defecto cuando no hay hover - cambiado a blanco para mostrar los gaps */}
      {!hoveredSection && (
        <div className="absolute inset-0 z-0 bg-white" />
      )}

      {/* Secciones de cultivos con clips diagonales */}
      <div className="relative z-10 h-full">
        {cropSections.map((section) => (
          <motion.div
            key={section.id}
            className="absolute inset-0 cursor-pointer"
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{
              clipPath: section.clip
            }}
          >
            {/* Imagen del cultivo */}
            <div className="relative w-full h-full">
              <Image
                src={section.image}
                alt={section.name}
                fill
                className="object-cover"
                priority={section.id <= 3}
              />

              {/* Overlay base más oscuro */}
              <div className="absolute inset-0 bg-black/30" />
              
              {/* Overlay que se aclara en hover para crear efecto de iluminación */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  backgroundColor: hoveredSection === section.id 
                    ? "rgba(0, 0, 0, 0.1)" 
                    : "rgba(0, 0, 0, 0.3)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Título central animado */}
      <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none pt-14">
        <div className="text-center px-4">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentTitleIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                opacity: { duration: 0.6 }
              }}
              className="text-5xl md:text-6xl font-avenir-black text-white leading-tight 
  drop-shadow-[0_0_2px_rgba(0,0,0,0.9)] 
  drop-shadow-[0_0_6px_rgba(0,0,0,0.7)]"
            >
              {heroTitles[currentTitleIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      {/* Indicador de scroll sutil */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/80 rounded-full mt-2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}