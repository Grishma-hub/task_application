import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  taskForm!: FormGroup;
  task:any
  taskId: any; 
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router,private taskservice:TaskService) { }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('taskId')!;
  
this.gettask()
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['Pending', Validators.required],
      taskid:[this.taskId,Validators.required]
    });

    console.log( this.taskForm.value,"this.taskid" )
  }

  gettask(){

        let obj ={
          taskid:'6762bbd93a7ad7705f90a692'
        }
       
        this.taskservice.postMethod('task/taskdetail',obj).subscribe((res:any)=>{

          if(res.status ==true){
            this.task   = res.data

            this.setform( this.task)
          }
     
        })
      }

      setform(task:any){
        this.taskForm.setValue({
          title: task.title,
          description: task.description,
          status: task.status,
          taskid:this.taskId
        });
      }
      onSubmit(){
        if (this.taskForm.valid) {
      
            this.taskservice.postMethod('task/update_task',this.taskForm.value).subscribe((res:any)=>{
              this.router.navigate(['task/']);
            })
           
          } else {
            console.log('Form is invalid');
          }


      }
}
