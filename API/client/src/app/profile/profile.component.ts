import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  model: any = {}
  incomplete: boolean = false;
  validating: boolean = false;
  waitinglist: boolean = false;
  underReview: boolean = false;
  

  constructor() { }

  ngOnInit(): void {
    
  }

  isapplication() :boolean {
    if (this.incomplete==false&&this.validating==false&&this.waitinglist==false&&this.underReview==false) {
      return true;
    }
    return false;
  }

  taskComplete() {

  }
}
