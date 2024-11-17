import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { take } from 'rxjs';
import { CourseService } from 'app/index/service-index';
import { ProgressBarComponent } from 'app/index/shared/shared-index';
import { IStudentProgress } from '@app/interface';
import { SharedModule } from '@app/shared';
@Component({
  selector: 'student-progress',
  standalone: true,
  imports: [
    SharedModule,
    MatPaginatorModule,
    MatTableModule,
    MatTooltipModule,
    MatRippleModule,
    MatCheckboxModule,
    ProgressBarComponent
  ],
  templateUrl: './student-progress.component.html',
  styleUrl: './student-progress.component.scss'
})
export class StudentProgressComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'courseName', 'progress'];
  dataSource!:MatTableDataSource<IStudentProgress>
  @ViewChild(MatPaginator) paginator!:MatPaginator

  constructor(private courseService:CourseService){}
  ngOnInit(): void {
    this.courseService.studentProgressCourse.pipe(take(1)).subscribe(val=>{
      this.dataSource = new MatTableDataSource<IStudentProgress>(val);
      this.dataSource.paginator = this.paginator;
    })
  }

  getId(row:IStudentProgress):string{
    return `# ${row.id}`
  }

}

