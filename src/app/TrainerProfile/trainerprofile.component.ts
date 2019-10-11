import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { TrainerProfileService } from './trainerprofile.service';

@Component({
  selector: 'app-trainerprofile',
  templateUrl: './trainerprofile.component.html',
  styles: []
})
export class TrainerProfileComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private trainerprofileService: TrainerProfileService) {

  }

  ngOnInit() {
    this.trainerprofileService.getUsers()
      .subscribe( data => {
        this.users = data;
      });

      var getdata=JSON.parse(localStorage.getItem('storementordata'));
      console.log(getdata);
      document.getElementById('mfname').innerHTML+=" " + getdata.firstName+" "+getdata.lastName;
      document.getElementById('fname').innerHTML="Welcome " + getdata.firstName+" "+getdata.lastName;
      document.getElementById('experience').innerHTML="Experience: " + getdata.yearsofExperience + " years";
      document.getElementById('email').innerHTML="Email: " + getdata.email ;
      document.getElementById('rating').innerHTML="Rating: "+getdata.rating+"/5";
  };

  deleteUser(user: User): void {
    this.trainerprofileService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


