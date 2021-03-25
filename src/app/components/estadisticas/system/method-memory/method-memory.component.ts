import { Component, OnInit } from '@angular/core';

import { FechaModel } from '../../../../Models/fecha.models';
import { SystemStatisticsService } from '../../../../services/system-statistics.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-method-memory',
  templateUrl: './method-memory.component.html',
  styleUrls: ['./method-memory.component.css']
})
export class MethodMemoryComponent implements OnInit {
  type = 'BarChart';
   data = [];
   columnNames = [];
   options = {};
   fecha= new FechaModel();
   fechas: any=[
     {descripcion: 'En los últimos 7 días', valor: 7},
     {descripcion: 'En los últimos 30 días', valor: 30},
     {descripcion: 'En los últimos 365 días', valor: 365}
   ];
   tiempo:string;
   formData = new FormData();
  constructor(private systemService:SystemStatisticsService) {
    this.tiempo="-1 week";
  }

  ngOnInit(): void {
    this.formData.append('tiempo', this.tiempo)
    Swal.fire({
      title:'Espere',
      text:'Estamos cargando la información',
      icon:'info',
      allowOutsideClick:false
    });
    Swal.showLoading();
    this.systemService.topMethodMemory(this.formData).subscribe((resp:any)=>{
      if(resp.code==200){
        Swal.close();
        this.data=resp.datas;
        this.columnNames= resp.columnNames;
      }
    })
  }
  escogerGrafico(dia:number){
    if(dia == 7){
      this.tiempo="-1 week";
      this.formData.append('tiempo', this.tiempo);
      Swal.fire({
        title:'Espere',
        text:'Estamos cargando la información',
        icon:'info',
        allowOutsideClick:false
      });
      Swal.showLoading();
      this.systemService.topMethodMemory(this.formData).subscribe((resp:any)=>{
        if(resp.code==200){
          Swal.close();
          this.columnNames=resp.columnNames;
          this.data= resp.datas;
        }
      });
    }else{
      if(dia == 30){
        this.tiempo="-4 week";
        this.formData.append('tiempo', this.tiempo);
        Swal.fire({
          title:'Espere',
          text:'Estamos cargando la información',
          icon:'info',
          allowOutsideClick:false
        });
        Swal.showLoading();
        this.systemService.topMethodMemory(this.formData).subscribe((resp:any)=>{
          if(resp.code==200){
            Swal.close();
            this.columnNames=resp.columnNames;
            this.data= resp.datas;
          }
        });
      }else{
        if(dia == 365){
          this.tiempo="-1 year";
          this.formData.append('tiempo', this.tiempo);
          Swal.fire({
            title:'Espere',
            text:'Estamos cargando la información',
            icon:'info',
            allowOutsideClick:false
          });
          Swal.showLoading();
          this.systemService.topMethodMemory(this.formData).subscribe((resp:any)=>{
            if(resp.code==200){
              Swal.close();
              this.columnNames=resp.columnNames;
              this.data= resp.datas;
            }
          });
        }
      }
    }

  }

}
