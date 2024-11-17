import { Component } from '@angular/core';
import { take } from 'rxjs';
import {EcommerceStatisticsService} from 'app/index/service-index';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'top-sales-locations',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './top-sales-locations.component.html',
  styleUrl: './top-sales-locations.component.scss'
})
export class TopSalesLocationsComponent {
  countries:any
  constructor(private ecommerceStatService:EcommerceStatisticsService){
    ecommerceStatService.topSales.pipe(take(1)).subscribe(val=>{
      this.countries = val;
    })
  }
}
