import { Component } from '@angular/core';
import { take } from 'rxjs';
import { IChartOptions, ILabeledData } from '@app/interface';
import { LmsService } from '@app/service';
import { SharedModule } from '@app/shared';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'time-spending',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule],
  templateUrl: './time-spending.component.html',
  styleUrl: './time-spending.component.scss'
})
export class TimeSpendingComponent {
  chartOptions!: Partial<IChartOptions>;
  constructor(private lmsService:LmsService) {
    lmsService.timeSpending.pipe(take(1)).subscribe(val=>{
      this.chartOptions = this.initChart(val)
    })

  }

  private initChart(labeledData:ILabeledData):Partial<IChartOptions>{
    return {
      series: labeledData.data.flat(),
      chart: {
        type: "donut",
        height: 600,
      },
      tooltip:{
        enabled:false
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show:false
      },
      colors: ["#796df6","#8d83f7","#a199f9", "#b5affa", "#c9c5fb", "#dddbfd", "#f2f0fe"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            }
          }
        }
      ]
    };
  }
}
