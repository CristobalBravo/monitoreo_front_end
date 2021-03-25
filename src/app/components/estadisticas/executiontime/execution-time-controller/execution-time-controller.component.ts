import { Component, OnInit } from '@angular/core';
import { ExecutiontimeServices } from '../../../../services/executiontime.service';
import { FechaModel } from '../../../../Models/fecha.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-execution-time-controller',
  templateUrl: './execution-time-controller.component.html',
  styleUrls: ['./execution-time-controller.component.css']
})
export class ExecutionTimeControllerComponent implements OnInit {
   type = 'BarChart';
   data = [];
   columnNames = [];
   options = {
   };
   tiempo;
   formData = new FormData();
   fecha= new FechaModel();
  fechas: any=[
    {descripcion: 'En los últimos 7 días', valor: 7},
    {descripcion: 'En los últimos 30 días', valor: 30},
    {descripcion: 'En los últimos 365 días', valor: 365}
  ];
  constructor(private executionTimeService:ExecutiontimeServices) {
    this.tiempo="-1 week";
   }

  ngOnInit(): void {
    this.formData.append('tiempo', this.tiempo);
    Swal.fire({
      title:'Espere',
      text:'Estamos cargando la información',
      icon:'info',
      allowOutsideClick:false
    });
    Swal.showLoading();
    this.executionTimeService.topControllerExecutionTime(this.formData).subscribe((resp:any)=>{
      if(resp.code==200){
        this.data=resp.datas;
        this.columnNames= resp.columnNames;
        console.log(resp)
      }

    })
  }
  escogerGrafico(dia:number){
    if(dia == 7){
      this.tiempo="-1 week";
      this.formData.append('tiempo', this.tiempo)
      Swal.fire({
        title:'Espere',
         text:'Estamos cargando la información de los controladores',
        icon:'info',
        allowOutsideClick:false
      });
      Swal.showLoading();
      this.executionTimeService.topControllerExecutionTime(this.formData).subscribe((resp:any)=>{
         if(resp.code==200){
        Swal.close();
        this.data=resp.datas;
        this.columnNames= resp.columnNames;
      }
      })
    }
    if(dia == 30){
      this.tiempo="-1 month";
      this.formData.append('tiempo', this.tiempo)
      Swal.fire({
        title:'Espere',
        text:'Estamos cargando la información de los controladores',
        icon:'info',
        allowOutsideClick:false
      });
      Swal.showLoading();
      this.executionTimeService.topControllerExecutionTime(this.formData).subscribe((resp:any)=>{
         if(resp.code==200){
        Swal.close();
        this.data=resp.datas;
        this.columnNames= resp.columnNames;
      }
      })
    }
    if(dia == 365){
      this.tiempo="-1 year";
      this.formData.append('tiempo', this.tiempo)
      Swal.fire({
        title:'Espere',
        text:'Estamos cargando la información de los controladores',
        icon:'info',
        allowOutsideClick:false
      });
      Swal.showLoading();
      this.executionTimeService.topControllerExecutionTime(this.formData).subscribe((resp:any)=>{
         if(resp.code==200){
        Swal.close();
        this.data=resp.datas;
        this.columnNames= resp.columnNames;
      }
      })
    }
  }

}
