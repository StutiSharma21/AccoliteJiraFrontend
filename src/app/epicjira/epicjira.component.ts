import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
// import { Epic } from '../epic';
import { Jira } from '../interfaces/jira';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-epicjira',
  templateUrl: './epicjira.component.html',
  styleUrls: ['./epicjira.component.css']
})
export class EpicjiraComponent {
  @Input() epic :Jira;
  @Input() x : string;
  constructor(
    private taskService:TaskService,
    private _router: Router
    ){}
  changePriorityColor(num:number){
  switch(num){
    case 1 :return 'green';
    case 2 :return 'yellow';
    case 3 :return 'red';
    default: return 'green';
  }
  }
  displayTasks()
  {
    console.log("hi");
    this.taskService.displayTasks();
    this._router.navigate(['/sprint']);
  }

  editJira(){
    console.log("Hi");
  }
  }
