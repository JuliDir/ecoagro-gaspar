// components/ProductCard.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types/Product";
import { ProductFeatureList } from "./ProductFeatureList";
import { ProductImage } from "./ProductImage";

interface ProductCardProps {
  product: Product;
  index: number;
  hoveredProduct: number | null;
  setHoveredProduct: (id: number | null) => void;
  windowWidth: number;
}

// Mapping de nombres de productos a sus slugs
const getProductSlug = (productName: string): string => {
  const slugMap: { [key: string]: string } = {
    "COBRESTABLE": "cobrestable",
    "BORDOCALD": "bordocald", 
    "TRIKOPPER 50": "trikopper-50"
  };
  
  return slugMap[productName] || productName.toLowerCase().replace(/\s+/g, '-');
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  hoveredProduct,
  setHoveredProduct,
  windowWidth
}) => {
  const productSlug = getProductSlug(product.name);

  return (
    <motion.div
      onHoverStart={() => setHoveredProduct(product.id)}
      onHoverEnd={() => setHoveredProduct(null)}
      className="relative w-full overflow-hidden"
    >
      <motion.div
        className={`relative w-full bg-gradient-to-r ${product.gradient} py-16 lg:py-20`}
        animate={{
          scale: hoveredProduct === product.id ? 1.02 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Ícono de fondo */}
        <motion.div
          className="absolute inset-0 flex items-center justify-end pr-20 overflow-hidden"
          animate={{
            scale: hoveredProduct === product.id ? 1.1 : 1,
            rotate: hoveredProduct === product.id ? 5 : 0,
            x: hoveredProduct === product.id ? -20 : 0,
          }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={product.bgIcon}
            alt=""
            width={300}
            height={300}
            className="opacity-10 brightness-0 invert lg:w-80 lg:h-80"
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
                x: hoveredProduct === product.id ? 10 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-4xl lg:text-5xl font-bold text-white mb-4 font-softhits"
                animate={{
                  scale: hoveredProduct === product.id ? 1.05 : 1
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

              {/* Botón con Link */}
              <Link href={`/products/${productSlug}`}>
                <motion.button
                  className="cursor-pointer mt-8 py-4 px-8 rounded-xl bg-white/20 backdrop-blur-sm text-white font-bold text-lg border-2 border-white/30 transition-all duration-300 hover:bg-white/30"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.25)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    y: hoveredProduct === product.id ? -3 : 0
                  }}
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

        {/* Efecto de brillo en hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: -200, opacity: 0 }}
          animate={{
            x: hoveredProduct === product.id ? [windowWidth] : -200,
            opacity: hoveredProduct === product.id ? [0, 0.3, 0] : 0
          }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    </motion.div>
  );
};