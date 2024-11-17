import { Injectable } from '@angular/core';
import { HttpService } from '@app/service';
import { ICustomer } from 'app/models/icustomer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService{

  constructor(private http:HttpService) { }

  get customers():Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>('customer');
  }

  getById(id:number):Observable<ICustomer>{
    return this.http.get<ICustomer>(`customer+${id}`);
  }

  insert(newCustomer:ICustomer):Observable<ICustomer>{
    return this.http.post<ICustomer>('customer',newCustomer);
  }

  delete(id:number):Observable<void>{
    return this.http.delete<void>(`customer+${id}`);
  }



}
