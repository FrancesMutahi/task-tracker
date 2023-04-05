import { Component, } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import {Task} from '../../Task';
import {TASKS} from '../../mock-tasks' ;

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  tasks: Task[] = TASKS;

  faTimes = faTimes;


}
