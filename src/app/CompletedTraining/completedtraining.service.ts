import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Training } from '../models/training.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CompletedTrainingService {
  userid: string;
  constructor(private http:HttpClient) {}

  private trainingUrl = 'http://localhost:8071/training';
  //private userUrl = '/api';

  

  public findTrainingByUsersId(userid) {
    this.userid=JSON.parse(sessionStorage.getItem("id1"));
    return this.http.get<Training[]>(this.trainingUrl+"/findTrainingByUsersId/"+userid);
  }
  
  public getTrainings() {
    return this.http.get<Training[]>(this.trainingUrl);
  }

}
