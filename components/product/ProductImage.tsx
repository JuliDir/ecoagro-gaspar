import { motion } from "framer-motion";
import Image from "next/image";
import { Product } from "@/lib/types/Product";
import { AnimatedParticles } from "./AnimatedParticles";

interface ProductImageProps {
  product: Product;
  hoveredProduct: number | null;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  product,
  hoveredProduct
}) => {
  return (
    <motion.div
      className="hidden lg:flex items-center justify-center relative"
      animate={{
        scale: hoveredProduct === product.id ? 1.1 : 1,
        rotate: hoveredProduct === product.id ? 2 : 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-full flex items-center justify-center backdrop-blur-sm">
        <Image 
          src={product.icon} 
          alt={product.name} 
          width={540} 
          height={540} 
        />
      </div>

      <AnimatedParticles 
        hoveredProduct={hoveredProduct}
        productId={product.id}
      />
    </motion.div>
  );
};