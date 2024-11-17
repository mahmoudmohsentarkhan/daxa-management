import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { ISeller } from '@app/interface';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'seller-card',
  standalone: true,
  imports: [SharedModule,CurrencyPipe],
  templateUrl: './seller-card.component.html',
  styleUrl: './seller-card.component.scss'
})
export class SellerCardComponent {
  seller = input.required<Partial<ISeller>>()
}
