import { Component } from '@angular/core';
import { ReviewItemComponent } from '@app/ecommerce/shared';
import { ProgressBarComponent, RateComponent, TitleSectionComponent } from '@app/shared';

@Component({
  selector: 'e-commerce-rating',
  standalone: true,
  imports: [TitleSectionComponent,RateComponent, ProgressBarComponent,ReviewItemComponent],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {

}
