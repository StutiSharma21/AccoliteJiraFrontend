import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Epic } from '../interfaces/epic';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url="http://localhost:8080/jira/getAllJirasOfEmployee/";
  epicObservable=new Subject<Epic>();

  constructor(private http :HttpClient) { }
  displayTasks()
  {
    this.getAllTasks();
    // this.epicObservable.next(epic);
  }
  getAllTasks():Observable<any>{
    return this.http.get("http://localhost:8080/jira/getAllTasks");
  }
  getEmployees():Observable<any>{
    return this.http.get("http://localhost:8080/employees/getallemployees");
  }
  getTasksofEmployee(name:String):Observable<any>{
    // this.url=this.url+name;
    return this.http.get(this.url+name);
  }

}
