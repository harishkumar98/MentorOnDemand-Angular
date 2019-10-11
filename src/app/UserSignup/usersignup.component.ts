import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserSignupService } from './usersignup.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styles: []
})
export class UserSignupComponent {

  user: User = new User();
  
  constructor(private router: Router, private userSignupService: UserSignupService) {

  }

  // ngOnInit() {
  //   this.signupService.getUsers()
  //     .subscribe( data => {
  //       this.user = data;
  //     });
  // };

  // createUser(): void {
  //   this.signupService.createUser(this.user)
  //       .subscribe( data => {
  //         alert("User created successfully.");
  //       });
        createUser(): void {
          this.userSignupService.check(this.user.userName).subscribe( data =>{
            if(data==true)
            {
              this.userSignupService.createUser(this.user)
              .subscribe( data => {
                alert("User created successfully.");
              });
            }
            else
            {
              alert("Username already exists");
            }
      
          })
        };

  // deleteUser(user: User): void {
  //   this.signupService.deleteUser(user)
  //     .subscribe( data => {
  //       this.users = this.users.filter(u => u !== user);
  //     })
  

}
