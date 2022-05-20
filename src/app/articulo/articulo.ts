export class Articulo
{
  id: number;
  nombre: string;
  coleccion: string;
  precio: number;
  descripcion: string;
  imagen: string;
  constructor(id: number,
    nombre: string,
    coleccion: string,
    precio: number,
    descripcion: string,
    imagen: string){
      this.id = id;
      this.nombre = nombre;
      this.coleccion = coleccion;
      this.precio = precio;
      this.descripcion = descripcion;
      this.imagen = imagen;
  }
}
