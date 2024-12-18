import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [

//   {
//     path: '',
//     redirectTo: '/auth/login', 
//     pathMatch: 'full',
// },
  { path: '', component: HomeComponent },
  {
    path: '',
    component: AuthComponent,
    children: [{
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    }]
},
{
  path: '',
  component: TaskComponent,
  children: [{
      path: 'task',
      loadChildren: () => import('./task/task.module').then(m => m.TaskModule)
  }]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
