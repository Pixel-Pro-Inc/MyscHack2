import { Component, OnInit } from '@angular/core';
import { User } from '../_models/User';
import { ApplicationService } from '../_services/application.service';

@Component({
  selector: 'app-natservice',
  templateUrl: './natservice.component.html',
  styleUrls: ['./natservice.component.css']
})
export class NatserviceComponent implements OnInit {
  model: any = {};
  doc: any = {};
  title = '';
  constructor(private application: ApplicationService) { }

  ngOnInit(): void {
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

      this.title = x;
  }

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.model.CertificateUrl = reader.result as string;
      };

    }
  }
  sendApplication() {
    this.model.Programme = 'NS';
    
    let userString = '';
    userString = (String)(localStorage.getItem('user'));    

    let user: User = JSON.parse(userString);
    this.model.user = user;

    console.log(this.model);

    this.application.submit(this.model, '/submission/submit');
  }
}
