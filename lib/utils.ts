import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Particle } from "./types/Particle";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateParticleData = (): Particle[] => {
  const particles: Particle[] = [];
  for (let i = 0; i < 20; i++) {
    particles.push({
      id: i,
      size: Math.floor(Math.random() * 8) + 4,
      left: Math.random() * 100,
      top: Math.random() * 100,
      hue: Math.random() * 360,
      opacity: 0.02 + Math.random() * 0.06,
      blur: Math.random() * 3 + 1,
      duration: 3 + Math.random() * 6,
      delay: Math.random() * 5,
      xOffset: (Math.random() - 0.5) * 40,
      yOffset: (Math.random() - 0.5) * 40,
      rotation: Math.random() * 360,
      scale: 1.2 + Math.random() * 0.8
    });
  }
  return particles;
};
