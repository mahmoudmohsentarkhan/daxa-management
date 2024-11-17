import { Injectable } from '@angular/core';
import { IRefund } from '@app/interface';
import { HttpService } from '@app/service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefundService {

  constructor(private http:HttpService) { }

  get refunds():Observable<IRefund[]>{
    return this.http.get<IRefund[]>('refund')
  }
}
