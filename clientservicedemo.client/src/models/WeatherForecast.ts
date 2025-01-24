import IdentifiableData from "./IdentifiableData";

export default class WeatherForecast extends IdentifiableData {
  date: Date;
  temperatureC: number;
  summary?: String;

  constructor(date: Date, temperatureC: number, summary?: string) {
    super();
    this.date = date;
    this.temperatureC = temperatureC;
    this.summary = summary;
  }

  get temperatureF(): number {
    return 32 + Math.round(this.temperatureC / 0.5556);
  }
}
