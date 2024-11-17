import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { DecimalPipe, PercentPipe } from '@angular/common';
import {
  ApexChart,
  ApexDataLabels,
  NgApexchartsModule,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexLegend,
} from "ng-apexcharts";
import { take } from 'rxjs';
import { SharedModule } from '@app/shared';
import { ILabeledData, IUserPlatform } from '@app/interface';
import { CrmService } from '@app/service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  colors: string[];
  tooltip: ApexTooltip,
  legend:ApexLegend
};
@Component({
  selector: 'most-leads',
  standalone: true,
  imports: [
    SharedModule,
    NgApexchartsModule,
    MatIconModule,
    DecimalPipe,
    PercentPipe
  ],
  templateUrl: './most-leads.component.html',
  styleUrl: './most-leads.component.scss'
})
export class MostLeadsComponent implements OnInit{
  chartOptions!: ChartOptions;
  elementsLeads!:IUserPlatform[]
  totalUsers:number = 0

  constructor(private crmService:CrmService) {}
  ngOnInit(): void {
    this.loadLeadsData();
    this.loadMostLeadData();
  }

  ratio(users:number){
    return users/this.totalUsers
  }

  private loadLeadsData(): void {
    this.crmService.leadsList.pipe(
      take(1)
    ).subscribe(leads => {
      this.elementsLeads = leads;
      this.calculateTotalUsers(leads);
    });
  }

  private loadMostLeadData(): void {
    this.crmService.mostLead.pipe(
      take(1)
    ).subscribe(lead => {
      this.chartOptions = this.initChart(lead);
    });
  }

  private calculateTotalUsers(leads: any[]) {
    this.totalUsers = leads.reduce((total, lead) => total + lead.users, 0);
  }

  private initChart(labeledData:ILabeledData):ChartOptions{
    let seriesData: number[] = [];
    if (Array.isArray(labeledData.data)) {
      seriesData = labeledData.data.flat();
    }
    return {
      series: seriesData,
      chart: {

        type: "pie"

      },
      colors: ['#00cae3','#0e7aee','#796df6','#ffb264'],
      dataLabels: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      legend: {
        show:false
      }
    }
  }
}
