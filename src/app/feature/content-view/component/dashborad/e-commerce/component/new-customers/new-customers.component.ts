import { Component } from '@angular/core';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'new-customers',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './new-customers.component.html',
  styleUrl: './new-customers.component.scss'
})
export class NewCustomersComponent {

}
