import {WeatherData} from '../types';
import getWeatherImage, {items, WeatherCode} from './getWeatherImage';

export const mapWeatherData = (data: any): WeatherData => {
  const currentWeather = data.current_weather;
  const dailyData = data.daily.time.map((date: string, index: number) => ({
    date,
    image: getWeatherImage(data.daily.weather_code[index] as WeatherCode),
    avgTemp: Math.round(
      (data.daily.temperature_2m_max[index] +
        data.daily.temperature_2m_min[index]) /
        2,
    ),
    weatherCode: data.daily.weather_code[index],
  }));

  return {
    currentWeather: {
      temperature: Math.round(currentWeather.temperature),
      description:
        items[currentWeather.weathercode as WeatherCode].day.description,
      image: getWeatherImage(currentWeather.weathercode as WeatherCode),
    },
    dailyData,
  };
};
