import { Component } from '@angular/core';
import { AppChartComponent } from 'app/index/shared/shared-index';
import { SharedModule } from '@app/shared';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'tasks-stats',
  standalone: true,
  imports: [SharedModule, AppChartComponent, NgApexchartsModule],
  templateUrl: './tasks-stats.component.html',
  styleUrl: './tasks-stats.component.scss'
})
export class TasksStatsComponent {

}
