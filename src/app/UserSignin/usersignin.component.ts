import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserSigninService } from './usersignin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './usersignin.component.html',
  styles: []
})
export class UserSigninComponent implements OnInit{

  users: User[];
  user: User = new User();
  constructor(private router: Router, private usersigninService: UserSigninService) {

  }

  ngOnInit() {
    this.usersigninService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.usersigninService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };
  
  validate(email,password): void {
    this.usersigninService.validate(email,password)
    .subscribe( data=> {
      if(data==null){
        alert('Username or password is incorrect!!');
      }
      else{
        var id1=sessionStorage.setItem('id',JSON.stringify(data.id));
        this.router.navigate(['usermenu']);
        localStorage.setItem('storeuserdata',JSON.stringify(data));
      }
    })
  }
  }

