import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient
    ) {}
  employeeob=new Subject<Employee>();
  login(data):Observable<any>
  {
    console.log(data);
    return this.http.post('http://localhost:8080/employees/check',data);
  }
  passEmployee(employee:Employee)
  {
    console.log(employee);
    this.employeeob.next(employee);
    console.log(employee);
  }
  getEmployeeFromAlias(alias:String)
  {
    return this.http.get('http://localhost:8080/employees/getemployeeByAlias/'+alias);
  }
}
