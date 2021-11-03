import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { InternshipComponent } from './internship/internship.component';
import { NatserviceComponent } from './natservice/natservice.component';
<<<<<<< HEAD
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { LearnmoreComponent } from './learnmore/learnmore.component';
=======
import { ProfileComponent } from './profile/profile.component';
>>>>>>> 3db3fee3457a7d8c9a5945b74945ec24682a7971

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    VolunteerComponent,
    InternshipComponent,
    NatserviceComponent,
<<<<<<< HEAD
    NavComponent,
    SignupComponent,
    LearnmoreComponent
=======
    ProfileComponent
>>>>>>> 3db3fee3457a7d8c9a5945b74945ec24682a7971
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
