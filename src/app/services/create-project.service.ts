import { Injectable } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CreateProjectService {
  url = 'http://localhost:8080/projects/project';
  constructor(private http : HttpClient) { }

  createProjectForm : FormGroup = new FormGroup({
    projectLabel : new FormControl('',Validators.required),
    projectDescription : new FormControl('',Validators.required),
    // projectStartDate : new FormControl('',Validators.required)
  });

  saveProjectData(data : any){
    // console.log(data);
    return this.http.post(this.url,data);
  }

}
