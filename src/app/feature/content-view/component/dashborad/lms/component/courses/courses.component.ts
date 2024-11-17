import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { take } from 'rxjs';
import { SharedModule } from '@app/shared';
import { CourseService } from '@app/service';
import { Icourse } from '@app/interface';
@Component({
  selector: 'courses',
  standalone: true,
  imports: [
    SharedModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatRippleModule,
    MatCheckboxModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  providers: [CurrencyPipe]
})
export class CoursesComponent implements OnInit{
  displayedColumns: string[] = ['id', 'courseName', 'catigory', 'instructor', 'startDate', 'endDate', 'price', 'action'];
  dataSource!:MatTableDataSource<Icourse>
  currencyPipe = inject(CurrencyPipe)

  @ViewChild(MatPaginator) paginator!:MatPaginator

  constructor(private courseService:CourseService){}
  ngOnInit(): void {
    this.courseService.courses.pipe(take(1)).subscribe(val=>{
      this.dataSource = new MatTableDataSource<Icourse>(val);
      this.dataSource.paginator = this.paginator;
    })
  }
  getId(row: Icourse): string{
    return `# ${row.id}`
  }
  getPrice = (row: Icourse): string =>{
    return this.currencyPipe.transform(row.price, 'USD', 'symbol', '1.1-2') || '';

  }
}

