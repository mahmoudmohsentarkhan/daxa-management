import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { take } from 'rxjs';
import { AvatarWithInfoComponent, SearchComponent, SharedModule } from '@app/shared';
import { IRefund } from '@app/interface';
import { RefundService } from 'app/services/refund/refund.service';

@Component({
  selector: 'e-commerce-refunds',
  standalone: true,
  imports: [
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    AvatarWithInfoComponent,
    SearchComponent
  ],
  templateUrl: './refunds.component.html',
  styleUrl: './refunds.component.scss'
})
export class RefundsComponent implements OnInit{
  displayedColumns: string[] = ['id', 'customer', 'time', 'numOrdersReturned','numOrdersRetfunded','numOrdersReplaced','totalRefunded','totalReplaced'];
  dataSource:any
  selection = new SelectionModel<IRefund>(true, []);
  @ViewChild(MatPaginator) paginator!:MatPaginator
  constructor(private refundService:RefundService){

  }
  ngOnInit(): void {
    this.refundService.refunds.pipe(take(1)).subscribe(val=>{
      this.dataSource = new MatTableDataSource<IRefund>(val);
      this.dataSource.paginator = this.paginator;
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
