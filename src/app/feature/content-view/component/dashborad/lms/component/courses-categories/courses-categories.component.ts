import { Component, OnInit, ViewChild } from '@angular/core';
import {MatRippleModule} from '@angular/material/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginator,MatPaginatorModule } from '@angular/material/paginator';
import { take } from 'rxjs';
import { ICoursesCat } from '@app/interface';
import { AvatarWithInfoComponent, SharedModule } from '@app/shared';
import { CourseService } from '@app/service';

@Component({
  selector: 'courses-categories',
  standalone: true,
  imports: [
    SharedModule,
    MatRippleModule,
    AvatarWithInfoComponent,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  templateUrl: './courses-categories.component.html',
  styleUrl: './courses-categories.component.scss'
})
export class CoursesCategoriesComponent implements OnInit{
  displayedColumns: string[] = ['persone', 'enrolled','status'];
  dataSource!:MatTableDataSource<ICoursesCat>
  @ViewChild(MatPaginator) paginator!:MatPaginator

  constructor(private courseService:CourseService){

  }
  ngOnInit(): void {
    this.courseService.coursesCategories.pipe(take(1)).subscribe(val=>{
      this.dataSource = new MatTableDataSource<ICoursesCat>(val);
      this.dataSource.paginator = this.paginator;
    })
  }

  getEnrolled(row:ICoursesCat){
    return `Enrolled ${row.enrolled}`
  }
}

