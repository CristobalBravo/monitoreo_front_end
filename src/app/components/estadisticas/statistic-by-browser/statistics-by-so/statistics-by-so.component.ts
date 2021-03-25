import { Component, OnInit } from '@angular/core';
import { BrowserStatisticService } from '../../../../services/browser-statistic.service';


@Component({
  selector: 'app-statistics-by-so',
  templateUrl: './statistics-by-so.component.html',
  styleUrls: ['./statistics-by-so.component.css']
})
export class StatisticsBySoComponent implements OnInit {
  type = 'PieChart';
  data = [];
  columnNames = ['Browser', 'Percentage'];
  options = {
     sliceVisibilityThreshold: .0001,
     legend: { position: 'top', maxLines: 3 },
  };
  constructor(private serviceBrowser: BrowserStatisticService) { }

  ngOnInit(): void {
    this.serviceBrowser.statisticsBySo().subscribe((resp:any)=>{
      console.log(resp);
      this.data=resp.data;
    })
  }

}
