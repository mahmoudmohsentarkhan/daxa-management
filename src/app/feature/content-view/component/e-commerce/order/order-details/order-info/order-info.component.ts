import { Component, input } from '@angular/core';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'order-info',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './order-info.component.html',
  styleUrl: './order-info.component.scss'
})
export class OrderInfoComponent {
  info = input.required<{key:string, value:string}[]>()
}
