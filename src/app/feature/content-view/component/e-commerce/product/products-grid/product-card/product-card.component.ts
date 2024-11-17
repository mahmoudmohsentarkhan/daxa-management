import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatRipple } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { IProduct } from '@app/interface';
import { RateComponent } from '@app/shared';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHeart as faHeartR } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartS} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ecommerce-product-card',
  standalone: true,
  imports: [FaIconComponent,RateComponent,MatButton,MatIcon,MatRipple,NgClass],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  faHeartR = faHeartR;
  faHeartS = faHeartS;
  isFavourite:boolean = false;
  product = input.required<IProduct>()
}
