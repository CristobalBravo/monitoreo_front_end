import { Component, OnInit } from '@angular/core';
import { SystemStatisticsService } from '../../../../services/system-statistics.service';
import { FechaModel } from '../../../../Models/fecha.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-controller-memory',
  templateUrl: './controller-memory.component.html',
  styleUrls: ['./controller-memory.component.css']
})
export class ControllerMemoryComponent implements OnInit {
  type = 'BarChart';
  data = [];
  columnNames = [];
  options = {};
  fecha= new FechaModel();
  tiempo:string;
  formData = new FormData();
  fechas: any=[
    {descripcion: 'En los últimos 7 días', valor: 7},
    {descripcion: 'En los últimos 30 días', valor: 30},
    {descripcion: 'En los últimos 365 días', valor: 365}
  ];
  constructor(private systemService:SystemStatisticsService) {
    this.tiempo="-1 week";
   }

  ngOnInit(): void {
    this.formData.append('tiempo', this.tiempo)
    this.systemService.topControllerMemory(this.formData).subscribe((resp:any)=>{
      this.data=resp.datas;
      this.columnNames= resp.columnNames;
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
      this.systemService.topControllerMemory(this.formData).subscribe((resp:any)=>{
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
        this.systemService.topControllerMemory(this.formData).subscribe((resp:any)=>{
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
          this.systemService.topControllerMemory(this.formData).subscribe((resp:any)=>{
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
