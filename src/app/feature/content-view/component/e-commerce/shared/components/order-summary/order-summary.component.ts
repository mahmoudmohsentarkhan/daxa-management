import { CurrencyPipe } from '@angular/common';
import { Component, effect,input } from '@angular/core';
import { SharedModule } from '@app/shared';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { PaymentMethodComponent } from "../payment-method/payment-method.component";

@Component({
  selector: 'order-summary',
  standalone: true,
  imports: [SharedModule, CurrencyPipe, MatInputModule, MatFormFieldModule, MatButton, PaymentMethodComponent],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss',
})
export class OrderSummaryComponent{
  showPayment = input<boolean>(false)
  orderTracking = input<boolean>(false)
  totalPrice = input<number>(0)
  orderCharges  = input<{discount:number,tax:number,shippingCharge:number,couponCharge:number}>({discount:0,tax:0,shippingCharge:0,couponCharge:0})
  subTotal = 0
  total = 0
  constructor(){
    effect(_=>{
      this.subTotal = this.totalPrice()-this.totalPrice()*(this.orderCharges().discount/100) + this.orderCharges().tax
      this.calcTotal()
    })
  }
  private calcTotal(){
    this.total = this.subTotal + this.orderCharges().shippingCharge + this.orderCharges().couponCharge
  }

}
