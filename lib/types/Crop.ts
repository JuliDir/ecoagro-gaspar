import { Product } from "./Product";

export interface CultivoData {
    name: string;
    subtitle?: string;
    slug: string;
    backgroundImage: string;

    protocoloAplicacion?: {
        image: string, 
        pdf: string
    }

    objetivosPrograma: string[];

    productosRecomendados: Product[];
}