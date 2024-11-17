import { Component } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { SellerCardComponent } from 'app/index/e-commerce/e-commerces-shared-index';
import { ISeller } from '@app/interface';
import { SellerService } from '@app/service';
import { SearchComponent, SharedModule } from '@app/shared';
import { take } from 'rxjs';

@Component({
  selector: 'app-sellers',
  standalone: true,
  imports: [SharedModule, MatRipple, SearchComponent, SellerCardComponent],
  templateUrl: './sellers.component.html',
  styleUrl: './sellers.component.scss'
})
export class SellersComponent {
  sellers!:ISeller[]
  constructor(private sellerService:SellerService){
    sellerService.sellers.pipe(take(1)).subscribe(val=>{
      this.sellers = val;
    })
  }
}
