import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokendata :any
  private jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient) {

    const userData = localStorage.getItem('USER') as string | null;
    const token = userData ? JSON.parse(userData) : null;

    this.tokendata = token.token
   }

  postMethod(apiname:String, data:object) {

    const updateUrl = environment.apiBaseURL + apiname;

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return this.http.post(updateUrl, data);
  }

  

  isTokenExpired() {

    const userData = localStorage.getItem('USER') as string | null;
    const token = userData ? JSON.parse(userData) : null;
   
    if (!token.token) {
      return true; 
    }
let expired = this.jwtHelper.isTokenExpired(token.token)

    return expired ;
  }

  }
