import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserPaymentService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8071/payment';
  //private userUrl = '/api';

 

}
