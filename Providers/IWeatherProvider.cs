using System.Collections.Generic;
using ProjectTest.Models;

namespace ProjectTest.Providers
{
    public interface IWeatherProvider
    {
        List<WeatherForecast> GetForecasts();
    }
}
