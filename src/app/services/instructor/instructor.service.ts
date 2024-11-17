import { Injectable } from '@angular/core';
import { Iinstructor } from '@app/interface';
import { HttpService } from '@app/service';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  constructor(private http:HttpService) {

  }
  get topInstructors():Observable<Iinstructor[]>{
    return this.http.get<Iinstructor[]>('instructors')
  }
}
