// https://scotch.io/tutorials/3-ways-to-pass-async-data-to-angular-2-child-components

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss'],
})
export class PiechartComponent implements OnInit, OnChanges {
  
  //Getting pieData as input from parent
  @Input() pieData : any;

  //Declaring pieChart
  pieChart : GoogleChartInterface = {
    chartType: "PieChart"
  }
  constructor() {  }

  //This function will check if value of pieData is changes
  ngOnChanges(changes: SimpleChanges): void {
    this.initChart(this.pieData);
  }

  initChart(pieData){
    console.log('init function called', pieData.Country);
    this.pieChart = {
      chartType: "PieChart",
      dataTable : [
        ["Status", "Cases"],
        ["Confirmed", pieData.confirmed],
        ["Deaths", pieData.deaths],
        ["Recovered", pieData.recovered],
        ["Active", pieData.active],
      ],
      options :{
        height: 500
      }
    }
  }

  ngOnInit(): void {
    this.initChart(this.pieData);
  }
}
