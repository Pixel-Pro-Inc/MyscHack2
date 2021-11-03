import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/User';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(localStorage.getItem('user') != null){
      let x = (String)(localStorage.getItem('user'));
      let user: User = JSON.parse(x);
      let token = user.token;
      request = request.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`
        }
      });
    }    

    return next.handle(request);
  }
}
