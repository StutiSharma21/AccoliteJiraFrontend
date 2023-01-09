import { Injectable } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPeopleService {
  // url = 'http://localhost:8080/add/employee/{projectId}/project/{alias}';
  constructor(private http : HttpClient) { }

  addEmployeeForm : FormGroup = new FormGroup({
    employee : new FormControl('',Validators.required)
  });

  getAssignEmployees():Observable<any>{
    return this.http.get("http://localhost:8080/employees/getemployeedropdown");
  }

  addEmployeeToProject(projectId : number, alias : string){
    return this.http.put("http://localhost:8080/projects/add/employee/" + projectId + "/project/" + alias, {});
  }

}
