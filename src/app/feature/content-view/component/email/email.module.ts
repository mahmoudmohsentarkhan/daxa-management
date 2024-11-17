import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailRoutingModule } from './email-routing.module';
import { EmailComponent,EmailAsideComponent } from '@app/email';

@NgModule({
  declarations: [
    EmailComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
    EmailAsideComponent
],
exports:[
]
})
export class EmailModule { }
