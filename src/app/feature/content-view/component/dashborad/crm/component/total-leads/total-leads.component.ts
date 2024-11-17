import { Component } from '@angular/core';
import { AppChartComponent } from 'app/index/shared/shared-index';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'total-leads',
  standalone: true,
  imports: [SharedModule, AppChartComponent],
  templateUrl: './total-leads.component.html',
  styleUrl: './total-leads.component.scss'
})
export class TotalLeadsComponent {

}
