import { Injectable } from '@angular/core';
import { IOrder } from '@app/interface';
import { HttpService } from '@app/service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpService) { }

  get orders():Observable<IOrder[]>{
    return this.http.get<IOrder[]>('orders')
  }


  insert(order:IOrder):Observable<IOrder>{
    return this.http.post<IOrder>('orders',order)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`orders/${id}`);
  }

}
