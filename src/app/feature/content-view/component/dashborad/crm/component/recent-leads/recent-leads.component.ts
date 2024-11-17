import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { take } from 'rxjs';
import { CrmService } from 'app/index/service-index';
import { SharedModule } from '@app/shared';
import { IUserOrder } from '@app/interface';

@Component({
  selector: 'recent-leads',
  standalone: true,
  imports: [
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatRippleModule,
    MatCheckboxModule
  ],
  templateUrl: './recent-leads.component.html',
  styleUrl: './recent-leads.component.scss'
})
export class RecentLeadsComponent implements OnInit{
  displayedColumns: string[] = ['select', 'customer', 'email', 'source', 'status','action'];
  dataSource!:MatTableDataSource<IUserOrder>
  selection = new SelectionModel<IUserOrder>(true, []);
  @ViewChild(MatPaginator) paginator!:MatPaginator


  constructor(private crmService:CrmService){}
  ngOnInit(): void {
    this.crmService.recentLeads.pipe(take(1)).subscribe(val=>{
      this.dataSource = new MatTableDataSource<IUserOrder>(val);
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


