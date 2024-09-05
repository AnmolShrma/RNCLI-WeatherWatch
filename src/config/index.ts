const config = {
  baseUrl: {
    weatherForecastService: 'https://api.open-meteo.com/',
    geocodingService: 'https://geocoding-api.open-meteo.com/',
  },
  endpoints: {
    weatherForecast: 'v1/forecast',
    searchLocation: 'v1/search',
  },
};

export default config;
