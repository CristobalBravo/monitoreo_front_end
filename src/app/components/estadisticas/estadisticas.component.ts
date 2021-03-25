import { Component, OnInit } from '@angular/core';
import Echo from 'laravel-echo'
import { environment } from '../../../environments/environment';
import { FechaModel } from '../../Models/fecha.models';


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  valor:number;
  constructor() {

  }
  ngOnInit(): void {
    this.websockets();
  }

  websockets(){
    const echo = new Echo({
      broadcaster: 'pusher',
      cluster:'mt1',
      key: 'ASD1234FG',
      wsHost: window.location.hostname,
      wsPort: 6001,
      disableStats: true,
      forceTLS:false,
      //enabledTransports: ['ws'],

    });
    echo.channel('channel-message').
    listen('MessageEvent',(resp:any)=>{
      this.valor= resp.cantidad;
      console.log(resp);
    });
  }


}
