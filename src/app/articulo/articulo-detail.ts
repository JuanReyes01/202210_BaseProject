import { Articulo } from "./articulo";

export class ArticuloDetail extends Articulo  {

  constructor(id: number,
    nombre: string,
    coleccion: string,
    precio: number,
    descripcion: string,
    imagen: string)
  {
    super(id, nombre, coleccion, precio, descripcion, imagen);
  }

}
