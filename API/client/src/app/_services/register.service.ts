import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl: string = 'https://myschackathon.azurewebsites.net/api';

  constructor(private http: HttpClient, private login: LoginService , private toastr: ToastrService, private router: Router) { }

  signup(model: any, dir: string){
    this.http.post(this.baseUrl + dir, model).subscribe(
      response => {
        
        let x : string = '';
      if(localStorage.getItem('topic') == 'GVS'){
        x = 'volunteer';
      }
      if(localStorage.getItem('topic') == 'NS'){
        x = 'national_service';
      }
      if(localStorage.getItem('topic') == 'I'){
        x = 'internship';
      }

      console.log(model);

      this.login.login(model, '/user/login');
      },
      error => {
        this.toastr.error(error.error);
      }
    );

  }
}
