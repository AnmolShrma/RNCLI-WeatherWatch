export type Location = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id?: number;
  admin2_id?: number;
  admin3_id?: number;
  timezone: string;
  population?: number;
  country_id?: number;
  country: string;
  admin1: string;
  admin2: string;
  admin3?: string;
};

export type LocationResponse = {
  results: Location[];
  generationtime_ms: number;
};

interface CurrentWeatherUnits {
  time: 'iso8601';
  interval: 'seconds';
  temperature: '°C';
  windspeed: 'km/h';
  winddirection: '°';
  is_day: string;
  weathercode: 'wmo code';
}

interface CurrentWeather {
  time: string;
  interval: number;
  temperature: number;
  windspeed: number;
  winddirection: number;
  is_day: number;
  weathercode: number;
}

interface DailyUnits {
  time: 'iso8601';
  weather_code: 'wmo code';
  temperature_2m_max: '°C';
  temperature_2m_min: '°C';
}

interface DailyWeather {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
}

export interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather_units: CurrentWeatherUnits;
  current_weather: CurrentWeather;
  daily_units: DailyUnits;
  daily: DailyWeather;
}
