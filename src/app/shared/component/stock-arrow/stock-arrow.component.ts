import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowTrendUp,faArrowTrendDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'stock-arrow',
  standalone: true,
  imports: [FaIconComponent,CommonModule],
  templateUrl: './stock-arrow.component.html',
  styleUrl: './stock-arrow.component.scss'
})
export class StockArrowComponent {
  faArrowTrendUp:IconDefinition = faArrowTrendUp
  faArrowTrenddown:IconDefinition = faArrowTrendDown

  rate = input.required<number>()
  label = input<string>('')
  isDecrease = input<boolean>(false)
}
