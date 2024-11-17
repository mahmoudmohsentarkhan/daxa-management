import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '@app/shared';
import { ECommerceComponent } from './e-commerce.component';


@NgModule({
  declarations: [ECommerceComponent],
  imports: [
    CommonModule,
    ECommerceRoutingModule,
    SharedModule,
    RouterOutlet
  ],
  exports:[]
})
export class ECommerceModule { }
