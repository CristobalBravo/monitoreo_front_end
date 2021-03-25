import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AlertasService } from '../../../services/alertas.service';

@Component({
  selector: 'app-by-platform',
  templateUrl: './by-platform.component.html',
  styleUrls: ['./by-platform.component.scss']
})
export class ByPlatformComponent implements OnInit {

  type = 'PieChart';
  data = [];
  columnNames = ['Plataforma', 'Cantidad'];
  options = {
     sliceVisibilityThreshold: .0001
  };

  constructor(private alertasService:AlertasService) { }

  ngOnInit(): void {

  }

}
