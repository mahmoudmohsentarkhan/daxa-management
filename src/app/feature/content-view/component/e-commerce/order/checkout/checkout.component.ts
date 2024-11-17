import { Component } from '@angular/core';
import { OrderProcessComponent } from '../../shared/components/order-process/order-process.component';

@Component({
  selector: 'e-commerce-checkout',
  standalone: true,
  imports: [OrderProcessComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

}
