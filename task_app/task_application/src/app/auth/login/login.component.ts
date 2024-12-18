import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; 
  constructor(private fb: FormBuilder,private authservice: AuthService) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  onLoginSubmit() {

    console.log(this.loginForm.valid,"this.loginForm.valid")
    if (this.loginForm.valid) {
     this.authservice.postMethod('auth/login', this.loginForm.value).subscribe((res:any)=>{
    if(res.status==true){
      localStorage.setItem("USER", JSON.stringify(res.data));

   
    
      // this.router.navigate(['app/dashboard']);
    }
   



     })
    }
  }


  
}
