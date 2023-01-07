import { Component } from '@angular/core';
import { Epic } from '../epic';
import { EpicService } from '../services/epic.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { CreateProjectService } from '../services/create-project.service';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { CreateJiraService } from '../services/create-jira.service';
import { CreateJiraComponent } from '../create-jira/create-jira.component';
import { CreateSprintService } from '../services/create-sprint.service';
import { CreateSprintComponent } from '../create-sprint/create-sprint.component';
import { AuthService } from '../auth.service';
import { Employee } from '../employee';
import { ProjectService } from '../services/project.service';
import { Project } from '../project';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.css']
})
export class EpicComponent {
  constructor(
    public service:EpicService,
    public createJiraFormService : CreateJiraService,
    public createProjectFormService : CreateProjectService,
    public createSprintFormService : CreateSprintService,
    public dialog : MatDialog,
    public authService:AuthService,
    private epicService:EpicService,
    private projectService:ProjectService,
    private route:ActivatedRoute
    ){
  }
xy = document.getElementById("")
phase=["To-Do","In Progress","Done"]
epics:any;
employee:any;
projects:any;



onCreateJira(){
  console.log(this.createJiraFormService.createJiraForm)
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  setTimeout(()=>{
    this.epicService.getProject(this.projects[0]);
    this.epicService.getAllEpicsOfProject(this.epics);
    this.epicService.getLoggedInUser(this.employee);
  }, 1000);
  this.dialog.open(CreateJiraComponent,{height: '95%',
 width: '60%',})
}
onCreateProject(){
  console.log(this.createProjectFormService.createProjectForm)
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
 this.dialog.open(CreateProjectComponent,{height: '70%',
 width: '40%'});
}

onCreateSprint(){
  console.log(this.createSprintFormService.createSprintForm)
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
 this.dialog.open(CreateSprintComponent,{height: '95%',
 width: '60%',})
}

ngOnInit(){
  this.route.paramMap.subscribe((params:ParamMap)=>{
    let alias=params.get('alias');
    console.log(alias);
    this.authService.getEmployeeFromAlias(alias).subscribe((empdata)=>{
      this.employee=empdata;
    })
    this.projectService.getProjectOfEmployees(alias).subscribe((data)=>
    {
      console.log("it works yo yo");
        this.projects=data;
        //console.log(data);
        console.log(this.projects);
        console.log(this.projects[0].projectId);
        this.projectService.getEpicsOfProject(this.projects[0].projectId).subscribe((epicData)=>{
        this.epics=epicData;
        console.log(this.epics);
      });
    // this.authService.employeeob.subscribe((ema)=>{
    //  
    //   this.employee=ema;
    //   // console.log(ema);
    //   console.log(this.employee);
    //   // console.log(this.employee.alias);
    //   //get projects
    //   //now get epics of recent project and pass to epic
    //   });

    });
  });
}
// nav function
 openNav() {
  document.getElementById("mySidenav").style.width="250px";
}
closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
onProjectInfoClick(){}
onUserProfileClick(){}
}