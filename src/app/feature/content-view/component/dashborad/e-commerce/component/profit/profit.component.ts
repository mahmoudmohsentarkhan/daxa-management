import { Component, OnInit, ViewChild } from '@angular/core';
import {NgApexchartsModule} from "ng-apexcharts";
import { take } from 'rxjs';
import { IChartOptions, ILabeledData } from '@app/interface';
import { SharedModule } from '@app/shared';
import { EcommerceStatisticsService } from '@app/service';



@Component({
  selector: 'profit',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule],
  templateUrl: './profit.component.html',
  styleUrl: './profit.component.scss'
})
export class ProfitComponent implements OnInit{
  public chartOptions!: Partial<IChartOptions>;
  constructor(private ecommerceStatService:EcommerceStatisticsService) {}
  ngOnInit(): void {
    this.ecommerceStatService.profit.pipe(take(1)).subscribe(val=>{
      this.chartOptions = this.initChart(val)
    })
  }

  private initChart(labeledData:ILabeledData):Partial<IChartOptions>{
    return {
      series: [
        {
          name: "Desktops",
          data: labeledData.data
        }
      ],
      chart: {
        height: 250,
        type: "line",

        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      grid: {
        strokeDashArray: 5,
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      tooltip:{
        enabled:false
      },
      xaxis: {
        categories: labeledData.label,
        labels: {
          show: false
        }

      },
      yaxis: {
        labels: {
          show: false
        }

      }
    }
  }


}
