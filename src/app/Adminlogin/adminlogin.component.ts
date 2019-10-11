import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { AdminLoginService } from './adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styles: []
})
export class AdminLoginComponent  {

   username:string;
   password:string;
  constructor(private router: Router, private adminloginService: AdminLoginService) {

  }

  LoginAdmin()
  {
      if(this.username=="Admin" && this.password=="admin123")
      {
        window.location.pathname = '/loading';
        localStorage.setItem('loadData','"/admin"');
        // this.router.navigate(['/admin'])
      }
      else
      {
        alert("Username or password is incorrect");
      }
  }

}


