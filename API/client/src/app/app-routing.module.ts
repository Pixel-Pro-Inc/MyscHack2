import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InternshipComponent } from './internship/internship.component';
import { LearnmoreComponent } from './learnmore/learnmore.component';
import { LoginComponent } from './login/login.component';
import { NatserviceComponent } from './natservice/natservice.component';
<<<<<<< HEAD
import { SignupComponent } from './signup/signup.component';
=======
import { ProfileComponent } from './profile/profile.component';
>>>>>>> 3db3fee3457a7d8c9a5945b74945ec24682a7971
import { VolunteerComponent } from './volunteer/volunteer.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'national_service', component: NatserviceComponent},
  {path: 'volunteer', component: VolunteerComponent},
  {path: 'internship', component: InternshipComponent},
<<<<<<< HEAD
  {path: 'signup', component: SignupComponent},
  {path: 'learnmore', component: LearnmoreComponent}
=======
  {path: 'profile', component: ProfileComponent},
>>>>>>> 3db3fee3457a7d8c9a5945b74945ec24682a7971
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }