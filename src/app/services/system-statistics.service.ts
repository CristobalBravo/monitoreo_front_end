import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SystemStatisticsService {
  url:string;
  constructor(private http: HttpClient) {
    this.url=environment.urlBase;
  }
  topUriMemory(tiempo){
    return this.http.post(this.url+'memory/uri/top', tiempo);
  }
  topControllerMemory(tiempo){
    return this.http.post(this.url+'memory/controller/top', tiempo);
  }
  topMethodMemory(tiempo){
    return this.http.post(this.url+'memory/method/top', tiempo);
  }
}
