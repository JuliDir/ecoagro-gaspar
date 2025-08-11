import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface BackgroundCropIconsProps {
  variant?: "default" | "hero" | "section" | "products" | "about";
  showBasicShapes?: boolean;
}

const cropIcons = [
  { name: "wheat", src: "/icons/wheat.svg" },
  { name: "corn", src: "/icons/corn.svg" },
  { name: "soy", src: "/icons/soy.svg" },
  { name: "potato", src: "/icons/potato.svg" },
  { name: "bean", src: "/icons/bean.svg" },
  { name: "lemon", src: "/icons/lemon.svg" },
  { name: "orange", src: "/icons/orange.svg" },
  { name: "tangerine", src: "/icons/tangerine.svg" },
  { name: "vid", src: "/icons/vid.svg" },
  { name: "leaf", src: "/icons/leaf.svg" },
  { name: "olive", src: "/icons/olive.svg" },
  { name: "garlic", src: "/icons/garlic.svg" },
  { name: "peanut", src: "/icons/peanut.svg" }
];

// Configuraciones predefinidas por variante
const variantConfigs = {
  default: {
    iconCount: 8,
    opacityRange: [0.15, 0.25],
    sizeRange: [70, 130],
    animationSpeed: [15, 25]
  },
  hero: {
    iconCount: 12,
    opacityRange: [0.12, 0.22],
    sizeRange: [90, 160],
    animationSpeed: [20, 35]
  },
  section: {
    iconCount: 6,
    opacityRange: [0.18, 0.28],
    sizeRange: [60, 120],
    animationSpeed: [12, 20]
  },
  products: {
    iconCount: 10,
    opacityRange: [0.14, 0.24],
    sizeRange: [80, 150],
    animationSpeed: [18, 30]
  },
  about: {
    iconCount: 7,
    opacityRange: [0.16, 0.26],
    sizeRange: [70, 130],
    animationSpeed: [15, 25]
  }
};

// Función para generar posiciones aleatorias pero balanceadas
const generateBalancedPositions = (count: number) => {
  const positions = [];
  const sectors = 4; // Dividir en cuadrantes
  const iconsPerSector = Math.ceil(count / sectors);
  
  for (let sector = 0; sector < sectors; sector++) {
    const sectorIconCount = Math.min(iconsPerSector, count - positions.length);
    
    for (let i = 0; i < sectorIconCount; i++) {
      let x, y;
      
      // Definir rangos por sector para distribución equilibrada
      switch (sector) {
        case 0: // Superior izquierdo
          x = Math.random() * 40 + 5; // 5-45%
          y = Math.random() * 40 + 5; // 5-45%
          break;
        case 1: // Superior derecho
          x = Math.random() * 40 + 55; // 55-95%
          y = Math.random() * 40 + 5; // 5-45%
          break;
        case 2: // Inferior izquierdo
          x = Math.random() * 40 + 5; // 5-45%
          y = Math.random() * 40 + 55; // 55-95%
          break;
        case 3: // Inferior derecho
          x = Math.random() * 40 + 55; // 55-95%
          y = Math.random() * 40 + 55; // 55-95%
          break;
        default:
          x = Math.random() * 90 + 5;
          y = Math.random() * 90 + 5;
      }
      
      positions.push({ x, y });
    }
  }
  
  return positions;
};

// Hook personalizado para manejar la carga progresiva
const useProgressiveLoading = (totalIcons: number, delay: number = 500) => {
  const [loadedCount, setLoadedCount] = useState(0);
  
  useEffect(() => {
    if (loadedCount < totalIcons) {
      const timer = setTimeout(() => {
        setLoadedCount(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [loadedCount, totalIcons, delay]);
  
  return loadedCount;
};

export default function BackgroundCropIcons({ 
  variant = "default", 
  showBasicShapes = true 
}: BackgroundCropIconsProps) {
  const config = variantConfigs[variant];
  const positions = generateBalancedPositions(config.iconCount);
  const loadedIconsCount = useProgressiveLoading(config.iconCount, 200);
  
  // Seleccionar íconos aleatoriamente
  const selectedIcons = [];
  const shuffledIcons = [...cropIcons].sort(() => Math.random() - 0.5);
  
  for (let i = 0; i < config.iconCount; i++) {
    selectedIcons.push(shuffledIcons[i % shuffledIcons.length]);
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Formas geométricas básicas opcionales */}
      {showBasicShapes && (
        <>
          <motion.div
            className="absolute w-80 h-80 bg-white/15 rounded-full"
            style={{ top: "-10%", right: "-10%" }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.20, 0.15]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-white/10 rounded-full"
            style={{ bottom: "-15%", left: "-15%" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.10, 0.15, 0.10]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          />
        </>
      )}

      {/* Íconos de cultivos animados */}
      {selectedIcons.slice(0, loadedIconsCount).map((icon, index) => {
        const position = positions[index];
        const size = Math.random() * (config.sizeRange[1] - config.sizeRange[0]) + config.sizeRange[0];
        const opacity = Math.random() * (config.opacityRange[1] - config.opacityRange[0]) + config.opacityRange[0];
        const animationDuration = Math.random() * (config.animationSpeed[1] - config.animationSpeed[0]) + config.animationSpeed[0];
        const rotationDirection = Math.random() > 0.5 ? 1 : -1;
        const floatDirection = Math.random() > 0.5 ? 1 : -1;
        
        return (
          <motion.div
            key={`${icon.name}-${index}`}
            className="absolute"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: Math.random() * 360
            }}
            animate={{
              opacity: [0, opacity * 1.2, opacity * 1.2, 0],
              scale: [0.8, 1, 1.1, 1],
              rotate: [0, rotationDirection * 360],
              x: [0, floatDirection * 20, 0, floatDirection * -15, 0],
              y: [0, -10, 5, -8, 0]
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5, // Delay escalonado para entrada progresiva
              times: [0, 0.1, 0.9, 1] // Control de timing para opacity
            }}
          >
            <motion.div
              whileHover={{ scale: 1.3, opacity: Math.min(opacity * 2, 0.4) }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={icon.src}
                alt=""
                width={size}
                height={size}
                className="brightness-0 invert"
                style={{ 
                  filter: `brightness(0) invert(1) opacity(${Math.min(opacity * 1.5, 0.35)})`,
                  transform: "translateZ(0)" // Hardware acceleration
                }}
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Elementos adicionales para más dinamismo */}
      {variant === "hero" && (
        <>
          {/* Partículas flotantes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-3 h-3 bg-white/25 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Líneas conectoras sutiles */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: -1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
          >
            <motion.path
              d="M 10,90 Q 50,50 90,90"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.path
              d="M 90,10 Q 50,50 10,10"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="3,7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                delay: 5
              }}
            />
          </motion.svg>
        </>
      )}
    </div>
  );
}