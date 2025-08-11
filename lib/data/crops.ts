export const cultivosData = {
  limon: {
    name: "Limón",
    scientificName: "Citrus limon",
    description: "Cítrico perenne de gran valor comercial, rico en vitamina C y aceites esenciales. Requiere climas cálidos y suelos bien drenados para un óptimo desarrollo.",
    backgroundImage: "/images/crops/limon.jpg",
    icon: "/icons/lemon.svg",

    caracteristicas: {
      ciclo: "Perenne - producción todo el año",
      temperatura: "15-30°C óptima",
      suelo: "pH 5.5-6.5, bien drenados",
      agua: "800-1200 mm anuales",
      siembra: "Primavera",
      cosecha: "Todo el año con picos"
    },

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

    guiaAplicacion: {
      etapasClaves: [
        {
          etapa: "Brotación primaveral",
          descripcion: "Primera aplicación preventiva",
          productos: ["Trikopper 50 150 g/100 L"],
          objetivo: "Protección de brotes nuevos y flores"
        },
        {
          etapa: "Cuajado del fruto",
          descripcion: "Protección crítica",
          productos: ["Trikopper 50 180 g/100 L"],
          objetivo: "Prevenir infecciones en frutos jóvenes"
        },
        {
          etapa: "Desarrollo del fruto",
          descripcion: "Mantenimiento de sanidad",
          productos: ["Trikopper 50 200 g/100 L"],
          objetivo: "Calidad comercial del fruto"
        }
      ],

      recomendacionesGenerales: [
        "Aplicar cada 21-28 días según presión de enfermedad",
        "Usar volúmenes de 1000-1500 L/ha para buena cobertura",
        "Evitar aplicaciones en floración plena",
        "Integrar con podas sanitarias",
        "Monitorear condiciones climáticas predisponentes"
      ],

      condicionesOptimas: {
        temperatura: "18-25°C",
        humedad: "Mayor al 60%",
        viento: "Menor a 15 km/h",
        horario: "Temprano en la mañana o tardecita"
      }
    },

    documentosDescargables: [
      {
        titulo: "Manejo sanitario de cítricos",
        tipo: "PDF",
        tamaño: "3.2 MB",
        url: "/docs/manejo-citricos.pdf"
      },
      {
        titulo: "Protocolo Trikopper 50 en limón",
        tipo: "PDF",
        tamaño: "1.8 MB",
        url: "/docs/protocolo-trikopper-limon.pdf"
      }
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
    backgroundImage: "/images/crops/naranja.jpg",
    icon: "/icons/orange.svg",

    caracteristicas: {
      ciclo: "Perenne - cosecha anual",
      temperatura: "16-30°C óptima",
      suelo: "pH 6.0-7.0, profundos y fértiles",
      agua: "900-1300 mm anuales",
      siembra: "Primavera",
      cosecha: "Abril - Agosto"
    },

    enfermedadesComunes: [
      {
        nombre: "Cancrosis cítrica",
        sintomas: "Lesiones elevadas en hojas, ramas y frutos",
        condiciones: "Temperaturas cálidas con lluvia y viento"
      },
      {
        nombre: "Sarna cítrica",
        sintomas: "Verrugas en frutos y deformaciones",
        condiciones: "Humedad alta durante cuajado"
      },
      {
        nombre: "Mancha grasienta",
        sintomas: "Manchas aceitosas en el envés de hojas",
        condiciones: "Temperaturas de 25-30°C con rocío"
      }
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

    guiaAplicacion: {
      etapasClaves: [
        {
          etapa: "Brotación (Septiembre)",
          descripcion: "Inicio del programa sanitario",
          productos: ["Trikopper 50 150 g/100 L"],
          objetivo: "Protección de brotes tiernos"
        },
        {
          etapa: "Floración y cuajado",
          descripcion: "Período crítico",
          productos: ["Trikopper 50 200 g/100 L"],
          objetivo: "Prevenir caída de frutos"
        },
        {
          etapa: "Crecimiento del fruto",
          descripcion: "Protección hasta cosecha",
          productos: ["Trikopper 50 250 g/100 L"],
          objetivo: "Calidad y sanidad del fruto"
        }
      ],

      recomendacionesGenerales: [
        "Programa preventivo cada 3-4 semanas",
        "Alternar con otros modos de acción",
        "Podar para mejorar aireación",
        "Eliminar frutos momificados",
        "Desinfectar herramientas de poda"
      ],

      condicionesOptimas: {
        temperatura: "20-28°C",
        humedad: "Mayor al 65%",
        viento: "Menor a 12 km/h",
        horario: "Evitar horas de máximo calor"
      }
    },

    documentosDescargables: [
      {
        titulo: "Guía completa naranja dulce",
        tipo: "PDF",
        tamaño: "4.1 MB",
        url: "/docs/guia-naranja-dulce.pdf"
      },
      {
        titulo: "Calendario fitosanitario cítricos",
        tipo: "PDF",
        tamaño: "2.3 MB",
        url: "/docs/calendario-citricos.pdf"
      }
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
    backgroundImage: "/images/crops/mandarina.jpg",
    icon: "/icons/mandarin.svg",

    caracteristicas: {
      ciclo: "Perenne - cosecha invernal",
      temperatura: "15-28°C óptima",
      suelo: "pH 5.8-6.8, bien drenados",
      agua: "800-1100 mm anuales",
      siembra: "Primavera",
      cosecha: "Mayo - Agosto"
    },

    enfermedadesComunes: [
      {
        nombre: "Alternaria",
        sintomas: "Manchas negras en frutos maduros",
        condiciones: "Humedad alta en pre-cosecha"
      },
      {
        nombre: "Cancrosis cítrica",
        sintomas: "Lesiones corchosas características",
        condiciones: "Lluvias con viento en brotación"
      },
      {
        nombre: "Antracnosis",
        sintomas: "Podredumbre de frutos en desarrollo",
        condiciones: "Temperaturas moderadas con humedad"
      }
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

    guiaAplicacion: {
      etapasClaves: [
        {
          etapa: "Brotación temprana",
          descripcion: "Protección inicial",
          productos: ["Trikopper 50 150 g/100 L"],
          objetivo: "Prevenir infecciones en brotes"
        },
        {
          etapa: "Floración - cuajado",
          descripcion: "Momento crítico",
          productos: ["Trikopper 50 180 g/100 L"],
          objetivo: "Asegurar cuajado y sanidad inicial"
        },
        {
          etapa: "Pre-cosecha",
          descripcion: "Protección final",
          productos: ["Trikopper 50 200 g/100 L"],
          objetivo: "Calidad post-cosecha"
        }
      ],

      recomendacionesGenerales: [
        "Monitoreo semanal en épocas críticas",
        "Cosecha oportuna para evitar sobremaduración",
        "Manejo cuidadoso para evitar heridas",
        "Aplicaciones cada 20-25 días",
        "Integrar con nutrición balanceada"
      ],

      condicionesOptimas: {
        temperatura: "18-25°C",
        humedad: "Mayor al 60%",
        viento: "Menor a 10 km/h",
        horario: "Mañana temprano preferiblemente"
      }
    },

    documentosDescargables: [
      {
        titulo: "Manejo sanitario mandarina",
        tipo: "PDF",
        tamaño: "2.9 MB",
        url: "/docs/manejo-mandarina.pdf"
      },
      {
        titulo: "Control post-cosecha cítricos",
        tipo: "PDF",
        tamaño: "2.1 MB",
        url: "/docs/postcosecha-citricos.pdf"
      }
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
    backgroundImage: "/images/crops/pomelo.jpg",
    icon: "/icons/tangerine.svg",

    caracteristicas: {
      ciclo: "Perenne - cosecha tardía",
      temperatura: "18-32°C óptima",
      suelo: "pH 6.0-7.5, profundos",
      agua: "1000-1400 mm anuales",
      siembra: "Primavera",
      cosecha: "Junio - Septiembre"
    },

    enfermedadesComunes: [
      {
        nombre: "Melanosis",
        sintomas: "Manchas negras en corteza",
        condiciones: "Humedad prolongada en desarrollo"
      },
      {
        nombre: "Cancrosis cítrica",
        sintomas: "Lesiones en frutos grandes",
        condiciones: "Vulnerabilidad por lento crecimiento"
      },
      {
        nombre: "Podredumbre parda",
        sintomas: "Podredumbre en frutos maduros",
        condiciones: "Heridas y humedad alta"
      }
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

    guiaAplicacion: {
      etapasClaves: [
        {
          etapa: "Cuajado del fruto",
          descripcion: "Inicio protección frutal",
          productos: ["Trikopper 50 180 g/100 L"],
          objetivo: "Prevenir caída y deformaciones"
        },
        {
          etapa: "Desarrollo del fruto",
          descripcion: "Crecimiento protegido",
          productos: ["Trikopper 50 220 g/100 L"],
          objetivo: "Mantener sanidad durante largo desarrollo"
        },
        {
          etapa: "Pre-cosecha",
          descripcion: "Protección final",
          productos: ["Trikopper 50 250 g/100 L"],
          objetivo: "Calidad y vida post-cosecha"
        }
      ],

      recomendacionesGenerales: [
        "Aplicaciones cada 4-5 semanas por largo ciclo",
        "Especial atención en heridas de poda",
        "Manejo cuidadoso por fragilidad del fruto",
        "Monitoreo continuo por lento desarrollo",
        "Integrar con raleo para mejor calidad"
      ],

      condicionesOptimas: {
        temperatura: "20-30°C",
        humedad: "Mayor al 65%",
        viento: "Menor a 15 km/h",
        horario: "Evitar aplicaciones en máximo calor"
      }
    },

    documentosDescargables: [
      {
        titulo: "Cultivo técnico de pomelo",
        tipo: "PDF",
        tamaño: "3.7 MB",
        url: "/docs/cultivo-pomelo.pdf"
      },
      {
        titulo: "Manejo post-cosecha pomelo",
        tipo: "PDF",
        tamaño: "2.4 MB",
        url: "/docs/postcosecha-pomelo.pdf"
      }
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
    backgroundImage: "/images/crops/vid.jpg",
    icon: "/icons/grape.svg",

    caracteristicas: {
      ciclo: "Perenne - cosecha anual",
      temperatura: "15-30°C según variedad",
      suelo: "pH 6.0-8.0, bien drenados",
      agua: "400-600 mm durante vegetación",
      siembra: "Invierno (implantación)",
      cosecha: "Enero - Marzo"
    },

    enfermedadesComunes: [
      {
        nombre: "Mildiu",
        sintomas: "Manchas aceitosas y esporulación blanca",
        condiciones: "Temperaturas de 20-25°C con humedad alta"
      },
      {
        nombre: "Oídio",
        sintomas: "Polvo blanco en hojas y racimos",
        condiciones: "Temperaturas de 25-30°C, humedad moderada"
      },
      {
        nombre: "Botritis",
        sintomas: "Podredumbre gris en racimos",
        condiciones: "Humedad alta en pre-cosecha"
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

    guiaAplicacion: {
      etapasClaves: [
        {
          etapa: "Brotación",
          descripcion: "Primera aplicación preventiva",
          productos: ["Bordocald 3 L/ha"],
          objetivo: "Protección inicial contra mildiu"
        },
        {
          etapa: "Pre-floración",
          descripcion: "Intensificación del programa",
          productos: ["Bordocald 4 L/ha"],
          objetivo: "Proteger inflorescencias"
        },
        {
          etapa: "Cuajado - envero",
          descripcion: "Protección de racimos",
          productos: ["Bordocald 5 L/ha alternado con Cobrestable"],
          objetivo: "Sanidad hasta cosecha"
        }
      ],

      recomendacionesGenerales: [
        "Aplicaciones cada 10-15 días según clima",
        "Usar equipos de alta presión para penetración",
        "Alternar con fungicidas sistémicos",
        "Manejo cultural: poda, conducción, raleo",
        "Suspender 21 días antes de cosecha"
      ],

      condicionesOptimas: {
        temperatura: "15-25°C",
        humedad: "Mayor al 60%",
        viento: "Menor a 10 km/h",
        horario: "Temprano en la mañana"
      }
    },

    documentosDescargables: [
      {
        titulo: "Manejo sanitario de la vid",
        tipo: "PDF",
        tamaño: "4.3 MB",
        url: "/docs/manejo-vid.pdf"
      },
      {
        titulo: "Programa Bordocald en viticultura orgánica",
        tipo: "PDF",
        tamaño: "2.8 MB",
        url: "/docs/bordocald-vid-organica.pdf"
      }
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
    backgroundImage: "/images/crops/oliva.jpg",
    icon: "/icons/olive.svg",

    caracteristicas: {
      ciclo: "Perenne - producción bianual",
      temperatura: "15-25°C óptima",
      suelo: "pH 6.5-8.0, bien drenados",
      agua: "300-600 mm anuales",
      siembra: "Invierno (implantación)",
      cosecha: "Marzo - Mayo"
    },

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

    guiaAplicacion: {
      etapasClaves: [
        {
          etapa: "Otoño (post-cosecha)",
          descripcion: "Aplicación sanitizante",
          productos: ["Bordocald 3 L/ha"],
          objetivo: "Desinfección y protección invernal"
        },
        {
          etapa: "Brotación primaveral",
          descripcion: "Protección de brotes",
          productos: ["Bordocald 3.5 L/ha"],
          objetivo: "Prevenir infecciones en hojas nuevas"
        },
        {
          etapa: "Cuajado del fruto",
          descripcion: "Protección frutal",
          productos: ["Bordocald 4 L/ha"],
          objetivo: "Sanidad durante desarrollo del fruto"
        }
      ],

      recomendacionesGenerales: [
        "Podas sanitarias en época seca",
        "Aplicaciones cada 30-45 días",
        "Desinfección de herramientas",
        "Eliminación de restos vegetales",
        "Manejo del suelo para reducir humedad"
      ],

      condicionesOptimas: {
        temperatura: "15-22°C",
        humedad: "Mayor al 65%",
        viento: "Menor a 12 km/h",
        horario: "Primeras horas del día"
      }
    },

    documentosDescargables: [
      {
        titulo: "Manejo sanitario del olivar",
        tipo: "PDF",
        tamaño: "3.8 MB",
        url: "/docs/manejo-olivar.pdf"
      },
      {
        titulo: "Olivicultura orgánica con Bordocald",
        tipo: "PDF",
        tamaño: "2.6 MB",
        url: "/docs/olivar-organico.pdf"
      }
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
    backgroundImage: "/images/crops/garbanzo.jpg",
    icon: "/icons/bean.svg",

    caracteristicas: {
      ciclo: "120-150 días",
      temperatura: "15-25°C óptima",
      suelo: "pH 6.0-7.5, bien drenados",
      agua: "300-400 mm durante el ciclo",
      siembra: "Junio - Agosto",
      cosecha: "Noviembre - Diciembre"
    },

    enfermedadesComunes: [
      {
        nombre: "Antracnosis",
        sintomas: "Manchas necróticas en vainas y tallos",
        condiciones: "Temperaturas de 20-25°C con humedad alta"
      },
      {
        nombre: "Roya",
        sintomas: "Pústulas anaranjadas en hojas",
        condiciones: "Temperaturas frescas con rocío"
      },
      {
        nombre: "Bacteriosis",
        sintomas: "Manchas acuosas y marchitez",
        condiciones: "Heridas y alta humedad"
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

    guiaAplicacion: {
      etapasClaves: [
        {
          etapa: "6-8 hojas",
          descripcion: "Primera aplicación preventiva",
          productos: ["Cobrestable 200 cc/100 L"],
          objetivo: "Protección temprana del cultivo"
        },
        {
          etapa: "Floración",
          descripcion: "Período crítico",
          productos: ["Cobrestable 250 cc/100 L"],
          objetivo: "Prevenir caída de flores"
        },
        {
          etapa: "Llenado de vainas",
          descripcion: "Protección final",
          productos: ["Cobrestable 300 cc/100 L"],
          objetivo: "Calidad de grano"
        }
      ],

      recomendacionesGenerales: [
        "Monitoreo semanal desde floración",
        "Evitar aplicaciones en horas de calor",
        "Usar adherentes en condiciones secas",
        "Integrar con manejo de malezas",
        "Cosechar con humedad adecuada"
      ],

      condicionesOptimas: {
        temperatura: "18-25°C",
        humedad: "Mayor al 60%",
        viento: "Menor a 15 km/h",
        horario: "Temprano en la mañana"
      }
    },

    documentosDescargables: [
      {
        titulo: "Manejo del cultivo de garbanzo",
        tipo: "PDF",
        tamaño: "2.7 MB",
        url: "/docs/manejo-garbanzo.pdf"
      }
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

    caracteristicas: {
      ciclo: "90-120 días según variedad",
      temperatura: "18-24°C óptima",
      suelo: "pH 6.0-7.0, sueltos y fértiles",
      agua: "400-500 mm durante el ciclo",
      siembra: "Octubre - Diciembre",
      cosecha: "Febrero - Abril"
    },

    enfermedadesComunes: [
      {
        nombre: "Antracnosis",
        sintomas: "Manchas hundidas en vainas",
        condiciones: "Temperaturas de 20-24°C con humedad"
      },
      {
        nombre: "Bacteriosis común",
        sintomas: "Manchas acuosas en hojas",
        condiciones: "Temperaturas altas con lluvia"
      },
      {
        nombre: "Roya",
        sintomas: "Pústulas rojizas en envés",
        condiciones: "Humedad alta con temperaturas moderadas"
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

    guiaAplicacion: {
      etapasClaves: [
        {
          etapa: "V3-V4 (3-4 hojas trifoliadas)",
          descripcion: "Inicio del programa",
          productos: ["Cobrestable 200 cc/100 L"],
          objetivo: "Protección vegetativa inicial"
        },
        {
          etapa: "R1-R3 (Floración)",
          descripcion: "Período crítico",
          productos: ["Cobrestable 250 cc/100 L"],
          objetivo: "Prevenir infecciones durante floración"
        },
        {
          etapa: "R5-R6 (Llenado de vainas)",
          descripcion: "Protección final",
          productos: ["Cobrestable 300 cc/100 L"],
          objetivo: "Calidad del grano y sanidad de vainas"
        }
      ],

      recomendacionesGenerales: [
        "Aplicaciones cada 15-20 días según clima",
        "Monitorear desde primera hoja trifoliada",
        "Usar volúmenes altos para buena cobertura",
        "Evitar encharcamientos",
        "Rotar con otros principios activos"
      ],

      condicionesOptimas: {
        temperatura: "20-26°C",
        humedad: "Mayor al 65%",
        viento: "Menor a 12 km/h",
        horario: "Mañana temprano o tardecita"
      }
    },

    documentosDescargables: [
      {
        titulo: "Cultivo técnico del poroto",
        tipo: "PDF",
        tamaño: "2.4 MB",
        url: "/docs/cultivo-poroto.pdf"
      },
      {
        titulo: "Control de enfermedades en poroto",
        tipo: "PDF",
        tamaño: "1.9 MB",
        url: "/docs/enfermedades-poroto.pdf"
      }
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
    backgroundImage: "/images/crops/mani.jpg",
    icon: "/icons/peanut.svg",

    caracteristicas: {
      ciclo: "120-140 días",
      temperatura: "25-30°C óptima",
      suelo: "pH 5.8-6.5, sueltos y bien drenados",
      agua: "500-600 mm durante el ciclo",
      siembra: "Octubre - Diciembre",
      cosecha: "Marzo - Mayo"
    },

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

    guiaAplicacion: {
      etapasClaves: [
        {
          etapa: "V4-V6 (4-6 nudos)",
          descripcion: "Primera aplicación",
          productos: ["Cobrestable 250 cc/100 L"],
          objetivo: "Protección temprana del follaje"
        },
        {
          etapa: "R1-R3 (Floración-fructificación)",
          descripcion: "Período crítico",
          productos: ["Cobrestable 300 cc/100 L"],
          objetivo: "Mantener área foliar durante clavado"
        },
        {
          etapa: "R5-R6 (Llenado)",
          descripcion: "Protección hasta cosecha",
          productos: ["Cobrestable 350 cc/100 L"],
          objetivo: "Prevenir defoliación prematura"
        }
      ],

      recomendacionesGenerales: [
        "Aplicaciones cada 20-25 días",
        "Priorizar protección del tercio superior",
        "Usar adherentes para mejor persistencia",
        "Monitorear semanalmente desde R1",
        "Integrar con manejo nutricional"
      ],

      condicionesOptimas: {
        temperatura: "22-28°C",
        humedad: "Mayor al 60%",
        viento: "Menor a 15 km/h",
        horario: "Evitar horas de máximo calor"
      }
    },

    documentosDescargables: [
      {
        titulo: "Manejo sanitario del maní",
        tipo: "PDF",
        tamaño: "3.1 MB",
        url: "/docs/manejo-mani.pdf"
      },
      {
        titulo: "Control de viruelas en maní",
        tipo: "PDF",
        tamaño: "2.2 MB",
        url: "/docs/viruelas-mani.pdf"
      }
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
    backgroundImage: "/images/crops/soja.jpg",
    icon: "/icons/soy.svg",

    caracteristicas: {
      ciclo: "100-140 días según variedad",
      temperatura: "20-30°C óptima",
      suelo: "pH 6.0-7.0, bien drenados",
      agua: "450-700 mm durante el ciclo",
      siembra: "Octubre - Diciembre",
      cosecha: "Marzo - Mayo"
    },

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

    guiaAplicacion: {
      etapasClaves: [
        {
          etapa: "V3-V5 (3-5 hojas trifoliadas)",
          descripcion: "Primera aplicación preventiva",
          productos: ["Cobrestable 200 cc/100 L"],
          objetivo: "Protección inicial contra enfermedades de implantación"
        },
        {
          etapa: "R1-R3 (Inicio floración - formación de vainas)",
          descripcion: "Período crítico de protección",
          productos: ["Cobrestable 250 cc/100 L"],
          objetivo: "Control de enfermedades foliares y bacteriosis"
        },
        {
          etapa: "R5 (Llenado de granos)",
          descripcion: "Última aplicación protectiva",
          productos: ["Cobrestable 300 cc/100 L"],
          objetivo: "Mantener área foliar sana para llenado de granos"
        }
      ],

      recomendacionesGenerales: [
        "Monitorear semanalmente desde V3",
        "Aplicar con buena cobertura (mínimo 30 gotas/cm²)",
        "Evitar aplicaciones en horas de máximo calor",
        "Respetar período de carencia según producto",
        "Rotar modos de acción para prevenir resistencia"
      ],

      condicionesOptimas: {
        temperatura: "Menor a 28°C",
        humedad: "Mayor al 60%",
        viento: "Menor a 15 km/h",
        horario: "Temprano en la mañana o últimas horas de la tarde"
      }
    },

    documentosDescargables: [
      {
        titulo: "Guía completa de manejo sanitario en Soja",
        tipo: "PDF",
        tamaño: "2.5 MB",
        url: "/docs/guia-soja-completa.pdf"
      },
      {
        titulo: "Protocolo de aplicación Cobrestable en Soja",
        tipo: "PDF",
        tamaño: "1.2 MB",
        url: "/docs/protocolo-cobrestable-soja.pdf"
      }
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
    backgroundImage: "/images/crops/papas.jpg",
    icon: "/icons/potato.svg",

    caracteristicas: {
      ciclo: "90-120 días según variedad",
      temperatura: "15-20°C óptima",
      suelo: "pH 5.0-6.5, sueltos y bien drenados",
      agua: "500-700 mm durante el ciclo",
      siembra: "Agosto - Octubre / Febrero - Marzo",
      cosecha: "Diciembre - Febrero / Junio - Julio"
    },

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

    guiaAplicacion: {
      etapasClaves: [
        {
          etapa: "Emergencia - 15 cm altura",
          descripcion: "Inicio del programa preventivo",
          productos: ["Cobrestable 250 cc/100 L"],
          objetivo: "Protección inicial del cultivo"
        },
        {
          etapa: "Inicio tuberización",
          descripcion: "Período crítico de protección",
          productos: ["Cobrestable 300 cc/100 L + fungicida sistémico"],
          objetivo: "Prevenir infección de follaje y tubérculos"
        },
        {
          etapa: "Tuberización - madurez",
          descripcion: "Mantenimiento de sanidad",
          productos: ["Cobrestable 350 cc/100 L"],
          objetivo: "Protección hasta cosecha"
        }
      ],

      recomendacionesGenerales: [
        "Implementar sistema de alerta temprana",
        "Aplicar con volúmenes de 400-600 L/ha",
        "Considerar aplicaciones nocturnas en verano",
        "Eliminar fuentes de inóculo (descartes, voluntarias)",
        "Integrar con manejo cultural (aporque, riego)"
      ],

      condicionesOptimas: {
        temperatura: "Menor a 25°C",
        humedad: "Mayor al 70%",
        viento: "Menor a 15 km/h",
        horario: "Evitar horas de máxima insolación"
      }
    },

    documentosDescargables: [
      {
        titulo: "Manejo integrado del tizón en Papa",
        tipo: "PDF",
        tamaño: "2.8 MB",
        url: "/docs/manejo-tizon-papa.pdf"
      },
      {
        titulo: "Programa Cobrestable para papa",
        tipo: "PDF",
        tamaño: "1.6 MB",
        url: "/docs/cobrestable-papa.pdf"
      }
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "20-35% con control efectivo de tizón",
      reduccionPerdidas: "Hasta 50% menos pérdidas en años epidémicos",
      roi: "4:1 en programas preventivos"
    }
  }
};

export const allCrops = [
  {
    name: "Soja",
    scientificName: "Glycine max",
    description: "Leguminosa de gran importancia económica, rica en proteínas y aceites. Fija nitrógeno atmosférico y es fundamental en la rotación de cultivos.",
    iconFilename: "soy.svg",
    backgroundImage: "/images/crops/soja.jpg",
    slug: "soja",
    category: "Leguminosas"
  },
  {
    name: "Papa",
    scientificName: "Solanum tuberosum",
    description: "Tubérculo versátil y nutritivo, cuarto cultivo alimenticio más importante del mundo. Requiere suelos sueltos y buen drenaje.",
    iconFilename: "potato.svg",
    backgroundImage: "/images/crops/papas.jpg",
    slug: "papa",
    category: "Tubérculos"
  },
  {
    name: "Vid",
    scientificName: "Vitis vinifera",
    description: "Cultivo fundamental para producción de uvas de mesa y vinificación. Requiere manejo sanitario específico para prevenir enfermedades fúngicas.",
    iconFilename: "vid.svg",
    backgroundImage: "/images/crops/vid.jpg",
    slug: "vid",
    category: "Frutales"
  },
  {
    name: "Garbanzo",
    scientificName: "Cicer arietinum",
    description: "Leguminosa de grano seco con alta demanda nutricional. Sensible a excesos de humedad y requiere manejo preventivo de enfermedades foliares.",
    iconFilename: "bean.svg",
    backgroundImage: "/images/crops/garbanzo.jpg",
    slug: "garbanzo",
    category: "Leguminosas"
  },
  {
    name: "Poroto",
    scientificName: "Phaseolus vulgaris",
    description: "Leguminosa de grano con alto valor proteico. Susceptible a diversas enfermedades foliares y bacterianas que requieren manejo preventivo.",
    iconFilename: "bean.svg",
    backgroundImage: "/images/crops/poroto.jpg",
    slug: "poroto",
    category: "Leguminosas"
  },
  {
    name: "Maní",
    scientificName: "Arachis hypogaea",
    description: "Oleaginosa de ciclo estival con frutos subterráneos. Requiere manejo específico de enfermedades foliares para mantener área foliar activa.",
    iconFilename: "peanut.svg",
    backgroundImage: "/images/crops/mani.jpg",
    slug: "mani",
    category: "Oleaginosas"
  },
  {
    name: "Limón",
    scientificName: "Citrus limon",
    description: "Cítrico perenne de gran valor comercial, rico en vitamina C y aceites esenciales. Requiere climas cálidos y suelos bien drenados.",
    iconFilename: "lemon.svg",
    backgroundImage: "/images/crops/limon.jpg",
    slug: "limon",
    category: "Cítricos"
  },
  {
    name: "Naranja",
    scientificName: "Citrus sinensis",
    description: "Cítrico de mayor consumo mundial, rico en vitamina C y fibra. Requiere climas subtropicales y manejo sanitario intensivo.",
    iconFilename: "tangerine.svg",
    backgroundImage: "/images/crops/naranja.jpg",
    slug: "naranja",
    category: "Cítricos"
  },
  {
    name: "Mandarina",
    scientificName: "Citrus reticulata",
    description: "Cítrico de fácil pelado y consumo directo. Más susceptible a enfermedades que otros cítricos, requiere manejo preventivo intensivo.",
    iconFilename: "tangerine.svg",
    backgroundImage: "/images/crops/mandarina.jpg",
    slug: "mandarina",
    category: "Cítricos"
  },
  {
    name: "Pomelo",
    scientificName: "Citrus paradisi",
    description: "Cítrico de gran tamaño con propiedades nutricionales destacadas. Requiere temperaturas cálidas y manejo sanitario específico.",
    iconFilename: "tangerine.svg",
    backgroundImage: "/images/crops/pomelo.jpg",
    slug: "pomelo",
    category: "Cítricos"
  },
  {
    name: "Oliva",
    scientificName: "Olea europaea",
    description: "Cultivo milenario de gran rusticidad y longevidad. Produce aceitunas para mesa y aceite, requiere manejo sanitario preventivo específico.",
    iconFilename: "olive.svg",
    backgroundImage: "/images/crops/oliva.jpg",
    slug: "oliva",
    category: "Frutales"
  }
];