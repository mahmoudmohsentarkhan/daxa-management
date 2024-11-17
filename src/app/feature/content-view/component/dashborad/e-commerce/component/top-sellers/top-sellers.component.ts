import { Component} from '@angular/core';
import { take } from 'rxjs';
import { TopPersoneTableComponent } from 'app/index/shared/shared-index';
import { ISeller } from '@app/interface';
import { SharedModule } from '@app/shared';
import { SellerService } from '@app/service';

@Component({
  selector: 'top-sellers',
  standalone: true,
  imports: [
    SharedModule,
    TopPersoneTableComponent
  ],
  templateUrl: './top-sellers.component.html',
  styleUrl: './top-sellers.component.scss'
})
export class TopSellersComponent {
  data!:ISeller[]
  constructor(private sellerService:SellerService){
    sellerService.topSellers.pipe(take(1)).subscribe(val=>{
      this.data = val
    })
  }
}
