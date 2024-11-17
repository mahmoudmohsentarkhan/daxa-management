import { Component } from '@angular/core';
import * as _   from '@app/dashobard/crm'

export const importsUsed = [
  _.StatsComponent,
  _.CountryStatsComponent,
  _.TasksStatsComponent,
  _.MostLeadsComponent,
  _.EarningReportsComponent,
  _.TopCustomersComponent,
  _.ClientPaymentStatusComponent,
  _.RecentLeadsComponent,
  _.ToDoListComponent,
  _.TotalLeadsComponent
]

@Component({
  selector: 'crm',
  standalone: true,
  imports: importsUsed,
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.scss'
})
export class CrmComponent {

}
