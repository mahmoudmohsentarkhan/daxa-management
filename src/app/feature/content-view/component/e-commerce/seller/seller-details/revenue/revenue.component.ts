import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '@app/shared';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexStroke,
  ApexXAxis,
  ApexTooltip,
  NgApexchartsModule,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  grid:ApexGrid;
  colors:string[]
};
@Component({
  selector: 'seller-revenue',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule],
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.scss'
})
export class RevenueComponent  {
  chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Orders",
          data: [250, 240, 200, 260, 180, 300, 240, 210]
        },
        {
          name: "Earnings",
          data: [200, 250, 180, 240, 160, 260, 160, 140]
        },
        {
          name: "Refunds",
          data: [140, 190, 100, 150, 200, 140, 200, 200]
        },
        {
          name: "Conversion Rate",
          data: [190, 140, 140, 200, 120, 220, 160, 100]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        toolbar:{
          show:false
        }
      },
      plotOptions: {

        bar: {
          horizontal: false,
          columnWidth: "10px",
        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        strokeDashArray: 5 // يجعل خطوط الشبكة متقطعة
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      legend: {
        position:'top'
      },
      colors: ['#00cae3','#0f79f3','#ffb264','#ee6666'],
      tooltip: {
        enabled:false
      }
    };
  }
}
