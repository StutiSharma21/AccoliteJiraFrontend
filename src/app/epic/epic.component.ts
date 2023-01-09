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
import { ProjectInfoComponent } from './project-info/project-info.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AddPeopleComponent } from './add-people/add-people.component';
import { AuthService } from '../services/auth.service';
import { TaskService } from '../services/task.service';
import { Employee } from '../employee';
import { ProjectService } from '../services/project.service';
import { Project } from '../project';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EditJiraService } from '../services/edit-jira.service';


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
    private editJiraService:EditJiraService,
    private projectService:ProjectService,
    private route:ActivatedRoute,
    private _router: Router,
    private taskservice:TaskService

    ){
  }
xy = document.getElementById("")
phase=["To-Do","In Progress","Done"]
epics:any;
employee:any;
projects:any;
curProject:any;
employees:any;

onCreateJira(){
  console.log(this.createJiraFormService.createJiraForm)
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  setTimeout(()=>{
    this.epicService.getProject(this.curProject);
    this.epicService.getAllEpicsOfProject(this.epics);
    this.epicService.getLoggedInUser(this.employee);
  }, 1000);
  this.dialog.open(CreateJiraComponent,{height: '90%',
 width: '40%'})
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
        this.curProject=this.projects[0];
        console.log(this.curProject.projectId);
        this.projectService.getEmployeesByProject(this.curProject.projectId).subscribe((data)=>this.employees=data);
        this.projectService.getEpicsOfProject(this.curProject.projectId).subscribe((epicData)=>{
        this.epics=epicData;
        console.log(this.epics);
        setTimeout(()=>{
          this.editJiraService.getProject(this.curProject);
          this.editJiraService.getAllEpicsOfProject(this.epics);
          this.editJiraService.getLoggedInUser(this.employee);
        }, 1000);
      });
    });
  });
}

getEmployeesByProject(projectid:number){
  this.projectService.getEmployeesByProject(projectid).subscribe((data)=>{
    this.employees=data
  });
  this.ngOnInit;
}

// nav function
 openNav() {
  document.getElementById("mySidenav").style.width="250px";
}
closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
getProjectInfo(){
  const dialogConfig = new MatDialogConfig();
  this.dialog.open(ProjectInfoComponent,{height: '45%',
  width: '25%',
  position: {right:'5%', top: '4%'},
  data : this.projects[0]
});
}

getUserInfo(){
  console.log(this.employee);
  const dialogConfig = new MatDialogConfig();
  this.dialog.open(UserInfoComponent,{height: '45%',
  width: '25%',
  position: {right:'4%', top: '4%'},
  data : this.employee });

}

addPeople(){
  this.dialog.open(AddPeopleComponent,{height: '60%',
  width: '30%',
  position: {right:'30%', top: '10%'},
  data : this.curProject.projectId
  })
}

callProject(project:any){
  console.log(project);
  this.projectService.getEpicsOfProject(project.projectId).subscribe((epicData)=>{
    this.epics=epicData;
    this.curProject=project;
   this.ngOnInit;
  });
}
ViewSprint(projectid:number){
  this.taskservice.projectid=projectid;
  this.taskservice.getEmployee(this.employee);
  this._router.navigate(['/sprint']);
}
EmpAllEpics(alias:string){
  this.service.getAllEpicOfEmp(alias).subscribe((data)=>{
    this.epics=data
  })
  this.ngOnInit;
}

}