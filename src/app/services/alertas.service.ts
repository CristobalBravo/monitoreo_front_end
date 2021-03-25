import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {
  url:string;
  constructor(private http:HttpClient) {
    this.url=environment.urlBase;
  }

  getAllAlerts(){
    return this.http.get(this.url+'alertas/all');
  }
  getAllAlertsByPHP(){
    return this.http.get(this.url+'alertas/all/PHP');
  }

  getAlertsByPlatform(){
    return this.http.get(this.url+'alertas/cantidad/platform');
  }
  getAlertsByCode(){
    return this.http.get(this.url+'alertas/cantidad/code');
  }

  getAlertsByMsg(mensaje){
    return this.http.post(this.url+'alertas/buscar/mensaje',mensaje);
  }
}
