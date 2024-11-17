import { Component } from '@angular/core';
import { SellerCardComponent } from 'app/index/e-commerce/e-commerces-shared-index';
import { ISeller } from '@app/interface';
import { SharedModule, StatCardComponent } from '@app/shared';
import { RevenueComponent } from './revenue/revenue.component';

@Component({
  selector: 'app-seller-details',
  standalone: true,
  imports: [SharedModule, StatCardComponent, SellerCardComponent, RevenueComponent],
  templateUrl: './seller-details.component.html',
  styleUrl: './seller-details.component.scss'
})
export class SellerDetailsComponent {
cards = [
  {
    title:"Total Orders",
    number:"20",
    info:{subtitle:'Order this month',rate:0.23},
    bgColor:"",
    imgIcon:"https://angular.hibootstrap.com/daxa/images/icons/total-projects.svg"
  },
  {
    title:"Total Earnings",
    number:"$23.91k",
    info:{subtitle:'Earnings this month',rate:0.23, isDecrease:true},
    bgColor:"#ffb264",
    imgIcon:"https://angular.hibootstrap.com/daxa/images/icons/active-projects.svg"
  },
  {
    title:"Total Refunds",
    number:"178",
    info:{subtitle:'Refunds this month',rate:0.475},
    bgColor:"#00cae3",
    imgIcon:"https://angular.hibootstrap.com/daxa/images/icons/completed-projects.svg"
  },
  {
    title:"Conversion Rate",
    number:"12.21%",
    bgColor:"#e74c3c",
    info:{subtitle:'Conversion rate this month',rate:0.111},
    imgIcon:"https://angular.hibootstrap.com/daxa/images/icons/join-white.svg"
  },
  ]
seller:Partial<ISeller> = {
  id: 1,
  name: "Milton Jones",
  store: "TechMaster Store",
  LastSaleDate: new Date(2024-11-25),
  stock: 50,
  walletBalance: 9999.50,
  revenue: 5999.50,
  img: "https://angular.hibootstrap.com/daxa/images/sellers/seller1.png"
  }
}
