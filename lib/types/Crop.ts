import { Product } from "./Product";

export interface CultivoData {
    name: string;
    scientificName: string;
    description: string;
    backgroundImage: string;
    icon: string;

    objetivosPrograma: string[];

    productosRecomendados: Product[];

    beneficiosEconomicos: {
        incrementoRendimiento: string;
        reduccionPerdidas: string;
        roi: string;
    };
}