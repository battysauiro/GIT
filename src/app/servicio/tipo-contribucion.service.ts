import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoContribucion } from '../modelo/tipo-contribucion';
@Injectable({
  providedIn: 'root'
})
export class TipoContribucionService {
  //url de tipoContribucion
  private baseURL="http://localhost:8080/api/tipoContribucion";
  
  constructor(private httpClient:HttpClient) { }

  obtenerListaTipoContribucion():Observable<TipoContribucion[]>{
    return this.httpClient.get<TipoContribucion[]>(`${this.baseURL}`);
  }
  
}
