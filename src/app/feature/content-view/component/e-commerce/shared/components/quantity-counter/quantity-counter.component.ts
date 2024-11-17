import { Component, model } from '@angular/core';

@Component({
  selector: 'quantity-counter',
  standalone: true,
  imports: [],
  templateUrl: './quantity-counter.component.html',
  styleUrl: './quantity-counter.component.scss'
})
export class QuantityCounterComponent {
  qunatity = model<number>(1);

  quantityPlus(){
    this.qunatity.update(val=>val+1)
  }
  quantityMinus(){
    if(this.qunatity()>1){
      this.qunatity.update(val=>val-1)
    }
  }
}
