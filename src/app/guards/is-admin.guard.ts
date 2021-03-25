import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';


@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  identidad:any;
  constructor(private userService:UsersService, private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.identidad=this.userService.getIdentity();
    if(this.userService.isAdmin()){
      return true;
    }else{
      this.router.navigate(['/dashboard']);
      return false;
    }

  }
  
}
