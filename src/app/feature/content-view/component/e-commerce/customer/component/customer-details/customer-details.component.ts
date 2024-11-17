import { Component } from '@angular/core';
import { CustomerDetailsInfoComponent } from "./customer-details-info/customer-details-info.component";
import { CustomerDetailsTransactionsComponent } from "./customer-details-transactions/customer-details-transactions.component";

@Component({
  selector: 'customer-details',
  standalone: true,
  imports: [CustomerDetailsInfoComponent, CustomerDetailsTransactionsComponent],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent {

}
