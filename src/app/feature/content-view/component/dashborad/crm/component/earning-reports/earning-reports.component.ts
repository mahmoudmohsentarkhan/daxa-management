import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { CrmService } from '@app/service';
import { IChartOptions, ILabeledData } from '@app/interface';
import { SharedModule } from '@app/shared';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'earning-reports',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule],
  templateUrl: './earning-reports.component.html',
  styleUrl: './earning-reports.component.scss'
})
export class EarningReportsComponent implements OnInit{
  chartOptions!:Partial<IChartOptions>;

  constructor(private crmService:CrmService) {}
  ngOnInit(): void {
    this.crmService.earningReports.pipe(take(1)).subscribe(val=>{
      this.chartOptions = this.initChart(val)
    })
  }
  private initChart(labeledData:ILabeledData):Partial<IChartOptions>{
    return {
      series: [
        {
          type: "column",
          data: labeledData.data,
          color:'#6b86f4'
        },
        {
          data: labeledData.data,
          color:'#26d2e7'
        }
      ],
      chart: {
        height: 200,
        type: "line",
        toolbar:{
          show:false
        }
      },
      stroke: {
        width: [0, 4],
        curve:"smooth"
      },
      dataLabels: {
        enabled: false,
      },
      labels: labeledData.label,
      xaxis: {
        type: "category"
      },
      tooltip:{
        enabled:false
      },
      legend:{
        show:false
      }
    }
  }

}
