import { useState, useEffect, useMemo } from "react";
import { generateParticleData } from "@/lib/utils";

export const useProductAnimations = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);

  const staticParticles = useMemo(() => generateParticleData(), []);

  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    hoveredProduct,
    setHoveredProduct,
    isMounted,
    windowWidth,
    staticParticles
  };
};