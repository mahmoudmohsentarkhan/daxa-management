import { Component } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexTooltip,
  ApexDataLabels,
  ApexLegend,
  NgApexchartsModule
} from "ng-apexcharts";
import { take } from 'rxjs';
import { SharedModule } from '@app/shared';
import { ILabeledData } from '@app/interface';
import { ProjectService } from '@app/service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  tooltip:ApexTooltip,
  dataLabels:ApexDataLabels,
  legend:ApexLegend,
  colors:string[]
};

@Component({
  selector: 'projects-progress',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule],
  templateUrl: './projects-progress.component.html',
  styleUrl: './projects-progress.component.scss'
})
export class ProjectsProgressComponent {
  chartOptions!: ChartOptions;

  constructor(private projectService:ProjectService) {
    projectService.projectsProgress.pipe(take(1)).subscribe(val=>{
      this.chartOptions = this.initChart(val)
    })
  }

  private initChart(labeledData:ILabeledData):ChartOptions{
    return {
      series: labeledData.data.flat(),
      chart: {
        type: "donut",
        height: 1000,
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

    };
  }
}
