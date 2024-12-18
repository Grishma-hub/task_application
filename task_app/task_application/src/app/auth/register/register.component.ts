import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
 
  constructor(private fb: FormBuilder,private authservice: AuthService) { 

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
      
       })
    }
  }

}
