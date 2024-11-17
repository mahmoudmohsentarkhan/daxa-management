import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  NgApexchartsModule,
  ApexGrid
} from "ng-apexcharts";

import { take } from 'rxjs';
import { SharedModule } from '@app/shared';
import { ILabeledData } from '@app/interface';
import { ProjectService } from '@app/service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  colors: string[];
  grid: ApexGrid;
  legend: ApexLegend
};
@Component({
  selector: 'projects-analysis',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule],
  templateUrl: './projects-analysis.component.html',
  styleUrl: './projects-analysis.component.scss'
})
export class ProjectsAnalysisComponent {
  chartOptions!: ChartOptions;

  constructor(private projectService:ProjectService) {
    projectService.projectsAnalysis.pipe(take(1)).subscribe(val=>{
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
          name: "Project",
          data: seriesData[0]
        },
        {
          name: "Task",
          data: seriesData[1]
        },
        {
          name: "Revenue",
          data: seriesData[2]
        }
      ],
      chart: {
        type: "bar",
        height: 370,
        toolbar:{
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#00cae3','#0f79f3','#796df6'],
      xaxis: {
        categories: labeledData.label
      },
      tooltip: {
        enabled: false
      },
      grid : {
        strokeDashArray: 5
      },
      legend: {
        position: 'top'
      }
    };
  }
}
