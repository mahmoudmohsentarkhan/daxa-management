import { Component, input } from '@angular/core';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'breadcrumb',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  links = input.required<string[]>()
  naviate = input<string>()
}
