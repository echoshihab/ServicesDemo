import WeatherForecast from "@/models/WeatherForecast";
import { HttpService } from "./httpService";

class WeatherForecastService extends HttpService<WeatherForecast> {
  resourcePath: string = "weatherForecast";
}
// map to weatherForecast here?

export default new WeatherForecastService();
