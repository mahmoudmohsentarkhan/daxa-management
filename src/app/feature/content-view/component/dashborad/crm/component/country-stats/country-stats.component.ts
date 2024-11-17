import { Component, OnInit } from '@angular/core';
import { DecimalPipe, PercentPipe } from '@angular/common';
import { take } from 'rxjs';
import { CrmService } from 'app/index/service-index';
import { SharedModule } from '@app/shared';
import { ICountryData } from '@app/interface';

@Component({
  selector: 'country-stats',
  standalone: true,
  imports: [
    SharedModule,
    DecimalPipe,
    PercentPipe],
  templateUrl: './country-stats.component.html',
  styleUrl: './country-stats.component.scss'
})
export class CountryStatsComponent implements OnInit{
  elementsLeads!:ICountryData[]
  totalUsers:number = 0

  constructor(private crmService:CrmService){ }
  ngOnInit(): void {
    this.crmService.CountryStats.pipe(take(1)).subscribe(val=>{
      this.elementsLeads = val
      this.elementsLeads.forEach(el=>this.totalUsers +=el.users)
    })
  }

  ratio(users:number){
    return users/this.totalUsers
  }
}
