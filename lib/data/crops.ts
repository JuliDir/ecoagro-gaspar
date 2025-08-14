export const cultivosData = {
  limon: {
    name: "Limón",
    scientificName: "Citrus limon",
    description: "Cítrico perenne de gran valor comercial, rico en vitamina C y aceites esenciales. Requiere climas cálidos y suelos bien drenados para un óptimo desarrollo.",
    backgroundImage: "/crops/limon/limon.jpg",
    icon: "/icons/lemon.svg",

    objetivosPrograma: [
      "Controlar eficazmente la cancrosis cítrica",
      "Prevenir infecciones durante el desarrollo del fruto",
      "Mejorar la calidad comercial de la producción",
      "Reducir pérdidas postcosecha"
    ],

    productosRecomendados: [
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
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "15-25% con manejo sanitario adecuado",
      reduccionPerdidas: "Hasta 40% menos pérdidas por enfermedades",
      roi: "3.5:1 en programas preventivos"
    }
  },

  naranja: {
    name: "Naranja",
    scientificName: "Citrus sinensis",
    description: "Cítrico de mayor consumo mundial, rico en vitamina C y fibra. Requiere climas subtropicales y manejo sanitario intensivo para mantener calidad exportable.",
    backgroundImage: "/crops/naranja/naranja.jpg",
    icon: "/icons/orange.svg",

    objetivosPrograma: [
      "Controlar enfermedades fúngicas comunes",
      "Mantener calidad de frutos para exportación",
      "Reducir pérdidas económicas por descarte",
      "Optimizar rendimiento del cultivo"
    ],

    productosRecomendados: [
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
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "20-30% con manejo integrado",
      reduccionPerdidas: "Hasta 35% menos descarte",
      roi: "4:1 en plantaciones comerciales"
    }
  },

  mandarina: {
    name: "Mandarina",
    scientificName: "Citrus reticulata",
    description: "Cítrico de fácil pelado y consumo directo. Más susceptible a enfermedades que otros cítricos, requiere manejo preventivo intensivo.",
    backgroundImage: "/crops/mandarina/mandarina.jpg",
    icon: "/icons/mandarin.svg",

    objetivosPrograma: [
      "Controlar eficazmente la alternaria",
      "Prevenir infecciones durante el desarrollo del fruto",
      "Mejorar la calidad comercial de la producción",
      "Reducir pérdidas postcosecha"
    ],

    productosRecomendados: [
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
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "18-28% con programa completo",
      reduccionPerdidas: "Hasta 45% menos pérdidas post-cosecha",
      roi: "3.8:1 en manejo preventivo"
    }
  },

  pomelo: {
    name: "Pomelo",
    scientificName: "Citrus paradisi",
    description: "Cítrico de gran tamaño con propiedades nutricionales destacadas. Requiere temperaturas cálidas y manejo sanitario específico por su lento desarrollo.",
    backgroundImage: "/crops/pomelo/pomelo.jpg",
    icon: "/icons/tangerine.svg",

    objetivosPrograma: [
      "Controlar eficazmente la melanosis",
      "Prevenir infecciones durante el desarrollo del fruto",
      "Mejorar la calidad comercial de la producción",
      "Reducir pérdidas postcosecha"
    ],

    productosRecomendados: [
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
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "25-35% con manejo adecuado",
      reduccionPerdidas: "Hasta 40% menos descarte",
      roi: "4.2:1 en plantaciones establecidas"
    }
  },

  // CULTIVOS PARA BORDOCALD: Vid y oliva
  vid: {
    name: "Vid",
    scientificName: "Vitis vinifera",
    description: "Cultivo fundamental para la producción de uvas de mesa y vinificación. Requiere manejo sanitario específico para prevenir enfermedades fúngicas típicas.",
    backgroundImage: "/crops/vid/vid.jpg",
    icon: "/icons/vid.svg",

    objetivosPrograma: [
      "Controlar eficazmente la botritis",
      "Prevenir infecciones durante el desarrollo del fruto",
      "Mejorar la calidad comercial de la producción",
      "Reducir pérdidas postcosecha"
    ],

    productosRecomendados: [
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
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "20-30% en años con presión de mildiu",
      reduccionPerdidas: "Hasta 50% menos pérdidas por botritis",
      roi: "5:1 en viticultura de calidad"
    }
  },

  oliva: {
    name: "Oliva",
    scientificName: "Olea europaea",
    description: "Cultivo milenario de gran rusticidad y longevidad. Produce aceitunas para mesa y aceite, requiere manejo sanitario preventivo específico.",
    backgroundImage: "/crops/oliva/oliva.jpg",
    icon: "/icons/olive.svg",

    objetivosPrograma: [
      "Controlar eficazmente la mosca del olivo",
      "Prevenir infecciones durante el desarrollo del fruto",
      "Mejorar la calidad comercial de la producción",
      "Reducir pérdidas postcosecha"
    ],

    enfermedadesComunes: [
      {
        nombre: "Repilo",
        sintomas: "Manchas circulares con halo amarillo",
        condiciones: "Temperaturas de 18-24°C con humedad alta"
      },
      {
        nombre: "Antracnosis",
        sintomas: "Manchas deprimidas en frutos",
        condiciones: "Humedad prolongada en otoño"
      },
      {
        nombre: "Tuberculosis del olivo",
        sintomas: "Agallas en ramas y tronco",
        condiciones: "Heridas de poda con humedad"
      }
    ],

    productosRecomendados: [
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
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "15-25% con manejo preventivo",
      reduccionPerdidas: "Hasta 35% menos pérdidas por repilo",
      roi: "3.2:1 en olivares intensivos"
    }
  },

  // CULTIVOS PARA COBRESTABLE: Garbanzo, poroto, maní, soja, papa, cítricos y vid
  garbanzo: {
    name: "Garbanzo",
    scientificName: "Cicer arietinum",
    description: "Leguminosa de grano seco con alta demanda nutricional. Sensible a excesos de humedad y requiere manejo preventivo de enfermedades foliares.",
    backgroundImage: "/crops/garbanzo/garbanzo.jpg",
    icon: "/icons/bean.svg",

    objetivosPrograma: [
      "Controlar eficazmente la antracnosis",
      "Prevenir infecciones durante el desarrollo del fruto",
      "Mejorar la calidad comercial de la producción",
      "Reducir pérdidas postcosecha"
    ],

    productosRecomendados: [
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
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "18-25% con manejo sanitario",
      reduccionPerdidas: "Hasta 30% menos pérdidas por antracnosis",
      roi: "3:1 en condiciones favorables"
    }
  },

  poroto: {
    name: "Poroto",
    scientificName: "Phaseolus vulgaris",
    description: "Leguminosa de grano con alto valor proteico. Susceptible a diversas enfermedades foliares y bacterianas que requieren manejo preventivo.",
    backgroundImage: "/images/crops/poroto.jpg",
    icon: "/icons/bean.svg",

    objetivosPrograma: [
      "Controlar eficazmente la antracnosis",
      "Prevenir infecciones durante el desarrollo del fruto",
      "Mejorar la calidad comercial de la producción",
      "Reducir pérdidas postcosecha"
    ],

    productosRecomendados: [
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
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "20-30% con programa completo",
      reduccionPerdidas: "Hasta 40% menos pérdidas por antracnosis",
      roi: "3.5:1 en manejo preventivo"
    }
  },

  mani: {
    name: "Maní",
    scientificName: "Arachis hypogaea",
    description: "Oleaginosa de ciclo estival con frutos subterráneos. Requiere manejo específico de enfermedades foliares para mantener área foliar activa hasta cosecha.",
    backgroundImage: "/crops/mani/mani.jpg",
    icon: "/icons/peanut.svg",

    objetivosPrograma: [
      "Controlar eficazmente las enfermedades foliares",
      "Mantener la producción de frutos de calidad",
      "Optimizar el uso de recursos hídricos",
      "Reducir el impacto ambiental del cultivo"
    ],

    enfermedadesComunes: [
      {
        nombre: "Viruela temprana",
        sintomas: "Manchas circulares con halo amarillo",
        condiciones: "Temperaturas de 25-30°C con humedad"
      },
      {
        nombre: "Viruela tardía",
        sintomas: "Manchas grandes irregulares",
        condiciones: "Fin de ciclo con humedad alta"
      },
      {
        nombre: "Bacteriosis",
        sintomas: "Manchas acuosas y defoliación",
        condiciones: "Lluvias con temperaturas altas"
      }
    ],

    productosRecomendados: [
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
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "15-25% manteniendo área foliar",
      reduccionPerdidas: "Hasta 35% menos defoliación",
      roi: "2.8:1 en programas preventivos"
    }
  },

  soja: {
    name: "Soja",
    scientificName: "Glycine max",
    description: "La soja es una leguminosa de gran importancia económica, rica en proteínas y aceites. Es fundamental en la rotación de cultivos por su capacidad de fijar nitrógeno atmosférico a través de bacterias simbióticas.",
    backgroundImage: "/crops/soja/soja.jpg",
    icon: "/icons/soy.svg",

    objetivosPrograma: [
      "Controlar eficazmente las enfermedades foliares",
      "Mantener la producción de frutos de calidad",
      "Optimizar el uso de recursos hídricos",
      "Reducir el impacto ambiental del cultivo"
    ],

    enfermedadesComunes: [
      {
        nombre: "Mancha marrón",
        sintomas: "Manchas angulares de color marrón en hojas",
        condiciones: "Alta humedad y temperaturas de 25-30°C"
      },
      {
        nombre: "Roya asiática",
        sintomas: "Pústulas pequeñas en el envés de las hojas",
        condiciones: "Temperaturas de 18-26°C con alta humedad"
      },
      {
        nombre: "Tizón bacteriano",
        sintomas: "Manchas acuosas que se vuelven necróticas",
        condiciones: "Lluvias frecuentes y temperaturas moderadas"
      }
    ],

    productosRecomendados: [
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
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "15-25% con manejo sanitario adecuado",
      reduccionPerdidas: "Hasta 30% menos pérdidas por enfermedades",
      roi: "3:1 relación beneficio/costo en aplicaciones preventivas"
    }
  },

  papa: {
    name: "Papa",
    scientificName: "Solanum tuberosum",
    description: "Tubérculo versátil y nutritivo, cuarto cultivo alimenticio más importante del mundo. Requiere suelos sueltos y buen drenaje, con alta demanda nutricional.",
    backgroundImage: "/crops/papas/papas.jpg",
    icon: "/icons/potato.svg",

    objetivosPrograma: [
      "Controlar enfermedades fúngicas comunes",
      "Mantener calidad de frutos para exportación",
      "Reducir pérdidas económicas por descarte",
      "Optimizar rendimiento del cultivo"
    ],

    enfermedadesComunes: [
      {
        nombre: "Tizón tardío",
        sintomas: "Manchas acuosas que se necrosan rápidamente",
        condiciones: "Temperaturas de 12-20°C con alta humedad"
      },
      {
        nombre: "Tizón temprano",
        sintomas: "Manchas concéntricas en hojas viejas",
        condiciones: "Temperaturas de 25-30°C, alternancia húmedo-seco"
      },
      {
        nombre: "Sarna común",
        sintomas: "Lesiones corchosas en tubérculos",
        condiciones: "pH > 5.5 y baja humedad del suelo"
      }
    ],

    productosRecomendados: [
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
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "20-35% con control efectivo de tizón",
      reduccionPerdidas: "Hasta 50% menos pérdidas en años epidémicos",
      roi: "4:1 en programas preventivos"
    }
  },

  // Agregar al final de cultivosData en lib/data/crops.ts

  citricos: {
    name: "Citricos",
    scientificName: "Citrus spp.",
    description: "Familia de árboles frutales perennes que incluye limón, naranja, mandarina y pomelo. Requieren manejo sanitario específico para prevenir enfermedades bacterianas y fúngicas comunes.",
    backgroundImage: "/crops/citricos/citricos.jpg",
    icon: "/icons/lemon.svg",

    objetivosPrograma: [
      "Controlar eficazmente la cancrosis cítrica",
      "Prevenir enfermedades fúngicas como melanosis",
      "Mejorar la calidad comercial de la producción",
      "Reducir pérdidas postcosecha"
    ],

    enfermedadesComunes: [
      {
        nombre: "Cancrosis cítrica",
        sintomas: "Lesiones corchosas en hojas, ramas y frutos",
        condiciones: "Temperaturas de 20-30°C con alta humedad y lluvias"
      },
      {
        nombre: "Melanosis",
        sintomas: "Manchas negras rugosas en corteza del fruto",
        condiciones: "Humedad alta durante brotación y desarrollo del fruto"
      },
      {
        nombre: "Antracnosis",
        sintomas: "Manchas necróticas en hojas y caída de frutos",
        condiciones: "Temperaturas moderadas con humedad prolongada"
      }
    ],

    productosRecomendados: [
      {
        id: 3,
        name: "TRIKOPPER 50",
        color: "#00a859",
        gradient: "from-green-400 to-emerald-600",
        description: "Cobre tribásico coloidal ultra micronizado, excelente adherencia y máxima residualidad.",
        features: [
          "Partículas ultrafinas para máxima cobertura",
          "Alta retención incluso tras lluvias fuertes",
          "Ideal para cítricos: cancrosis y mancha negra",
        ],
        icon: "/images/products/trikopper-box.png",
        bgIcon: "/icons/soy.svg",
        category: "Fungicidas",
      },
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "18-30% con manejo sanitario adecuado",
      reduccionPerdidas: "Hasta 40% menos pérdidas por enfermedades",
      roi: "3.8:1 en programas preventivos"
    }


  }
}

