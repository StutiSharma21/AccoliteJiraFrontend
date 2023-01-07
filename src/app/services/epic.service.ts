import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Epic } from '../interfaces/epic';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EpicService {

  constructor(private http :HttpClient) { }
  epic():Observable<any>{
    return this.http.get("http://localhost:8080/jira/getAllEpics");
// =======
//     return this.http.get("http://localhost:8090/projects/viewProjectbyId/21");
// >>>>>>> b61aaba4fbc3f5b6446adf7431a9660d4cc031c3:src/app/services/epic.service.ts
  }
}
