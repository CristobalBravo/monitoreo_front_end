import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagesStatisticsService {
  url:string;
  constructor(private http:HttpClient) {
    this.url=environment.urlBase;
  }

  topPages(){
    return this.http.get(this.url+'pages/top');
  }
  topPagesByMonth(){
    return this.http.get(this.url+'pages/top/month');
  }
  topPagesByYear(){
    return this.http.get(this.url+'pages/top/year');
  }
}
