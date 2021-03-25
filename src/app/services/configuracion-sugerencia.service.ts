import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionSugerenciaService {

  url:string;
  constructor(private http: HttpClient) {
    this.url=environment.urlBase;
  }
  buscarConfiguracionSugerencias(nombre){
    return this.http.post(this.url+'configuracionSugerencias/search', nombre);
  }
  editarConfiguracionSugerencias(configuracionSugerencia){
    return this.http.post(this.url+'configuracionSugerencias/editar', configuracionSugerencia);
  }

}

