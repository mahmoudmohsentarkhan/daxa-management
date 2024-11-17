import { Component} from '@angular/core';
import { DescriptionAndReviewComponent } from 'app/index/e-commerce/e-commerce-index';
import { QuantityCounterComponent } from 'app/index/e-commerce/e-commerces-shared-index';
import { RateComponent, StyleSectionDirective } from '@app/shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'products-details',
  standalone: true,
  imports: [RateComponent,StyleSectionDirective,DescriptionAndReviewComponent,QuantityCounterComponent],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss'
})
export class ProductsDetailsComponent {
  breadcrumbs: string[] = [];

  constructor(private route: ActivatedRoute) {
    route?.pathFromRoot.forEach(r=>{
      if(r.snapshot.url.join('/'))
      this.breadcrumbs.push(r.snapshot.url.join('/'))
    })
    console.log(this.breadcrumbs.join('/'))

   }
}
