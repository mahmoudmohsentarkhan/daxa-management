import { Component } from '@angular/core';
import { OrderSummaryComponent, StepperStatusComponent } from 'app/index/e-commerce/e-commerces-shared-index';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'order-tracking',
  standalone: true,
  imports: [SharedModule, StepperStatusComponent,OrderSummaryComponent],
  templateUrl: './order-tracking.component.html',
  styleUrl: './order-tracking.component.scss'
})
export class OrderTrackingComponent {

}
