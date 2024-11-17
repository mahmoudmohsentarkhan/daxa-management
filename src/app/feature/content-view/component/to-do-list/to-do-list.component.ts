import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SharedModule,BreadcrumbComponent, ToDoListTableComponent } from '@app/shared';
@Component({
  selector: 'to-do-list',
  standalone: true,
  imports: [SharedModule, ToDoListTableComponent, BreadcrumbComponent,FullCalendarModule ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {

}
