import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  baseUrl = 'https://localhost:5001/api';

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }

  submit(model: any, dir: string){
    console.log(model);
    this.http.post(this.baseUrl + dir, model).subscribe(response =>{
      this.router.navigateByUrl('/thanks');
    },
    error =>{
      console.log(error);
      this.toastr.error(error.error);
    });
  }
  get(dir: string){
    this.http.get(this.baseUrl + dir).subscribe(response =>{
      return response;
    },
    error =>{
      this.toastr.error(error.error);
    })
  }
}
