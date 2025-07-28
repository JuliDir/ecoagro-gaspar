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


export const productsData = {
  cobrestable: {
    name: "COBRESTABLE",
    description: "Cobre de máxima biodisponibilidad con triple acción. Controla enfermedades y refuerza y activa las defensas naturales de la planta",
    color: "cobrestable",
    cssColor: "#0098da", 
    gradient: "from-sky-400 to-blue-600", 
    icon: "/images/products/cobrestable.png",
    registro: "SENASA AR #16.899",
    composicion: {
      sulfatoTetraaminoCuprico: "29%",
      fosfitoPotasio: "15%",
      nitrogeno: "12%",
      fosforo: "1.1%",
      potasio: "2.6%",
      cobre: "4.5%"
    },
    features: [
      "Triple acción sistémico, multi sitio y acción nutricional.",
      "Activa las defensas naturales promoviendo la síntesis de fitoalexina.",
      "Refuerza la estructura de las paredes celulares, aumentando la síntesis de lignina.",
      "Altamente eficaz para prevenir o detener la resistencia de los patógenos, a lo sumo fungicidas de síntesis. Ideal para aplicaciones combinadas."
    ],
    triplePilar: [
      {
        title: "Sinergia con fungicidas",
        description: "Se clasifica como fungicida FRAC M (multisitio), 'banda verde' y no requiere adherente adicional.",
        details: "Compatible con fungicidas específicos, ayudando a prevenir la aparición de resistencias en patógenos."
      },
      {
        title: "Acción bactericida y fungicida",
        description: "Efectivo contra bacterias y enfermedades policíclicas (como mildius, tizones, rabia del garbanzo).",
        details: "Especialmente útil en estrategias que buscan controlar las bacteriosis donde pocas herramientas están disponibles."
      },
      {
        title: "Bioestimulación NutriFit",
        description: "Contiene fosfitos de cobre, potasio y amonio que inducen respuestas de defensa.",
        details: "Síntesis de fitoalexinas y lignina, fortaleciendo paredes celulares y aumentando la tolerancia al estrés (sequía, frío). En leguminosas, mejora la nodulación, la fijación de N y el crecimiento radicular."
      }
    ],
    modoAccion: {
      cobertura: "Acción de contacto, translaminar y sistémica con doble barrera de protección (externa e interna)",
      penetracion: "Penetra por estomas, estimula defensas naturales, y su carga nutricional ayuda a las plantas a lidiar con el estrés"
    },
    cultivos: ["garbanzo", "poroto", "mani", "soja", "papa", "naranja", "limon", "vid", "mandarina", "pomelo"],
    aplicacion: {
      equipos: "desde mochila hasta aplicaciones aéreas",
      compatibilidad: "combinar con pesticidas usuales, preferible agregar primero Cobrestable (lleva adherente siliconado)",
      intervaloSeguridad: "1 día antes de cosecha"
    },
    documentacion: [
      "Ficha técnica (PDF)",
      "Hoja de seguridad",
      "Recomendaciones de uso",
      "Protocolos específicos por cultivo"
    ]
  },
  bordocald: {
    name: "BORDOCALD",
    description: "Caldo bordelés coloidal listo para usar.",
    color: "bordocald",
    cssColor: "#9a3388",
    gradient: "from-fuchsia-400 to-purple-600", 
    icon: "/images/products/bordocald.png",
    registro: "SENASA AR #17.245",
    composicion: {
      oxicloruroCobre: "35%",
      hidroxidoCobre: "15%",
      sulfatoCobre: "8%",
      cobre: "20%",
      ph: "8.2",
      densidad: "1.45 g/cm³"
    },
    features: [
      "Máxima adherencia y poder residual.",
      "Mayor eficacia con menor cantidad de cobre metálico.",
      "Certificado para agricultura orgánica."
    ],
    triplePilar: [
      {
        title: "Tecnología Ultramicronizada",
        description: "Partículas de ≈1 µm que garantizan máxima cobertura y penetración foliar.",
        details: "La micronización ultra‑fina permite una distribución homogénea y mayor superficie de contacto con el patógeno."
      },
      {
        title: "Alta Adherencia Post‑Lluvia",
        description: "Mantiene efectividad incluso con precipitaciones de hasta 30 mm después de la aplicación.",
        details: "Formulación especial con adherentes naturales que resisten el lavado por lluvia, extendiendo la protección."
      },
      {
        title: "Certificación Orgánica",
        description: "Certificado para agricultura orgánica por ECOCERT y OIA.",
        details: "Cumple con los estándares más exigentes de producción orgánica, siendo una herramienta clave para productores certificados."
      }
    ],
    modoAccion: {
      cobertura: "Acción preventiva de contacto con alta persistencia y redistribución superficial",
      penetracion: "Liberación controlada de iones de cobre que forman una barrera protectora duradera"
    },
    cultivos: ["vid", "oliva"],
    aplicacion: {
      equipos: "pulverizadores terrestres y aéreos, compatible con sistemas de riego",
      compatibilidad: "compatible con la mayoría de fungicidas e insecticidas, evitar mezclas alcalinas",
      intervaloSeguridad: "sin carencia para consumo"
    },
    documentacion: [
      "Certificación orgánica ECOCERT",
      "Certificación OIA",
      "Ficha técnica completa",
      "Protocolos para agricultura orgánica"
    ]
  },
  "trikopper-50": {
    name: "TRIKOPPER 50",
    description: "Cobre tribásico coloidal ultra micronizado, excelente adherencia y máxima residualidad.",
    color: "trikopper",
    cssColor: "#00a859", 
    gradient: "from-green-400 to-emerald-600", 
    icon: "/images/products/trikopper.png",
    registro: "SENASA AR #18.156",
    composicion: {
      cobreTributico: "50%",
      cobreElemental: "35%",
      adherenteSiliconado: "3%",
      dispersantes: "5%",
      ph: "7.5",
      densidad: "2.1 g/cm³"
    },
    features: [
      "Partículas ultrafinas para máxima cobertura",
      "Alta retención incluso tras lluvias fuertes",
      "Ideal para cítricos: cancrosis y mancha negra"
    ],
    triplePilar: [
      {
        title: "Partículas Ultrafinas",
        description: "Tecnología coloidal con partículas <1.5 µm para máxima cobertura superficial.",
        details: "El tamaño ultra-fino de partículas garantiza una cobertura homogénea y persistente, especialmente en superficies cerosas como cítricos."
      },
      {
        title: "Adherente Siliconado Integrado",
        description: "Sistema de adherencia avanzado que resiste lluvias fuertes y vientos.",
        details: "La formulación incluye adherentes siliconados que forman una película flexible y resistente, manteniendo el producto activo por hasta 40 días."
      },
      {
        title: "Especialista en Cítricos",
        description: "Formulación específica para el control de cancrosis y mancha negra en cítricos.",
        details: "Optimizado para penetrar la cutícula cerosa de los cítricos y proporcionar control prolongado de las principales enfermedades bacterianas y fúngicas."
      }
    ],
    modoAccion: {
      cobertura: "Acción preventiva y curativa con liberación sostenida de cobre activo",
      penetracion: "Penetración cuticular mejorada y formación de reservorio activo en la superficie foliar"
    },
    cultivos: ["limon", "naranja", "mandarina", "pomelo"],
    aplicacion: {
      equipos: "equipos de alto volumen recomendados, compatible con aplicaciones mecanizadas",
      compatibilidad: "excelente compatibilidad con aceites e insecticidas, evitar pH extremos",
      intervaloSeguridad: "7 días antes de cosecha"
    },
    documentacion: [
      "Protocolo específico para cítricos",
      "Ficha técnica avanzada",
      "Estudios de residualidad",
      "Guía de compatibilidades"
    ]
  }
};