// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Project } from './project';
// import { Jira } from './jira';
// import { HttpClient } from '@angular/common/http';
// import { Employee } from './employee';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProjectService {

//   constructor() { private http: HttpClient }
  
//   getProjectOfEmployees(employeeId: number)
//   {
//     return this.http.get("http://localhost:8080/projects/viewProjectbyEmployeeId/"+employeeId);
//   }
//   getEpicsOfProject(projectId:number)
//   {
//     return this.http.get("http://localhost:8080/projects/viewJirasOfProject/"+projectId);
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http :HttpClient) { }
  getProjectOfEmployees(alias:String)
  {
    return this.http.get("http://localhost:8080/projects/viewProjectbyAlias/"+ alias);
  }
  getEpicsOfProject(projectId:number)
  {
    //change api
    return this.http.get("http://localhost:8080/projects/viewJirasOfProject/"+projectId);
  }
}

