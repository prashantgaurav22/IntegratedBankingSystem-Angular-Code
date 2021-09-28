import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
 

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(this.authService.isLoggedIn()){
      let token = sessionStorage.getItem("jwt");
      request = request.clone({
        setHeaders :{
          Authorization:token
        }
      })
    }

    return next.handle(request);
  }
}
