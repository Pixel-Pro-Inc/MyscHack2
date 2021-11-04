import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/User';
import { ApplicationService } from '../_services/application.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  model: any = {};  
  

  constructor(private serv: ApplicationService, private http: HttpClient) { }

  ngOnInit(): void {
    this.get();
  }

  isapplication() :boolean {
    if (this.model.length > 0) {
      return true;
    }
    return false;
  }
  getName(n: string): string{
    let x : string = '';
      if(localStorage.getItem('topic') == 'GVS'){
        x = 'volunteer';
      }
      if(localStorage.getItem('topic') == 'NS'){
        x = 'National Service application';
      }
      if(localStorage.getItem('topic') == 'I'){
        x = 'Volunteer application';
      }
    return x;
  }
  get(){
    let user: User = JSON.parse((String)(localStorage.getItem('user')));
    this.http.get('https://myschackathon.azurewebsites.net/api/submission/get/'+ user.omangNumber).subscribe(
      response =>{
        this.model = response;
        console.log(response);
      }
    );
  }
}
