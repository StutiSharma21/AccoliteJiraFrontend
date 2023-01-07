import { Component,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddPeopleService } from 'src/app/services/add-people.service';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent {
  constructor( public addPeopleService : AddPeopleService,
    public dialogRef : MatDialogRef<AddPeopleComponent>,
    public dialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public projectId : any){}

  assignEmployee : String[];

    onNoClick(): void {
      this.addPeopleService.addEmployeeForm.reset();
      this.dialogRef.close();
    }

    addEmployee(){
      // console.log(this.createProjectFormService.createProjectForm.value)
      // console.log(this.createProjectFormService.createProjectForm.value)
      console.log(this.assignEmployee);
      console.log(this.projectId);
      console.log(typeof(this.addPeopleService.addEmployeeForm.value.employee));
    
      this.addPeopleService.addEmployeeToProject(this.projectId,this.addPeopleService.addEmployeeForm.value.employee).subscribe((result) => {console.log(result)});
      this.onNoClick();
    }

    ngOnInit():void{
      this.addPeopleService.getAssignEmployees().subscribe((employeeArray)=>{this.assignEmployee=employeeArray});
      this.addPeopleService.getAssignEmployees().subscribe((employeeArray)=>console.log(employeeArray));
      }
  }

