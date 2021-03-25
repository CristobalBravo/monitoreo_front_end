import { Component, OnInit } from '@angular/core';
import Echo from 'laravel-echo';
import { UserStatisticService } from '../../services/user-statistic.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {

  type = 'PieChart';
  data = [];
  columnNames = ['Browser', 'Percentage'];
  options = {
     sliceVisibilityThreshold: .0001,
     legend: { position: 'top', maxLines: 3 },
  };

  constructor( private userStatisticService: UserStatisticService) { }

  ngOnInit(): void {
    this.userStatisticService.getByDispositive().subscribe((resp:any)=>{
      this.data=[
        ['Computador',resp.Desktop],
        ['Celular', resp.Celular],
        ['Tablet', resp.Tablet]];
       });
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
    echo.channel('channel-donuts').
    listen('DonutsEvent',(resp:any)=>{
      this.data=[
     ['Computador',resp.data.Desktop],
     ['Celular', resp.data.Celular],
     ['Tablet', resp.data.Tablet]];
    });
  }
}
