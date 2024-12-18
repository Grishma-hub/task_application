import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [

   {
      path: '',
      children: [
        { path: '' ,component: TaskListComponent ,canActivate: [AuthGuard] },
        { path: 'task_update/:taskId' ,component: EditTaskComponent ,canActivate: [AuthGuard] },
          { path: 'task_create' ,component: AddTaskComponent,canActivate: [AuthGuard] },
        
      
  ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
