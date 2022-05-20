import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.css']
})
export class ArticuloListComponent implements OnInit {

  articulo: Array<Articulo> = [];
  promedioPrecio: number = 0;
  constructor(private articuloService: ArticuloService) {}
    getArticulos(): void {
        this.articuloService.getArticulos().subscribe((articulos)=>{
          this.articulo = articulos;
      });
  }

  ngOnInit() {
    this.getArticulos();
  }

  calcularPromedio(articulos: Array<Articulo>){
    let sumaPrecios: number = 0;
    articulos.forEach(articulo =>
      {
        sumaPrecios += articulo.precio;
      }
    )
    this.promedioPrecio = sumaPrecios/articulos.length;
  }
}
