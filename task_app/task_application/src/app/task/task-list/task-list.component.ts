import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasklist:any
  constructor(private taskservice: TaskService,private router: Router) { }

  ngOnInit(): void {
    this.gettask()
  }
  gettask(){
    console.log(this.taskservice.userid.data._id)
        let obj ={
          userid:this.taskservice.userid.data._id
        }
       
        this.taskservice.postMethod('task/tasklist',obj).subscribe((res:any)=>{
    
          if(res.status ==true){
            this.tasklist   = res.data

            console.log( this.tasklist[0].title," this.tasklist ")
          }
     
        })
      }

      gotoeditpage(data:any){
        this.router.navigate(['task/task_update',data._id]);

      }

      deletetask(data:any){
        let obj ={
          taskid:data._id
        }
       
        this.taskservice.postMethod('task/delete_task',obj).subscribe((res:any)=>{
    console.log(res,"res")
          if(res.status ==true){
           

       
          }

          this.gettask()
     
        })
      }

}
