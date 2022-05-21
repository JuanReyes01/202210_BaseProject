import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloDetail } from '../articulo-detail';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-articulo-detail',
  templateUrl: './articulo-detail.component.html',
  styleUrls: ['./articulo-detail.component.css']
})
export class ArticuloDetailComponent implements OnInit {

  articuloId!: string;
  @Input() articuloDetail !: ArticuloDetail;

  constructor(
    private route: ActivatedRoute,
    private articuloService: ArticuloService)
  { }

  getServicio(){
    this.articuloService.getArticulo(this.articuloId).subscribe(articulo => {
      this.articuloDetail = articulo}
      )
  }

  ngOnInit() {
    if (this.articuloDetail === undefined){
      this.articuloId = this.route.snapshot.paramMap.get('id')!
      if (this.articuloId){
        this.getServicio();
      }
    }
  }

}
