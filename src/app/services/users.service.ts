import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UsuarioModel } from '../Models/usuario.models';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  token:string;
  identity:any;
  url:string;
  constructor(private http: HttpClient) {
    this.url= environment.urlBase;
  }
  saveUser(user){
    return this.http.post(this.url+'usuario/crear',user);
  }
  listUser(){
    return this.http.get(this.url+'usuario/listar');
  }
  deletedUser(user: UsuarioModel){
    return this.http.post(this.url+'usuario/eliminar',user);
  }
  searchById(id){
    return this.http.post(this.url+'usuario/buscar',id);
  }
  editUser(user: UsuarioModel){
    return this.http.post(this.url+'usuario/editar',user);
  }

  loginUser(datos){
    return this.http.post(this.url+'usuario/login',datos);
  }

  getIdentity(){
    if(this.getToken()!=null){
      this.identity= JSON.parse(atob(this.token.split(".")[1]));
    }else{
      this.identity=null;
    }
    return this.identity
  }
  getToken(){
    let token = localStorage.getItem('token');
    if(token && token != "undefined"){
      this.token=token;
    }else{
      this.token=null;
    }
    return this.token;
  }

  isAdmin(){
    if(this.token!= null){
      if(this.identity.perfil == 'Administrador'){
        return true;
      }else{
        return false;
      }
    }else{
      return false
    }
  }

  setPassword(datos){
    return this.http.post(this.url+'usuario/setPassword',datos);
  }

}
