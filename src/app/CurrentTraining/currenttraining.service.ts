import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model'
import { Training } from '../models/training.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CurrentTrainingService {
   userId=JSON.parse(sessionStorage.getItem("id1"));
  constructor(private http:HttpClient) {
    
  }

  private trainingUrl = 'http://localhost:8071/training';
  //private userUrl = '/api';


  public findTrainingByUsersId(userId) {
    return this.http.get<Training[]>(this.trainingUrl + "/findTrainingByUsersId/" + userId);
  }
  
  public getTraining() {
    return this.http.get<Training[]>(this.trainingUrl);
  }

}
