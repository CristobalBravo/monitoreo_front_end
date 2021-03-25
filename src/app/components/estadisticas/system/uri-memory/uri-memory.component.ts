import { Component, OnInit } from '@angular/core';
import { SystemStatisticsService } from '../../../../services/system-statistics.service';
import { FechaModel } from '../../../../Models/fecha.models';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-uri-memory',
  templateUrl: './uri-memory.component.html',
  styleUrls: ['./uri-memory.component.css']
})
export class UriMemoryComponent implements OnInit {
   type = 'BarChart';
   data = [];
   columnNames = [];
   options = {};
   tiempo:string;
   formData = new FormData();
   fecha= new FechaModel();
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
    this.systemService.topUriMemory(this.formData).subscribe((resp:any)=>{
      this.columnNames=resp.columnNames;
      this.data= resp.datas;
    });
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
      this.systemService.topUriMemory(this.formData).subscribe((resp:any)=>{
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
        this.systemService.topUriMemory(this.formData).subscribe((resp:any)=>{
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
          this.systemService.topUriMemory(this.formData).subscribe((resp:any)=>{
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
