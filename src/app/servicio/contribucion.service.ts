import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContribucionService {

  private baseURL="http://localhost:8080/api/contribucion";

  constructor(private httpClient:HttpClient) { }

  obtenerContribucionPorTipo(id:String):Observable<String[]>{
    return this.httpClient.get<String[]>(`${this.baseURL}/${id}`);
  } 
}
