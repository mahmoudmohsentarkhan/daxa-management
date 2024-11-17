import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrmComponent, ECommerceComponent, LmsComponent, ProjectManagementComponent } from '@app/dashobard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ecommerce',
    pathMatch: 'full'
  },
  {
    path: 'ecommerce',
    component: ECommerceComponent
  },
  {
    path: 'crm',
    component: CrmComponent
  },
  {
    path: 'project-management',
    component: ProjectManagementComponent
  },
  {
    path: 'lms',
    component: LmsComponent
  },
  {
    path: '**',
    redirectTo: 'ecommerce',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboradRoutingModule { }
