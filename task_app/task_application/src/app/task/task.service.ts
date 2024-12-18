import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  userid :any
  constructor(private http: HttpClient) { 
    const userData = localStorage.getItem('USER') as string | null;
    this.userid = userData ? JSON.parse(userData) : null;
    


  }

  postMethod(apiname:String, data:object) {
   
    
       
      const updateUrl = environment.apiBaseURL + apiname;
  
      const headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
  
      //  Authorization: `Bearer ${token.token}`,
      return this.http.post(updateUrl, data);
    }
}
