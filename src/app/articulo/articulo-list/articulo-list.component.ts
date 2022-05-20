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
  constructor(private articuloService: ArticuloService) {}
    getArticulos(): void {
        this.articuloService.getArticulos().subscribe((articulos)=>{
          this.articulo = articulos;
      });
  }

  ngOnInit() {
    this.getArticulos();
  }


}
