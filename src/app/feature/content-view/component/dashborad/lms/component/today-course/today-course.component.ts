import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { CourseCardComponent } from "./course-card/course-card.component";
import { interval, map } from 'rxjs';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'today-course',
  standalone: true,
  imports: [SharedModule, CourseCardComponent],
  templateUrl: './today-course.component.html',
  styleUrl: './today-course.component.scss'
})
export class TodayCourseComponent implements OnInit{
  showCardNum = signal<number>(0)

  ngOnInit(): void {
    interval(2000)
      .pipe(
        map((val) => val % 3)
      )
      .subscribe((num) => {
        if(this.showCardNum()<2){
          this.showCardNum.update(val=> val + 1);
        }else{
          this.showCardNum.set(0);
        }
      });
  }

  setCardNum(num:number){
    this.showCardNum.set(num)
  }
}
