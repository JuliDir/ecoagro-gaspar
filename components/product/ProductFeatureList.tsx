// components/ProductFeatureList.tsx (Optimizado)
import { motion } from "framer-motion";
import { memo } from "react";

interface ProductFeatureListProps {
  features: string[];
  hoveredProduct: number | null;
  productId: number;
  index: number;
}

// Memoizar para evitar re-renders innecesarios
export const ProductFeatureList = memo<ProductFeatureListProps>(function ProductFeatureList({
  features,
  hoveredProduct,
  productId,
  index
}) {
  const isHovered = hoveredProduct === productId;

  return (
    <motion.div
      className="space-y-4"
      animate={{
        opacity: isHovered ? 1 : 0.95 // Reducir la diferencia de opacidad
      }}
      transition={{ duration: 0.2 }} // Más rápido
    >
      {features.map((feature, featureIndex) => (
        <motion.div
          key={featureIndex}
          className="flex items-start space-x-4"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ 
            delay: featureIndex * 0.05 + (index * 0.1), // Reducir delays
            duration: 0.3 // Reducir duración
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div
            className="w-3 h-3 bg-white rounded-full mt-1 flex-shrink-0"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              opacity: isHovered ? [0.8, 1, 0.8] : 0.8
            }}
            transition={{
              duration: 0.6, // Reducir duración
              repeat: isHovered ? Infinity : 0,
              delay: featureIndex * 0.1 // Reducir delay
            }}
          />
          <span className="text-lg font-medium text-white/95">
            {feature}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
});