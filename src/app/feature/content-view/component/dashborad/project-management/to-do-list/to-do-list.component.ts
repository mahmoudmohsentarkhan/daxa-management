import { Component } from '@angular/core';
import { ToDoListTableComponent } from 'app/shared/component/to-do-list-table/to-do-list-table.component';
import { SearchComponent, SharedModule } from '@app/shared';


@Component({
  selector: 'to-do-list',
  standalone: true,
  imports: [SharedModule,ToDoListTableComponent,SearchComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {

}
