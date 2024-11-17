import { ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import { faArrowTrendUp, faSackDollar, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { MatIcon } from '@angular/material/icon';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'stat-card',
  standalone: true,
  imports: [SharedModule,MatIcon],
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatCardComponent {
  faSackDollar:IconDefinition = faSackDollar
  faArrowTrendUp:IconDefinition = faArrowTrendUp
  color:InputSignal<string> = input('')
  bgColor:InputSignal<string> = input('')
  iconBackColor:InputSignal<string> = input('')
  title:InputSignal<string> = input('')
  number:InputSignal<string> = input('')
  imgIcon:InputSignal<string> = input('')
  matIcon:InputSignal<string> = input('')
  size:InputSignal<number> = input(35)
  isColumns:InputSignal<boolean> = input(false)
  info= input<{subtitle?:string,rate:number,isDecrease?:boolean}>()
}
