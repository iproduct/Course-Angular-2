import { Component, OnInit } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
  moduleId: module.id,
  selector: 'chart',
  templateUrl: 'chart.component.html',
  // template: 
  // `<base-chart class="chart"
  //          [data]="pieChartData"
  //          [labels]="pieChartLabels"
  //          [chartType]="pieChartType"
  //          [options]="pieChartOptions"
  //          (chartHover)="chartHovered($event)"
  //          (chartClick)="chartClicked($event)"></base-chart>`,
  styleUrls: ['chart.component.css'],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class ChartComponent implements OnInit {

  constructor() {
    console.log('pie demo');
  }

  ngOnInit() {
  }

  // events
  chartClicked(e:any) {
    console.log(e);
  }

  chartHovered(e:any) {
    console.log(e);
  }

  // Pie
  pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  pieChartData = [300, 500, 100];
  pieChartType = 'pie';
  pieChartOptions = {responsive: false};

}
