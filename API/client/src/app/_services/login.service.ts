import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map} from 'rxjs/operators';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseurl = 'https://myschackathon.azurewebsites.net/api';
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  login(model: any, dir: string) {
    this.http.post(this.baseurl + dir, model).subscribe(response => {
      localStorage.setItem('user', JSON.stringify(response));

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

      console.log(response);

      this.router.navigateByUrl('/' + x);
    },
    error =>{
      this.toastr.error(error.error);
    });
  }

  logout() {
    localStorage.removeItem('user');
  }

}
