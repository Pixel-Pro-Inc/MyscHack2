import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
  model: any={}
  constructor() { }

  ngOnInit(): void {
  }

  hostSelection(model: any) {

  }
  sendApplication() {

  }
}
