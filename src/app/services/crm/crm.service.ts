import { Injectable } from '@angular/core';
import { ICountryData, ILabeledData, ISeller, IUserOrder, IUserPlatform } from '@app/interface';
import { HttpService } from '@app/service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmService {

  constructor(private http:HttpService) { }

  get clientPaymentStatus():Observable<ILabeledData>{
    return this.http.get<ILabeledData>('client-payment-status')
  }

  get earningReports():Observable<ILabeledData>{
    return this.http.get<ILabeledData>('earning-reports')
  }


  get CountryStats():Observable<ICountryData[]>{
    return this.http.get<ICountryData[]>('country-stats')
  }

  get leadsList():Observable<IUserPlatform[]>{
    return this.http.get<IUserPlatform[]>('leads-list')
  }

  get mostLead():Observable<ILabeledData>{
    return this.http.get<ILabeledData>('most-lead')
  }

  get recentLeads():Observable<IUserOrder[]>{
    return this.http.get<IUserOrder[]>('recent-leads')
  }

  get topCustomers():Observable<ISeller[]>{
    return this.http.get<ISeller[]>('top-customers')
  }
}
