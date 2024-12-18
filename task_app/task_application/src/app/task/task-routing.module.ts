import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';


const routes: Routes = [

   {
      path: '',
      children: [
        { path: '' ,component: TaskListComponent  },
        { path: 'task_update/:taskId' ,component: EditTaskComponent  },
          { path: 'task_create' ,component: AddTaskComponent },
        
      
  ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
