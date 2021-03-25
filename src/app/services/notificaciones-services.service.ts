import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesServicesService {
  url:string;
  constructor(private http: HttpClient) {
    this.url=environment.urlBase;
  }

  detalleNotificaction($nombre){
    return this.http.post(this.url+'notificaciones/detalle', $nombre);
  }

  vistoNotificaction($id){
    return this.http.post(this.url+'notificaciones/visto', $id);
  }
  ignorarNotificaction($id){
    return this.http.post(this.url+'notificaciones/ignorar', $id);
  }
}
