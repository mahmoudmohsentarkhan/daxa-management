import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsComponent, RefundsComponent, CartComponent } from '@app/ecommerce';
import * as c from 'app/index/e-commerce/customer-index';
import * as cat from 'app/index/e-commerce/category-index';
import * as s from 'app/index/seller-index';
import * as p from '@app/ecommerce/product';
import * as o from '@app/ecommerce/order';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { ECommerceComponent } from './e-commerce.component';


const routes: Routes = [
  {
    path:"", component:ECommerceComponent, children:[
      {path:'', component:p.ProductsGridComponent},
      {path:'product-details', component:p.ProductsDetailsComponent},
      {path:'cart', component:CartComponent},
      {path:'checkout', component:o.CheckoutComponent},
      {path:'create-product', component:p.CreateProductComponent},
      {path:'update-product', component: p.UpdateProductComponent},
      {path:'order-details', component:OrderDetailsComponent},
      {path:'create-order', component:o.CreateOrderComponent},
      {path:'order-tracking', component: o.OrderTrackingComponent},
      {path:'customers', component:c.CustomersComponent},
      {path:'customer-details', component:c.CustomerDetailsComponent},
      {path:'categories', component:cat.CategoriesComponent},
      {path:'create-category', component:cat.CreateCategoryComponent},
      {path:'update-category', component:cat.UpdateCategoryComponent},
      {path:'sellers', component:s.SellersComponent},
      {path:'seller-details', component:s.SellerDetailsComponent},
      {path:'create-seller', component:s.CreateSellerComponent},
      {path:'reviews', component:ReviewsComponent},
      {path:'refunds', component:RefundsComponent},

      {path:'**',redirectTo:'refunds'}
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ECommerceRoutingModule { }
