import { Component } from '@angular/core';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'customer-details-info',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './customer-details-info.component.html',
  styleUrl: './customer-details-info.component.scss'
})
export class CustomerDetailsInfoComponent {

}
