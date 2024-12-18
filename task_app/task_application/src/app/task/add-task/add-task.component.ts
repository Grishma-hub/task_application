import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskForm!: FormGroup;
  constructor(private fb: FormBuilder,private taskservice: TaskService,private router: Router) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['Pending', Validators.required],
      userid:[this.taskservice.userid.data._id, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
    console.log(this.taskForm.value,"this.taskForm.value")
      this.taskservice.postMethod('task/create_task',this.taskForm.value).subscribe((res:any)=>{
        this.router.navigate(['task/']);
      })
     
    } else {
      console.log('Form is invalid');
    }
  }

}
