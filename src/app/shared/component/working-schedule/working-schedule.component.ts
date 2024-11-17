import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRippleModule} from '@angular/material/core';
import { SharedModule } from '@app/shared';


@Component({
  selector: 'working-schedule',
  standalone: true,
  templateUrl: './working-schedule.component.html',
  styleUrl: './working-schedule.component.scss',
  providers: [provideNativeDateAdapter()],
  imports: [MatDatepickerModule,SharedModule,MatRippleModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkingScheduleComponent {
  selected = model<Date | null>(null);

}
