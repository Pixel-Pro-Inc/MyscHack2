import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl: string = 'https://localhost:5001/api';

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }

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

      this.router.navigateByUrl('/' + x);
      },
      error => {
        this.toastr.error(error.error);
      }
    );

  }
}
