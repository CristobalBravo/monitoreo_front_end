import { Component, OnInit } from '@angular/core';
import { PagesStatisticsService } from '../../../../services/pages-statistics.service';
import { FechaModel } from '../../../../Models/fecha.models';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-top-pages',
  templateUrl: './top-pages.component.html',
  styleUrls: ['./top-pages.component.css']
})
export class TopPagesComponent implements OnInit {
  data=[];
  fecha= new FechaModel();
  fechas: any=[
    {descripcion: 'En los últimos 7 días', valor: 7},
    {descripcion: 'En los últimos 30 días', valor: 30},
    {descripcion: 'En los últimos 365 días', valor: 365}
  ];
  constructor(private pagesServices:PagesStatisticsService) { }

  ngOnInit(): void {
    this.pagesServices.topPages().subscribe((resp:any)=>{
      this.data=resp.data
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
      this.pagesServices.topPages().subscribe((resp:any)=>{
        if(resp.code==200){
          this.data=resp.data;
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
      this.pagesServices.topPagesByMonth().subscribe((resp:any)=>{
        if(resp.code==200){
          this.data=resp.data;
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
      this.pagesServices.topPagesByYear().subscribe((resp:any)=>{
        if(resp.code==200){
          this.data=resp.data;
          Swal.close();
        }
      })
    }
  }

}
