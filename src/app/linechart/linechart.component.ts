import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss'],
})
export class LinechartComponent implements OnInit, OnChanges {
  @Input() columnData: any;

  columnChart: GoogleChartInterface = {
    chartType: 'ColumnChart',
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.initChart(this.columnData);
  }

  initChart(columnData) {
    console.log('init function called', columnData.Country);
    this.columnChart = {
      chartType: 'ColumnChart',
      dataTable: [
        ['Status', 'Cases'],
        ['Confirmed', columnData.confirmed],
        ['Deaths', columnData.deaths],
        ['Recovered', columnData.recovered],
        ['Active', columnData.active],
      ],
      options: {
        height: 500,
      },
    };
  }
  ngOnInit(): void {
    this.initChart(this.columnData);
  }
}
