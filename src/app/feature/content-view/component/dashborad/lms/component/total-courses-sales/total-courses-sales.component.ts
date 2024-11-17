import { Component } from '@angular/core';
import { AppChartComponent } from 'app/index/shared/shared-index';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'total-courses-sales',
  standalone: true,
  imports: [SharedModule, AppChartComponent],
  templateUrl: './total-courses-sales.component.html',
  styleUrl: './total-courses-sales.component.scss'
})
export class TotalCoursesSalesComponent {

}
