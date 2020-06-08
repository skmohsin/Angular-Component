export class Country {
  country: string;
  countryCode: string;
  province: string;
  city: string;
  cityCode: string;
  lat: string;
  lon: string;
  cases: number;
  status: string;
  date: Date;

  constructor(countryData : any){
      this.country = countryData.Country;
      this.countryCode = countryData.CountryCode;
      this.province = countryData.Province;
      this.city = countryData.City;
      this.cityCode = countryData.CityCode;
      this.lat = countryData.Lat;
      this.lon = countryData.Lon;
      this.cases = countryData.Cases;
      this.status = countryData.Status;
      this.date = countryData.Data;
  }
}
