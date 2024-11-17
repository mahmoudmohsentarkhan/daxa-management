import { Injectable } from '@angular/core';
import { ITransaction } from '@app/interface';
import { HttpService } from '@app/service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpService) { }

  get transactions():Observable<any>{
    return this.http.get<any>('transactions')
  }

  get transactionsHistory():Observable<ITransaction[]>{
    return this.http.get<ITransaction[]>('transactions-history')
  }


}
