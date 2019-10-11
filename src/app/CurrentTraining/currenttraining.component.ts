import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Training } from '../models/training.model';
import { CurrentTrainingService } from './currenttraining.service';

@Component({
  selector: 'app-currenttraining',
  templateUrl: './currenttraining.component.html',
  styles: []
})
export class  CurrentTrainingComponent implements OnInit {

  trainings: Training[];
  //training: Training = new Training();
  userid=JSON.parse(sessionStorage.getItem("id1"));
  constructor(private router: Router, private currenttrainingService:  CurrentTrainingService) {
    console.log(this.userid);
    

  }

  // ngOnInit() {
  //   if(sessionStorage.length == 0)
  //   {
  //     alert("You need to Signin first!");
  //     document.location.pathname='/usersignin';
  //   }
  //   else
  //   {
  //     var getuserdata=JSON.parse(localStorage.getItem('storeuserdata'));
  //     document.getElementById('fname').innerHTML=getuserdata.firstName+"'s Current Training";
  //     this.findTrainingByUserId();
 
  //   }
    

  // }

  // findTrainingByUserId(): void {
  //   var userData = JSON.parse(localStorage.getItem('storeuserdata'));
    
  //   console.log(userData.id);
    
  //   this.currenttrainingService.findTrainingByUsersId(userData.id).subscribe(data => {
  //     this.trainings = data;
  //     console.log(this.trainings);
      
  //   })  
  ngOnInit() {
    if(sessionStorage.length == 0){
      alert("You need to Signin first!");
      document.location.pathname='/usersignin';
      }
      else {
            var getuserdata=JSON.parse(localStorage.getItem('storeuserdata'));
            document.getElementById('pfname').innerHTML+=" " + getuserdata.firstName+" "+getuserdata.lastName;
            document.getElementById('fname').innerHTML=getuserdata.firstName+"'s Current Training"
            this.currenttrainingService.findTrainingByUsersId(getuserdata.id).subscribe(data => {
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


