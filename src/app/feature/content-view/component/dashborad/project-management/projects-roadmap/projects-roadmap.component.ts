import { Component } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexPlotOptions,
  ApexGrid,
  NgApexchartsModule,
  ApexYAxis,
  ApexTooltip
} from "ng-apexcharts";
import { take } from 'rxjs';
import { SharedModule } from '@app/shared';
import { ILabeledData } from '@app/interface';
import { ProjectService } from '@app/service';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  tooltip:ApexTooltip
};
@Component({
  selector: 'projects-roadmap',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule],
  templateUrl: './projects-roadmap.component.html',
  styleUrl: './projects-roadmap.component.scss'
})
export class ProjectsRoadmapComponent {
  public chartOptions!: ChartOptions;
  constructor(private projectService:ProjectService) {
    projectService.projectsRoadmap.pipe(take(1)).subscribe(val=>{
      this.chartOptions = this.initChart(val)
    })
  }

  private initChart(labeledData:ILabeledData):ChartOptions{
    return {
      series: [
        {
          name: "reversed",
          data: labeledData.data.flat(),
          color:'#8c81f7'
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
          horizontal: true
        }
      },
      xaxis: {
        categories: labeledData.label
      },
      grid: {
        show: false,
        row: {
          colors: ['#f8f9fa', 'transparent'],
          opacity: 0.5,
        }
      },
      tooltip:{
        enabled:false
      },
      yaxis: {
        axisTicks: {
          show: true
        }
      }
    };
  }
}
