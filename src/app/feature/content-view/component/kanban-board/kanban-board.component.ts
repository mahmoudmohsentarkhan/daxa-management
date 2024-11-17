import { Component } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { MatIcon } from '@angular/material/icon';
import { SharedModule } from '@app/shared';
import { ProjectsOverviewComponent, ProjectsRoadmapComponent } from '@app/dashobard/project';

@Component({
  selector: 'kanban-board',
  standalone: true,
  imports: [SharedModule, ProjectsOverviewComponent, ProjectsRoadmapComponent, TaskComponent, MatIcon],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.scss'
})
export class KanbanBoardComponent {

}
