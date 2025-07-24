import { Metadata } from "next";
import { notFound } from "next/navigation";
import CropDetail from "@/components/crops/CropDetail";

const cultivosData = {
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
        nombre: "Mancha marrón (Septoria glycines)",
        sintomas: "Manchas angulares de color marrón en hojas",
        condiciones: "Alta humedad y temperaturas de 25-30°C"
      },
      {
        nombre: "Roya asiática (Phakopsora pachyrhizi)",
        sintomas: "Pústulas pequeñas en el envés de las hojas",
        condiciones: "Temperaturas de 18-26°C con alta humedad"
      },
      {
        nombre: "Tizón bacteriano (Pseudomonas savastanoi)",
        sintomas: "Manchas acuosas que se vuelven necróticas",
        condiciones: "Lluvias frecuentes y temperaturas moderadas"
      }
    ],

    productosRecomendados: [
      {
        nombre: "Cobrestable",
        slug: "cobrestable",
        aplicacion: "Preventivo y curativo para enfermedades bacterianas y fúngicas",
        dosis: "200-300 cc/100 L de agua",
        momento: "Desde V3 hasta R5, cada 15-20 días según presión de enfermedad"
      },
      {
        nombre: "Bordocald",
        slug: "bordocald",
        aplicacion: "Control preventivo de enfermedades foliares",
        dosis: "2-3 L/ha",
        momento: "Aplicaciones preventivas desde etapas vegetativas"
      }
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
          productos: ["Cobrestable 250 cc/100 L o Bordocald 2.5 L/ha"],
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
      },
      {
        titulo: "Calendario de aplicaciones preventivas",
        tipo: "PDF",
        tamaño: "800 KB",
        url: "/docs/calendario-soja.pdf"
      }
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "15-25% con manejo sanitario adecuado",
      reduccionPerdidas: "Hasta 30% menos pérdidas por enfermedades",
      roi: "3:1 relación beneficio/costo en aplicaciones preventivas"
    }
  },

  trigo: {
    name: "Trigo",
    scientificName: "Triticum aestivum",
    description: "Cereal fundamental para la alimentación mundial. Se adapta a diversos climas y suelos, con ciclo de crecimiento invernal que permite la rotación con cultivos de verano.",
    backgroundImage: "/images/crops/trigo.jpg",
    icon: "/icons/wheat.svg",
    
    caracteristicas: {
      ciclo: "120-150 días según variedad",
      temperatura: "12-25°C óptima",
      suelo: "pH 6.0-7.5, francos a franco-arcillosos",
      agua: "400-600 mm durante el ciclo",
      siembra: "Mayo - Julio",
      cosecha: "Noviembre - Diciembre"
    },

    enfermedadesComunes: [
      {
        nombre: "Roya de la hoja (Puccinia triticina)",
        sintomas: "Pústulas anaranjadas en el haz de las hojas",
        condiciones: "Temperaturas de 15-22°C con rocío"
      },
      {
        nombre: "Mancha amarilla (Pyrenophora tritici-repentis)",
        sintomas: "Manchas ovales con halo amarillo",
        condiciones: "Alta humedad y restos de cultivo en superficie"
      },
      {
        nombre: "Bacteriosis de la espiga (Xanthomonas translucens)",
        sintomas: "Estrías acuosas en hojas y glumas",
        condiciones: "Lluvias durante floración y llenado"
      }
    ],

    productosRecomendados: [
      {
        nombre: "Cobrestable",
        slug: "cobrestable",
        aplicacion: "Control de bacteriosis y complemento fungicida",
        dosis: "150-250 cc/100 L de agua",
        momento: "Desde macollaje hasta grano lechoso"
      },
      {
        nombre: "Trikopper 50",
        slug: "trikopper-50",
        aplicacion: "Protección residual contra enfermedades foliares",
        dosis: "100-150 g/100 L de agua",
        momento: "Aplicación preventiva en hoja bandera"
      }
    ],

    guiaAplicacion: {
      etapasClaves: [
        {
          etapa: "Z21-29 (Macollaje)",
          descripcion: "Primera aplicación preventiva",
          productos: ["Cobrestable 150 cc/100 L"],
          objetivo: "Control temprano de enfermedades foliares"
        },
        {
          etapa: "Z37-39 (Hoja bandera)",
          descripcion: "Aplicación crítica de protección",
          productos: ["Trikopper 50 150 g/100 L + fungicida específico"],
          objetivo: "Proteger hoja bandera y espiga"
        },
        {
          etapa: "Z65-71 (Floración - grano lechoso)",
          descripcion: "Protección de espiga",
          productos: ["Cobrestable 200 cc/100 L"],
          objetivo: "Control de bacteriosis y fusarium"
        }
      ],
      
      recomendacionesGenerales: [
        "Monitorear desde emergencia hasta grano pastoso",
        "Priorizar protección de hojas superiores",
        "Considerar condiciones climáticas para decisión de aplicación",
        "Alternar principios activos para manejo de resistencia",
        "Usar coadyuvantes en condiciones de baja humedad"
      ],

      condicionesOptimas: {
        temperatura: "10-25°C",
        humedad: "Mayor al 50%",
        viento: "Menor a 10 km/h",
        horario: "Mañana temprano con rocío o tarde"
      }
    },

    documentosDescargables: [
      {
        titulo: "Manual de enfermedades del Trigo",
        tipo: "PDF",
        tamaño: "3.1 MB",
        url: "/docs/manual-trigo-enfermedades.pdf"
      },
      {
        titulo: "Protocolo Trikopper 50 en cereales",
        tipo: "PDF",
        tamaño: "1.5 MB",
        url: "/docs/protocolo-trikopper-cereales.pdf"
      },
      {
        titulo: "Guía de monitoreo y umbrales",
        tipo: "PDF",
        tamaño: "950 KB",
        url: "/docs/guia-monitoreo-trigo.pdf"
      }
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "10-20% con manejo integrado",
      reduccionPerdidas: "Hasta 25% menos pérdidas por enfermedades",
      roi: "2.5:1 en aplicaciones estratégicas"
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
        nombre: "Tizón tardío (Phytophthora infestans)",
        sintomas: "Manchas acuosas que se necrosan rápidamente",
        condiciones: "Temperaturas de 12-20°C con alta humedad"
      },
      {
        nombre: "Tizón temprano (Alternaria solani)",
        sintomas: "Manchas concéntricas en hojas viejas",
        condiciones: "Temperaturas de 25-30°C, alternancia húmedo-seco"
      },
      {
        nombre: "Sarna común (Streptomyces scabies)",
        sintomas: "Lesiones corchosas en tubérculos",
        condiciones: "pH > 5.5 y baja humedad del suelo"
      }
    ],

    productosRecomendados: [
      {
        nombre: "Bordocald",
        slug: "bordocald",
        aplicacion: "Control preventivo de tizones",
        dosis: "3-4 L/ha",
        momento: "Aplicaciones cada 7-10 días según presión"
      },
      {
        nombre: "Cobrestable",
        slug: "cobrestable",
        aplicacion: "Control curativo y activación de defensas",
        dosis: "250-350 cc/100 L de agua",
        momento: "Al detectar primeros síntomas o preventivo"
      },
      {
        nombre: "Trikopper 50",
        slug: "trikopper-50",
        aplicacion: "Alta residualidad en condiciones difíciles",
        dosis: "150-200 g/100 L de agua",
        momento: "Condiciones predisponentes para tizón tardío"
      }
    ],

    guiaAplicacion: {
      etapasClaves: [
        {
          etapa: "Emergencia - 15 cm altura",
          descripcion: "Inicio del programa preventivo",
          productos: ["Bordocald 3 L/ha"],
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
          productos: ["Trikopper 50 200 g/100 L o Bordocald 4 L/ha"],
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
        titulo: "Programa Bordocald para papa orgánica",
        tipo: "PDF",
        tamaño: "1.6 MB",
        url: "/docs/bordocald-papa-organica.pdf"
      },
      {
        titulo: "Calendario fenológico y aplicaciones",
        tipo: "PDF",
        tamaño: "1.1 MB",
        url: "/docs/calendario-papa.pdf"
      }
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "20-35% con control efectivo de tizón",
      reduccionPerdidas: "Hasta 50% menos pérdidas en años epidémicos",
      roi: "4:1 en programas preventivos"
    }
  },

  maiz: {
    name: "Maíz",
    scientificName: "Zea mays",
    description: "Cereal de alto rendimiento y múltiples usos. Requiere abundante agua y nutrientes durante su desarrollo, especialmente en floración y llenado de granos.",
    backgroundImage: "/images/crops/maiz.jpeg",
    icon: "/icons/corn.svg",
    
    caracteristicas: {
      ciclo: "120-150 días según híbrido",
      temperatura: "25-30°C óptima",
      suelo: "pH 5.8-7.0, profundos y fértiles",
      agua: "500-800 mm durante el ciclo",
      siembra: "Septiembre - Noviembre",
      cosecha: "Marzo - Mayo"
    },

    enfermedadesComunes: [
      {
        nombre: "Roya común (Puccinia sorghi)",
        sintomas: "Pústulas herrumbrosas en ambas caras de la hoja",
        condiciones: "Temperaturas de 16-25°C con alta humedad"
      },
      {
        nombre: "Tizón foliar (Exserohilum turcicum)",
        sintomas: "Lesiones elípticas gris-verdosas",
        condiciones: "Temperaturas moderadas con rocío prolongado"
      },
      {
        nombre: "Bacteriosis (Pantoea stewartii)",
        sintomas: "Estrías acuosas y marchitez",
        condiciones: "Transmitida por insectos, favorecida por calor"
      }
    ],

    productosRecomendados: [
      {
        nombre: "Cobrestable",
        slug: "cobrestable",
        aplicacion: "Control de bacteriosis y complemento fungicida",
        dosis: "200-300 cc/100 L de agua",
        momento: "V6-V8 y prefloración"
      },
      {
        nombre: "Trikopper 50",
        slug: "trikopper-50",
        aplicacion: "Protección foliar de larga duración",
        dosis: "100-150 g/100 L de agua",
        momento: "Aplicación preventiva en V10-VT"
      }
    ],

    guiaAplicacion: {
      etapasClaves: [
        {
          etapa: "V6-V8 (6-8 hojas)",
          descripcion: "Primera aplicación preventiva",
          productos: ["Cobrestable 200 cc/100 L"],
          objetivo: "Control temprano y bioestimulación"
        },
        {
          etapa: "V10-VT (Pre-floración)",
          descripcion: "Protección del tercio superior",
          productos: ["Trikopper 50 150 g/100 L o Cobrestable 250 cc/100 L"],
          objetivo: "Mantener sanidad en período crítico"
        },
        {
          etapa: "R1-R2 (Floración-ampolla)",
          descripcion: "Protección de espiga",
          productos: ["Cobrestable 300 cc/100 L"],
          objetivo: "Prevenir infecciones en grano"
        }
      ],
      
      recomendacionesGenerales: [
        "Priorizar híbridos con resistencia genética",
        "Monitorear desde V4 hasta grano lechoso",
        "Considerar aplicación aérea en cultivos altos",
        "Manejar rastrojos para reducir inóculo",
        "Coordinar con control de plagas"
      ],

      condicionesOptimas: {
        temperatura: "Menor a 30°C",
        humedad: "Mayor al 55%",
        viento: "Menor a 12 km/h",
        horario: "Mañana temprano o tardecita"
      }
    },

    documentosDescargables: [
      {
        titulo: "Guía de sanidad en Maíz tardío",
        tipo: "PDF",
        tamaño: "2.2 MB",
        url: "/docs/guia-maiz-tardio.pdf"
      },
      {
        titulo: "Manejo de bacteriosis con Cobrestable",
        tipo: "PDF",
        tamaño: "1.4 MB",
        url: "/docs/bacteriosis-maiz-cobrestable.pdf"
      },
      {
        titulo: "Estrategias de aplicación foliar",
        tipo: "PDF",
        tamaño: "1.8 MB",
        url: "/docs/aplicacion-foliar-maiz.pdf"
      }
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "8-15% con manejo preventivo",
      reduccionPerdidas: "Hasta 20% menos pérdidas por enfermedades",
      roi: "2:1 en años con presión moderada"
    }
  },

  ajo: {
    name: "Ajo",
    scientificName: "Allium sativum",
    description: "Bulbo aromático con propiedades medicinales y culinarias. Prefiere climas frescos durante su desarrollo y requiere suelos bien drenados con buena materia orgánica.",
    backgroundImage: "/images/crops/ajo.jpg",
    icon: "/icons/garlic.svg",
    
    caracteristicas: {
      ciclo: "150-180 días",
      temperatura: "12-20°C óptima desarrollo",
      suelo: "pH 6.0-7.0, sueltos, ricos en MO",
      agua: "400-500 mm bien distribuidos",
      siembra: "Marzo - Abril",
      cosecha: "Octubre - Noviembre"
    },

    enfermedadesComunes: [
      {
        nombre: "Mancha púrpura (Alternaria porri)",
        sintomas: "Manchas ovales púrpuras con halo amarillo",
        condiciones: "Temperaturas de 20-25°C con rocío"
      },
      {
        nombre: "Roya del ajo (Puccinia allii)",
        sintomas: "Pústulas anaranjadas en hojas",
        condiciones: "Temperaturas frescas con alta humedad"
      },
      {
        nombre: "Bacteriosis (Pseudomonas fluorescens)",
        sintomas: "Podredumbre blanda del bulbo",
        condiciones: "Exceso de humedad y heridas"
      }
    ],

    productosRecomendados: [
      {
        nombre: "Cobrestable",
        slug: "cobrestable",
        aplicacion: "Control de bacteriosis y hongos foliares",
        dosis: "150-250 cc/100 L de agua",
        momento: "Aplicaciones cada 15-20 días desde 4 hojas"
      },
      {
        nombre: "Bordocald",
        slug: "bordocald",
        aplicacion: "Programa preventivo certificado orgánico",
        dosis: "2-3 L/ha",
        momento: "Desde emergencia hasta 30 días pre-cosecha"
      },
      {
        nombre: "Trikopper 50",
        slug: "trikopper-50",
        aplicacion: "Alta persistencia en bulbificación",
        dosis: "100-150 g/100 L de agua",
        momento: "Etapa de 6-8 hojas y bulbificación"
      }
    ],

    guiaAplicacion: {
      etapasClaves: [
        {
          etapa: "4-5 hojas",
          descripcion: "Inicio programa sanitario",
          productos: ["Bordocald 2 L/ha"],
          objetivo: "Prevención temprana de enfermedades"
        },
        {
          etapa: "6-8 hojas (pre-bulbificación)",
          descripcion: "Protección intensiva",
          productos: ["Cobrestable 200 cc/100 L + adherente"],
          objetivo: "Evitar infecciones en período crítico"
        },
        {
          etapa: "Bulbificación",
          descripcion: "Protección del bulbo",
          productos: ["Trikopper 50 150 g/100 L"],
          objetivo: "Sanidad para llenado de bulbo"
        }
      ],
      
      recomendacionesGenerales: [
        "Usar semilla sana y desinfectada",
        "Evitar excesos de nitrógeno",
        "Mantener cultivo libre de malezas",
        "Aplicar con equipos de baja presión",
        "Suspender aplicaciones 30 días antes de cosecha"
      ],

      condicionesOptimas: {
        temperatura: "15-22°C",
        humedad: "60-80%",
        viento: "Menor a 10 km/h",
        horario: "Primeras horas de la mañana"
      }
    },

    documentosDescargables: [
      {
        titulo: "Manual técnico del cultivo de Ajo",
        tipo: "PDF",
        tamaño: "3.5 MB",
        url: "/docs/manual-tecnico-ajo.pdf"
      },
      {
        titulo: "Programa sanitario para ajo orgánico",
        tipo: "PDF",
        tamaño: "1.9 MB",
        url: "/docs/ajo-organico-programa.pdf"
      },
      {
        titulo: "Control de enfermedades en postcosecha",
        tipo: "PDF",
        tamaño: "1.3 MB",
        url: "/docs/postcosecha-ajo.pdf"
      }
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "20-30% con manejo sanitario integral",
      reduccionPerdidas: "Hasta 40% menos descarte por calidad",
      roi: "3.5:1 en producción para exportación"
    }
  },

  "ver-otros": {
    name: "Otros Cultivos",
    scientificName: "Diversos",
    description: "Además de los cultivos principales, nuestros productos son efectivos en una amplia gama de cultivos especializados incluyendo hortalizas, frutales, vid y cultivos industriales.",
    backgroundImage: "/images/crops/ver-otros.jpeg",
    icon: "/icons/leaf.svg",
    
    caracteristicas: {
      ciclo: "Variable según especie",
      temperatura: "Según requerimientos específicos",
      suelo: "Adaptable a diversos tipos",
      agua: "Según cultivo",
      siembra: "Variable",
      cosecha: "Según ciclo productivo"
    },

    enfermedadesComunes: [
      {
        nombre: "Enfermedades fúngicas diversas",
        sintomas: "Manchas foliares, tizones, mildius",
        condiciones: "Alta humedad y temperaturas moderadas"
      },
      {
        nombre: "Bacteriosis varias",
        sintomas: "Manchas acuosas, cancros, marchitez",
        condiciones: "Heridas, alta humedad, temperaturas cálidas"
      },
      {
        nombre: "Complejos de patógenos",
        sintomas: "Síntomas variados según interacción",
        condiciones: "Estrés del cultivo y condiciones predisponentes"
      }
    ],

    productosRecomendados: [
      {
        nombre: "Cobrestable",
        slug: "cobrestable",
        aplicacion: "Amplio espectro para diversos cultivos",
        dosis: "150-350 cc/100 L según cultivo",
        momento: "Preventivo y curativo según monitoreo"
      },
      {
        nombre: "Bordocald",
        slug: "bordocald",
        aplicacion: "Ideal para producción orgánica",
        dosis: "2-5 L/ha según cultivo y presión",
        momento: "Aplicaciones preventivas regulares"
      },
      {
        nombre: "Trikopper 50",
        slug: "trikopper-50",
        aplicacion: "Especial para frutales y vid",
        dosis: "100-250 g/100 L según fenología",
        momento: "Brotación, floración y desarrollo de frutos"
      }
    ],

    guiaAplicacion: {
      etapasClaves: [
        {
          etapa: "Establecimiento/Brotación",
          descripcion: "Protección inicial",
          productos: ["Según análisis de riesgo del cultivo"],
          objetivo: "Prevenir infecciones tempranas"
        },
        {
          etapa: "Desarrollo vegetativo/Floración",
          descripcion: "Período de mayor susceptibilidad",
          productos: ["Productos según patógenos prevalentes"],
          objetivo: "Mantener sanidad en etapas críticas"
        },
        {
          etapa: "Fructificación/Pre-cosecha",
          descripcion: "Protección de órganos comerciales",
          productos: ["Considerar períodos de carencia"],
          objetivo: "Calidad comercial y sanidad"
        }
      ],
      
      recomendacionesGenerales: [
        "Consultar recomendaciones específicas por cultivo",
        "Realizar diagnóstico correcto de patógenos",
        "Integrar con otras prácticas de manejo",
        "Considerar certificaciones requeridas",
        "Ajustar dosis según estado fenológico"
      ],

      condicionesOptimas: {
        temperatura: "Evitar extremos térmicos",
        humedad: "Óptima para absorción foliar",
        viento: "Mínimo para buena cobertura",
        horario: "Consultar recomendaciones específicas por cultivo"
      }
    },

    documentosDescargables: [
      {
        titulo: "Catálogo de aplicaciones por cultivo",
        tipo: "PDF",
        tamaño: "4.2 MB",
        url: "/docs/catalogo-aplicaciones.pdf"
      },
      {
        titulo: "Guía de dosis para cultivos especiales",
        tipo: "PDF",
        tamaño: "2.7 MB",
        url: "/docs/dosis-cultivos-especiales.pdf"
      },
      {
        titulo: "Fichas técnicas productos Ecoagro",
        tipo: "PDF",
        tamaño: "5.1 MB",
        url: "/docs/fichas-tecnicas-completas.pdf"
      }
    ],

    beneficiosEconomicos: {
      incrementoRendimiento: "Variable según cultivo y manejo",
      reduccionPerdidas: "Significativa con programa adecuado",
      roi: "Consultar análisis específico por cultivo"
    }
  }
};

// Generar metadata dinámica
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cultivo = cultivosData[slug as keyof typeof cultivosData];
  
  if (!cultivo) {
    return {
      title: "Cultivo no encontrado | Ecoagro Gaspar"
    };
  }

  return {
    title: `${cultivo.name} - Manejo Sanitario | Ecoagro Gaspar`,
    description: cultivo.description,
    openGraph: {
      title: `${cultivo.name} - Manejo Sanitario | Ecoagro Gaspar`,
      description: cultivo.description,
      url: `https://ecoagrogaspar.com.ar/cultivos/${slug}`,
      siteName: "Ecoagro Gaspar",
    },
  };
}

// Generar rutas estáticas
export async function generateStaticParams() {
  return Object.keys(cultivosData).map((slug) => ({
    slug: slug,
  }));
}

export default async function CultivoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cultivo = cultivosData[slug as keyof typeof cultivosData];

  if (!cultivo) {
    notFound();
  }

  return <CropDetail cultivo={cultivo} />;
}