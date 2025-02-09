import IdentifiableData from "./IdentifiableData";

export default class WeatherForecast extends IdentifiableData {
  date: Date;
  temperatureC: number;
  summary?: String;

  constructor(date: Date, temperatureC: number, summary?: string, id?: Number) {
    super();
    this.date = date;
    this.temperatureC = temperatureC;
    this.summary = summary;
    this.id = id;
  }

  get temperatureF(): number {
    return 32 + Math.round(this.temperatureC / 0.5556);
  }

  static override fromJSON(data: unknown): WeatherForecast {
    if (
      typeof data !== "object" ||
      data === null ||
      !("date" in data) ||
      !("temperatureC" in data)
    ) {
      throw new Error("Invalid Weatherforecast object");
    }
    return new WeatherForecast(
      (data as any).date(data as any).temperatureC,
      (data as any).summary,
      (data as any).id
    );
  }
}
