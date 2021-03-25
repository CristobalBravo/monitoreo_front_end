import { Component, OnInit } from '@angular/core';
import { ModuloStatisticsService } from '../../../../../services/modulo-statistics.service';
import { FechaModel } from '../../../../../Models/fecha.models';

@Component({
  selector: 'app-tops-type-modulo',
  templateUrl: './tops-type-modulo.component.html',
  styleUrls: ['./tops-type-modulo.component.css']
})
export class TopsTypeModuloComponent implements OnInit {
  datas=[];

  fecha= new FechaModel();
  fechas: any=[
    {descripcion: 'En los ultimos 7 dias', valor: 7},
    {descripcion: 'En los ultimos 30 dias', valor: 30},
    {descripcion: 'En los ultimos 365 dias', valor: 365}
  ];
  constructor(private moduloStatisticsService:ModuloStatisticsService) { }

  ngOnInit(): void {
    /*
    this.moduloStatisticsService.moduloTypeTop().subscribe((resp:any)=>{
      this.datas=resp.data;
    });*/

  }
  //proxima implementacion con fechas
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
