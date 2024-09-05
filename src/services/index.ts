import axios from 'axios';
import config from '../config';

export const fetchLocationData = async (locationName: string) => {
  try {
    const {data} = await axios.get(
      `${config.baseUrl.geocodingService}${config.endpoints.searchLocation}`,
      {
        params: {
          name: locationName,
        },
      },
    );
    if (!(data.results && data.results.length > 0)) {
      throw new Error('No locations found');
    }
    return data;
  } catch (error) {
    console.log('Error fetching location data:', error);
    throw error;
  }
};

export const fetchWeatherDataForLocation = async (
  latitude: number,
  longitude: number,
) => {
  try {
    const {data} = await axios.get(
      `${config.baseUrl.weatherForecastService}${config.endpoints.weatherForecast}`,
      {
        params: {
          latitude,
          longitude,
          current_weather: true,
          daily: ['weather_code', 'temperature_2m_max', 'temperature_2m_min'],
        },
      },
    );
    if (!data) {
      throw new Error('No locations found');
    }
    return data;
  } catch (error) {
    console.log('Error fetching weather data:', error);
  }
};
