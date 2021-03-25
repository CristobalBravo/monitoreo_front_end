import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrowserStatisticService {
  url:string;
  constructor(private http: HttpClient) {
    this.url=environment.urlBase;
   }
   topBrowser(){
     return this.http.get(this.url+'browser/top');
   }
   topBrowserMonth(){
    return this.http.get(this.url+'browser/top/month');
  }
  topBrowserYear(){
    return this.http.get(this.url+'browser/top/year');
  }
   statisticsBySo(){
    return this.http.get(this.url+'browser/so');
   }
   statisticsByVersionBrowser(){
    return this.http.get(this.url+'browser/version');
   }
   browserList(){
    return this.http.get(this.url+'browser/list');
   }
   versionByBrowser(diseno){
    return this.http.post(this.url+'browser/version/list', diseno);
   }
}
