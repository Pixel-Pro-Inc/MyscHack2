import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: [
    './homepage.component.css',
    './assets/vendor/aos/aos.css',
    './assets/vendor/bootstrap/css/bootstrap.min.css',
    './assets/vendor/bootstrap-icons/bootstrap-icons.css',
    './assets/vendor/boxicons/css/boxicons.min.css',
    './assets/vendor/glightbox/css/glightbox.min.css',
    './assets/vendor/swiper/swiper-bundle.min.css'
]
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

    let x: string = '';
    if(localStorage.getItem('topic') == 'GVS'){
      x = 'volunteer';
    }
    if(localStorage.getItem('topic') == 'NS'){
      x = 'national_service';
    }
    if(localStorage.getItem('topic') == 'I'){
      x = 'internship';
    }

    localStorage.setItem('topic', dir);

    if(localStorage.getItem('user') == null){
      this.router.navigateByUrl('/login');
    }

    if(localStorage.getItem('user') != null){
      this.router.navigateByUrl(x);
    }
  }

}
