import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo';
import { ArticuloDetail } from '../articulo-detail';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.css']
})
export class ArticuloListComponent implements OnInit {

  articulo: Array<ArticuloDetail> = [];
  promedioPrecio: number = 0;
  selected: boolean = false;
  selectedArticulo! : ArticuloDetail;

  constructor(private articuloService: ArticuloService) {}
    getArticulos(): void {
        this.articuloService.getArticulos().subscribe((articulos)=>{
          this.articulo = articulos;
          this.calcularPromedio(articulos);
      });
  }

  ngOnInit() {
    this.getArticulos();
  }

  calcularPromedio(articulos: Array<Articulo>){
    let sumaPrecios: number = 0;
    articulos.forEach(articulo =>
      {
        sumaPrecios += articulo.price;
      }
    )
    this.promedioPrecio = sumaPrecios/articulos.length;
  }

  OnSelected(articulo: ArticuloDetail):void{
    this.selected = true;
    this.selectedArticulo = articulo;
  }

}
