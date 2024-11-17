import { Component } from '@angular/core';
import { OrderSummaryComponent,BillingInformationComponent } from 'app/index/e-commerce/e-commerces-shared-index';

@Component({
  selector: 'order-process',
  standalone: true,
  imports: [BillingInformationComponent,OrderSummaryComponent],
  templateUrl: './order-process.component.html',
  styleUrl: './order-process.component.scss'
})
export class OrderProcessComponent {

}
