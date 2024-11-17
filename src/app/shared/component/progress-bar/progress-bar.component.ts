import { DecimalPipe, NgClass, NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [NgStyle, DecimalPipe,NgClass],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  colors = ["#00cae3", "#e74c3c", "#0f79f3", "#ffb264", "#2ed47e", "#796df6"]
  indexColor = input<number>(0)
  isColumns = input<boolean>(false)
  percentage = input.required<number>()
  hideLabel = input<boolean>()
}
