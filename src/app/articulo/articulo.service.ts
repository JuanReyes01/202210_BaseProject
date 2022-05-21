import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Articulo } from './articulo';
import { ArticuloDetail } from './articulo-detail';

@Injectable({
  providedIn: 'root'
})

export class ArticuloService {
  private apiUrl: string = environment.baseUrl;
constructor(private http: HttpClient) { }
getArticulos(): Observable<Articulo[]>{
  return this.http.get<Articulo[]>(this.apiUrl);
}

getArticulo(id: string): Observable<ArticuloDetail>{
  return this.http.get<ArticuloDetail>(this.apiUrl + '/' + id);
}

}
