import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Epic } from '../epic';
import { TaskService } from '../services/task.service';
import { EditJiraService } from '../services/edit-jira.service';
import { EditJiraComponent } from '../edit-jira/edit-jira.component';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-epicjira',
  templateUrl: './epicjira.component.html',
  styleUrls: ['./epicjira.component.css']
})
export class EpicjiraComponent {
@Input() epic :any;
@Input() project:any;
@Input() employee:any;
@Input() x : any;

constructor(
  private taskService:TaskService,
  private _router: Router,
  public editJiraService:EditJiraService,
  public dialog : MatDialog
  ){}

changePriorityColor(num:number){
switch(num){
  case 1 :return 'green';
  case 2 :return 'yellow';
  case 3 :return 'red';
  default: return 'green';
}
}
displayTasks(epic:any)
{
  this.taskService.jiraid=epic.jiraId;
  setTimeout(()=>{
    this.taskService.getEpicID(epic);
    this.taskService.getEmployee(this.employee);
  },1000);
  this._router.navigate(['/sprint']);
}

editJira(epic:any){
  // this.editJiraService.currEpic.next(epic);
  console.log(this.editJiraService.editJiraForm)
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  setTimeout(()=>{
    this.editJiraService.setCurrEpic(epic);
    this.editJiraService.getProject(this.project);
    this.editJiraService.getLoggedInUser(this.employee);
  }, 1000);
  this.dialog.open(EditJiraComponent,{height: '90%',
  width: '50%', data : epic});
}
}

