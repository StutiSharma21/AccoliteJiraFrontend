import { Component,EventEmitter,Input } from '@angular/core';
import { CreateJiraService } from '../services/create-jira.service';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { EpicService } from '../services/epic.service';
import { Jira } from '../jira';
import { Project } from '../project';
import { Employee } from '../employee';

@Component({
  selector: 'app-create-jira',
  templateUrl: './create-jira.component.html',
  styleUrls: ['./create-jira.component.css']
})
export class CreateJiraComponent{

  constructor(
    public createJiraFormService : CreateJiraService,
    public dialogRef : MatDialogRef<CreateJiraComponent>,
    public dialog : MatDialog,
    private epicService:EpicService
    ){}

    data : any;
    assignEmployee : String[];
    project:Project;
    epics:Jira[];
    employee:Employee;
    jira: Jira;
    toggle = new EventEmitter<Object>();

    onClear(){
      this.createJiraFormService.createJiraForm.reset();
    }

    onNoClick(): void {
      this.dialogRef.close();
      this.createJiraFormService.createJiraForm.reset();
    }

    ngOnInit():void{
      this.createJiraFormService.getAssignEmployees().subscribe((employeeArray)=>{this.assignEmployee=employeeArray});
      this.createJiraFormService.getAssignEmployees().subscribe((employeeArray)=>console.log(employeeArray));
      
      this.epicService.projectObservable.subscribe((data)=>{
        this.project=data;
        console.log(this.project);
      })
      this.epicService.epicsObservable.subscribe((data)=>{
        this.epics=data;
      console.log(this.epics);
      })
      this.epicService.employeeObservable.subscribe((data)=>{
        this.employee=data;
      console.log(this.employee);
      })
      //console.log("hiyeee");
    }

    saveJira(){
      console.log(this.createJiraFormService.createJiraForm.value)
      console.log(this.createJiraFormService.createJiraForm.value.jiraTitle);
      this.jira={
        jiraId:"",
        jiraStatus:"To-Do",
        jiraTitle:this.createJiraFormService.createJiraForm.value.jiraTitle,
        projectName:this.project.projectLabel,
        jiraDescription:this.createJiraFormService.createJiraForm.value.jiraDescription,
        jiraReporter:this.createJiraFormService.createJiraForm.value.jiraReporter,
        jiraAssignee:this.employee.alias,
        jiraType:this.createJiraFormService.createJiraForm.value.jiraType,
        jiraepic:this.createJiraFormService.createJiraForm.value.jiraLinkedIssue,
        employee:this.employee,
        jiraprojects:this.project,
        jiraPriority:this.createJiraFormService.createJiraForm.value.jiraPriority
      }
      // this.jira.jiraTitle=this.createJiraFormService.createJiraForm.value.jiraTitle;
      // this.jira.jiraDescription=this.createJiraFormService.createJiraForm.value.jiraDescription;
      // this.jira.jiraReporter=this.createJiraFormService.createJiraForm.value.jiraReporter;
      // this.jira.jiraAssignee=this.employee.alias;
      // this.jira.jiraType=this.createJiraFormService.createJiraForm.value.jiraType;
      // this.jira.jiraepic=this.createJiraFormService.createJiraForm.value.jiraLinkedIssue;
      // this.jira.employee=this.employee;
      this.createJiraFormService.saveJiraData(this.jira).subscribe((result) => {console.log(result)});
      this.onNoClick();
      console.log("dlsdk");
      this.createJiraFormService.epicObservable.subscribe((data)=>{
        this.epics.push(data);
      })
    }
}
