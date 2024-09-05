import React, {useCallback, useEffect, useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import WeatherHeader from '../components/WeatherHeader';
import WeeklyForecast from '../components/WeeklyForecast';
import {mapWeatherData} from '../helpers/mapWeatherData';
import {fetchLocationData, fetchWeatherDataForLocation} from '../services';
import {Location, LocationResponse} from '../services/types';
import {CurrentWeather, DailyWeather} from '../types';

const DEFAULT_CITY_NAME: string = 'New Delhi';
const HomeScreen = () => {
  const [location, setLocation] = useState<string>('');
  const [locationData, setLocationData] = useState<Location[]>([]);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>({
    temperature: 0,
    description: '',
    image: '',
  });
  const [dailyForecast, setDailyForecast] = useState<DailyWeather[]>();

  const getWeatherData = useCallback(async (selectedLocation: Location) => {
    Keyboard.dismiss();
    const weatherDataRes = await fetchWeatherDataForLocation(
      selectedLocation.latitude,
      selectedLocation.longitude,
    );
    setLocation(selectedLocation.name);
    const {currentWeather: cWeather, dailyData} =
      mapWeatherData(weatherDataRes);

    setCurrentWeather(cWeather);
    setDailyForecast(dailyData);
    setLocationData([]);
  }, []);
  const fetchWeatherData = useCallback(
    async (locationName: string) => {
      try {
        const locationDataRes: LocationResponse = await fetchLocationData(
          locationName,
        );
        const selectedLocation = locationDataRes.results[0];
        getWeatherData(selectedLocation);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    },
    [getWeatherData],
  );

  useEffect(() => {
    fetchWeatherData(DEFAULT_CITY_NAME);
  }, [fetchWeatherData]);

  const getLocationData = async (locationName: string) => {
    try {
      const locationDataRes: LocationResponse = await fetchLocationData(
        locationName,
      );
      setLocationData(locationDataRes.results);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSearch = useCallback((searchString: string) => {
    if (searchString.length > 3) {
      getLocationData(searchString);
    } else {
      setLocationData([]);
    }
  }, []);
  return (
    <View style={styles.container}>
      <WeatherHeader
        location={location}
        temperature={currentWeather.temperature}
        description={currentWeather.description}
        image={currentWeather.image}
        handleSearch={handleSearch}
        locationData={locationData}
        handleLocationSelect={getWeatherData}
      />

      {dailyForecast && <WeeklyForecast dailyData={dailyForecast} />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
});

export default HomeScreen;
