import { Injectable } from '@angular/core';
import { HttpService } from '@app/service';
import { ICategory } from 'app/models/icategory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpService) { }

  get categories():Observable<ICategory[]>{
    return this.http.get<ICategory[]>('category')
  }
}
