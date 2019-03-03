import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  public nameUser ;

  constructor(
              private Login: LoginService,
              private router: Router) {
    
               }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.Login.getUser().subscribe( data => {
      this.nameUser = data.user;
    });
   
  }

  logOut(){
    this.Login.getLogOut().subscribe( data => {
      this.router.navigate(['']);
    });
  }

}
