import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UsermenuService } from './usermenu.service';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styles: []
})
export class UsermenuComponent implements OnInit {

  users: User[];
  constructor(private router: Router, private usermenuService: UsermenuService) {

  }

  ngOnInit() {
    this.usermenuService.getUsers()
      .subscribe( data => {
        this.users = data;
      });

      var getuserdata=JSON.parse(localStorage.getItem('storeuserdata'));
      console.log(getuserdata);
      document.getElementById('pfname').innerHTML+=" "+getuserdata.firstName+" "+getuserdata.lastName;
      document.getElementById('fname').innerHTML="Welcome " + getuserdata.firstName+" "+getuserdata.lastName;
      //document.getElementById('experience').innerHTML="Experience: " + getuserdata.yearsofExperience + " years";
      document.getElementById('email').innerHTML="Email: " + getuserdata.email ;
  };

  deleteUser(user: User): void {
    this.usermenuService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  logout()
  {
    sessionStorage.removeItem('id');
    this.router.navigate(['home']);
  }


}


