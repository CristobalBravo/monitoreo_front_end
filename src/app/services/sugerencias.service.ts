import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SugerenciasService {

  url:string;
  constructor(private http: HttpClient) {
    this.url=environment.urlBase;
  }
  obtenerSugerenciasMemoriaUsada(datos){
    return this.http.post(this.url+'sugerencias/memory_usage',datos);
  }
  obtenerSugerenciasMemoriaMaxima(datos){
    return this.http.post(this.url+'sugerencias/memory_peak',datos);
  }
  obtenerSugerenciasTiempoDeEjecucion(datos){
    return this.http.post(this.url+'sugerencias/execution_time',datos);
  }
}
