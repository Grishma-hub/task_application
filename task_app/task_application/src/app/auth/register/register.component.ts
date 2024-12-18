import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
 
  constructor(private fb: FormBuilder,private authservice: AuthService,private router: Router) { 

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  
  onRegisterSubmit() {

    console.log(this.registerForm.value,"this.registerForm")
    if (this.registerForm.valid) {
      this.authservice.postMethod('user/register', this.registerForm.value).subscribe((res:any)=>{
        if(res.status==true){
          this.router.navigate(['/auth/login']);
        }
      
       })
    }
  }

}
