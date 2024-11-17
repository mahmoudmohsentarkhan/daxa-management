import { Component } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexStroke,
  NgApexchartsModule,
  ApexPlotOptions
} from "ng-apexcharts";
import { take } from 'rxjs';
import { ILabeledData } from '@app/interface';
import { SharedModule, StatCardComponent } from '@app/shared';
import { LmsService } from '@app/service';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  labels: string[];
  plotOptions:ApexPlotOptions,
  colors:string[]
};


@Component({
  selector: 'active-students',
  standalone: true,
  imports: [SharedModule,StatCardComponent,NgApexchartsModule],
  templateUrl: './active-students.component.html',
  styleUrl: './active-students.component.scss'
})
export class ActiveStudentsComponent {
  chartOptions!:ChartOptions;
   constructor(private lmsService:LmsService) {
    this.lmsService.activeStudents.pipe(take(1)).subscribe(val=>{
      this.chartOptions = this.initChart(val)
    })
  }

  private initChart(labeledData:ILabeledData):ChartOptions{
    let seriesData: number[][] = [];
    if (Array.isArray(labeledData.data)) {
      seriesData = labeledData.data.map(item => Array.isArray(item) ? item : [item]);
    } else {
      seriesData = [[labeledData.data]];
    }
    return {
      series: [
        {
          name:'Monthly',
          type: 'area',
          data: seriesData[0],

        },
        {
          name:'Weekly',
          type: 'column',
          data: seriesData[1],

        },
        {
          name:'Daily',
          data: seriesData[2],
        }
      ],
      chart: {
        type: "line",
        height: 350,
        stacked:true,
        zoom: {
          enabled: false
        },
        toolbar:{show:false}
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        width: [5,0,5]
      },
      colors:['#d6d6e6', '#24d0e6','#796df6'],
      labels: labeledData.label,
      plotOptions: {
        bar: {
            columnWidth: 30,
        },
      },
    };
  }

}
