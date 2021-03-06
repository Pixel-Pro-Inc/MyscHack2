import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InternshipComponent } from './internship/internship.component';
import { LearnmoreComponent } from './learnmore/learnmore.component';
import { LoginComponent } from './login/login.component';
import { NatserviceComponent } from './natservice/natservice.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { ThanksComponent } from './thanks/thanks.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'national_service', component: NatserviceComponent},
  {path: 'volunteer', component: NatserviceComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'learnmore', component: LearnmoreComponent},
  {path: 'internship', component: NatserviceComponent},
  {path: 'applications', component: ProfileComponent},
  {path: 'thanks', component: ThanksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }