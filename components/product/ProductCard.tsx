
import { Product } from "@/lib/types/Product";
import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProductCardProps {
  product: Product
  index: number
}

// Mapping de nombres de productos a sus slugs
const PRODUCT_SLUG_MAP: { [key: string]: string } = {
  "COBRESTABLE": "cobrestable",
  "BORDOCALD": "bordocald",
  "TRIKOPPER 50": "trikopper-50"
};

// Mapping de nombres de productos a sus logos
const PRODUCT_LOGO_MAP: { [key: string]: string } = {
  "COBRESTABLE": "/images/products/cobrestable-logo.png",
  "BORDOCALD": "/images/products/bordocald-logo.png",
  "TRIKOPPER 50": "/images/products/trikopper-logo.png"
};

const getProductSlug = (productName: string): string => {
  return PRODUCT_SLUG_MAP[productName] || productName.toLowerCase().replace(/\s+/g, '-');
};

const getProductLogo = (productName: string): string => {
  return PRODUCT_LOGO_MAP[productName] || "/images/products/default-logo.jpeg";
};

export default function ProductCard({ product, index }: ProductCardProps) {

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };

  return (
    <motion.div
      key={product.id}
      variants={cardVariants}
      className="group"
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <Link href={`/products/${getProductSlug(product.name)}`} className="block">
        <motion.div
          className={`relative rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 h-106 cursor-pointer`}
          style={{background: product.color}}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Ícono de fondo decorativo */}
          <div className="absolute inset-0 flex items-center justify-end pr-8 overflow-hidden">
            <Image
              src={product.bgIcon}
              alt=""
              width={200}
              height={200}
              className="opacity-10 brightness-0 invert"
            />
          </div>

          {/* Contenido */}
          <div className="relative z-10 h-full flex flex-col p-8 text-white">
            {/* Header con registro y categoría - siempre visible */}
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <span className="inline-block bg-white/30 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm border border-white/40 font-medium">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Logo más grande arriba a la izquierda */}
            <div className="mb-6">
              <motion.div
                animate={{
                  scale: hoveredCard === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={getProductLogo(product.name)}
                  alt={`Logo ${product.name}`}
                  width={450}
                  height={200}
                  className="object-contain"
                  priority={index < 3}
                />
              </motion.div>
            </div>

            {/* Imagen del producto centrada y más grande */}
            <div className="flex-1 flex items-center justify-center">
              <motion.div
                className="relative"
                animate={{
                  scale: hoveredCard === index ? 1.1 : 1,
                  rotate: hoveredCard === index ? 2 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={product.icon}
                  alt={product.name}
                  width={350}
                  height={350}
                  className="object-contain"
                  priority={index < 3}
                />
              </motion.div>
            </div>
          </div>

          {/* Efecto de brillo en hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
            animate={{
              opacity: hoveredCard === index ? [0, 0.3, 0] : 0,
              x: hoveredCard === index ? [-200, 400] : -200,
            }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  )
}