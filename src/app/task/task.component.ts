import { Component } from '@angular/core';
import { Epic } from '../interfaces/epic';
import { Task } from '../interfaces/task';
import { TaskService } from '../services/task.service';
import {Employee} from '../interfaces/employee';
import { SlicePipe } from '@angular/common';
import { CreateSprintComponent } from '../create-sprint/create-sprint.component';
import { CreateSprintService } from '../services/create-sprint.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
constructor(
  public taskservice:TaskService,
  public createSprintFormService : CreateSprintService,
  public dialog : MatDialog){}
phase=["To-Do","In Progress","Done"]
tasks:Task[];
employees:Employee[];
ngOnInit():void{
this.taskservice.getAllTasks().subscribe((tasksArray)=>{this.tasks=tasksArray});
this.taskservice.getEmployees().subscribe((data)=>{this.employees=data;console.log(data);console.log(this.employees);});
}
// nav function
openNav() {
  document.getElementById("mySidenav").style.width="250px";
}
closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
getJiraOfEmployee(alias:String)
{
  console.log("hiiii");
  this.taskservice.getTasksofEmployee(alias).subscribe((tasksArray)=>{this.tasks=tasksArray;console.log(this.tasks);});
}

onCreateSprint(){
  console.log(this.createSprintFormService.createSprintForm)
 this.dialog.open(CreateSprintComponent,{height: '95%',
 width: '60%',})
}

}