import { Component, OnInit } from '@angular/core';
import { SugerenciasService } from '../../../services/sugerencias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-memoria-usada',
  templateUrl: './memoria-usada.component.html',
  styleUrls: ['./memoria-usada.component.scss']
})
export class MemoriaUsadaComponent implements OnInit {

  porcentajeTolerancia;
  promedioTolerado;
  sugerencias;
  nombre;
  tiempo;
  formData = new FormData();
  p: number = 1;

  fechas: any=[
    {descripcion: 'En los últimos 7 días', valor: 7},
    {descripcion: 'En los últimos 30 días', valor: 30},
    {descripcion: 'En los últimos 365 días', valor: 365}
  ];

  constructor(private sugerenciaService:SugerenciasService) {
    this.tiempo="-1 week";
  }

  ngOnInit(): void {
    this.Controller();
  }

  method(){
    this.nombre="method";
          Swal.fire({
        title:'Espere',
        text:'Estamos cargando la información',
        icon:'info',
        allowOutsideClick:false
      });
    Swal.showLoading();
    this.formData.append('nombre',this.nombre)
    this.formData.append('tiempo', this.tiempo);
    this.sugerenciaService.obtenerSugerenciasMemoriaUsada(this.formData).subscribe((resp:any)=>{
      console.log(resp);
      if(resp.code==200){
        Swal.close();
      }
      this.porcentajeTolerancia=resp.porcentajeTolerancia;
      this.promedioTolerado=resp.promedioTolerado;
      this.sugerencias= resp.sugerencia;})
  }

  uri(){
    this.nombre="uri";
          Swal.fire({
        title:'Espere',
        text:'Estamos cargando la información',
        icon:'info',
        allowOutsideClick:false
      });
    Swal.showLoading();
    this.formData.append('tiempo', this.tiempo);
    this.formData.append('nombre',this.nombre)
    this.sugerenciaService.obtenerSugerenciasMemoriaUsada(this.formData).subscribe((resp:any)=>{
      console.log(resp.code);

      if(resp.code==200){
        Swal.close();
      }
      this.porcentajeTolerancia=resp.porcentajeTolerancia;
      this.promedioTolerado=resp.promedioTolerado;
      this.sugerencias= resp.sugerencia;})
  }
  Controller(){
      Swal.fire({
        title:'Espere',
        text:'Estamos cargando la información',
        icon:'info',
        allowOutsideClick:false
      });
    Swal.showLoading();
    this.nombre="controller";
    this.formData.append('tiempo', this.tiempo);
    this.formData.append('nombre',this.nombre)
    this.sugerenciaService.obtenerSugerenciasMemoriaUsada(this.formData).subscribe((resp:any)=>{
      if(resp.code==200){
        Swal.close();
      }
      this.porcentajeTolerancia=resp.porcentajeTolerancia;
      this.promedioTolerado=resp.promedioTolerado;
      this.sugerencias= resp.sugerencia;})
  }
  escogerGrafico(dia:number){
    if(dia == 7){
      this.tiempo="-1 week";
      Swal.fire({
        title:'Espere',
         text:'Estamos cargando la información',
        icon:'info',
        allowOutsideClick:false
      });
      Swal.showLoading();
      this.formData.append('tiempo', this.tiempo);
      this.formData.append('nombre',this.nombre)
      this.sugerenciaService.obtenerSugerenciasMemoriaUsada(this.formData).subscribe((resp:any)=>{
        if(resp.code==200){
          Swal.close();
        }
        this.porcentajeTolerancia=resp.porcentajeTolerancia;
        this.promedioTolerado=resp.promedioTolerado;
        this.sugerencias= resp.sugerencia;
      })
    }
    if(dia == 30){
      this.tiempo="-1 month";
      Swal.fire({
        title:'Espere',
         text:'Estamos cargando la información',
        icon:'info',
        allowOutsideClick:false
      });
      Swal.showLoading();
      this.formData.append('tiempo', this.tiempo);
      this.formData.append('nombre',this.nombre)
      this.sugerenciaService.obtenerSugerenciasMemoriaUsada(this.formData).subscribe((resp:any)=>{
        if(resp.code==200){
          Swal.close();
        }
        this.porcentajeTolerancia=resp.porcentajeTolerancia;
        this.promedioTolerado=resp.promedioTolerado;
        this.sugerencias= resp.sugerencia;
      })

    }
    if(dia == 365){
      this.tiempo="-1 year";
      Swal.fire({
        title:'Espere',
         text:'Estamos cargando la información',
        icon:'info',
        allowOutsideClick:false
      });
      Swal.showLoading();
      this.formData.append('tiempo', this.tiempo);
      this.formData.append('nombre',this.nombre)
      this.sugerenciaService.obtenerSugerenciasMemoriaUsada(this.formData).subscribe((resp:any)=>{
        if(resp.code==200){
          Swal.close();
        }
        this.porcentajeTolerancia=resp.porcentajeTolerancia;
        this.promedioTolerado=resp.promedioTolerado;
        this.sugerencias= resp.sugerencia;
      })
    }
  }

}
