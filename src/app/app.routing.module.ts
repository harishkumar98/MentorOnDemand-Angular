import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { UserSigninComponent } from './UserSignin/usersignin.component';
import { MentorSigninComponent } from './MentorSignin/mentorsignin.component';
import { UserSignupComponent } from './usersignup/usersignup.component';
import { MentorSignupComponent } from './mentorsignup/mentorsignup.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
 import {AddUserComponent} from './user/add-user.component';
 import {AdminComponent} from './admin/admin.component';
 import {AdminLoginComponent} from './adminlogin/adminlogin.component';
 import { TrainerProfileComponent } from './trainerprofile/trainerprofile.component';
 import { TrainerPaymentComponent } from './trainerpayment/trainerpayment.component';
 import { SearchTrainingComponent } from './searchtraining/searchtraining.component';
 import { CurrentTrainingComponent } from './currenttraining/currenttraining.component';
 import { TrainerCurrentTrainingComponent } from './trainercurrenttraining/trainercurrenttraining.component';
 import { CompletedTrainingComponent } from './completedtraining/completedtraining.component';
 import { TrainerCompletedTrainingComponent } from './trainercompletedtraining/trainercompletedtraining.component';
 //import { PaymentComponent } from './payment/payment.component';
 import { SkillComponent } from './add/skill/skill.component';
import { TechnologyComponent } from './add/technology/technology.component';
import { TrainingComponent } from './add/training/training.component';
import { PaymentComponent } from './add/payment/payment.component';
import { UserPaymentComponent } from './userpayment/userpayment.component';
//import {AddUserComponent} from './add/user/add-user.component';
import {AddSkillComponent} from './add/skill/add-skill.component';
import {AddPaymentComponent} from './add/payment/add-payment.component';
import {AddTechnologyComponent} from './add/technology/add-technology.component';
import { MentorComponent } from './add/mentor/mentor.component';
import {AddMentorComponent} from './add/mentor/add-mentor.component';
import {AddTrainingComponent} from './add/training/add-training.component';
import { SearchResultsComponent } from './searchresults/searchresults.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: '', pathMatch:'full', component: HomeComponent },
   { path: 'add', component: AddUserComponent },
  { path: 'usersignin', component: UserSigninComponent },
  { path: 'mentorsignin', component: MentorSigninComponent },
  { path: 'usersignup', component: UserSignupComponent },
  { path: 'mentorsignup', component: MentorSignupComponent },
  { path: 'usermenu', component: UsermenuComponent },
  { path: 'admin', component:AdminComponent },
  { path: 'adminlogin', component:AdminLoginComponent },
  { path: 'trainerprofile', component:TrainerProfileComponent },
  { path: 'trainerpayment', component:TrainerPaymentComponent },
  { path: 'searchtraining', component:SearchTrainingComponent },
  {path:'currenttraining',component:CurrentTrainingComponent},
  {path:'trainercurrenttraining',component:TrainerCurrentTrainingComponent},
  {path:'completedtraining',component:CompletedTrainingComponent},
  {path:'trainercompletedtraining',component:TrainerCompletedTrainingComponent},
  { path: 'payment', component:PaymentComponent },
  { path: 'userpayment', component:UserPaymentComponent },
  { path: 'blockuser', component: UserComponent },
  { path: 'blockmentor', component: MentorComponent },
  { path: 'removeskill', component: SkillComponent },
  { path: 'removetechnology', component: TechnologyComponent },
  { path: 'removetraining', component: TrainingComponent },
  { path: 'payments', component: PaymentComponent },
  //{ path: 'adduser', component: AddUserComponent },
  { path: 'addmentor', component: AddMentorComponent },
  { path: 'addskill', component: AddSkillComponent },
  { path: 'addtechnology', component: AddTechnologyComponent },
  { path: 'addpayment', component: AddPaymentComponent },
  { path: 'addtraining', component: AddTrainingComponent },
  {path: 'searchresults', component: SearchResultsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
