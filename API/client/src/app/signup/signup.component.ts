import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../_services/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: any= {};

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  signup(){
    console.log(this.model);
    this.registerService.signup(this.model, '/user/register');
  }

}
