import { Component } from '@angular/core';
import { IChartOptions } from '@app/interface';
import { SharedModule } from '@app/shared';
import { NgApexchartsModule } from 'ng-apexcharts';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  chartOptions: Partial<IChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [75],
      chart: {
        type: "radialBar",
        height: 250,
        width:250
      },
      colors:['#15c0e5'],
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#a19cf4",
            margin: 5,
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: -10,
              fontSize: "22px",
              fontWeight:600,
              color:'#fff',
              fontFamily:'Outfit, sans-serif'
            },
          }
      }

  }
}}
}
