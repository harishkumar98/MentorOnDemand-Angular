import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { TrainerCompletedTrainingService } from './trainercompletedtraining.service';

@Component({
  selector: 'app-trainercompletedtraining',
  templateUrl: './trainercompletedtraining.component.html',
  styles: []
})
export class  TrainerCompletedTrainingComponent implements OnInit {

  trainings: Training[];
  //ctrainings: Training[];
  training: Training = new Training();
  mentorid=JSON.parse(sessionStorage.getItem("id2"));
  constructor(private router: Router, private trainercompletedtrainingService:  TrainerCompletedTrainingService) {
    console.log(this.mentorid);
    
  }

  ngOnInit() {
    if(sessionStorage.length == 0){
      alert("You need to Signin first!");
      document.location.pathname='/mentorsignin';
      }
      else {
            var mentordata=JSON.parse(localStorage.getItem('storementordata'));
            document.getElementById('mfname').innerHTML+=" " + mentordata.firstName+" "+mentordata.lastName;
            document.getElementById('fname').innerHTML=mentordata.firstName+"'s Completed Training"
            this.trainercompletedtrainingService.findTrainingByMentorId(mentordata.id).subscribe(data => {
              console.log(data);
              
              var compTraining  = new Array();
              var j=0;
              for (let i = 0; i< data.length; i++)
              {
                if(data[i].progress==100)
                {
                  compTraining[j++] = data[i];
                }
    /* 
                else{
                  document.getElementById("completeTable").innerHTML = "No Results";
                }
                 */
              }  
              this.trainings = compTraining;
                  console.log(this.trainings);
              });


  }
}
}