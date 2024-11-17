import { Injectable } from '@angular/core';
import { ISeller } from '@app/interface';
import { HttpService } from '@app/service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpService) { }

  get sellers():Observable<ISeller[]>{
    return this.http.get<ISeller[]>('seller')
  }

  get topSellers():Observable<ISeller[]>{
    return this.http.get<ISeller[]>('top-sellers')
  }
}
