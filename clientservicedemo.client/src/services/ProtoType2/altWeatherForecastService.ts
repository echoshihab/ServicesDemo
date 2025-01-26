import WeatherForecast from "@/models/WeatherForecast";
import { AltHttpService } from "./altHttpService";

class AltWeatherForecastService extends AltHttpService<WeatherForecast> {
  resourcePath: string = "weatherForecast";
}
// map to weatherForecast here?

export default new AltWeatherForecastService();
