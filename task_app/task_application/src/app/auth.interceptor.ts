import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    const userData = localStorage.getItem('USER') as string | null;
    const token = userData ? JSON.parse(userData) : null;
    
        

    if (token&&token.token) {
     
      const clonedRequest = request.clone({
        setHeaders: {
          Authorization: `${token.token}`,
        }
      });
      return next.handle(clonedRequest);
    }

  
    return next.handle(request);
  }
}
