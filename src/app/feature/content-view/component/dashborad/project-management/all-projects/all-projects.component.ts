import { Component, OnInit, ViewChild } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { take } from 'rxjs';
import { Iproject } from '@app/interface';
import { ProjectService } from '@app/service';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'all-projects',
  standalone: true,
  imports: [
    SharedModule,
    FaIconComponent,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatRippleModule,
    MatCheckboxModule
  ],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.scss'
})
export class AllProjectsComponent implements OnInit{
  displayedColumns: string[] = ['id', 'projectName', 'clint', 'startDate', 'endDate', 'budget', 'status', 'action'];
  dataSource!:MatTableDataSource<Iproject>
  @ViewChild(MatPaginator) paginator!:MatPaginator

  constructor(private projectService:ProjectService){}
  ngOnInit(): void {
    this.projectService.project.pipe(take(1)).subscribe(val=>{
      this.dataSource = new MatTableDataSource<Iproject>(val);
      this.dataSource.paginator = this.paginator;
    })
  }

  getId(row:Iproject):string{
    return `# ${row.id}`
  }

}
