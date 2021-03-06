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
import { ProfileComponent } from './profile/profile.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { LearnmoreComponent } from './learnmore/learnmore.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ThanksComponent } from './thanks/thanks.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    VolunteerComponent,
    InternshipComponent,
    NatserviceComponent,
    SignupComponent,
    LearnmoreComponent,
    ProfileComponent,
    NavComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    BsDropdownModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
