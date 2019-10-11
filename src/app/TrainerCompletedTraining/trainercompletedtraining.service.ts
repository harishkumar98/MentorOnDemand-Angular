import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Training } from '../models/training.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TrainerCompletedTrainingService {
  mentorId=JSON.parse(sessionStorage.getItem("id2"));
  constructor(private http:HttpClient) {}

  private trainingUrl = 'http://localhost:8071/training';
  //private userUrl = '/api';

  

  public findTrainingByMentorId(mentorId) {
    return this.http.get<Training[]>(this.trainingUrl + "/findTrainingByMentorId/" + mentorId);
  }



  public getTrainings() {
    return this.http.get<Training[]>(this.trainingUrl);
  }


}
