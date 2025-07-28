import { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "COBRESTABLE",
    color: "#0098da",
    gradient: "from-sky-400 to-blue-600",
    description:
      "Cobre de máxima biodisponibilidad con triple acción. Controla enfermedades y refuerza y activa las defensas naturales de la planta",
    features: [
      "Triple acción sistémico, multi sitio y acción nutricional.",
      "Activa las defensas naturales promoviendo la síntesis de fitoalexina.",
      "Refuerza la estructura de las paredes celulares, aumentando la síntesis de lignina.",
      "Altamente eficaz para prevenir o detener la resistencia de los patógenos, a lo sumo fungicidas de síntesis. Ideal para aplicaciones combinadas."
    ],
    icon: "/images/products/cobrestable.png",
    bgIcon: "/icons/wheat.svg",
  },
  {
    id: 2,
    name: "BORDOCALD",
    color: "#9a3388",
    gradient: "from-fuchsia-400 to-purple-600", 
    description:
      "Caldo bordelés coloidal listo para usar.",
    features: [
      "Máxima adherencia y poder residual.",
      "Mayor eficacia con menor cantidad de cobre metálico.",
      "Certificado para agricultura orgánica.",
    ],
    icon: "/images/products/bordocald.png",
    bgIcon: "/icons/corn.svg",
  },
  {
    id: 3,
    name: "TRIKOPPER 50",
    color: "#00a859",
    gradient: "from-green-400 to-emerald-600", 
    description:
      "Cobre tribásico coloidal ultra micronizado, excelente adherencia y máxima residualidad.",
    features: [
      "Partículas ultrafinas para máxima cobertura",
      "Alta retención incluso tras lluvias fuertes",
      "Ideal para cítricos: cancrosis y mancha negra",
    ],
    icon: "/images/products/trikopper.png",
    bgIcon: "/icons/soy.svg",
  },
];