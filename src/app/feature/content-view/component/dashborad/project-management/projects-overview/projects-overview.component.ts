import { Component } from '@angular/core';
import { StatCardComponent } from '@app/dashobard/ecommerce';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'projects-overview',
  standalone: true,
  imports: [SharedModule,StatCardComponent],
  templateUrl: './projects-overview.component.html',
  styleUrl: './projects-overview.component.scss'
})
export class ProjectsOverviewComponent {
  cards = [
    {
      title: "Total Projects",
      number: "705",
      imgIcon: "https://angular.hibootstrap.com/daxa/images/icons/total-projects.svg",
      iconBackColor:"#0f79f3",
      info: { subtitle: "Projects this month", rate: 0.75 }
    },
    {
      title: "Completed Projects",
      number: "127",
      imgIcon: "https://angular.hibootstrap.com/daxa/images/icons/active-projects.svg",
      iconBackColor:"#ffb264",
      info: { subtitle: "Projects this month", rate: 0.125, isDecrease: true },
    },
    {
      title: "Completed Projects",
      number: "178",
      imgIcon: "https://angular.hibootstrap.com/daxa/images/icons/completed-projects.svg",
      iconBackColor:"#00cae3",
      info: { subtitle: "Projects this month", rate: 0.5 }
    },
    {
      title: "Total Members",
      number: "75",
      matIcon: "shopping_basket",
      imgIcon: "https://angular.hibootstrap.com/daxa/images/icons/completed-projects.svg",
      iconBackColor:"#0f79f3",
      info: { subtitle: "Projects engagement 50%", rate: 0.5 }
    }
  ]
}
