import { Component, OnInit } from '@angular/core';
import { FechaModel } from '../../Models/fecha.models';
import { UserStatisticService } from '../../services/user-statistic.service';
import  Swal from 'sweetalert2';


@Component({
  selector: 'app-grafic-user-by-date',
  templateUrl: './grafic-user-by-date.component.html',
  styleUrls: ['./grafic-user-by-date.component.css']
})
export class GraficUSerByDateComponent implements OnInit {
  fecha= new FechaModel();

  fechas: any=[
    {descripcion: 'En los últimos 7 días', valor: 7},
    {descripcion: 'En los últimos 30 días', valor: 30},
    {descripcion: 'En los últimos 365 días', valor: 365}
  ];
  constructor(private userStatisticService: UserStatisticService ) { }
  data = [];
  ngOnInit(): void {
    this.userStatisticService.getBySeventDay()
    .subscribe((resp:any)=>{
    this.data=resp.data;
    });
    this.fecha.cantidad_dia=7;
  }


  type='LineChart';

  columnNames = [" ","Estudiantes"];
  options = {
    vAxis:{
      title: 'Cant. Estudiantes'},
      pointSize:5,
      colors: ['#328dd8'],
      legend: { position: 'top', maxLines: 3 },

  };


  escogerGrafico(dia:number){
    if(dia == 7){
      Swal.fire({
        title:'Espere',
        text:'Estamos cargando la información',
        icon:'info',
        allowOutsideClick:false
      });
    Swal.showLoading();
      this.userStatisticService.getBySeventDay().subscribe((resp:any)=>{
        if(resp.code==200){
          this.data=resp.data;
          Swal.close();
        }

      });
    }
    if(dia == 30){

      Swal.fire({
        title:'Espere',
        text:'Estamos cargando la información',
        icon:'info',
        allowOutsideClick:false
      });
    Swal.showLoading();
      this.userStatisticService.getByMonth().subscribe((resp:any)=>{
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
      this.userStatisticService.getByYear().subscribe((resp:any)=>{
        if(resp.code==200){
          this.data=resp.data;
          Swal.close();
        }
      })
    }
  }
}
