import { Component } from '@angular/core';
import { CardStatsComponent } from './card-stats/card-stats.component';
import { AppChartComponent, StyleSectionDirective } from '@app/shared';

@Component({
  selector: 'stats',
  standalone: true,
  imports: [CardStatsComponent,StyleSectionDirective,AppChartComponent],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {

}
