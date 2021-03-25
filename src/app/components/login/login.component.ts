import { Component, OnInit , ViewChild, TemplateRef} from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../../Models/login.models';
import Swal from 'sweetalert2'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { identity } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("contenido") contenido: TemplateRef<any>;
  formData = new FormData();
  recuerdame:boolean;
  loginModel= new LoginModel();
  rut:string;
  text:string;
  distinto:boolean;
  user:any;
  constructor(private userServices:UsersService,
              private router:Router,
              private route:ActivatedRoute,
              private modal:NgbModal) {
    this.recuerdame=false;
  }

  ngOnInit(): void {
    let password= localStorage.getItem('pwd');
    let rut= localStorage.getItem('rut');
    if( rut  && password){
      this.loginModel.rut=rut;
      this.loginModel.password=password;
      this.recuerdame= true;
    }

    this.logout();
    if(localStorage.getItem('rut')){
      this.loginModel.rut=localStorage.getItem('rut');
    }
  }
  login(formulario: NgForm){
    if(this.loginModel.rut==undefined){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No ha Ingresado el rut',
      })
      return;
    }else{
      if(this.loginModel.password==undefined){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No ha Ingresado la contraseña',
        })
        return;
      }else{
        this.userServices.loginUser(this.loginModel).subscribe((resp:any)=>{
          if(resp.token){
            if(this.recuerdame){
              localStorage.setItem('rut',this.loginModel.rut);
              localStorage.setItem('pwd',this.loginModel.password);
            }else{
              localStorage.removeItem('rut');
              localStorage.removeItem('pwd');
            }
            localStorage.setItem('token', resp.token);
            this.router.navigateByUrl('/dashboard');
          }else{
            if(resp.code==300){
              console.log(resp);
              this.user=resp.user;
              this.modal.open(this.contenido);
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: resp.data.message,
              })
              return;
            }
          }
        });
      }
    }

  }
  logout(){
    let logout = this.route.snapshot.paramMap.get('sure');
    console.log(logout);
    if(logout=='sure'){
      localStorage.removeItem('token');
      this.router.navigateByUrl('login')
    }
  }
  changePassword(codigo, password1, password2){
    if(password1==password2){
      console.log(this.user._id);
      let formData= new FormData();
      formData.append('code', codigo);
      formData.append('_id', this.user._id);
      formData.append('password', password1);
      this.userServices.setPassword(formData).subscribe((resp:any)=>{
        console.log(resp);
        if(resp.code==200){
          this.modal.dismissAll();
          Swal.fire({
            icon: 'success',
            title: 'Contraseña cambiada con éxito',
          })
          this.router.navigateByUrl('/login');
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: resp.data.message,
          })
          return;
        }

      })
    }else{
      this.distinto=true;
      this.text='las contraseña no son iguales'
    }
  }

}
