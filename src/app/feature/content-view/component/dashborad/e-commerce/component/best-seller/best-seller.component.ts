import { Component } from '@angular/core';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'best-seller',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss'
})
export class BestSellerComponent {

}
