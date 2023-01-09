import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http :HttpClient) { }
  
  getProjectOfEmployees(alias:String)
  {
    return this.http.get("http://localhost:8080/projects/viewProjectbyAlias/"+alias);
  }

  getEpicsOfProject(projectId:number)
  {
    //change api
    var value=this.http.get("http://localhost:8080/jira/getEpics/"+projectId);
    console.log(value);
    return value;
  }
  getEmployeesByProject(projectId:number){
    return this.http.get("http://localhost:8080/employees/projectemployees/"+projectId+"/allemployees");
  }

  getProjectByProjectID(projectid:any){
    return this.http.get<Project>("http://localhost:8080/projects/viewProjectbyId/"+projectid);
  }
  
}
