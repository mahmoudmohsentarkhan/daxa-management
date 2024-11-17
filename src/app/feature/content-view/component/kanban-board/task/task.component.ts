import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'kanban-board-task',
  standalone: true,
  imports: [SharedModule,MatIcon],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {


}
