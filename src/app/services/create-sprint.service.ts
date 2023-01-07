import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CreateSprintService {
  url = 'http://localhost:8080/sprint/addSprint';
  constructor(private http : HttpClient) { }

  createSprintForm : FormGroup = new FormGroup({
    projectId : new FormControl('',Validators.required),
    allottedTime : new FormControl(0,Validators.required),
    sprintDescription : new FormControl('',Validators.required),
    startDate : new FormControl('',Validators.required),
    endDate : new FormControl('',Validators.required),
    isCurrent : new FormControl(true,Validators.required)
  });

  saveSprintData(data : any){
    // console.log(data);
    return this.http.post(this.url,data);
  }
  
}

