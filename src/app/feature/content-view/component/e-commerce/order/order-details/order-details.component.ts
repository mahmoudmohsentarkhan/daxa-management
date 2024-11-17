import { Component } from '@angular/core';
import { CartComponent } from '@app/ecommerce';
import { OrderInfoComponent, StepperStatusComponent } from '@app/ecommerce/shared';

@Component({
  selector: 'order-details',
  standalone: true,
  imports: [StepperStatusComponent,CartComponent,OrderInfoComponent],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
  infoList: { key: string; value: string }[][] = [
    [
      { key: 'name', value: 'Gary Fraser' },
      { key: 'email', value: 'example@daxa.com' },
      { key: 'phone', value: '+1 444 333 5566' },
      { key: 'address', value: '715 Maple St, Hamletville, England' },
    ],
    [
      { key: 'shipping date', value: 'Nov 25, 2024 10:30 AM' },
      { key: 'email', value: 'example@daxa.com' },
      { key: 'phone', value: '+1 444 333 5566' },
      { key: 'address', value: '715 Maple St, Hamletville, England' },
    ],
    [
      { key: 'XYZ Delivery', value: '' },
      { key: 'order ID', value: '' },
      { key: 'payment method', value: 'Master Card' },
      { key: 'email', value: 'example@daxa.com' },
    ]
  ];
}
