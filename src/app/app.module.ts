import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { UserSigninComponent } from './UserSignin/usersignin.component';
import { MentorSigninComponent } from './MentorSignin/mentorsignin.component';
import { UserSignupComponent } from './usersignup/usersignup.component';
import { MentorSignupComponent } from './mentorsignup/mentorsignup.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { AppRoutingModule } from './app.routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './adminlogin/adminlogin.component';
import {UserService} from './user/user.service';
import {HomeService} from './home/home.service';
import {UserSigninService} from './UserSignin/usersignin.service';
import {MentorSigninService} from './MentorSignin/mentorsignin.service';
import {UserSignupService} from './usersignup/usersignup.service';
import {MentorSignupService} from './mentorsignup/mentorsignup.service';
import {AdminService} from './admin/admin.service';
import { AdminLoginService } from './adminlogin/adminlogin.service';
import {UsermenuService} from './usermenu/usermenu.service';
import {HttpClientModule} from "@angular/common/http";
 import {AddUserComponent} from './user/add-user.component';
 import{RouterModule} from '@angular/router';
import { TrainerProfileComponent } from './trainerprofile/trainerprofile.component';
import { TrainerProfileService } from './trainerprofile/trainerprofile.service';
import { TrainerPaymentComponent } from './trainerpayment/trainerpayment.component';
import { TrainerPaymentService } from './trainerpayment/trainerpayment.service';
import { SearchTrainingService } from './searchtraining/searchtraining.service';
import { SearchTrainingComponent } from './searchtraining/searchtraining.component';
import { CurrentTrainingService } from './currenttraining/currenttraining.service';
import { TrainerCurrentTrainingService } from './trainercurrenttraining/trainercurrenttraining.service';
import { CurrentTrainingComponent } from './currenttraining/currenttraining.component';
import { TrainerCurrentTrainingComponent } from './trainercurrenttraining/trainercurrenttraining.component';
import { CompletedTrainingService } from './completedtraining/completedtraining.service';
import { TrainerCompletedTrainingService } from './trainercompletedtraining/trainercompletedtraining.service';
import { CompletedTrainingComponent } from './completedtraining/completedtraining.component';
import { TrainerCompletedTrainingComponent } from './trainercompletedtraining/trainercompletedtraining.component';
import { PaymentComponent } from './add/payment/payment.component';
import { UserPaymentComponent } from './userpayment/userpayment.component';
//import { PaymentService } from './payment/payment.service';
//import {AddUserComponent} from './add/user/add-user.component';
import {AddMentorComponent} from './add/mentor/add-mentor.component';
import {AddSkillComponent} from './add/skill/add-skill.component';
import {AddTechnologyComponent} from './add/technology/add-technology.component';
import {AddPaymentComponent} from './add/payment/add-payment.component';
import {AddTrainingComponent} from './add/training/add-training.component';
import { MentorComponent } from './add/mentor/mentor.component';
import { SkillComponent } from './add/skill/skill.component';
import { TechnologyComponent } from './add/technology/technology.component';
import { TrainingComponent } from './add/training/training.component';
import {TechnologyService} from './add/technology/technology.service';
import {TrainingService} from './add/training/training.service';
import {MentorService} from './add/mentor/mentor.service';
import {SkillService} from './add/skill/skill.service';
import {PaymentService} from './add/payment/payment.service';
import {UserPaymentService} from './userpayment/userpayment.service';
import { LoadingscreenComponent } from './loadingscreen/loadingscreen.component';
import { StorageService } from './searchtraining/storage.service';
import { SearchResultsComponent } from './searchresults/searchresults.component';
import { SearchResultsService } from './searchresults/searchresults.service';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    AddUserComponent,
    UserSigninComponent,
    UserSignupComponent,
    MentorSigninComponent,
    MentorSignupComponent,
    UsermenuComponent,
    AdminComponent,
    AdminLoginComponent,
    TrainerProfileComponent,
    TrainerPaymentComponent,
    SearchTrainingComponent,
    CurrentTrainingComponent,
    TrainerCurrentTrainingComponent,
    CompletedTrainingComponent,
    TrainerCompletedTrainingComponent,
    PaymentComponent,
    UserPaymentComponent,
    MentorComponent,
    TechnologyComponent,
    SkillComponent,
    TrainingComponent,
    AddMentorComponent,
    AddSkillComponent,
    AddPaymentComponent,
    AddTrainingComponent,
    AddTechnologyComponent,
    LoadingscreenComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'usersignin',component:UserSigninComponent},
      {path:'mentorsignin',component:MentorSigninComponent},
      {path:'usersignup',component:UserSignupComponent},
      {path:'mentorsignup',component:MentorSignupComponent},
      {path:'adminlogin',component:AdminLoginComponent}, 
      {path:'trainerprofile',component:TrainerProfileComponent},
      {path:'trainerpayment',component:TrainerPaymentComponent},
      {path:'searchtraining',component:SearchTrainingComponent},
      {path:'currenttraining',component:CurrentTrainingComponent},
      {path:'trainercurrenttraining',component:TrainerCurrentTrainingComponent},
      {path:'completedtraining',component:CompletedTrainingComponent},
      {path:'trainercompletedtraining',component:TrainerCompletedTrainingComponent},
      {path:'payment',component:PaymentComponent},
      {path:'userpayment',component:UserPaymentComponent},
      { path: 'blockuser', component: UserComponent },
  { path: 'blockmentor', component: MentorComponent },
  { path: 'removeskill', component: SkillComponent },
  { path: 'removetechnology', component: TechnologyComponent },
  { path: 'removetraining', component: TrainingComponent },
  { path: 'payments', component: PaymentComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'addmentor', component: AddMentorComponent },
  { path: 'addskill', component: AddSkillComponent },
  { path: 'addtechnology', component: AddTechnologyComponent },
  { path: 'addpayment', component: AddPaymentComponent },
  { path: 'addtraining', component: AddTrainingComponent },
  {path: 'loading', component: LoadingscreenComponent},
  {path: 'searchresults', component: SearchResultsComponent},
    ])
  ],
  providers: [Title,UserService,HomeService,UserSigninService,UserSignupService,MentorSignupService,MentorSigninService,UsermenuService,AdminService,AdminLoginService,CurrentTrainingService,TrainerCurrentTrainingService,CompletedTrainingService,TrainerCompletedTrainingService,TrainerProfileService,TrainerPaymentService,SearchTrainingService,SearchResultsService,PaymentService,UserPaymentService,TrainingService,TechnologyService,PaymentService,MentorService,SkillService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
