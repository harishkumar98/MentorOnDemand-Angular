import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mentor } from '../models/mentor.model';
import { Training } from '../models/training.model';
import { StorageService } from './storage.service';
import { SearchTrainingService } from './searchtraining.service';
import { SearchResultsComponent } from '../searchresults/searchresults.component';
@Component({
  selector: 'app-searchtraining',
  templateUrl: './searchtraining.component.html',
  styles: [],
  providers: [SearchTrainingService, SearchResultsComponent]
})
export class  SearchTrainingComponent implements OnInit {
  mentor: Mentor = new Mentor();
  mentors: Mentor[];
  ment: Mentor[];
  trainings: Training[];
  training: Training = new Training();
  constructor(private router: Router, private searchtrainingService:  SearchTrainingService, private storageService: StorageService,private comp: SearchResultsComponent) {

  }

  ngOnInit() {
    this.searchtrainingService.getMentors().subscribe(data => {
      this.mentors = data;
      console.log(this.mentors);
      
    })

    this.searchtrainingService.getTrainings().subscribe(data => {
      this.trainings = data;
      console.log(this.trainings);
      
    })

  };

  
  check(startingDate, endingDate, techName): void {
    var x=0;
    let name;
    let rout = this.router;
    let men = this.mentors;
    let train = this.trainings;
    var ment = new Array();
    var tech=new Array();
    for (let i =0; i< men.length;i++)
    {
      if(startingDate == train[i].startDate || endingDate == train[i].endDate || techName == train[i].technology.techName )
      {
        ment[x] = men[i];
        tech[x]=train[i];
        x++;
        this.storageService.setScope(ment);
        this.storageService.setTScope(tech);
        this.comp.ngOnInit();
        rout.navigate(['searchresults']);
      }
    }
    
  }

}


