import { ImageModel } from "./image.model";

export interface ProductModel {
  destacado: number;
  nombre: string;
  id_producto: number;
  id_subcategoria: number;
  precio: number;
  imagenes: ImageModel[];
  vendible: number;
  stock: number;
  garantia: number;
  iva: number;
}
