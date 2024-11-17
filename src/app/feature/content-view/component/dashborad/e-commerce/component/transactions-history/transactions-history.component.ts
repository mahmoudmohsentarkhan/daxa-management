import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { take } from 'rxjs';
import { SharedModule } from '@app/shared';
import { TransactionService } from 'app/index/service-index';
import { ITransaction } from '@app/interface';

@Component({
  selector: 'transactions-history',
  standalone: true,
  imports: [SharedModule,MatTableModule,MatPaginatorModule,MatIconModule,CurrencyPipe],
  templateUrl: './transactions-history.component.html',
  styleUrl: './transactions-history.component.scss'
})
export class TransactionsHistoryComponent  implements OnInit{
  displayedColumns: string[] = ['data'];
  dataSource!:MatTableDataSource<ITransaction>
  @ViewChild(MatPaginator) paginator!: MatPaginator
  constructor(private transactionService:TransactionService){
  }
  ngOnInit(): void {
    this.transactionService.transactions.pipe(take(1)).subscribe(val=>{
      this.dataSource =  new MatTableDataSource<ITransaction>(val);
      this.dataSource.paginator = this.paginator
    })
  }
}


