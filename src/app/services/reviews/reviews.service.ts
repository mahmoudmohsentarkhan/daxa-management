import { Injectable } from '@angular/core';
import { IReveiw } from '@app/interface';
import { HttpService } from '@app/service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http:HttpService) { }

  get reviews():Observable<IReveiw[]>{
    return this.http.get<IReveiw[]>('review')
  }
}
