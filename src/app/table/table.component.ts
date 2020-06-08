import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Country } from '../models/country.model';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() tableData: any;
  countryData: Country[] = [];
  status: string = 'confirmed';

  constructor(private dataAccess: DataServiceService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.tableData = this.tableData;
    //Here we track that if parent component data is change then according to it child component data also change
    //so we call function here
    this.getCountryDetails(this.status);
  }

  ngOnInit(): void {
    //This is to load child component with data on load
    this.getCountryDetails(this.status);
  }

  //This function will tigger on country status change and set data to child component
  getCountryDetails(status: string) {
    console.log('inside getCountryDetails', status);
    this.dataAccess.getCountryDetails(this.tableData.country, status).subscribe(
      (response: Country[]) => {
        this.countryData = response.map((resp: Country) => new Country(resp));
      },
      (err) => {
        console.log('error', err);
      }
    );
  }
}
