import { Component} from '@angular/core';
import {NgApexchartsModule,} from "ng-apexcharts";
import { take } from 'rxjs';
import { IChartOptions, ILabeledData } from '@app/interface';
import { EcommerceStatisticsService } from '@app/service';


@Component({
  selector: 'projects-roadmap',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './projects-roadmap.component.html',
  styleUrl: './projects-roadmap.component.scss'
})
export class ProjectsRoadmapComponent {
  chartOptions!: Partial<IChartOptions>;
  constructor(private ecommerceStatService:EcommerceStatisticsService) {
    ecommerceStatService.projectsRoadmap.pipe(take(1)).subscribe(val=>{
      this.chartOptions = this.initChart(val)
    })
  }

  private initChart(labeledData:ILabeledData):Partial<IChartOptions>{
    return {
      series: [
        {
          name: "basic",
          data: labeledData.data
        }
      ],
      chart: {
        type: "bar",
        height: 400
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: true
      },
      colors: ["#8c81f7"],
      tooltip:{
        enabled:false
      },
      xaxis: {
        categories: labeledData.label
      }
    };
  }

}
