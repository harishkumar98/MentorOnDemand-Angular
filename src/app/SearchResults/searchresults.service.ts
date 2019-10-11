import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Mentor } from '../models/mentor.model';
import { Training } from '../models/training.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SearchResultsService {

  constructor(private http:HttpClient) {}

  private baseurl = 'http://localhost:8025/';
  private userUrl = 'http://localhost:8071/users';
  private mentorUrl = 'http://localhost:8071/mentors';
  private trainingUrl = 'http://localhost:8071/training';
  //private userUrl = '/api';

  public findMentor(userName, password) {
    return this.http.get<Mentor>(this.mentorUrl + "/" + userName + "/" + password);
  }

  public getMentors() {
    return this.http.get<Mentor[]>(this.mentorUrl);
  }

  public updateTraining(training) {
    return this.http.put(this.trainingUrl, training.id, training );
  }

  public findTrainingByMentorId(mentorId) {
    return this.http.get<Training[]>(this.trainingUrl + "/findTrainingByMentorId/" + mentorId);
  }
}
