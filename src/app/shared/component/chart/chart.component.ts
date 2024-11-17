import { Component, Input } from '@angular/core';
import {
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexFill,
  NgApexchartsModule,
  ApexTooltip,
  ApexYAxis,
  ApexGrid,
  ApexStroke,
  ChartType,
  ApexPlotOptions,
  ApexAxisChartSeries,
  ApexLegend,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  colors: string[];
  yaxis: ApexYAxis;
  fill: ApexFill;
  grid: ApexGrid;
  tooltip: ApexTooltip,
  stroke: ApexStroke,
  plotOptions: ApexPlotOptions,
  legend:ApexLegend
};

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class AppChartComponent {
  chartOptions: ChartOptions;

  @Input({required:true}) set data(chart:any){
    if(chart){
      chart.forEach((el:any) => {
        this.chartOptions.series.push({data:el})

      });
    }
  }

  @Input() set curve(type:| ("smooth" | "straight" | "stepline" | "monotoneCubic")){
    if(type){
      this.chartOptions.stroke.curve = type
    }
  }

  @Input() set dashArray(dashArray:number[]){
    if(dashArray){
      this.chartOptions.stroke.dashArray = dashArray

    }
  }

  @Input() set storkWidth(width:number){
    if(width){
      this.chartOptions.stroke.width = width

    }
  }

  @Input() set categories(categories:string[]){
    if(categories){
      this.chartOptions.xaxis ={
        axisBorder:{
          show:true
        },
        axisTicks: {
          show: true
        },
        labels: {
          show: true
        }
      }
      this.chartOptions.yaxis = {
        labels: {
          show:true,
          style: {
            colors: 'white',
            fontFamily: 'Outfit, sans-serif',
            fontSize:'12px'

          }
        }
      }
      this.chartOptions.xaxis = {
        categories : categories,
        labels: {
          show: true,
          style: {
            colors: 'white',
            fontFamily: 'Outfit, sans-serif',
            fontSize:'12px'

          }
        }
      }

    }
  }
  @Input() set color(color:string[] | string){
    if(color){
      this.chartOptions.colors.push(...color)
    }
  }
  @Input() set strock(strock:any){
    if(strock){
      this.chartOptions.stroke.width = 1.5
    }else{
      this.chartOptions.stroke = {
          width:6
      }
    }
  }
  @Input() set type(type:ChartType){
    if(type){
      this.chartOptions.chart.type = type
      this.chartOptions.fill.type = "solid"
    }
  }

  @Input() set size(size:{w?:number,h?:number}){
    if(size){
      if(size.w){
        this.chartOptions.chart.width = size.w
      }
      if(size.h){
        this.chartOptions.chart.height = size.h
      }
    }
  }
  constructor() {
    this.chartOptions = {
      series: [
      ],
      chart: {
        type: "area",
        stacked:true,
        toolbar: {
          show: false
        },
        animations: {
          enabled: false
        }
      },
      colors: [],
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.7,
          opacityTo: 0.45
        }
      },
      tooltip: {
        enabled: false
      },
      xaxis: {
        axisBorder:{
          show:false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show:false,
        }
      },
      stroke: {

        width:2

      },
      legend:{
        show:false
      },
      grid: {
        strokeDashArray: 5,
        show:false
      },
      plotOptions: {
        bar: {
          columnWidth: '8'
        }
      }
    }

  }

}

