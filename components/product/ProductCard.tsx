// components/ProductCard.tsx (Optimizado)
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types/Product";
import { ProductFeatureList } from "./ProductFeatureList";
import { ProductImage } from "./ProductImage";
import { memo, useMemo } from "react";

interface ProductCardProps {
  product: Product;
  index: number;
  hoveredProduct: number | null;
  setHoveredProduct: (id: number | null) => void;
  windowWidth: number;
}

// Mapping de nombres de productos a sus slugs (memoizado)
const PRODUCT_SLUG_MAP: { [key: string]: string } = {
  "COBRESTABLE": "cobrestable",
  "BORDOCALD": "bordocald", 
  "TRIKOPPER 50": "trikopper-50"
};

const getProductSlug = (productName: string): string => {
  return PRODUCT_SLUG_MAP[productName] || productName.toLowerCase().replace(/\s+/g, '-');
};

// Memoizar el componente para evitar re-renders innecesarios
export const ProductCard = memo<ProductCardProps>(function ProductCard({
  product,
  index,
  hoveredProduct,
  setHoveredProduct,
  windowWidth
}) {
  const productSlug = useMemo(() => getProductSlug(product.name), [product.name]);
  const isHovered = hoveredProduct === product.id;

  // Optimización: reducir animaciones complejas
  const handleMouseEnter = () => setHoveredProduct(product.id);
  const handleMouseLeave = () => setHoveredProduct(null);

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden"
      // Simplificar las animaciones de entrada
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <motion.div
        className={`relative w-full bg-gradient-to-r ${product.gradient} py-16 lg:py-20`}
        // Reducir la intensidad de la animación de hover
        animate={{
          scale: isHovered ? 1.01 : 1, // Reducido de 1.02 a 1.01
        }}
        transition={{ duration: 0.3, ease: "easeOut" }} // Reducido de 0.5 a 0.3
      >
        {/* Ícono de fondo - Optimizado */}
        <motion.div
          className="absolute inset-0 flex items-center justify-end pr-20 overflow-hidden"
          animate={{
            scale: isHovered ? 1.05 : 1, // Reducido de 1.1 a 1.05
            rotate: isHovered ? 2 : 0,
            x: isHovered ? -10 : 0, // Reducido de -20 a -10
          }}
          transition={{ duration: 0.3 }} // Reducido de 0.6 a 0.3
        >
          <Image
            src={product.bgIcon}
            alt=""
            width={300}
            height={300}
            className="opacity-10 brightness-0 invert lg:w-80 lg:h-80"
            priority={index === 0} // Solo priority para el primer producto
            loading={index === 0 ? "eager" : "lazy"} // Lazy loading para productos no visibles
          />
        </motion.div>

        {/* Overlay con patrón */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

        {/* Contenido */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenido de texto */}
            <motion.div
              className="space-y-6"
              animate={{
                x: isHovered ? 5 : 0, // Reducido de 10 a 5
              }}
              transition={{ duration: 0.2 }} // Reducido de 0.3 a 0.2
            >
              <motion.h3
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-softhits"
                animate={{
                  scale: isHovered ? 1.02 : 1 // Reducido de 1.05 a 1.02
                }}
                transition={{ duration: 0.2 }}
              >
                {product.name}
              </motion.h3>

              <p className="text-xl text-white/90 leading-relaxed mb-8">
                {product.description}
              </p>

              <ProductFeatureList
                features={product.features}
                hoveredProduct={hoveredProduct}
                productId={product.id}
                index={index}
              />

              {/* Botón con Link - Simplificado */}
              <Link href={`/products/${productSlug}`}>
                <motion.button
                  className="cursor-pointer mt-8 py-4 px-8 rounded-xl bg-white/20 backdrop-blur-sm text-white font-bold text-lg border-2 border-white/30 transition-all duration-300 hover:bg-white/30"
                  whileHover={{
                    scale: 1.02, // Reducido de 1.05 a 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    y: isHovered ? -2 : 0 // Reducido de -3 a -2
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Más Información
                </motion.button>
              </Link>
            </motion.div>

            <ProductImage 
              product={product}
              hoveredProduct={hoveredProduct}
            />
          </div>
        </div>

        {/* Efecto de brillo en hover - Condicional para mejor performance */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: [windowWidth],
              opacity: [0, 0.3, 0]
            }}
            transition={{ duration: 0.8 }} // Reducido de 1 a 0.8
          />
        )}
      </motion.div>
    </motion.div>
  );
});