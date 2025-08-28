import { Product } from "./Product";

export interface CultivoData {
    name: string;
    slug: string;
    backgroundImage: string;

    protocoloAplicacion?: {
        image: string, 
        pdf: string
    }

    objetivosPrograma: string[];

    productosRecomendados: Product[];
}