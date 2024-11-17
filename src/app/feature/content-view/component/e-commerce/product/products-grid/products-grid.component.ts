import { Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { IProduct} from '@app/interface';
import { interval } from 'rxjs';
import { ProductCardComponent,AsideProductGridComponent } from '@app/ecommerce/shared';
import { ProductService } from '@app/service';

@Component({
  selector: 'products-grid',
  standalone: true,
  imports: [ProductCardComponent,AsideProductGridComponent],
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.scss'
})
export class ProductsGridComponent {

  counterObservable = interval(1000);

  products!: Signal<IProduct[]>;

  constructor(private productService:ProductService){
    this.products = toSignal(productService.prodcuts,{initialValue:[]})
  }

}
