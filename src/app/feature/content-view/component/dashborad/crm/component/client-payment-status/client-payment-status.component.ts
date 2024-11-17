import { Component } from '@angular/core';
import { take } from 'rxjs';
import { CrmService } from 'app/index/service-index';
import { IChartOptions, ILabeledData } from '@app/interface';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'client-payment-status',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule],
  templateUrl: './client-payment-status.component.html',
  styleUrl: './client-payment-status.component.scss'
})
export class ClientPaymentStatusComponent {
  chartOptions!: Partial<IChartOptions>;

  constructor(private crmService:CrmService) {
    crmService.clientPaymentStatus.pipe(take(1)).subscribe(val=>{
      this.chartOptions = this.initChart(val)
    })

  }

  private initChart(labeledData:ILabeledData):Partial<IChartOptions>{
    let seriesData: number[] = [];
    if (Array.isArray(labeledData.data)) {
      seriesData = labeledData.data.flat();
    }
    return {
      series: seriesData,
      chart: {
        type: "polarArea",
        toolbar:{
          show:false
        },

      },
      yaxis:{
        show:false
      },
      labels: labeledData.label,
      dataLabels:{
        enabled: false
      },
      stroke: {
        show:false
      },
      fill: {
        opacity: 1
      },
      legend:{
        position:'left'
      },
      tooltip:{
        enabled:false
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
