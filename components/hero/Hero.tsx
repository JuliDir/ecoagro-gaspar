"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, PanInfo } from "framer-motion"
import Image from "next/image"

interface CropSection {
  id: number
  name: string
  image: string
}

const cropSections: CropSection[] = [
  { id: 1, name: "Semillas", image: "/images/hero/semillas.jpg" },
  { id: 2, name: "Papas", image: "/images/hero/papas.jpg" },
  { id: 3, name: "Olivos", image: "/images/hero/olivos.jpg" },
  { id: 4, name: "Vid", image: "/images/hero/vid.jpg" },
  { id: 5, name: "Naranjas", image: "/images/hero/naranjos.jpg" },
  { id: 6, name: "Limones", image: "/images/hero/limones.jpg" }
]

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
  const [isDragging, setIsDragging] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const SECTION_WIDTH = 500
  const TOTAL_SECTIONS = cropSections.length
  const TOTAL_WIDTH = SECTION_WIDTH * TOTAL_SECTIONS
  
  // Crear múltiples copias para el efecto infinito
  const multipliedSections = [
    ...cropSections,
    ...cropSections,
    ...cropSections,
    ...cropSections // 4 copias para transición suave
  ]

  // Animación automática de títulos
  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % heroTitles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isPaused])

  // Animación automática del slider
  useEffect(() => {
    if (isDragging || isPaused) return

    const animate = () => {
      const currentX = x.get()
      const newX = currentX - 0.3 // Velocidad de desplazamiento más lenta

      // Reset cuando llegue al final de la primera copia
      if (Math.abs(newX) >= TOTAL_WIDTH) {
        x.set(0)
      } else {
        x.set(newX)
      }
    }

    const interval = setInterval(animate, 16) // ~60fps
    return () => clearInterval(interval)
  }, [isDragging, isPaused, x, TOTAL_WIDTH])

  const handleDragStart = () => {
    setIsDragging(true)
    setIsPaused(true)
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)
    
    const currentX = x.get()
    const velocity = info.velocity.x
    
    // Aplicar inercia
    const finalX = currentX + velocity * 0.1
    
    // Manejar el loop infinito
    let constrainedX = finalX
    
    if (Math.abs(constrainedX) >= TOTAL_WIDTH) {
      constrainedX = constrainedX % TOTAL_WIDTH
    }
    
    if (constrainedX > 0) {
      constrainedX = constrainedX - TOTAL_WIDTH
    }
    
    x.set(constrainedX)
    
    // Reanudar después de un breve delay
    setTimeout(() => setIsPaused(false), 1000)
  }

  const getSectionFromIndex = (index: number) => {
    return cropSections[index % TOTAL_SECTIONS]
  }

  return (
    <section 
      className="relative h-[75vh] w-full overflow-hidden bg-white select-none"
      onMouseLeave={() => {
        setHoveredSection(null)
      }}
    >
      {/* Fondo dinámico difuminado en hover */}
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

      {!hoveredSection && (
        <div className="absolute inset-0 z-0 bg-white" />
      )}

      {/* Slider infinito con drag */}
      <div ref={containerRef} className="relative z-10 h-full overflow-hidden">
        <motion.div
          className="flex h-full cursor-grab active:cursor-grabbing hover:cursor-grab"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -TOTAL_WIDTH, right: 0 }}
          dragElastic={0.1}
          dragMomentum={true}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          whileDrag={{ cursor: "grabbing" }}
        >
          {multipliedSections.map((section, index) => {
            const originalSection = getSectionFromIndex(index)
            
            return (
              <motion.div
                key={`${section.id}-${Math.floor(index / TOTAL_SECTIONS)}`}
                className="relative flex-shrink-0 h-full cursor-grab hover:cursor-grab"
                style={{ 
                  width: `${SECTION_WIDTH}px`,
                  clipPath: "polygon(1% 0, 100% 0, 99% 100%, 0 100%)"
                }}
                onMouseEnter={() => setHoveredSection(originalSection.id)}
              >
                <Image
                  src={section.image}
                  alt={section.name}
                  fill
                  className="object-cover pointer-events-none"
                  priority={index < TOTAL_SECTIONS}
                  draggable={false}
                />
                
                {/* Overlay oscuro que se aclara en hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    backgroundColor:
                      hoveredSection === originalSection.id
                        ? "rgba(0,0,0,0.1)"
                        : "rgba(0,0,0,0.5)"
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Nombre de la sección visible en hover */}
                <AnimatePresence>
                  {hoveredSection === originalSection.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
                    >
                      <h3 className="text-white text-2xl font-bold text-center drop-shadow-lg">
                        {section.name}
                      </h3>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Título central */}
      <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none pt-18">
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
              className="text-5xl font-avenir-cyr-heavy text-white leading-tight 
              drop-shadow-[0_0_2px_rgba(0,0,0,0.9)] 
              drop-shadow-[0_0_6px_rgba(0,0,0,0.7)]"
            >
              {heroTitles[currentTitleIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      {/* Indicador scroll mejorado */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.p
          className="text-white/90 text-sm font-medium mb-3 tracking-wide"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          DESLIZA HACIA ABAJO
        </motion.p>

        <motion.div
          className="relative"
          whileHover={{ y: -2 }}
        >
          <div className="absolute inset-0 w-8 h-12 border-2 border-white rounded-full blur-sm opacity-60" />
          <div className="relative w-8 h-12 border-2 border-white rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
            <motion.div
              className="w-1.5 h-4 bg-white rounded-full mt-2 shadow-lg"
              animate={{
                opacity: [0.4, 1, 0.4],
                y: [0, 6, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}