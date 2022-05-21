import { Articulo } from "./articulo";

export class ArticuloDetail extends Articulo  {

  constructor(id: number,
    name: string,
    collection: string,
    price: number,
    description: string,
    image: string)
  {
    super(id, name, collection, price, description, image);
  }

}
