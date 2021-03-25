import { Component, OnInit } from '@angular/core';
import { BrowserStatisticService } from '../../../services/browser-statistic.service';
import { FechaModel } from '../../../Models/fecha.models';

import  Swal from 'sweetalert2';

@Component({
  selector: 'app-statistic-by-browser',
  templateUrl: './statistic-by-browser.component.html',
  styleUrls: ['./statistic-by-browser.component.css']
})
export class StatisticByBrowserComponent implements OnInit {
  total:number;
  porcentajeTotal = 100;
  datas=[];
  fecha= new FechaModel();
  fechas: any=[
    {descripcion: 'En los últimos 7 días', valor: 7},
    {descripcion: 'En los últimos 30 días', valor: 30},
    {descripcion: 'En los últimos 365 días', valor: 365}
  ];

  constructor(private broserService : BrowserStatisticService) {
    this.fecha.cantidad_dia=7;
  }

  ngOnInit(): void {
    this.broserService.topBrowser().subscribe((resp:any)=>{
      this.total=resp.total;
      this.datas=resp.data;
    })
  }

  escogerGrafico(dia:number){
    if(dia == 7){
      Swal.fire({
        title:'Espere',
        text:'Estamos cargando la información',
        icon:'info',
        allowOutsideClick:false
      });
      Swal.showLoading();
      this.broserService.topBrowser().subscribe((resp:any)=>{
        if(resp.code==200){
          this.total=resp.total;
          this.datas=resp.data;
          Swal.close();
        }
      })
    }
    if(dia == 30){
      Swal.fire({
        title:'Espere',
        text:'Estamos cargando la información',
        icon:'info',
        allowOutsideClick:false
      });
      Swal.showLoading();
      this.broserService.topBrowserMonth().subscribe((resp:any)=>{
        if(resp.code==200){
          this.total=resp.total;
          this.datas=resp.data;
          Swal.close();
        }
      })
    }
    if(dia == 365){
      Swal.fire({
        title:'Espere',
        text:'Estamos cargando la información',
        icon:'info',
        allowOutsideClick:false
      });
      Swal.showLoading();
      this.broserService.topBrowserYear().subscribe((resp:any)=>{
        if(resp.code==200){
          this.total=resp.total;
          this.datas=resp.data;
          Swal.close();
        }
      })
    }
  }

}
