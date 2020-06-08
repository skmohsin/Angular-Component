import { Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { Dashboard } from '../models/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboard: Dashboard = {} as Dashboard;
  country?: string = 'india';
  isColumnChartVisible = false;
  isPieChartVisible = false;
  isTableVisible = true;

  constructor(private dataService: DataServiceService) {
    console.log('dashboard', this.dashboard);
  }

  ngOnInit(): void {
    this.getDashboard(this.country);
  }

  filterRecordByCountryEvent($event) {
    this.country = $event;
    this.getDashboard(this.country);
  }

  showHideChart($event) {
    if ($event == 'table') {
      this.isTableVisible = true;
      this.isColumnChartVisible = false;
      this.isPieChartVisible = false;
    } else if($event == 'column') {
      this.isColumnChartVisible = true;
      this.isPieChartVisible = false;
      this.isTableVisible = false;
    }
    else{
      this.isPieChartVisible = true;
      this.isColumnChartVisible = false;
      this.isTableVisible = false;
    }
  }

  getDashboard(country?: string) {
    this.dataService.getDashboard(country).subscribe(
      (response: Dashboard[]) => {
        //This is single object map to our Dashboard Model Class
        this.dashboard = new Dashboard(response[response.length - 1]);
        console.log(this.dashboard);
      },
      (err) => {
        console.log('error', err.message);
      }
    );
  }
}
