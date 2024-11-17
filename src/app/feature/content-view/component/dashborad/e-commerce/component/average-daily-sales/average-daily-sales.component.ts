import { Component } from '@angular/core';
import { take } from 'rxjs';
import {EcommerceStatisticsService} from 'app/index/service-index';
import { StockArrowComponent } from 'app/index/shared/shared-index';
import { IChartOptions, ILabeledData } from '@app/interface';
import { SharedModule } from '@app/shared';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'average-daily-sales',
  standalone: true,
  imports: [SharedModule,StockArrowComponent,NgApexchartsModule],
  templateUrl: './average-daily-sales.component.html',
  styleUrl: './average-daily-sales.component.scss'
})
export class AverageDailySalesComponent {
  chartOptions!: Partial<IChartOptions>;
  constructor(private ecommerceStatService:EcommerceStatisticsService) {
    ecommerceStatService.averageDailySales.pipe(take(1)).subscribe(val=>{
      this.chartOptions = this.initChart(val);
    })
  }

  private initChart(LabeledData:ILabeledData):Partial<IChartOptions>{
    return {
      series: [
        {
          name: "Inflation",
          data: LabeledData.data
        }
      ],
      chart: {
        height: 250,
        type: "bar",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: LabeledData.label,
        labels: {
          show:false
        },
        tooltip: {
          enabled: false,
        }
      },
      tooltip:{
        enabled: false
      },
      grid: {
        strokeDashArray: 5,
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      colors:['#25d1e7']
    }
  }
}
