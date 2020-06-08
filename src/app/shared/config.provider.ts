import { Injectable } from "@angular/core"; 

@Injectable({
    providedIn: 'root'
  })
export class Config {
    constructor() { }
    baseUrl : string = 'https://api.covid19api.com';
}