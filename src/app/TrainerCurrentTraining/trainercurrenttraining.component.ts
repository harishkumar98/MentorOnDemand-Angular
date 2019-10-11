import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { TrainerCurrentTrainingService } from './trainercurrenttraining.service';

@Component({
  selector: 'app-trainercurrenttraining',
  templateUrl: './trainercurrenttraining.component.html',
  styles: []
})
export class  TrainerCurrentTrainingComponent implements OnInit {

  trainings: Training[];
  training: Training = new Training();
  mentorid=JSON.parse(sessionStorage.getItem("id2"));
  constructor(private router: Router, private trainercurrenttrainingService:  TrainerCurrentTrainingService) {
    console.log(this.mentorid);
    

  }

  // ngOnInit() {

  //   if(sessionStorage.length == 0)
  //   {
  //     alert("You need to Signin first!");
  //     document.location.pathname='/mentorsignin';
  //   }
  //   else
  //   {
  //     this.findTrainingByMentorId();  
  //   }
  // }

  // findTrainingByMentorId(): void {
  //   var mentordata = JSON.parse(localStorage.getItem('storementordata'));
  //   document.getElementById('fname').innerHTML=mentordata.firstName+"'s Current Training"
  //   console.log(mentordata.id);
    
  //   this.trainercurrenttrainingService.findTrainingByMentorId(mentordata.id).subscribe(data => {
  //     this.trainings = data;
  //     console.log(this.trainings);
      
  //   })  
  // }
  ngOnInit() {
    if(sessionStorage.length == 0){
      alert("You need to Signin first!");
      document.location.pathname='/mentorsignin';
      }
      else {
            var mentordata=JSON.parse(localStorage.getItem('storementordata'));
            document.getElementById('mfname').innerHTML+=" " + mentordata.firstName+" "+mentordata.lastName;
            document.getElementById('fname').innerHTML=mentordata.firstName+"'s Current Training"
            this.trainercurrenttrainingService.findTrainingByMentorId(mentordata.id).subscribe(data => {
              console.log(data);
              for (let i = 0; i< data.length; i++)
              {
                if(data[i].progress<100)
                {
                  console.log(data[i].progress);
                  var compTraining  = new Array();
                  compTraining[i] = data[i];
                  this.trainings = compTraining;
                  console.log(this.trainings[i]);
                  
                  
                }
    
                else{
                  document.getElementById("completeTable").innerHTML = "No Results";
                }
                
              }  
              });
            }
}


}