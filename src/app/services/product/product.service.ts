import { Injectable } from '@angular/core';
import { IProduct } from '@app/interface';
import { HttpService } from '@app/service';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpService) { }

  get topsSellingProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>('tops-selling-products')
  }

  get prodcuts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>('prodcuts')
  }

  prodcutById(id:number):Observable<IProduct>{
    return this.http.getById<IProduct>('prodcuts/'+id)
  }

  insert(newProduct:IProduct):Observable<IProduct>{
    return this.http.post<IProduct>('',newProduct)
  }

}
