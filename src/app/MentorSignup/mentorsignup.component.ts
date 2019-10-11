import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { MentorSignupService } from './mentorsignup.service';

@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styles: []
})
export class MentorSignupComponent  {

  mentor: Mentor = new Mentor();

  constructor(private router: Router, private mentorSignupService: MentorSignupService) {

  }

  // ngOnInit() {
  //   this.mentorSignupService.getUsers()
  //     .subscribe( data => {
  //       this.users = data;
  //     });
  // };

  // createMentor(): void {
  //   this.mentorSignupService.createMentor(this.mentor)
  //       .subscribe( data => {
  //         alert("Mentor created successfully.");
  //       });
  createMentor(): void {
    this.mentorSignupService.check(this.mentor.userName).subscribe( data =>{
      if(data==true)
      {
        this.mentorSignupService.createMentor(this.mentor)
        .subscribe( data => {
          alert("Mentor created successfully.");
        });
      }
      else
      {
        alert("Username already exists");
      }

    })
  };


  // deleteUser(user: User): void {
  //   this.mentorSignupService.deleteUser(user)
  //     .subscribe( data => {
  //       this.users = this.users.filter(u => u !== user);
  //     })
  // };

}


