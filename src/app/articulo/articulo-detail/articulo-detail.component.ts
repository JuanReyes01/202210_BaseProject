import { Component, Input, OnInit } from '@angular/core';
import { ArticuloDetail } from '../articulo-detail';

@Component({
  selector: 'app-articulo-detail',
  templateUrl: './articulo-detail.component.html',
  styleUrls: ['./articulo-detail.component.css']
})
export class ArticuloDetailComponent implements OnInit {

  @Input() ArticuloDetail !: ArticuloDetail;
  constructor() { }

  ngOnInit() {
  }

}
