import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import {Employee} from '../employee';
import { Jira } from '../jira';
import { Project } from '../project';
import { ProjectService } from '../services/project.service';
import { Epic } from '../epic';
import { CreateSprintService } from '../services/create-sprint.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateSprintComponent } from '../create-sprint/create-sprint.component';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
constructor(public taskservice:TaskService,
  public projectService :ProjectService,
  public sprintService:CreateSprintService,
  public createSprintFormService : CreateSprintService,
  public dialog : MatDialog
  ){}
phase=["To-Do","In Progress","Done"]
tasks:any;
curemployee:any;
currEpic:any;
project:any;
employees:any;
projectId:any;
Epics:any;
sprintAll:any;
othertasks:any;
ngOnInit():void{
this.taskservice.getTaskofEpic().subscribe((data)=>{this.tasks=data;
console.log(data);
});
this.taskservice.getProjectByepicId().subscribe((data)=>{
  this.projectId=data;
  this.projectService.getProjectByProjectID(this.projectId).subscribe((value)=>{
    this.project=value;
    this.employees=this.project.employees;
    console.log(value);
  });
  this.taskservice.getEpicByProjectID(this.projectId).subscribe((value)=>{
    this.Epics=value;
  });
})
this.taskservice.epic.subscribe((value)=>{
  this.currEpic=value;
})

this.sprintService.getTaskOfSprint().subscribe((data)=>{this.sprintAll=data});
// this.taskservice.getalltask().subscribe((data)=>{
//   this.tasks=data;
// })
this.taskservice.employeeObservable.subscribe((data)=>{
  this.curemployee=data;
  console.log(data);
});
}

// this.sprintService.getOtherTasksOfEmployee(this.curemployee,this.)
openNav() {
  document.getElementById("mySidenav").style.width="250px";
}
closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
onCreateSprint(){
  // console.log(this.createSprintFormService.createSprintForm)
  // const dialogConfig = new MatDialogConfig();
  // dialogConfig.disableClose = true;
  // dialogConfig.autoFocus = true;
 this.dialog.open(CreateSprintComponent,{height: '95%',
 width: '60%'})
}
EmpAllTask(employeeId){
this.taskservice.getAllTaskOfEmployeeOfEpic(employeeId,this.projectId).subscribe((value)=>this.tasks=value);
}
taskOfEpic(jiraId){
this.taskservice.jiraid=jiraId;
this.taskservice.getTaskofEpic().subscribe((value)=>this.tasks=value);
this.ngOnInit;
}

// getTaskOfSprint(){
//   this.sprintService.getTaskOfSprintBySprintId().subscribe();
// }

getUserInfo(){
  console.log(this.curemployee);
  const dialogConfig = new MatDialogConfig();
  this.dialog.open(UserInfoComponent,{height: '45%',
  width: '25%',
  position: {right:'4%', top: '4%'},
  data : this.curemployee });

}

}