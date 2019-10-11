import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { User } from '../models/user.model';
import { Training } from '../models/training.model';
import { SearchResultsService } from './searchresults.service';
import { StorageService } from '../searchtraining/storage.service';
@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html'
})
export class SearchResultsComponent implements OnInit {
  mentors: Mentor[];
  trainings: Training[];
  user: User = new User();
  myData;
  x;
  y;
  constructor(private router: Router, private resultsService: SearchResultsService, private storageService: StorageService) { }

  ngOnInit() {
    this.x = this.storageService.getTScope();
    console.log(this.x);
    this.myData = this.x;
  }

  enroll(mentorId): void {
    if(sessionStorage.length == 0)
    {
      alert("You need to signin first!");
      this.router.navigate(['usersignin']);
    }
    else
    {
      console.log(mentorId);
      
      this.resultsService.findTrainingByMentorId(mentorId).subscribe(data => {
        this.trainings = data;
        console.log(this.trainings);
        console.log(this.user);
        
        // this.resultsService.updateTraining(this.trainings)
      })
    }
  }


}
