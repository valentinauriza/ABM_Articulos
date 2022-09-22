import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../interfaces/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  private apiUrl: string = 'https://632a2ae41090510116bc753e.mockapi.io/articulos/';

  constructor(private http: HttpClient) { }

  obtenerArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.apiUrl);
  }

  obtenerArticulosPorId(id: string): Observable<Articulo> {
    return this.http.get<Articulo>(this.apiUrl + id);
  }

  alta(articulo: Articulo): Observable<Articulo> {
    return this.http.post<Articulo>(this.apiUrl, articulo);
  }

  modificar(articulo: Articulo): Observable<Articulo> {
    return this.http.put<Articulo>(this.apiUrl + articulo.id, articulo);
  }

  baja(articulo: Articulo): Observable<any> {
    return this.http.delete(this.apiUrl + articulo.id);
  }
}