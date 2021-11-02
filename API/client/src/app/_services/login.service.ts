import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseurl = ' http://localhost:4200/api';
  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseurl, model).pipe(
      map((response => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user)); //Is this supposed to be set Item or get item?
          console.log("Is this supposed to be set Item or get item?");
        }
        return response;
      }))
      )
  }
  logout() {
    localStorage.removeItem('user')
  }

}
