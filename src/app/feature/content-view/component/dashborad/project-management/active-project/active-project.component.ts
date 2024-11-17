import { Component, signal } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from '@app/shared';
import { StepperStatusComponent } from 'app/index/e-commerce/e-commerces-shared-index';

@Component({
  selector: 'active-project',
  standalone: true,
  imports: [SharedModule,MatButtonModule,MatMenuModule,MatIconModule,StepperStatusComponent],
  templateUrl: './active-project.component.html',
  styleUrl: './active-project.component.scss'
})
export class ActiveProjectComponent {
  filterYear = signal<string>("year 2024")
  toggleFilterYear(val:string){
    this.filterYear.set(val);
  }
}
