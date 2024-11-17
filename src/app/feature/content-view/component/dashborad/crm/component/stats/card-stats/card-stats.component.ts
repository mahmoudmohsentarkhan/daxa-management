import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { StockArrowComponent } from 'app/index/shared/shared-index';


@Component({
  selector: 'card-stats',
  standalone: true,
  imports: [StockArrowComponent,TitleCasePipe],
  templateUrl: './card-stats.component.html',
  styleUrl: './card-stats.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CardStatsComponent {
  title:InputSignal<string> = input.required<string>()
  stats:InputSignal<string> = input.required<string>()
}
