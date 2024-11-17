import { Component, input} from '@angular/core';
import { MyOrdersComponent, OrderSummaryComponent } from 'app/index/e-commerce/e-commerces-shared-index';


@Component({
  selector: 'e-commerce-cart',
  standalone: true,
  imports: [MyOrdersComponent,OrderSummaryComponent,],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent{
  total:number = 0
  showPayment = input<boolean>(false)
  totalPrice(total:number){
    this.total = total
  }

}
