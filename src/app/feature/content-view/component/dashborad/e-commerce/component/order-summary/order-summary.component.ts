import { NgApexchartsModule } from 'ng-apexcharts';
import { Component } from '@angular/core';
import { IChartOptions, ILabeledData } from '@app/interface';
import { SharedModule } from '@app/shared';
import { EcommerceStatisticsService } from '@app/service';


@Component({
  selector: 'order-summary',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {
  chartOptions!: Partial<IChartOptions>;
  constructor(private ecommerceStatService:EcommerceStatisticsService) {
    ecommerceStatService.orderSummary.subscribe(val=>{
      this.chartOptions = this.initChart(val)
    })
  }
  private initChart(labeledData:ILabeledData):Partial<IChartOptions>{
    let seriesData: number[] = [];
    if (Array.isArray(labeledData.data)) {
      seriesData = labeledData.data.flat();
    }
    return {
      seriesN: seriesData,
      chart: {
        type: "donut",
        height: 435,
      },
      labels: labeledData.label,
      tooltip:{
        enabled:false
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        position: "bottom",
      },
      colors: ["#33b2df","#0e7aee","#796df6"],
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
