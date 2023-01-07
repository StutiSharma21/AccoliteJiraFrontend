import { Component, Input } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-taskjira',
  templateUrl: './taskjira.component.html',
  styleUrls: ['./taskjira.component.css']
})
export class TaskjiraComponent {
  @Input() task :Task;
  @Input() x : any;

  changePriorityColor(num:number){
    switch(num){
      case 1 :return 'green';
      case 2 :return 'yellow';
      case 3 :return 'red';
      default: return 'green';
    }
  }
}
