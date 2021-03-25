import { Component, OnInit } from '@angular/core';
import { BrowserStatisticService } from '../../../../services/browser-statistic.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-version-statistics-by-browser',
  templateUrl: './version-statistics-by-browser.component.html',
  styleUrls: ['./version-statistics-by-browser.component.css']
})
export class VersionStatisticsByBrowserComponent implements OnInit {
  browsers:string;
  formdata = new FormData();
  ascendentes = [];
  descendentes= [];
  browserName;
  tiempo;
  fechas: any=[
    {descripcion: 'En los últimos 7 días', valor: 7},
    {descripcion: 'En los últimos 30 días', valor: 30},
    {descripcion: 'En los últimos 365 días', valor: 365}
  ];
  constructor(private browserService: BrowserStatisticService) {
    this.tiempo="-1 week";
   }

  ngOnInit(): void {
    Swal.fire({
      title:'Espere',
      text: 'Estamos cargando el listado de navegadores',
      icon:'info',
      allowOutsideClick:false
    });
    Swal.showLoading();
    this.browserService.browserList().subscribe((resp:any)=>{
      if(resp.code==200){
        Swal.close();
      }
      this.browsers=resp.browsers;
      this.formdata.append('browser_name', resp.browsers[0].browser_name);
      this.formdata.append('tiempo', this.tiempo);
      Swal.fire({
        title:'Espere',
         text: 'Estamos cargando los datos del navegador',
        icon:'info',
        allowOutsideClick:false
      });
      Swal.showLoading();
      this.browserService.versionByBrowser(this.formdata).subscribe((resp:any)=>{
        console.log(resp);
        if(resp.code==200){
          Swal.close();
        }
        this.ascendentes = resp.ascendentes;
        this.descendentes = resp.descendentes;
      })
    })
  }

  chooseBrowser(browserName:string){
    this.browserName=browserName;
    console.log(this.browserName);
    console.log(this.tiempo);
    this.formdata.append('browser_name',  this.browserName);
      this.formdata.append('tiempo', this.tiempo);
      Swal.fire({
        title:'Espere',
         text: 'Estamos cargando los datos del navegador',
        icon:'info',
        allowOutsideClick:false
      });
      Swal.showLoading();
      this.browserService.versionByBrowser(this.formdata).subscribe((resp:any)=>{
        if(resp.code==200){
          Swal.close();
        }
        this.ascendentes = resp.ascendentes;
        this.descendentes = resp.descendentes;
      })
  }
  escogerGrafico(dia:number){
    if(dia == 7){
      this.tiempo="-1 week";
      console.log(this.tiempo)
      this.formdata.append('tiempo', this.tiempo);
      this.formdata.append('browser_name', this.browserName);
              Swal.fire({
          title:'Espere',
           text: 'Estamos cargando los datos del navegador',
          icon:'info',
          allowOutsideClick:false
        });
      Swal.showLoading();
      this.browserService.versionByBrowser(this.formdata).subscribe((resp:any)=>{
        if(resp.code==200){
          Swal.close();
        }
        this.ascendentes = resp.ascendentes;
        this.descendentes = resp.descendentes;
      })
    }
    if(dia == 30){
      this.tiempo="-1 month";
      console.log(this.tiempo)
      this.formdata.append('tiempo', this.tiempo);
      this.formdata.append('browser_name', this.browserName);
              Swal.fire({
          title:'Espere',
          text: 'Estamos cargando los datos del navegador',
          icon:'info',
          allowOutsideClick:false
        });
      Swal.showLoading();
      this.browserService.versionByBrowser(this.formdata).subscribe((resp:any)=>{
        if(resp.code==200){
          Swal.close();
        }
        this.ascendentes = resp.ascendentes;
        this.descendentes = resp.descendentes;
      })
    }
    if(dia == 365){
      this.tiempo="-1 year";
      console.log(this.tiempo)
      this.formdata.append('tiempo', this.tiempo);
      this.formdata.append('browser_name', this.browserName);
      Swal.fire({
        title:'Espere',
        text: 'Estamos cargando los datos del navegador',
        icon:'info',
        allowOutsideClick:false
      });
      Swal.showLoading();
      this.browserService.versionByBrowser(this.formdata).subscribe((resp:any)=>{
        if(resp.code==200){
          Swal.close();
        }
        this.ascendentes = resp.ascendentes;
        this.descendentes = resp.descendentes;
      })
    }
  }
}
