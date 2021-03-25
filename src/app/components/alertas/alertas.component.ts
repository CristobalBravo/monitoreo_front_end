import { Component, OnInit } from '@angular/core';
import { AlertasService } from '../../services/alertas.service';
import Swal from 'sweetalert2';
import { of } from 'rxjs';


@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.scss']
})
export class AlertasComponent implements OnInit {
  alertas;
  typeP = 'PieChart';
  p: number = 1;
  dataP = [];
  columnNamesP = ['Plataforma', 'Cantidad'];
  optionsP = {
    sliceVisibilityThreshold: .0001,


 };

  mostrar;
  checkedDB;
  checkedPHP;

  typeB = 'ColumnChart';
  dataB = [];
  columnNamesB = ['Código', 'Cantidad'];
  optionsB = {
    hAxis: {
      title: 'Código'
    },
    vAxis: {
      title: 'Cantidad'
    },
    legend: { position: 'top', maxLines: 3 },
 };
  constructor(private alertServices:AlertasService) {
    this.mostrar=true;
    this.checkedDB=true;
    this.checkedPHP=false;
   }

  ngOnInit(): void {


    this.alertServices.getAlertsByCode().subscribe((resp:any)=>{
      if(resp.code==200){
        this.dataB=resp.datas;

      }

    })
    this.alertServices.getAllAlerts().subscribe((resp:any)=>{

      if(resp.code==200){
        Swal.close();
        this.alertas=resp.alertas;

      }
    })
    Swal.fire({
      title:'Espere',
      text:'Estamos cargando la información',
      icon:'info',
      allowOutsideClick:false
    });
    Swal.showLoading();
    this.alertServices.getAlertsByPlatform().subscribe((resp:any)=>{
      if(resp.code==200){

        this.dataP=[
          ['MySql',resp.mysql],
          ['PHP',resp.PHP],]

      }

    })
  }


  php(){
    Swal.fire({
      title:'Espere',
      text:'Estamos cargando la información',
      icon:'info',
      allowOutsideClick:false
    });
    Swal.showLoading();
    this.alertServices.getAllAlertsByPHP().subscribe((resp:any)=>{
      if(resp.code=200){
        this.mostrar=false;
        this.alertas=resp.alertas;
        Swal.close();
      }

    })
  }
  db(){
    Swal.fire({
      title:'Espere',
      text:'Estamos cargando la información',
      icon:'info',
      allowOutsideClick:false
    });
    Swal.showLoading();
    this.alertServices.getAllAlerts().subscribe((resp:any)=>{
      if(resp.code=200){
        this.mostrar=true;
        this.alertas=resp.alertas;
        Swal.close();
      }
    })
  }
  all(){


  }

  buscar(error){
    let formdata= new FormData();
    formdata.append('mensaje', error);
    this.alertServices.getAlertsByMsg(formdata).subscribe((resp:any)=>{
      console.log(resp);
      if(resp.datas[0].platform=="PHP"){
        this.mostrar=false;
        this.checkedPHP=true;
        this.checkedDB=false;
      }else{
        this.checkedDB=true;
        this.checkedPHP=false;
        this.mostrar=true;
      }
      this.alertas= resp.datas;
    })

  }
}
