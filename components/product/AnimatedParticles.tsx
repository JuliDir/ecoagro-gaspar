// components/AnimatedParticles.tsx
import { motion } from "framer-motion";

interface AnimatedParticlesProps {
  hoveredProduct: number | null;
  productId: number;
}

export const AnimatedParticles: React.FC<AnimatedParticlesProps> = ({
  hoveredProduct,
  productId
}) => {
  return (
    <>
      {/* Partículas flotantes - REDUCIDAS EN VISIBILIDAD */}
      <motion.div
        className="absolute top-10 right-10 w-3 h-3 bg-white/50 rounded-full shadow-md ring-1 ring-white/20"
        animate={{
          y: [0, -20, 0],
          opacity: hoveredProduct === productId ? [0.5, 0.7, 0.5] : [0.4, 0.6, 0.4],
          scale: hoveredProduct === productId ? [1, 1.2, 1] : [1, 1.1, 1]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-16 left-12 w-4 h-4 bg-white/45 rounded-full shadow-md ring-1 ring-white/25"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
          opacity: hoveredProduct === productId ? [0.45, 0.65, 0.45] : [0.35, 0.55, 0.35],
          scale: hoveredProduct === productId ? [1, 1.3, 1] : [1, 1.2, 1]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 left-8 w-2 h-2 bg-white/60 rounded-full shadow-sm ring-1 ring-white/30"
        animate={{
          scale: [1, 2, 1],
          opacity: hoveredProduct === productId ? [0.6, 0.8, 0.6] : [0.5, 0.7, 0.5]
        }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
      />

      {/* Partículas adicionales reducidas */}
      <motion.div
        className="absolute top-6 left-16 w-2.5 h-2.5 bg-white/45 rounded-full shadow-sm"
        animate={{
          y: [0, -10, 0],
          x: [0, 8, 0],
          opacity: hoveredProduct === productId ? [0.45, 0.65, 0.45] : [0.35, 0.55, 0.35],
          scale: [1, 1.4, 1]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
      />
      <motion.div
        className="absolute bottom-8 right-20 w-3.5 h-3.5 bg-white/35 rounded-full shadow-sm ring-1 ring-white/15"
        animate={{
          y: [0, 12, 0],
          x: [0, -15, 0],
          opacity: hoveredProduct === productId ? [0.35, 0.55, 0.35] : [0.25, 0.45, 0.25],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1.2 }}
      />
      <motion.div
        className="absolute top-20 right-6 w-1.5 h-1.5 bg-white/55 rounded-full shadow-sm"
        animate={{
          scale: [1, 1.8, 1],
          opacity: hoveredProduct === productId ? [0.55, 0.75, 0.55] : [0.45, 0.65, 0.45]
        }}
        transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}
      />
      <motion.div
        className="absolute bottom-20 left-6 w-3 h-3 bg-white/40 rounded-full shadow-sm ring-1 ring-white/20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.4, 1],
          opacity: hoveredProduct === productId ? [0.4, 0.6, 0.4] : [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1.8 }}
      />
      <motion.div
        className="absolute top-32 left-20 w-2 h-2 bg-white/50 rounded-full shadow-sm"
        animate={{
          y: [0, -8, 0],
          opacity: hoveredProduct === productId ? [0.5, 0.7, 0.5] : [0.4, 0.6, 0.4],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 2.8, repeat: Infinity, delay: 0.6 }}
      />

      {/* Círculos adicionales menos visibles */}
      <motion.div
        className="absolute top-4 left-4 w-10 h-10 bg-white/15 rounded-full shadow-lg ring-1 ring-white/25"
        animate={{
          scale: [1, 1.3, 1],
          opacity: hoveredProduct === productId ? [0.15, 0.35, 0.15] : [0.15, 0.28, 0.15],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-4 right-4 w-14 h-14 bg-white/12 rounded-full shadow-lg ring-1 ring-white/20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: hoveredProduct === productId ? [0.12, 0.3, 0.12] : [0.12, 0.22, 0.12],
          x: [0, -10, 0],
          y: [0, 8, 0]
        }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 1.0 }}
      />
      <motion.div
        className="absolute top-16 right-16 w-8 h-8 bg-white/18 rounded-full shadow-md ring-1 ring-white/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: hoveredProduct === productId ? [0.18, 0.45, 0.18] : [0.18, 0.32, 0.18],
          rotate: [0, -90, -180]
        }}
        transition={{ duration: 3.8, repeat: Infinity, delay: 0.7 }}
      />
      <motion.div
        className="absolute bottom-12 left-8 w-12 h-12 bg-white/14 rounded-full shadow-lg ring-1 ring-white/25"
        animate={{
          scale: [1, 1.4, 1],
          opacity: hoveredProduct === productId ? [0.14, 0.35, 0.14] : [0.14, 0.25, 0.14],
          x: [0, 12, 0]
        }}
        transition={{ duration: 4.2, repeat: Infinity, delay: 1.5 }}
      />
      <motion.div
        className="absolute top-1/3 right-8 w-16 h-16 bg-white/10 rounded-full shadow-xl ring-2 ring-white/15"
        animate={{
          scale: [1, 1.6, 1],
          opacity: hoveredProduct === productId ? [0.1, 0.28, 0.1] : [0.1, 0.20, 0.1],
          y: [0, -15, 0]
        }}
        transition={{ duration: 5.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-4 w-18 h-18 bg-white/8 rounded-full shadow-xl ring-2 ring-white/12"
        animate={{
          scale: [1, 1.8, 1],
          opacity: hoveredProduct === productId ? [0.08, 0.25, 0.08] : [0.08, 0.18, 0.08],
          rotate: [0, 120, 240, 360]
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 2.0 }}
      />
      <motion.div
        className="absolute top-2/3 left-12 w-6 h-6 bg-white/20 rounded-full shadow-md ring-1 ring-white/25"
        animate={{
          scale: [1, 1.1, 1],
          opacity: hoveredProduct === productId ? [0.2, 0.45, 0.2] : [0.2, 0.35, 0.2],
          x: [0, 6, 0],
          y: [0, -12, 0]
        }}
        transition={{ duration: 3.2, repeat: Infinity, delay: 0.9 }}
      />
      <motion.div
        className="absolute top-24 left-24 w-9 h-9 bg-white/16 rounded-full shadow-lg ring-1 ring-white/22"
        animate={{
          scale: [1, 1.25, 1],
          opacity: hoveredProduct === productId ? [0.16, 0.38, 0.16] : [0.16, 0.28, 0.16],
          rotate: [0, 45, 90, 135, 180]
        }}
        transition={{ duration: 4.8, repeat: Infinity, delay: 1.3 }}
      />
    </>
  );
};