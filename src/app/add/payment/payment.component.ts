import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Payment} from '../models/payment.model';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment: Payment[];

  constructor(private router: Router, private paymentService: PaymentService) {

  }

  ngOnInit() {
    this.paymentService.getPayment()
      .subscribe( data => {
        this.payment = data;
      });
  };

  deletePayment(payment: Payment): void {
    this.paymentService.deletePayment(payment)
      .subscribe( data => {
        this.payment = this.payment.filter(u => u !== payment);
      })
  };


}
