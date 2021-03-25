import { Component, OnInit, DoCheck } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, DoCheck {
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
