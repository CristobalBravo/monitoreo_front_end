import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExecutiontimeServices {

  url:string;
  constructor(private http: HttpClient) {
    this.url=environment.urlBase;
  }
  topUriExecutionTime(tiempo){
    return this.http.post(this.url+'executionTime/uri/top',tiempo);
  }
  topControllerExecutionTime(tiempo){
    return this.http.post(this.url+'executionTime/controller/top',tiempo);
  }
  topMethodExecutionTime(tiempo){
    return this.http.post(this.url+'executionTime/method/top', tiempo);
  }
}
