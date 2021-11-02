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
    return this.http.post(this.baseurl + 'login', model).pipe(
      map((fuck: User) => {
        const user = fuck;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
      }))
  }
  logout() {
    localStorage.removeItem('user')
  }

}
