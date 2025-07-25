"use client";

import { easeOut, motion } from "framer-motion";
import { products } from "@/lib/data/products";
import { useProductAnimations } from "@/hooks/useProductAnimations";
import { ProductCard } from "./ProductCard";
import { Suspense, lazy } from "react";
import { Product } from "@/lib/types/Product";

const LazyBackgroundDecorations = lazy(() => import("./BackgroundDecoration").then(module => ({ default: module.BackgroundDecorations })));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05 
    }
  }
};

const productVariants = {
  hidden: {
    opacity: 0,
    x: 50, 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5, 
      ease: easeOut
    }
  }
};

const ProductFallback = ({ product }: { product: Product }) => (
  <div className="relative w-full overflow-hidden">
    <div className={`relative w-full bg-gradient-to-r ${product.gradient} py-16 lg:py-20`}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-softhits">
              {product.name}
            </h3>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {product.description}
            </p>
            <div className="space-y-4">
              {product.features.map((feature: string, featureIndex: number) => (
                <div key={featureIndex} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-white/80 rounded-full mt-1 flex-shrink-0" />
                  <span className="text-lg font-medium text-white/95">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <button className="cursor-pointer mt-8 py-4 px-8 rounded-xl bg-white/20 backdrop-blur-sm text-white font-bold text-lg border-2 border-white/30 transition-all duration-300 hover:bg-white/30">
              Más Información
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function ProductsSection() {
  const { 
    hoveredProduct, 
    setHoveredProduct, 
    isMounted, 
    windowWidth, 
    staticParticles 
  } = useProductAnimations();

  // Render inmediato sin esperar animaciones
  if (!isMounted) {
    return (
      <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden" id="productos">
        <div className="space-y-0 relative z-10">
          {products.map((product) => (
            <ProductFallback key={product.id} product={product} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      className="w-full bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden" 
      id="productos"
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        amount: 0.05, 
        margin: "0px 0px -100px 0px" 
      }}
      variants={containerVariants}
    >
      {/* Products Section */}
      <div className="space-y-0 relative z-10">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            variants={productVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Suspense fallback={<ProductFallback product={product} />}>
              <ProductCard
                product={product}
                index={index}
                hoveredProduct={hoveredProduct}
                setHoveredProduct={setHoveredProduct}
                windowWidth={windowWidth}
              />
            </Suspense>
          </motion.div>
        ))}
      </div>

      {/* Background decorations con lazy loading */}
      <Suspense fallback={<div />}>
        <LazyBackgroundDecorations staticParticles={staticParticles} />
      </Suspense>
    </motion.section>
  );
}