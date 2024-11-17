import { Component } from '@angular/core';
import { AvatarWithInfoComponent, RateComponent } from '@app/shared';

@Component({
  selector: 'e-commerce-review-item',
  standalone: true,
  imports: [RateComponent,AvatarWithInfoComponent],
  templateUrl: './review-item.component.html',
  styleUrl: './review-item.component.scss'
})
export class ReviewItemComponent {

}
