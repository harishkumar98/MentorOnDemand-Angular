import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { CompletedTrainingService } from './completedtraining.service';

@Component({
  selector: 'app-completedtraining',
  templateUrl: './completedtraining.component.html',
  styles: []
})
export class  CompletedTrainingComponent implements OnInit {

  trainings: Training[];
 // ctrainings: Training[];
  training: Training = new Training();
  userid=JSON.parse(sessionStorage.getItem("id1"));
  constructor(private router: Router, private completedtrainingService:  CompletedTrainingService) {
    console.log(this.userid);
    
  }

  ngOnInit() {
    if(sessionStorage.length == 0){
      alert("You need to Signin first!");
      document.location.pathname='/usersignin';
      }
      else {
            var getuserdata=JSON.parse(localStorage.getItem('storeuserdata'));
            document.getElementById('pfname').innerHTML+=" " + getuserdata.firstName+" "+getuserdata.lastName;
            document.getElementById('fname').innerHTML=getuserdata.firstName+"'s Completed Training"
            this.completedtrainingService.findTrainingByUsersId(getuserdata.id).subscribe(data => {
              console.log(data);
              var compTraining  = new Array();
              var j=0;
              for (let i = 0; i< data.length; i++)
              {
                if(data[i].progress == 100)
                {
                  compTraining[j++] = data[i];
                }
    
                // else{
                //   document.getElementById("completeTable").innerHTML = "No Results";
                // }
                this.trainings = compTraining;
                console.log(this.trainings); 
              }  
              });


  }
}
}