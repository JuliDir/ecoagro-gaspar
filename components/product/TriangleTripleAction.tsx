import { motion } from "framer-motion";
import { Shield, Sparkles, FlaskConical } from "lucide-react";
import React from "react";

type Pilar = {
  title: string;
  description: string;
  details: string;
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

const icons = [Shield, Sparkles, FlaskConical];

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
      className="pt-20 pb-10 relative overflow-hidden bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-32">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-avenir-cyr-heavy" style={{ color }}>
            {heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {subheading}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
          {items.slice(0, 3).map((pilar, index) => {
            const Icon = icons[index % icons.length];
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
                  className="bg-card text-card-foreground rounded-2xl border p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden group"
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
                    {/* Icon Circle */}
                    <div className="flex justify-center mb-6">
                      <motion.div
                        className="w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg text-primary-foreground"
                        style={{ backgroundColor: color }}
                        animate={{
                          boxShadow: [
                            `0 0 0 0px ${color}00`,
                            `0 0 0 8px ${color}20`,
                            `0 0 0 16px ${color}10`,
                            `0 0 0 24px ${color}06`,
                            `0 0 0 0px ${color}00`,
                          ],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                        whileHover={{ scale: 1.1, boxShadow: `0 20px 40px -10px ${color}60` }}
                      >
                        <Icon className="w-10 h-10 relative z-10" />

                        {/* Pulsing rings */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-4"
                          style={{ borderColor: "hsl(var(--foreground)/0.40)" as React.CSSProperties["color"] }}
                          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.3, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-full border-2"
                          style={{ borderColor: "hsl(var(--foreground)/0.30)" as React.CSSProperties["color"] }}
                          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.15, 0.6] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        />

                        {/* Hover wave effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-4"
                          style={{ borderColor: "hsl(var(--foreground)/0.55)" as React.CSSProperties["color"] }}
                          initial={{ scale: 1, opacity: 0 }}
                          whileHover={{ scale: [1, 1.5, 2], opacity: [0.6, 0.3, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                        />

                        {/* Floating particles */}
                        <motion.div
                          className="absolute inset-0"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 rounded-full bg-primary-foreground/60"
                              style={{ top: "10%", left: "50%", transformOrigin: "0 30px" }}
                              animate={{ rotate: i * 60, scale: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                            />
                          ))}
                        </motion.div>
                      </motion.div>
                    </div>

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