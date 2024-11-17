import { Component } from '@angular/core';
import { FormsProductComponent } from 'app/index/e-commerce/e-commerces-shared-index';

@Component({
  selector: 'create-product',
  standalone: true,
  imports: [FormsProductComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {

}
