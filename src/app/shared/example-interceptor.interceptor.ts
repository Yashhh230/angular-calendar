import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable()
export class ExampleInterceptorInterceptor implements HttpInterceptor {

  constructor(public main : LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    /**
     * this will get the token 
     */
    let token = this.main.getToken();

    if (token) {
      const setHeaderInToken = request.clone({
        headers: request.headers.set('Authorization', `${token}`)
      });
      return next.handle(setHeaderInToken);

    }

    return next.handle(request);
  }
}
