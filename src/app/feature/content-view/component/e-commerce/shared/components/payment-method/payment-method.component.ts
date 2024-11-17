import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'cart-payment-method',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.scss'
})
export class PaymentMethodComponent {
  totalPrice = input<number>(0)
}
