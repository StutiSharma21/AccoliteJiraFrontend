import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpicComponent } from '../epic/epic.component';
import { LoginComponent } from '../login/login.component';
import { TaskComponent } from '../task/task.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: 'sprint', component: TaskComponent },
  {path: 'jira/:alias', component:EpicComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
