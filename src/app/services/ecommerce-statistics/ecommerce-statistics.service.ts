import { Injectable } from '@angular/core';
import { ILabeledData } from '@app/interface';
import { HttpService } from '@app/service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcommerceStatisticsService {

  constructor(private http:HttpService) {}

  get averageDailySales():Observable<ILabeledData>{
    return this.http.get<ILabeledData>('average-daily-sales')
  }

  get orderSummary():Observable<ILabeledData>{
    return this.http.get<ILabeledData>('order-summary')
  }

  get profit():Observable<ILabeledData>{
    return this.http.get<ILabeledData>('profit')
  }

  get projectsRoadmap():Observable<ILabeledData>{
    return this.http.get<ILabeledData>('projects-roadmap')
  }
  get topSales():Observable<any>{
    return this.http.get<any>('top-sales')
  }

}
