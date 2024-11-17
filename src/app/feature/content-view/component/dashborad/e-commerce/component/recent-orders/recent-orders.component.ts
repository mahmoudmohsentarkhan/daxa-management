import { Component, OnInit, ViewChild } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule} from '@angular/material/tooltip';
import { CurrencyPipe} from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { take } from 'rxjs';
import { SharedModule } from '@app/shared';
import { OrderService } from '@app/service';
import { IOrder } from '@app/interface';

@Component({
  selector: 'recent-orders',
  standalone: true,
  imports: [
    SharedModule,
    MatInputModule,
    MatFormFieldModule,
    FaIconComponent,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    MatRippleModule
  ],
  templateUrl: './recent-orders.component.html',
  styleUrl: './recent-orders.component.scss',

})
export class RecentOrdersComponent implements OnInit {
  faSearch:IconDefinition = faSearch
  displayedColumns: string[] = ['id', 'name', 'created', 'total', 'profit', 'status','action'];
  dataSource!:MatTableDataSource<IOrder>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  currenyPipe:CurrencyPipe =  new CurrencyPipe('en-US');
  constructor(private orderService:OrderService){
  }
  ngOnInit(): void {
    this.orderService.orders.pipe(take(1)).subscribe(val => {
      this.dataSource = new MatTableDataSource<IOrder>(val);
      this.dataSource.paginator = this.paginator;
    });
  }
  getProfit = (data: IOrder): string => {
    const result = this.currenyPipe.transform(data.profit,'USD', 'symbol', '1.0')
    return  result === null ? '' : result;
  }

  getTotal= (data: IOrder): string => {
    const result = this.currenyPipe.transform(data.quantity*data.price,'USD', 'symbol', '1.0')
    return  result === null ? '' : result;
}

}
