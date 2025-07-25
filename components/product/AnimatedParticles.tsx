// components/AnimatedParticles.tsx (Optimizado)
import { motion } from "framer-motion";
import { memo } from "react";

interface AnimatedParticlesProps {
  hoveredProduct: number | null;
  productId: number;
}

// Memoizar para evitar re-renders innecesarios
export const AnimatedParticles = memo<AnimatedParticlesProps>(function AnimatedParticles({
  hoveredProduct,
  productId
}) {
  const isHovered = hoveredProduct === productId;

  // Reducir número de partículas de ~20 a 6 partículas principales
  // Mantener animaciones constantes pero intensificar en hover
  return (
    <>
      {/* Partículas principales - REDUCIDAS pero siempre animadas */}
      <motion.div
        className="absolute top-10 right-10 w-4 h-4 bg-white/50 rounded-full shadow-md ring-1 ring-white/20"
        animate={{
          y: [0, -15, 0],
          opacity: isHovered ? [0.6, 0.8, 0.6] : [0.4, 0.6, 0.4],
          scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-16 left-12 w-5 h-5 bg-white/45 rounded-full shadow-md ring-1 ring-white/25"
        animate={{
          y: [0, 12, 0],
          x: [0, 8, 0],
          opacity: isHovered ? [0.55, 0.75, 0.55] : [0.35, 0.55, 0.35],
          scale: isHovered ? [1, 1.4, 1] : [1, 1.2, 1]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      />
      
      <motion.div
        className="absolute top-1/2 left-8 w-3 h-3 bg-white/60 rounded-full shadow-sm ring-1 ring-white/30"
        animate={{
          scale: isHovered ? [1, 1.8, 1] : [1, 1.3, 1],
          opacity: isHovered ? [0.7, 0.9, 0.7] : [0.5, 0.7, 0.5]
        }}
        transition={{ duration: 1.2, repeat: Infinity, delay: 0.6 }}
      />

      {/* Círculos de fondo - REDUCIDOS pero siempre visibles */}
      <motion.div
        className="absolute top-4 left-4 w-12 h-12 bg-white/15 rounded-full shadow-lg ring-1 ring-white/25"
        animate={{
          scale: isHovered ? [1, 1.2, 1] : [1, 1.1, 1],
          opacity: isHovered ? [0.2, 0.4, 0.2] : [0.15, 0.28, 0.15],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-4 right-4 w-16 h-16 bg-white/12 rounded-full shadow-lg ring-1 ring-white/20"
        animate={{
          scale: isHovered ? [1, 1.3, 1] : [1, 1.15, 1],
          opacity: isHovered ? [0.15, 0.35, 0.15] : [0.12, 0.22, 0.12],
          x: [0, -8, 0],
          y: [0, 6, 0]
        }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      />
      
      <motion.div
        className="absolute top-16 right-16 w-10 h-10 bg-white/18 rounded-full shadow-md ring-1 ring-white/30"
        animate={{
          scale: isHovered ? [1, 1.15, 1] : [1, 1.08, 1],
          opacity: isHovered ? [0.25, 0.5, 0.25] : [0.18, 0.32, 0.18],
          rotate: [0, -90, -180]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
      />
    </>
  );
});