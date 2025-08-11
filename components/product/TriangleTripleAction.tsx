import { motion } from "framer-motion";
import { Shield, Sparkles, FlaskConical } from "lucide-react";
import React from "react";

type Pilar = {
  title: string;
  description: string;
  details: string;
};

interface TriangleTripleActionProps {
  color?: string; // dynamic product color (e.g. hsl string or hex)
  items: Pilar[]; // exactly 3 items
  heading?: string;
  subheading?: string;
}

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const lineVariants = (delay = 0) => ({
  hidden: { pathLength: 0 },
  visible: { pathLength: 1, transition: { duration: 1.4, delay } },
});

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

const icons = [Shield, Sparkles, FlaskConical];

export const TriangleTripleAction: React.FC<TriangleTripleActionProps> = ({
  color = "hsl(var(--primary))",
  items,
  heading = "Triple pilar de acción",
  subheading = "Tecnología avanzada que combina tres mecanismos de acción para máxima efectividad",
}) => {
  const positions = [
    { x: 50, y: 16, tooltip: "right", delay: 0.2 }, // top center (tooltip right)
    { x: 25, y: 72, tooltip: "left", delay: 0.4 }, // bottom left
    { x: 75, y: 72, tooltip: "right", delay: 0.6 }, // bottom right
  ];

  const stroke = color;

  return (
    <motion.section
      className="py-20 relative overflow-hidden bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-avenir-cyr-heavy" style={{ color }}>
            {heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {subheading}
          </p>
        </header>

        <div className="relative max-w-4xl mx-auto">
          {/* SVG overlay with percentage-based coordinates so lines always hit circle centers */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <motion.line
              x1={positions[0].x}
              y1={positions[0].y}
              x2={positions[1].x}
              y2={positions[1].y}
              stroke={stroke}
              strokeWidth="2.5"
              strokeDasharray="6,5"
              className="opacity-50"
              variants={lineVariants(0.1)}
              initial="hidden"
              animate="visible"
            />
            <motion.line
              x1={positions[0].x}
              y1={positions[0].y}
              x2={positions[2].x}
              y2={positions[2].y}
              stroke={stroke}
              strokeWidth="2.5"
              strokeDasharray="6,5"
              className="opacity-50"
              variants={lineVariants(0.2)}
              initial="hidden"
              animate="visible"
            />
            <motion.line
              x1={positions[1].x}
              y1={positions[1].y}
              x2={positions[2].x}
              y2={positions[2].y}
              stroke={stroke}
              strokeWidth="3.5"
              strokeDasharray="6,5"
              className="opacity-50"
              variants={lineVariants(0.3)}
              initial="hidden"
              animate="visible"
            />
          </svg>

          {/* Node layer */}
          <div className="relative z-10 h-[560px] w-full">
            {items.slice(0, 3).map((pilar, index) => {
              const Icon = icons[index % icons.length];
              const pos = positions[index];
              return (
                <motion.div
                  key={index}
                  className="group absolute"
                  style={{ left: `${pos.x - 10}%`, top: `${pos.y - 10}%`, transform: "translate(-40%, -20%)" }}
                  variants={cardVariants}
                >
                  <motion.div
                    className="relative flex flex-col items-center"
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  >
                    {/* Circle */}
                    <motion.div
                      className="w-28 h-28 rounded-full flex items-center justify-center relative overflow-hidden shadow-sm text-primary-foreground"
                      style={{ backgroundColor: color }}
                      animate={{
                        boxShadow: [
                          `0 0 0 0px ${stroke}00`,
                          `0 0 0 8px ${stroke}20`,
                          `0 0 0 16px ${stroke}10`,
                          `0 0 0 24px ${stroke}06`,
                          `0 0 0 0px ${stroke}00`,
                        ],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                      whileHover={{ scale: 1.1, boxShadow: `0 20px 40px -10px ${stroke}60` }}
                    >
                      <Icon className="w-12 h-12 relative z-10" />

                      {/* Pulsing rings (restored richer animation) */}
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
                            style={{ top: "10%", left: "50%", transformOrigin: "0 40px" }}
                            animate={{ rotate: i * 60, scale: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>

                    {/* Label */}
                    <div className="mt-4 text-center">
                      <h3 className="text-base font-semibold text-foreground">
                        {pilar.title}
                      </h3>
                      <div
                        className="h-1 rounded-full mx-auto mt-2"
                        style={{ width: 44, backgroundColor: color }}
                      />
                    </div>

                    {/* Tooltip/card - always visible */}
                    <div
                      className="absolute z-[60] w-80 bg-card text-card-foreground rounded-2xl border p-5 shadow-xl transition-all duration-200"
                      style={{
                        ...(pos.tooltip === "top"
                          ? { top: "100%", left: "50%", transform: "translate(-50%, 12px)" }
                          : pos.tooltip === "left"
                          ? { right: "100%", top: "50%", transform: "translate(calc(-12px), -50%)" }
                          : { left: "100%", top: "50%", transform: "translate(12px, -50%)" }),
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-primary-foreground"
                          style={{ backgroundColor: color }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-1">{pilar.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{pilar.description}</p>
                          <div className="rounded-md bg-muted/30 p-3 border-l-4" style={{ borderColor: color }}>
                            <p className="text-xs text-muted-foreground leading-relaxed">{pilar.details}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TriangleTripleAction;