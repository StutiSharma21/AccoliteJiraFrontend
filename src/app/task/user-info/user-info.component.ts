import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  constructor(public dialogRef: MatDialogRef<UserInfoComponent>,@Inject(MAT_DIALOG_DATA) public emp : any){}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
