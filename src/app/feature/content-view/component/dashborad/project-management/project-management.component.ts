import { Component } from '@angular/core';
import { ToDoListComponent } from '@app/dashobard/crm';
import * as _ from '@app/dashobard/project';
import { WorkingScheduleComponent } from 'app/index/shared/shared-index';

const importsUsed = [
  WorkingScheduleComponent,
  ToDoListComponent,
  _.ProjectsOverviewComponent,
  _.ProjectsRoadmapComponent,
  _.AllProjectsComponent,
  _.ProjectsProgressComponent,
  _.ProjectsAnalysisComponent,
  _.ChatProjectsUserComponent,
  _.ActiveProjectComponent,
  _.TeamMembersComponent
]
@Component({
  selector: 'project-management',
  standalone: true,
  imports: importsUsed,
  templateUrl: './project-management.component.html',
  styleUrl: './project-management.component.scss',
})
export class ProjectManagementComponent {

}
