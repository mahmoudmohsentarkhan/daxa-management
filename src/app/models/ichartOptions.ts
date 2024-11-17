import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexForecastDataPoints, ApexGrid, ApexLegend, ApexMarkers, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis } from "ng-apexcharts";

export interface IChartOptions {
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
    seriesN:number[];
    chart: ApexChart;
    tooltip:ApexTooltip
    xaxis: ApexXAxis;
    yaxis:ApexYAxis;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    stroke: ApexStroke;
    colors:string[];
    fill:ApexFill;
    plotOptions:ApexPlotOptions;
    legend:ApexLegend;
    responsive: ApexResponsive[];
    labels:string[],
    forecastDataPoints:ApexForecastDataPoints;
    markers:ApexMarkers
  }

