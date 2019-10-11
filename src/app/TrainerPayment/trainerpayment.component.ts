import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { TrainerPaymentService } from './trainerpayment.service';
import { TrainerCurrentTrainingService } from '../trainercurrenttraining/trainercurrenttraining.service';
@Component({
  selector: 'app-trainerpayment',
  templateUrl: './trainerpayment.component.html',
  styles: []
})
export class TrainerPaymentComponent implements OnInit {

  trainings: Training[];
  mentorid=JSON.parse(sessionStorage.getItem("id2"));
  constructor(private router: Router,private  trainercurrenttrainingService: TrainerCurrentTrainingService) {
    
  }
  ngOnInit() {


    var mentordata=JSON.parse(localStorage.getItem('storementordata'));
    console.log(mentordata.id);
    document.getElementById('mfname').innerHTML+=" " + mentordata.firstName+" "+mentordata.lastName;
    document.getElementById('fname').innerHTML=mentordata.firstName+"'S Payment Details";
    if(sessionStorage.length == 0)
    {
      alert("You need to Signin first!");
      document.location.pathname='/signin';
    }
    else
    {
      // this.getPayments();
      this.findTrainingByMentorId();
    }
  }

  // getPayments(): void {

  //   this.mpstatusService.getPayments().subscribe(data =>{
  //     this.payments = data;
  //     console.log(this.payments);
      
  //   })
  // }

  findTrainingByMentorId(): void {
    var mentordata = JSON.parse(localStorage.getItem('storementordata'));
    
    console.log(mentordata.id);
    
    this.trainercurrenttrainingService.findTrainingByMentorId(mentordata.id).subscribe(data => {
      this.trainings = data;
      console.log(this.trainings);
      
    })  
  }

  

}


