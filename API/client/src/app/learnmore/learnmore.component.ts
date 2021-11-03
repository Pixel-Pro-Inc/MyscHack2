import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learnmore',
  templateUrl: './learnmore.component.html',
  styleUrls: ['./learnmore.component.css']
})
export class LearnmoreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clicked(){
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
  }

}
