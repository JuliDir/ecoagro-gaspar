import { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "COBRESTABLE",
    color: "#0098da",
    gradient: "from-sky-400 to-blue-600",
    description:
      "Cobre complejo con fosfitos que actúa como bactericida, fungicida y bioestimulante. Controla enfermedades y refuerza las defensas naturales de la planta.",
    features: [
      "Triple acción: fungicida, bactericida y bioestimulante",
      "Activa defensas (SAR, fitoalexinas, lignina)",
      "Previene resistencia combinando con sintéticos",
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
      "Caldo bordelés ultramicronizado (≈1 µm), listo para usar. Máxima adherencia post-lluvia, ideal para agricultura orgánica. Alta eficacia con menor dosis de cobre.",
    features: [
      "Alta adherencia incluso con lluvia (hasta 30 mm)",
      "Certificado para agricultura orgánica (ECOCERT, OIA)",
      "Mayor cobertura y residualidad con menor dosis",
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
      "Cobre tribásico coloidal (50 %) con partículas <1.5 µm y adherente siliconado. Alta residualidad (hasta 40 días) y excelente adherencia en citricultura y frutales.",
    features: [
      "Partículas ultrafinas para máxima cobertura",
      "Alta retención incluso tras lluvias fuertes",
      "Ideal para cítricos: cancrosis y mancha negra",
    ],
    icon: "/images/products/trikopper.png",
    bgIcon: "/icons/soy.svg",
  },
];