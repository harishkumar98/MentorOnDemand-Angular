import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { User } from '../models/user.model';
import { MentorSigninService } from './mentorsignin.service';
import { Mentor } from '../MentorSignup/mentorsignup.model';

@Component({
  selector: 'app-signin',
  templateUrl: './mentorsignin.component.html',
  styles: []
})
export class MentorSigninComponent {

  //users: User[];
  mentor: Mentor = new Mentor();
  constructor(private router: Router, private mentorsigninService: MentorSigninService) {

  }

  // ngOnInit() {
  //   this.mentorsigninService.getMentors()
  //     .subscribe( data => {
  //       this.mentors = data;
  //     });
  // };

  // deleteUser(user: User): void {
  //   this.mentorsigninService.deleteMentor(mentor)
  //     .subscribe( data => {
  //       this.users = this.users.filter(u => u !== user);
  //     })
  // };  
  
  validate(email,password): void {
    this.mentorsigninService.validate(email,password)
    .subscribe( data=> {
      if(data==null){
        alert('Username or password is incorrect!!');
      }
      else{
        var id2=sessionStorage.setItem('id',JSON.stringify(data.id));
        this.router.navigate(['trainerprofile']);
        localStorage.setItem('storementordata',JSON.stringify(data));
      }
    })
}

}

