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
import { CustomerService } from '@app/service';
import { ICustomer } from 'app/models/icustomer';

@Component({
  selector: 'customers',
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
    SearchComponent
],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'lastLogin','totalSpand','totalOrder','status','action'];
  dataSource:any
  selection = new SelectionModel<ICustomer>(true, []);
  @ViewChild(MatPaginator) paginator!:MatPaginator
  constructor(private customerService:CustomerService){

  }
  ngOnInit(): void {
    this.customerService.customers.pipe(take(1)).subscribe(val=>{
      this.dataSource = new MatTableDataSource<ICustomer>(val);
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
