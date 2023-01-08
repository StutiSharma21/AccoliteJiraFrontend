import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})

export class ProjectInfoComponent {
  constructor(public dialogRef: MatDialogRef<ProjectInfoComponent>,@Inject(MAT_DIALOG_DATA) public curProject : any){}
  onNoClick(): void {
    this.dialogRef.close();
  }
}