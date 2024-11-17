import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILabeledData } from '@app/interface';
import { HttpService } from '@app/service';

@Injectable({
  providedIn: 'root'
})
export class LmsService {
  constructor(private http:HttpService) { }

  get activeStudents():Observable<ILabeledData>{
    return this.http.get<ILabeledData>('active-students')
  }

  get timeSpending():Observable<ILabeledData>{
    return this.http.get<ILabeledData>('time-spending')
  }
}
