import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeComponent, EmailComponent, InboxComponent, ReadComponent } from '@app/email';

const routes: Routes = [
  {
    path: '',
    component: EmailComponent,
    children:[
      {path:'', component:InboxComponent},
      {path:'compose', component:ComposeComponent},
      {path:'read', component:ReadComponent},
    ]
  },
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
