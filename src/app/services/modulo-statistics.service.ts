import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModuloStatisticsService {
  url:string;
  constructor(private http:HttpClient) {
    this.url=environment.urlBase;
  }
  moduloTypeTop(){
    return this.http.get(this.url+'modulo/tipo/top');
  }
}
