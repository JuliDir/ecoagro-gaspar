import { Product } from "./Product";

export interface CultivoData {
    name: string;
    scientificName: string;
    description: string;
    backgroundImage: string;
    icon: string;

    objetivosPrograma: string[];

    caracteristicas: {
        ciclo: string;
        temperatura: string;
        suelo: string;
        agua: string;
        siembra: string;
        cosecha: string;
    };

    enfermedadesComunes: Array<{
        nombre: string;
        sintomas: string;
        condiciones: string;
    }>;

    productosRecomendados: Product[];

    guiaAplicacion: {
        etapasClaves: Array<{
            etapa: string;
            descripcion: string;
            productos: string[];
            objetivo: string;
        }>;
        recomendacionesGenerales: string[];
        condicionesOptimas: {
            temperatura: string;
            humedad: string;
            viento: string;
            horario: string;
        };
    };

    documentosDescargables: Array<{
        titulo: string;
        tipo: string;
        tamaño: string;
        url: string;
    }>;

    beneficiosEconomicos: {
        incrementoRendimiento: string;
        reduccionPerdidas: string;
        roi: string;
    };
}