import { Component } from '@angular/core';
import { StatCardComponent } from '@app/dashobard/ecommerce';
import * as _ from '@app/dashobard/lms';

const importsUsed = [
  StatCardComponent,
  _.WelcomeComponent,
  _.ActiveStudentsComponent,
  _.CoursesCategoriesComponent,
  _.TopInstructorsComponent,
  _.TotalCoursesSalesComponent,
  _.StudentProgressComponent,
  _.CoursesComponent,
  _.TimeSpendingComponent,
  _.AverageEnrollmentRateComponent,
  _.TodayCourseComponent
]
@Component({
  selector: 'lms',
  standalone: true,
  imports: importsUsed,
  templateUrl: './lms.component.html',
  styleUrl: './lms.component.scss'
})
export class LmsComponent {
  cards = [
    {
      title: 'Active Courses',
      number: '200K',
      isColumns: true,
      iconBackColor:"#fff",
      info: { subtitle: 'This Month', rate: 0.12 },
      imgIcon: 'https://angular.hibootstrap.com/daxa/images/icons/active-learning.svg',
      size:50
    },
    {
      title: 'Enrolled Students',
      number: '200K',
      isColumns: true,
      iconBackColor:"#fff",
      info: { subtitle: 'This Week', rate: 0.2 },
      imgIcon: 'https://angular.hibootstrap.com/daxa/images/icons/join.svg',
      size:50
    },
    {
      title: 'Completion Status',
      number: '200K',
      isColumns: true,
      iconBackColor:"#fff",
      info: { subtitle: 'This Month', rate: 0.52 },
      imgIcon: 'https://angular.hibootstrap.com/daxa/images/icons/school.svg',
      size:50
    },
  ];
}
