import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import Swal from 'sweetalert2'
import { UsuarioModel } from '../../../Models/usuario.models';


@Component({
  selector: 'app-usuario-configuraciones',
  templateUrl: './usuario-configuraciones.component.html',
  styleUrls: ['./usuario-configuraciones.component.css']
})
export class UsuarioConfiguracionesComponent implements OnInit {
  usuarios=[];
  p: number = 1;
  constructor(private userService: UsersService) {

  }

  ngOnInit(): void {
    Swal.fire({
      title:'Espere',
      text:'Estamos cargando la información',
      icon:'info',
      allowOutsideClick:false
    });
    Swal.showLoading();
    this.userService.listUser().subscribe((resp:any)=>{
      if(resp.code==200){
        Swal.close();
        this.usuarios=resp.usuarios;
      }
    })
  }

  public eliminar(usuario:UsuarioModel, i:number){
    Swal.fire({
      title: 'Eliminar',
      icon:'error',
      text: `¿Desea Eliminar a ${usuario.nombre} ${usuario.apellido}?`,
      showCancelButton:true,
      cancelButtonText:'No',
      cancelButtonColor: '#ff0000',
      showConfirmButton:true,
      confirmButtonText: 'Si'
    }).then(resp=>{
      if(resp.value){
        this.userService.deletedUser(usuario).subscribe((resp:any)=>{
          console.log(resp);
        });
        this.usuarios.splice(i,1);
      }
    });
  }

}
