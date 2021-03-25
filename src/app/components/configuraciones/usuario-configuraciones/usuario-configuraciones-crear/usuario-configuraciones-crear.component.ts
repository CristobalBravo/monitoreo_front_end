import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../../../../services/users.service';
import { UsuarioModel } from '../../../../Models/usuario.models';

@Component({
  selector: 'app-usuario-configuraciones-crear',
  templateUrl: './usuario-configuraciones-crear.component.html',
  styleUrls: ['./usuario-configuraciones-crear.component.css']
})
export class UsuarioConfiguracionesCrearComponent implements OnInit {
  formData = new FormData();
  usuario = new UsuarioModel();
  swalText:string;
  title='Crear';
  escogido;
  perfiles: any=[
    {nombre: 'Desarrollador', valor: 'Desarrollador'},
    {nombre: 'Administrador', valor: 'Administrador'}
  ];
  constructor(private router:Router, private usersService:UsersService, private route:ActivatedRoute) {
    this.escogido=0;
  }

  ngOnInit(): void {
    this.usuario.perfil=this.perfiles[0].valor;
    let id = this.route.snapshot.paramMap.get('id');
    if(id !==null){
      this.title='Editar'
      this.formData.append('_id',id);
      this.usersService.searchById(this.formData).subscribe((resp:any)=>{
        this.usuario=resp.user;
        this.escogido=1;
      });
    }
  }
  guardar(formulario: NgForm){
    let peticion:Observable<any>
    if(formulario.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Formulario Invalido',
      })
      formulario.reset();
      return;
    }
    Swal.fire({
      title:'Espere',
      text:'Guardando Informacion',
      icon:'info',
      allowOutsideClick:false
    });
    Swal.showLoading();

    if(this.usuario._id){
      peticion=this.usersService.editUser(this.usuario);
      this.swalText='Se Actualizo Correctamente';
    }else{
      peticion=this.usersService.saveUser(this.usuario);
      this.swalText='Se Creo Correctamente';
    }

    peticion.subscribe(resp=>{
      console.log(resp);
      if(resp.code==200){
        Swal.fire({
          title:this.usuario.nombre+ " " + this.usuario.apellido,
          text: this.swalText ,
          icon: 'success'
        }).then(resp=>{
          if(resp.value){
            this.router.navigateByUrl('configuraciones/usuario');
          }
        });
      }else{
        Swal.fire({
          title:'Opss',
          text: resp.errors.rut ,
          icon: 'error'
        })
      }

    })
  }

  escogerPerfil(perfil){
    this.usuario.perfil=perfil;
  }

}
