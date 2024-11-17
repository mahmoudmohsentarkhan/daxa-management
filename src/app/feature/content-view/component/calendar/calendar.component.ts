import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SharedModule, WorkingScheduleComponent } from '@app/shared';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [SharedModule, FullCalendarModule, WorkingScheduleComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'event 1', date: '2024-09-09' },
      { title: 'event 2', date: '2024-09-13' }
    ]
  };
  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }
}
