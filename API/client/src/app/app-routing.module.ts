import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InternshipComponent } from './internship/internship.component';
import { LoginComponent } from './login/login.component';
import { NatserviceComponent } from './natservice/natservice.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'national_service', component: NatserviceComponent},
  {path: 'volunteer', component: VolunteerComponent},
  {path: 'internship', component: InternshipComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
