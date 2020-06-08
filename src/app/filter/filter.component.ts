import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() filterEvent = new EventEmitter<any>();
  @Output() filterChartEvent = new EventEmitter<any>();
  country: any;
  chartToVisible: string;

  constructor() {}

  filterByCountry() {
    this.filterEvent.emit(this.country);
  }

  showHideChart() {
    this.filterChartEvent.emit(this.chartToVisible);
  }
}
