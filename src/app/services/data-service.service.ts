import { Injectable } from '@angular/core';
import { Config } from '../shared/config.provider';
import { HttpClient } from '@angular/common/http';
import { Dashboard } from '../models/dashboard.model';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService implements IDataService {

  constructor(private config : Config, private http: HttpClient) { }

  getCountryDetails(country?: string, status?: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.config.baseUrl}/dayone/country/${country}/status/${status}`);
  }
  
  getDashboard(country?: string) :Observable<Dashboard[]>{
    return this.http.get<Dashboard[]>(`${this.config.baseUrl}/dayone/country/${country}`);
  }
}

export interface IDataService {
  getDashboard(country?: string) :Observable<Dashboard[]>;
  getCountryDetails(country?: string, status?: string) : Observable<Country[]>;
}
