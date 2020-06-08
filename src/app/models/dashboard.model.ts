export class Dashboard {
  confirmed: number;
  deaths: number;
  recovered: number;
  active: number;
  country: string;
  constructor(dashboarData: any) {
    this.confirmed = dashboarData.Confirmed;
    this.deaths = dashboarData.Deaths;
    this.recovered = dashboarData.Recovered;
    this.active = dashboarData.Active;
    this.country = dashboarData.Country;
  }
}
