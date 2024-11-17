import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { take } from 'rxjs';
import { AvatarWithInfoComponent, SearchComponent, SharedModule } from '@app/shared';
import { IReveiw } from '@app/interface';
import { ReviewsService } from 'app/services/reviews/reviews.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'e-commerce-reviews',
  standalone: true,
  imports: [
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    MatRippleModule,
    MatCheckboxModule,
    AvatarWithInfoComponent,
    SearchComponent,
    DecimalPipe
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit{
  displayedColumns: string[] = ['id', 'product', 'customerReview', 'rating', 'time', 'status', 'action'];
  dataSource:any
  selection = new SelectionModel<IReveiw>(true, []);
  @ViewChild(MatPaginator) paginator!:MatPaginator
  constructor(private reviewService:ReviewsService){

  }
  ngOnInit(): void {
    this.reviewService.reviews.pipe(take(1)).subscribe(val=>{
      this.dataSource = new MatTableDataSource<IReveiw>(val);
      this.dataSource.paginator = this.paginator;
      console.log(val)
    })
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }
}
