import { Component, input } from '@angular/core';
import { SharedModule } from '@app/shared';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';



@Component({
  selector: 'billing-information',
  standalone: true,
  imports: [SharedModule, MatInputModule, MatFormFieldModule,MatSelectModule],
  templateUrl: './billing-information.component.html',
  styleUrl: './billing-information.component.scss'
})
export class BillingInformationComponent {
  states = ['Florida', 'Wiscnsin', 'Washington', 'Nebraska', 'Minnesota']
  cities = ['New York', 'Tokyo', 'London', 'Amsterdam', 'Paris']
  coutries = ['Switzerland', 'New Zealand', 'Germany', 'United States', 'Japan', 'Netherlands', 'Sweden', 'Canada', 'United Kingdom', 'Australia']
  isCheckout = input<boolean>(false)
}
