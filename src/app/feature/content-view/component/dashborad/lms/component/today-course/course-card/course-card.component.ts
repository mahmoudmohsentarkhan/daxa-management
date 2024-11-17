import { Component, input } from '@angular/core';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  data = input.required<{img:string,title:string,salary:number,content:string}>()
}
