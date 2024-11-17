import { Component} from '@angular/core';
import  * as _ from '@app/dashobard/ecommerce';

const importsUsed = [
  _.AverageDailySalesComponent,
  _.BestSellerComponent,
  _.NewCustomersComponent,
  _.OrderSummaryComponent,
  _.ProfitComponent,
  _.RecentOrdersComponent,
  _.RevenueComponent,
  _.StatCardComponent,
  _.TopSalesLocationsComponent,
  _.TopSellersComponent,
  _.TotalSalesComponent,
  _.TransactionsHistoryComponent,
  _.TopSellingProductsComponent
]

@Component({
  selector: 'e-commerce',
  standalone: true,
  imports: importsUsed,
  templateUrl: './e-commerce.component.html',
  styleUrl: './e-commerce.component.scss'
})
export class ECommerceComponent  {
  cards = [
    {
      title: "Total Orders",
      number: "20,705",
      matIcon: "shopping_basket",
      info: { subtitle: "4.75% increase in orders last week", rate: 0.5, isDecrease: true }
    },
    {
      title: "Total Orders",
      number: "20,705",
      matIcon: "attach_money",
      iconBackColor:"#ffb264",
      info: { subtitle: "4.75% increase in orders last week", rate: 0.5

      }
    },
    {
      title: "Total Orders",
      number: "20,705",
      matIcon: "diversity_2",
      iconBackColor:"#57bddb",
      info: { subtitle: "4.75% increase in orders last week", rate: 0.5 }
    },
    {
      title: "Total Orders",
      number: "20,705",
      matIcon: "shopping_basket",
      info: { subtitle: "4.75% increase in orders last week", rate: 0.5, isDecrease: true }
    }
  ];

}
