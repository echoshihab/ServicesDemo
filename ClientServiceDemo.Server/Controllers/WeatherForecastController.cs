using ClientServiceDemo.Server.Models;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ClientServiceDemo.Server.Controllers
{

    public class WeatherForecastController : BaseController<WeatherForecast> 
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        public override IActionResult Get(int id)
        {
            // to test error response
            return this.BadRequest();
        }

        public override IActionResult Query()
        {          
            var results = Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();

           return this.Ok(results);
        }

        public override IActionResult Create(WeatherForecast resource)
        {
            return this.Ok(resource);
        }
    }
}
