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
    icon: "/images/products/cobrestable-box.png",
    bgIcon: "/icons/wheat.svg",
    category: "Fungicidas",
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
    icon: "/images/products/bordocald-box.png",
    bgIcon: "/icons/corn.svg",
    category: "Fungicidas",
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
    icon: "/images/products/trikopper-box.png",
    bgIcon: "/icons/soy.svg",
    category: "Fungicidas",
  },
];

export const productsData = {
  cobrestable: {
    name: "COBRESTABLE",
    description: "Cobre de máxima biodisponibilidad con triple acción. Controla enfermedades y refuerza y activa las defensas naturales de la planta",
    color: "cobrestable",
    cssColor: "#0098da", 
    gradient: "from-sky-400 to-blue-600", 
    icon: "/images/products/cobrestable-box.png",
    registro: "SENASA AR #34.300",
    triplePilar: [
      {
        title: "Acción bactericida y fungicida",
        description: "Efectivo contra bacterias y enfermedades policíclicas (como mildius, tizones, rabia del garbanzo).",
        details: "Especialmente útil en estrategias que buscan controlar las bacteriosis donde pocas herramientas están disponibles.",
        image: "/images/products/fungicida.jpg"
      },
      {
        title: "Sinergia con fungicidas",
        description: "Se clasifica como fungicida FRAC M (multisitio), 'banda verde' y no requiere adherente adicional.",
        details: "Compatible con fungicidas específicos, ayudando a prevenir la aparición de resistencias en patógenos.",
        image: "/images/products/sinergia.jpg"
      },
      {
        title: "Estimula las defensas naturales",
        description: "Contiene fosfitos de cobre, potasio y amonio que inducen respuestas de defensa.",
        details: "Su formulación permite inducir respuestas de defensa (hídrico, térmico, oxidativo, etc).",
        image: "/images/products/defensas.png"
      }
    ],
    modoAccion: {
      cobertura: "Acción de contacto, translaminar y sistémica con doble barrera de protección (externa e interna)",
      penetracion: "Penetra por estomas, estimula defensas naturales, y su carga nutricional ayuda a las plantas a lidiar con el estrés"
    },
    cultivos: ["garbanzo", "poroto", "mani", "soja", "papa", "vid", "cítricos"],
    aplicacion: {
      equipos: "desde mochila hasta aplicaciones aéreas",
      compatibilidad: "combinar con pesticidas usuales, preferible agregar primero Cobrestable (lleva adherente siliconado)",
      intervaloSeguridad: "1 día antes de cosecha"
    },
  },
  bordocald: {
    name: "BORDOCALD",
    description: "Caldo bordelés coloidal listo para usar.",
    color: "bordocald",
    cssColor: "#9a3388",
    gradient: "from-fuchsia-400 to-purple-600", 
    icon: "/images/products/bordocald-box.png",
    registro: "SENASA AR #35.924",
    triplePilar: [
      {
        title: "Tecnología Ultramicronizada",
        description: "Partículas de ≈1 µm que garantizan máxima cobertura y penetración foliar.",
        details: "La micronización ultra‑fina permite una distribución homogénea y mayor superficie de contacto con el patógeno.",
        image: "/images/products/tecnologia-micronizada-bordocald.png"
      },
      {
        title: "Máxima Adherencia",
        description: "Mantiene efectividad incluso con precipitaciones de hasta 30 mm después de la aplicación.",
        details: "Formulación especial con adherentes naturales que resisten el lavado por lluvia, extendiendo la protección.",
        image: "/images/products/adherencia-lluvia.jpg"
      },
      {
        title: "Máximo Poder Residual",
        description: "Eficaz en el control de cancrosis y mancha negra en cítricos.",
        details: "Proporciona un efecto prolongado en la superficie foliar, asegurando una protección continua contra enfermedades.",
        image: "/images/products/poder-residual.jpg"
      }
    ],
    modoAccion: {
      cobertura: "Acción preventiva de contacto con alta persistencia y redistribución superficial",
      penetracion: "Liberación controlada de iones de cobre que forman una barrera protectora duradera"
    },
    cultivos: ["vid", "olivo"],
    aplicacion: {
      equipos: "pulverizadores terrestres y aéreos, compatible con sistemas de riego",
      compatibilidad: "compatible con la mayoría de fungicidas e insecticidas, evitar mezclas alcalinas",
      intervaloSeguridad: "sin carencia para consumo"
    },
  },
  "trikopper-50": {
    name: "TRIKOPPER 50",
    description: "Cobre tribásico coloidal ultra micronizado, excelente adherencia y máxima residualidad.",
    color: "trikopper",
    cssColor: "#00a859", 
    gradient: "from-green-400 to-emerald-600", 
    icon: "/images/products/trikopper-box.png",
    registro: "SENASA AR #36.079",
    triplePilar: [
      {
        title: "Tecnología Ultramicronizada",
        description: "Partículas de ≈1 µm que garantizan máxima cobertura y penetración foliar.",
        details: "La micronización ultra‑fina permite una distribución homogénea y mayor superficie de contacto con el patógeno.",
        image: "/images/products/tecnologia-micronizada-trikopper.png"
      },
      {
        title: "Máxima Adherencia",
        description: "Mantiene efectividad incluso con precipitaciones de hasta 30 mm después de la aplicación.",
        details: "Formulación especial con adherentes naturales que resisten el lavado por lluvia, extendiendo la protección.",
        image: "/images/products/adherencia-lluvia.jpg"
      },
      {
        title: "Máximo Poder Residual",
        description: "Eficaz en el control de cancrosis y mancha negra en cítricos.",
        details: "Proporciona un efecto prolongado en la superficie foliar, asegurando una protección continua contra enfermedades.",
        image: "/images/products/poder-residual.jpg"
      }
    ],
    modoAccion: {
      cobertura: "Acción preventiva y curativa con liberación sostenida de cobre activo",
      penetracion: "Penetración cuticular mejorada y formación de reservorio activo en la superficie foliar"
    },
    cultivos: ["cítricos"],
    aplicacion: {
      equipos: "equipos de alto volumen recomendados, compatible con aplicaciones mecanizadas",
      compatibilidad: "excelente compatibilidad con aceites e insecticidas, evitar pH extremos",
      intervaloSeguridad: "7 días antes de cosecha"
    },
  }
};