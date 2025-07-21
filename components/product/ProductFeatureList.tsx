import { motion } from "framer-motion";

interface ProductFeatureListProps {
  features: string[];
  hoveredProduct: number | null;
  productId: number;
  index: number;
}

export const ProductFeatureList: React.FC<ProductFeatureListProps> = ({
  features,
  hoveredProduct,
  productId,
  index
}) => {
  return (
    <motion.div
      className="space-y-4"
      animate={{
        opacity: hoveredProduct === productId ? 1 : 0.9
      }}
    >
      {features.map((feature, featureIndex) => (
        <motion.div
          key={featureIndex}
          className="flex items-start space-x-4"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ 
            delay: featureIndex * 0.1 + (index * 0.3), 
            duration: 0.5 
          }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-3 h-3 bg-white rounded-full mt-1 flex-shrink-0"
            animate={{
              scale: hoveredProduct === productId ? [1, 1.3, 1] : 1,
              opacity: hoveredProduct === productId ? [0.8, 1, 0.8] : 0.8
            }}
            transition={{
              duration: 0.8,
              repeat: hoveredProduct === productId ? Infinity : 0,
              delay: featureIndex * 0.2
            }}
          />
          <span className="text-lg font-medium text-white/95">
            {feature}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};