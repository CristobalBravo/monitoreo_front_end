import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  identity: any;
  token:any;
  constructor(private userService:UsersService ){
    this.loadUser();
  }

  ngOnInit(): void {
  }
  ngDoCheck(){
    this.loadUser();
  }
  loadUser(){
    this.identity=this.userService.getIdentity();
    this.token=this.userService.getToken();
  }


}
