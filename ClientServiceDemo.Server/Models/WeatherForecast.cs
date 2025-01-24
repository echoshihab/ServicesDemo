namespace ClientServiceDemo.Server.Models
{
    public class WeatherForecast : IdentifiableData
    {
        public DateOnly Date { get; set; }

        public int TemperatureC { get; set; }

        public string? Summary { get; set; }
    }
}
