import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private taskservice: TaskService) { }

  ngOnInit(): void {
   
  }

 


}
