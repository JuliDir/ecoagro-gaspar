// components/BackgroundDecorations.tsx
import { motion } from "framer-motion";
import { Particle } from "@/lib/types/Particle";

interface BackgroundDecorationsProps {
  staticParticles: Particle[];
}

export const BackgroundDecorations: React.FC<BackgroundDecorationsProps> = ({
  staticParticles
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Círculos grandes estáticos */}
      <motion.div
        className="absolute top-32 left-20 w-40 h-40 bg-cyan-300 opacity-8 rounded-full blur-2xl shadow-xl ring-2 ring-cyan-200/10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-32 w-48 h-48 bg-violet-300 opacity-8 rounded-full blur-2xl shadow-xl ring-2 ring-violet-200/10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -25, 0],
          y: [0, 25, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Partículas con datos pre-generados */}
      {staticParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full shadow-sm"
          style={{
            width: `${particle.size * 4}px`,
            height: `${particle.size * 4}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            backgroundColor: `hsl(${particle.hue}, 70%, 80%)`,
            opacity: particle.opacity,
            filter: `blur(${particle.blur}px)`
          }}
          animate={{
            scale: [1, particle.scale, 1],
            x: [0, particle.xOffset, 0],
            y: [0, particle.yOffset, 0],
            rotate: [0, particle.rotation]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}
    </div>
  );
};