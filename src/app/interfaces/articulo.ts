import { Categoria } from "./categoria";

export interface Articulo {
    id: string;
    nombre: string;
    precio: number;
    stock: number;
    categoria: Categoria;
}