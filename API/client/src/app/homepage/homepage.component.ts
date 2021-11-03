import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  learnmore(dir: string){
    this.router.navigateByUrl('learnmore');
    localStorage.setItem('topic', dir);
  }

  joinus(dir: string){

    localStorage.setItem('topic', dir);

    if(localStorage.getItem('user') == null){
      this.router.navigateByUrl('/login');
    }

    if(localStorage.getItem('user') != null){
      this.router.navigateByUrl(dir);
    }
  }

}
