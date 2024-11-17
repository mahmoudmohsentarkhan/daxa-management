import { Component, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'drop-down',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.scss'
})
export class DropDownComponent {
  head= input.required<{subtitle:string,clear:string}>()
  tail= input.required<{name:string,anchor:string}>()
}
