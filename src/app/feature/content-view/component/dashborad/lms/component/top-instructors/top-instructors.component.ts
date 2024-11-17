import { Component } from '@angular/core';
import { take } from 'rxjs';
import { TopPersoneTableComponent } from 'app/index/shared/shared-index';
import { InstructorService } from '@app/service';
import { Iinstructor } from '@app/interface';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'top-instructors',
  standalone: true,
  imports: [SharedModule,TopPersoneTableComponent],
  templateUrl: './top-instructors.component.html',
  styleUrl: './top-instructors.component.scss'
})
export class TopInstructorsComponent {
  data!:Iinstructor[]
  constructor(private instructorService:InstructorService){
    instructorService.topInstructors.pipe(take(1)).subscribe(val=>this.data=val)
  }
}

