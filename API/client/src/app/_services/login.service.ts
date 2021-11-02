import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseurl = ' http://localhost:4200/api';
  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseurl + 'login', model).pipe(
      map((response: any) => {
        if (users) {
          localStorage.setItem(users, JSON.stringify(users));
        }
      })
  }

}
