import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Pilar = {
  title: string;
  description: string;
  details: string;
  image?: string;
};

interface HorizontalCardsProps {
  color?: string; // dynamic product color (e.g. hsl string or hex)
  items: Pilar[]; // exactly 3 items
  heading?: string;
  subheading?: string;
}

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

const defaultImages = [
  "/images/pilares/protection.jpg",
  "/images/pilares/efficacy.jpg",
  "/images/pilares/technology.jpg"
];

export const HorizontalCards: React.FC<HorizontalCardsProps> = ({
  color = "hsl(var(--primary))",
  items,
  heading = "Triple pilar de acción",
  subheading = "Tecnología avanzada que combina tres mecanismos de acción para máxima efectividad",
}) => {
  // Función para crear gradiente basado en el color del producto
  const getCardGradient = (index: number): string => {
    const baseColor = color;

    switch (index) {
      case 0:
        return `linear-gradient(135deg, ${baseColor}30 0%, ${baseColor}20 50%, ${baseColor}08 100%)`;
      case 1:
        return `linear-gradient(135deg, ${baseColor}08 0%, ${baseColor}25 50%, ${baseColor}10 100%)`;
      case 2:
        return `linear-gradient(135deg, ${baseColor}15 0%, ${baseColor}08 50%, ${baseColor}28 100%)`;
      default:
        return `linear-gradient(135deg, ${baseColor}20 0%, ${baseColor}10 100%)`;
    }
  };

  return (
    <motion.section
      className="py-20 relative overflow-hidden bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-36">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-avenir-cyr-heavy" style={{ color }}>
            {heading}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subheading}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
          {items.slice(0, 3).map((pilar, index) => {

            console.log("Pilar image:", pilar);

            const imageUrl = pilar.image || defaultImages[index % defaultImages.length];
            return (
              <motion.div
                key={index}
                className="group"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className="bg-card text-card-foreground rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden group"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                >
                  {/* Gradiente de fondo */}
                  <div
                    className="absolute inset-0 opacity-75 group-hover:opacity-95 transition-opacity duration-300"
                    style={{ background: getCardGradient(index) }}
                  ></div>

                  {/* Contenido */}
                  <div className="relative z-10">
                    {/* Image Square */}
                    <div className="flex justify-center mb-6">
                      <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={imageUrl}
                          alt={pilar.title}
                          width={128}
                          height={128}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    <div className="pb-4 px-4">
                      {/* Title */}
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {pilar.title}
                        </h3>
                        <div
                          className="h-1 rounded-full mx-auto"
                          style={{ width: 44, backgroundColor: color }}
                        />
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 text-center text-md leading-relaxed">
                        {pilar.description}
                      </p>

                      {/* Details */}
                      <div className="rounded-lg bg-muted/30 p-4 border-l-4" style={{ borderColor: color }}>
                        <p className="text-md text-muted-foreground leading-relaxed">
                          {pilar.details}
                        </p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default HorizontalCards;