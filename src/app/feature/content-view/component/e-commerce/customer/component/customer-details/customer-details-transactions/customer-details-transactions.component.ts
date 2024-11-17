import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { take } from 'rxjs';
import { SharedModule } from '@app/shared';
import { TransactionService } from '@app/service';
import { ITransaction } from '@app/interface';
import { CurrencyPipe, DatePipe } from '@angular/common';


@Component({
  selector: 'customer-details-transactions',
  standalone: true,
  imports: [
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    CurrencyPipe,
    DatePipe
],
  templateUrl: './customer-details-transactions.component.html',
  styleUrl: './customer-details-transactions.component.scss'
})
export class CustomerDetailsTransactionsComponent implements OnInit{
  displayedColumns: string[] = ['id','status', 'amount', 'rewards', 'date'];
  dataSource:any
  currency = new CurrencyPipe('en-US')
  date = new DatePipe('en-US')
  @ViewChild(MatPaginator) paginator!:MatPaginator
  constructor(private transactionService:TransactionService){

  }
  ngOnInit(): void {
    this.transactionService.transactionsHistory.pipe(take(1)).subscribe(val=>{
      this.dataSource = new MatTableDataSource<ITransaction>(val);
      this.dataSource.paginator = this.paginator;
    })
  }


  getAmount = (element:ITransaction):string=>{
    return this.currency.transform(element.amount,'USD','symbol','1.0-2') || '';
  }

  getRewards = (element:ITransaction):string=>{
    return this.currency.transform(element.rewards,'USD','symbol','1.0-2') || '';
  }
  getDate = (element:ITransaction):string=>{
    return this.date.transform(element.date,'short') || '';
  }
}
