import { Component} from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserPaymentService } from './userpayment.service';

@Component({
  selector: 'app-userpayment',
  templateUrl: './userpayment.component.html',
  styles: []
})
export class UserPaymentComponent {

  users: User[];

  constructor(private router: Router, private userpaymentService: UserPaymentService) {

  }

  // ngOnInit() {
  //   this.userpaymentService.getUsers()
  //     .subscribe( data => {
  //       this.users = data;
  //     });
  // };


}


