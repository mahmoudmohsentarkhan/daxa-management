import { Component } from '@angular/core';
import { take } from 'rxjs';
import { Ifile } from '@app/interface';
import { FileService } from '@app/service';
import { FileCardComponent } from '../file-card/file-card.component';

@Component({
  selector: 'file-projects',
  standalone: true,
  imports: [FileCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  data!:Ifile[]
  constructor(private fileService:FileService){
    fileService.fileProjects.pipe(take(1)).subscribe(val=>{
      this.data = val
    })
  }
}
