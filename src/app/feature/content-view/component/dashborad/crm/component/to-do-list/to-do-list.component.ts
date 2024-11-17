import { Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule, ToDoListTableComponent } from '@app/shared';

@Component({
  selector: 'to-do-list',
  standalone: true,
  imports: [
    SharedModule,
    MatIconModule,
    ToDoListTableComponent
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {}
