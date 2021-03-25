import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AlertasService } from '../../../services/alertas.service';

@Component({
  selector: 'app-by-code-alerts',
  templateUrl: './by-code-alerts.component.html',
  styleUrls: ['./by-code-alerts.component.scss']
})
export class ByCodeAlertsComponent implements OnInit {

  type = 'BarChart';
  data = [];
  columnNames = ['Código', 'Cantidad'];
  options = {
     sliceVisibilityThreshold: .0001
  };

  constructor(private alertasService:AlertasService) { }

  ngOnInit(): void {
    Swal.fire({
      text: 'Estamos cargando los datos espere por favor'
    })
    Swal.showLoading();
    this.alertasService.getAlertsByCode().subscribe((resp:any)=>{
      console.log(resp);
      if(resp.code==200){
        this.data=resp.datas;
        Swal.close();
      }

    })
  }


}
