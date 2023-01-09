import { Component,EventEmitter,Inject,Input } from '@angular/core';
import { EditorProvider } from 'igniteui-angular/lib/core/edit-provider';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EpicService } from '../services/epic.service';
import { Jira } from '../jira';
import { Project } from '../project';
import { Employee } from '../employee';
import { EditJiraService } from '../services/edit-jira.service';

@Component({
  selector: 'app-edit-jira',
  templateUrl: './edit-jira.component.html',
  styleUrls: ['./edit-jira.component.css']
})
export class EditJiraComponent {
  constructor(
    public editJiraService:EditJiraService,
    public dialogRef : MatDialogRef<EditJiraComponent>,
    public dialog : MatDialog,
    private epicService:EpicService,
    @Inject(MAT_DIALOG_DATA) public curEpic : any
    ){}

    data : any;
    assignEmployee : String[];
    project:Project;
    epics:Jira[];
    employee:Employee;
    jira: Jira;

    onClear(){
      this.editJiraService.editJiraForm.reset();
    }

    onNoClick(): void {
      this.dialogRef.close();
      this.editJiraService.editJiraForm.reset();
    }

    ngOnInit():void{
      this.editJiraService.getAssignEmployees().subscribe((employeeArray)=>{this.assignEmployee=employeeArray});
      this.editJiraService.getAssignEmployees().subscribe((employeeArray)=>console.log(employeeArray));
      
      this.editJiraService.projectObservable.subscribe((data)=>{
        this.project=data;
        console.log(this.project);
      })
      console.log(this.project);
      this.editJiraService.epicsObservable.subscribe((data)=>{
        this.epics=data;
      console.log(this.epics);
      })
      this.editJiraService.employeeObservable.subscribe((data)=>{
        this.employee=data;
      console.log(this.employee);
      })
      // this.editJiraService.currEpic.subscribe((data)=>
      // {
      //   console.log(data);
      // })
      //console.log("hiyeee");
    }

    editJira(){
      console.log(this.editJiraService.editJiraForm.value)
      console.log(this.editJiraService.editJiraForm.value.jiraTitle);
      this.jira={
        jiraId:this.curEpic.jiraId,
        jiraStatus:this.editJiraService.editJiraForm.value.jiraStatus,
        jiraTitle:this.editJiraService.editJiraForm.value.jiraTitle,
        projectName:this.project.projectLabel,
        jiraDescription:this.editJiraService.editJiraForm.value.jiraDescription,
        jiraReporter:this.editJiraService.editJiraForm.value.jiraReporter,
        jiraAssignee:this.employee.alias,
        jiraType:this.editJiraService.editJiraForm.value.jiraType,
        jiraepic:this.editJiraService.editJiraForm.value.jiraLinkedIssue,
        employee:this.employee,
        jiraprojects:this.project,
        jiraPriority:this.editJiraService.editJiraForm.value.jiraPriority
      }
      // this.jira.jiraTitle=this.createJiraFormService.createJiraForm.value.jiraTitle;
      // this.jira.jiraDescription=this.createJiraFormService.createJiraForm.value.jiraDescription;
      // this.jira.jiraReporter=this.createJiraFormService.createJiraForm.value.jiraReporter;
      // this.jira.jiraAssignee=this.employee.alias;
      // this.jira.jiraType=this.createJiraFormService.createJiraForm.value.jiraType;
      // this.jira.jiraepic=this.createJiraFormService.createJiraForm.value.jiraLinkedIssue;
      // this.jira.employee=this.employee;
      this.editJiraService.editJiraData(this.jira).subscribe((result) => {console.log(result)});
      this.onNoClick();
      console.log("dlsdk");
      this.editJiraService.newepicObservable.subscribe((data)=>{
        this.epics.push(data);
      })
    }
}
