import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ConfiguracionSugerencias } from '../../../Models/ConfiguracionSugerencial.models';
import { ConfiguracionSugerenciaService } from '../../../services/configuracion-sugerencia.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-configuracion-sugerencias',
  templateUrl: './configuracion-sugerencias.component.html',
  styleUrls: ['./configuracion-sugerencias.component.css']
})
export class ConfiguracionSugerenciasComponent implements OnInit {
  parametros: any=[
    {nombre: 'Method', valor: "method"},
    {nombre: 'Controller', valor: "controller"},
    {nombre: 'Uri', valor: "uri"}
  ];
  mostrar=false;
  mostrarBoton=true;
  formData = new FormData();

  configuracionSugerencias = new ConfiguracionSugerencias();
  configuracionSugerenciasGuardar = new ConfiguracionSugerencias();

  constructor(private configuracionSugerenciaServices: ConfiguracionSugerenciaService,
              private router:Router) {

  }

  ngOnInit(): void {
    this.configuracionSugerencias.nombre=this.parametros[0].valor;
    this.formData.append('nombre',this.parametros[0].valor);
    this.configuracionSugerenciaServices.buscarConfiguracionSugerencias(this.formData).subscribe((resp:any)=>{
      if(resp.code==200){
        this.configuracionSugerencias.nombre=this.parametros[0].valor;
        this.configuracionSugerencias.memory_peak=resp.data.memory_peak;
        this.configuracionSugerencias.memory_usage=resp.data.memory_usage;
        this.configuracionSugerencias.execution_time=resp.data.execution_time;

        this.configuracionSugerenciasGuardar.nombre=this.configuracionSugerencias.nombre;
        this.configuracionSugerenciasGuardar.memory_peak=this.configuracionSugerencias.memory_peak
        this.configuracionSugerenciasGuardar.memory_usage= this.configuracionSugerencias.memory_usage
        this.configuracionSugerenciasGuardar.execution_time=this.configuracionSugerencias.execution_time

      }else{
        if(resp.code==400){
          this.configuracionSugerencias.nombre=this.parametros[0].valor;
          this.configuracionSugerencias.memory_peak=0;
          this.configuracionSugerencias.memory_usage=0;
          this.configuracionSugerencias.execution_time=0;
        }
      }
    });
  }

  buscar(nombre){
    this.mostrar=false;
    this.mostrarBoton=true;
    this.formData.append('nombre', nombre);
    this.configuracionSugerenciaServices.buscarConfiguracionSugerencias(this.formData).subscribe((resp:any)=>{
      if(resp.code==200){
        this.configuracionSugerencias.nombre=nombre;
        this.configuracionSugerencias.memory_peak=resp.data.memory_peak;
        this.configuracionSugerencias.memory_usage=resp.data.memory_usage;
        this.configuracionSugerencias.execution_time=resp.data.execution_time;

        this.configuracionSugerenciasGuardar.nombre=this.configuracionSugerencias.nombre;
        this.configuracionSugerenciasGuardar.memory_peak=this.configuracionSugerencias.memory_peak
        this.configuracionSugerenciasGuardar.memory_usage= this.configuracionSugerencias.memory_usage
        this.configuracionSugerenciasGuardar.execution_time=this.configuracionSugerencias.execution_time
      }else{
        if(resp.code==400){
          this.configuracionSugerencias.nombre=nombre;
          this.configuracionSugerencias.memory_peak=0;
          this.configuracionSugerencias.memory_usage=0;
          this.configuracionSugerencias.execution_time=0;
        }
      }
    });
  }

  editar(tiempo, memoria_maxima, memoria_usada ){
    let mensaje="";
    if(memoria_maxima<=0 || memoria_maxima>=1){
      mensaje='memoria maxima, ';
    }
    if(tiempo<=0 || tiempo>=1){
      mensaje=mensaje + "tiempo de ejecucion, ";
    }
    if(memoria_usada<=0 || memoria_usada>=1){
      mensaje=mensaje + "memoria usada, "
    }

    if(mensaje!= ""){
      this.error(mensaje);
    }else{
      this.configuracionSugerenciasGuardar.nombre=this.configuracionSugerencias.nombre;
      this.configuracionSugerenciasGuardar.memory_peak=memoria_maxima;
      this.configuracionSugerenciasGuardar.memory_usage= memoria_usada;
      this.configuracionSugerenciasGuardar.execution_time=tiempo;
      this.configuracionSugerenciaServices.editarConfiguracionSugerencias(this.configuracionSugerenciasGuardar).subscribe((resp:any)=>{
        console.log(resp);
        if(resp.code==200){
          this.configuracionSugerencias.execution_time= resp.configuracionSugerencias.execution_time;
          this.configuracionSugerencias.memory_usage= resp.configuracionSugerencias.memory_usage;
          this.configuracionSugerencias.memory_peak= resp.configuracionSugerencias.memory_peak;
          Swal.fire({
            title:"Exito",
            text: 'Configuracion editada éxitosamente' ,
            icon: 'success'
          }).then(resp=>{
            if(resp.value){
              this.mostrar=false;
              this.mostrarBoton=true;
            }
          });
        }
      });
    }
  }

  error(mensaje){
    Swal.fire({
      title: 'Error de Ingreso',
      icon:'error',
      text: `Los valores de ${mensaje}debe estar entre 0 y 1`,
    });
  }

  mostrarFormulario(){
    this.mostrar=true;
    this.mostrarBoton=false;
  }
}
