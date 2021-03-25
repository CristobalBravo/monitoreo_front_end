import { Component, OnInit } from '@angular/core';
import { BrowserStatisticService } from '../../../../services/browser-statistic.service';
import { FechaModel } from '../../../../Models/fecha.models';

@Component({
  selector: 'app-statistics-by-browser-version',
  templateUrl: './statistics-by-browser-version.component.html',
  styleUrls: ['./statistics-by-browser-version.component.css']
})
export class StatisticsByBrowserVersionComponent implements OnInit {
  datas=[];

  fecha= new FechaModel();
  fechas: any=[
    {descripcion: 'En los ultimos 7 dias', valor: 7},
    {descripcion: 'En los ultimos 30 dias', valor: 30},
    {descripcion: 'En los ultimos 365 dias', valor: 365}
  ];
  constructor(private browserService: BrowserStatisticService) { }

  ngOnInit(): void {
    this.browserService.statisticsByVersionBrowser().subscribe((resp:any)=>{
      this.datas=resp.data;
    })
  }
  escogerGrafico(dia:number){
    if(dia == 7){
      return;
    }
    if(dia == 30){
      return;
    }
    if(dia == 365){
      return;
    }
  }

}