export const allCrops = [
  {
    name: "Soja",
    scientificName: "Glycine max",
    description: "Leguminosa de gran importancia económica, rica en proteínas y aceites. Fija nitrógeno atmosférico y es fundamental en la rotación de cultivos.",
    iconFilename: "soy.svg",
    backgroundImage: "/crops/soja/soja.jpg",
    slug: "soja",
    category: "Leguminosas"
  },
  {
    name: "Papa",
    scientificName: "Solanum tuberosum",
    description: "Tubérculo versátil y nutritivo, cuarto cultivo alimenticio más importante del mundo. Requiere suelos sueltos y buen drenaje.",
    iconFilename: "potato.svg",
    backgroundImage: "/crops/papas/papas.jpg",
    slug: "papa",
    category: "Tubérculos"
  },
  {
    name: "Vid",
    scientificName: "Vitis vinifera",
    description: "Cultivo fundamental para producción de uvas de mesa y vinificación. Requiere manejo sanitario específico para prevenir enfermedades fúngicas.",
    iconFilename: "vid.svg",
    backgroundImage: "/crops/vid/vid.jpg",
    slug: "vid",
    category: "Frutales"
  },
  {
    name: "Garbanzo",
    scientificName: "Cicer arietinum",
    description: "Leguminosa de grano seco con alta demanda nutricional. Sensible a excesos de humedad y requiere manejo preventivo de enfermedades foliares.",
    iconFilename: "bean.svg",
    backgroundImage: "/crops/garbanzo/garbanzo.jpg",
    slug: "garbanzo",
    category: "Leguminosas"
  },
  {
    name: "Poroto",
    scientificName: "Phaseolus vulgaris",
    description: "Leguminosa de grano con alto valor proteico. Susceptible a diversas enfermedades foliares y bacterianas que requieren manejo preventivo.",
    iconFilename: "bean.svg",
    backgroundImage: "/crops/poroto/poroto.jpg",
    slug: "poroto",
    category: "Leguminosas"
  },
  {
    name: "Maní",
    scientificName: "Arachis hypogaea",
    description: "Oleaginosa de ciclo estival con frutos subterráneos. Requiere manejo específico de enfermedades foliares para mantener área foliar activa.",
    iconFilename: "peanut.svg",
    backgroundImage: "/crops/mani/mani.jpg",
    slug: "mani",
    category: "Oleaginosas"
  },
  {
    name: "Cítricos",
    scientificName: "Citrus spp.",
    description: "Familia de árboles frutales perennes incluyendo limón, naranja, mandarina y pomelo. Requieren manejo sanitario específico para prevenir enfermedades.",
    iconFilename: "lemon.svg",
    backgroundImage: "/crops/citricos/citricos.jpg",
    slug: "citricos",
    category: "Cítricos"
  },
  {
    name: "Olivos",
    scientificName: "Olea europaea",
    description: "Cultivo milenario de gran rusticidad y longevidad. Produce aceitunas para mesa y aceite, requiere manejo sanitario preventivo específico.",
    iconFilename: "olive.svg",
    backgroundImage: "/crops/oliva/oliva.jpg",
    slug: "oliva",
    category: "Frutales"
  }
];