import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Mentor } from '../models/Mentor.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MentorSigninService {

  constructor(private http : HttpClient) { }  

  private MentorUrl = 'http://localhost:8071/mentors';
  //private MentorUrl = '/api';

  public getMentors() {
    return this.http.get<Mentor[]>(this.MentorUrl);
  }

  public deleteMentor(Mentor) {
    return this.http.delete(this.MentorUrl + "/"+ Mentor.id);
  }

  public createMentor(Mentor) {
    return this.http.post<Mentor>(this.MentorUrl, Mentor);
  }

  public validate(email,password) {
    return this.http.get<Mentor>(this.MentorUrl + "/" + email + "/" + password);
  }
}
