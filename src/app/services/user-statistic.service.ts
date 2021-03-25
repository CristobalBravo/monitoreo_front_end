import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserStatisticService {
  url:string;
  constructor(private http: HttpClient) {
    this.url= environment.urlBase;
  }
  getBySeventDay(){
    return this.http.get(this.url+'user/sevent');
  }
  getByDispositive(){
    return this.http.get(this.url+'user/dispositive');
  }
  getTops(){
    return this.http.get(this.url+'user/top');
  }
  getByMonth(){
    return this.http.get(this.url+'user/byMonth');
  }
  getByYear(){
    return this.http.get(this.url+'user/byYear');
  }
  getTopsByMonth(){
    return this.http.get(this.url+'user/top/month');
  }
  getTopsByYear(){
    return this.http.get(this.url+'user/top/year');
  }
}
