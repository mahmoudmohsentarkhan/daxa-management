import { Component } from '@angular/core';
import { IChartOptions } from '@app/interface';
import { SharedModule } from '@app/shared';
import { NgApexchartsModule} from "ng-apexcharts";

@Component({
  selector: 'revenue',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule],
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.scss'
})
export class RevenueComponent {

  chartOptions:Partial<IChartOptions>;

  constructor() {
    this.chartOptions = this.initChart();
  }

  private initChart():Partial<IChartOptions>{
    return {
      series: [
        {
          name: "Income",
          data: [31, 40, 28, 51, 42, 109, 120]
        },
        {
          name: "Expenses",
          data: [15, 45, 50, 70, 12, 100, 150]
        }

      ],
      chart: {
        type: "area",
        height: 180,
        toolbar:{
          show:false
        }
      },
      colors: ["#7474f5", "#00cae3"],
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.3,
          opacityTo: 0.4
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "center"
      },
      tooltip:{
        enabled:false
      },
      xaxis: {
        type: "category",
        categories: [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat"
        ]
      }
    };
  }

}
