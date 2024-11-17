import { Component } from '@angular/core';
import { OrderProcessComponent } from "../../shared/components/order-process/order-process.component";

@Component({
  selector: 'create-order',
  standalone: true,
  imports: [OrderProcessComponent],
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.scss'
})
export class CreateOrderComponent {

}
