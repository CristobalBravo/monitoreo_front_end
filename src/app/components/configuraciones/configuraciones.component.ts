import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.css']
})
export class ConfiguracionesComponent implements OnInit {
  parametros: any=[
    {nombre: 'Method', valor: "Method"},
    {nombre: 'Controller', valor: "Controller"},
    {nombre: 'Uri', valor: "Uri"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
