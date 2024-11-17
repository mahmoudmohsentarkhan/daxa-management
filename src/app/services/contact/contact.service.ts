import { Injectable } from '@angular/core';
import { IContact } from '@app/interface';
import { HttpService } from '@app/service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpService) {}

  get contacts(): Observable<IContact[]>{
    return this.http.get<IContact[]>('contact')
  }
}
