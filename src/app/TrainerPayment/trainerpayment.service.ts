import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { Payment } from '../models/payment.model';
import { Training } from '../models/training.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TrainerPaymentService {
  mentorId=JSON.parse(sessionStorage.getItem("id2"));
  constructor(private http:HttpClient) {}


  private paymentUrl = 'http://localhost:8071/payments';
  private trainingUrl = 'http://localhost:8071/trainings';
  //private userUrl = '/api';

  public getPayments() {
    return this.http.get<Payment[]>(this.paymentUrl);
}

public findTrainingByMentorId(mentorId) {
  return this.http.get<Training[]>(this.trainingUrl + "/findTrainingByMentorId/" + mentorId);
}

public getTrainings() {
  return this.http.get<Training[]>(this.trainingUrl);
}

}
