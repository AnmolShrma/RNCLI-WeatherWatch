import {Location} from '../services/types';

export interface CurrentWeather {
  temperature: number;
  description: string;
  image: string;
}

export interface DailyWeather {
  date: string;
  image: string;
  avgTemp: number;
  weatherCode: number;
}

export interface WeatherData {
  currentWeather: CurrentWeather;
  dailyData: DailyWeather[];
}

export interface WeatherHeaderProps {
  location: string;
  temperature: number;
  description: string;
  image: string;
  handleSearch: (searchString: string) => void;
  locationData: Location[];
  handleLocationSelect: (item: Location) => void;
}

export interface WeeklyForecastProps {
  dailyData: DailyWeather[];
}
