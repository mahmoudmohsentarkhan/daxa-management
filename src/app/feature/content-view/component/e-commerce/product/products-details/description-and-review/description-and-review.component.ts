import { NgClass, NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RatingComponent } from '@app/ecommerce';
import { DescriptionComponent} from '@app/ecommerce/shared';

@Component({
  selector: 'description-and-review',
  standalone: true,
  imports: [NgComponentOutlet,NgClass],
  templateUrl: './description-and-review.component.html',
  styleUrl: './description-and-review.component.scss'
})
export class DescriptionAndReviewComponent {
  currentComponent:any = DescriptionComponent;
  nameCurrentComponent:string = 'description'
  showDescription() {
    if(this.nameCurrentComponent !='description'){
      this.nameCurrentComponent = 'description';
      this.currentComponent = DescriptionComponent;
    }
  }
  showRating() {
    if(this.nameCurrentComponent !='rating'){
      this.nameCurrentComponent = 'rating';
      this.currentComponent = RatingComponent;
    }
  }
}
