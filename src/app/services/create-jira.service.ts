import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateJiraService {
  url = 'http://localhost:8080/jira/addjira';
  constructor(private http : HttpClient) { }

  createJiraForm : FormGroup = new FormGroup({
    projectName : new FormControl('',Validators.required),
    jiraStatus : new FormControl('',Validators.required),
    jiraTitle : new FormControl('',Validators.required),
    jiraDescription : new FormControl('',Validators.required),
    jiraAssignee : new FormControl('',Validators.required),
    jiraReporter : new FormControl('',Validators.required),
    jiraType : new FormControl('',Validators.required),
    jiraLinkedIssue : new FormControl('',Validators.required),
    // jiraProjects : new FormControl('',Validators.required)
  });

  saveJiraData(data : any){
    return this.http.post(this.url,data)
  }

  getAssignEmployees():Observable<any>{
    return this.http.get("http://localhost:8080/employees/getemployeedropdown");
  }
}
