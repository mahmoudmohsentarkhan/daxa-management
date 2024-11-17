import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { CrmComponent, DashboradRoutingModule, ECommerceComponent, LmsComponent, ProjectManagementComponent } from 'app/index/dashboard/dashboard-index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    DashboradRoutingModule,
    ECommerceComponent,
    CrmComponent,
    ProjectManagementComponent,
    LmsComponent,
],
  exports:[]
})
export class DashboardModule  { }
