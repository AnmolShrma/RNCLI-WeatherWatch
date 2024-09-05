import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import WeatherHeader from '../WeatherHeader';

describe('WeatherHeader', () => {
  const mockHandleSearch = jest.fn();
  const mockGetWeatherData = jest.fn();
  const locationData = [
    {
      id: 1261481,
      name: 'New Delhi',
      latitude: 28.63576,
      longitude: 77.22445,
      elevation: 212,
      feature_code: 'PPLC',
      country_code: 'IN',
      admin1_id: 1273293,
      admin2_id: 8347332,
      timezone: 'Asia/Kolkata',
      population: 317797,
      country_id: 1269750,
      country: 'India',
      admin1: 'Delhi',
      admin2: 'New Delhi',
    },
    {
      id: 4245509,
      name: 'New Delhi',
      latitude: 39.03171,
      longitude: -90.26122,
      elevation: 178,
      feature_code: 'PPL',
      country_code: 'US',
      admin1_id: 4896861,
      admin2_id: 4241818,
      admin3_id: 4244693,
      timezone: 'America/Chicago',
      country_id: 6252001,
      country: 'United States',
      admin1: 'Illinois',
      admin2: 'Jersey',
      admin3: 'Mississippi Township',
    },
  ];

  it('renders the component correctly', () => {
    const {getByText, getAllByText, getByPlaceholderText} = render(
      <WeatherHeader
        location="New Delhi"
        temperature={30}
        description="Sunny"
        image="https://openweathermap.org/img/wn/11d@2x.png"
        handleSearch={mockHandleSearch}
        locationData={locationData}
        handleLocationSelect={mockGetWeatherData}
      />,
    );

    expect(getAllByText('New Delhi')[0]).toBeTruthy();
    expect(getByText('30°C')).toBeTruthy();
    expect(getByText('Sunny')).toBeTruthy();
    expect(getByPlaceholderText('Search location...')).toBeTruthy();
  });

  it('calls handleSearch when text is inputted', () => {
    const {getByPlaceholderText} = render(
      <WeatherHeader
        location="New Delhi"
        temperature={30}
        description="Sunny"
        image="https://openweathermap.org/img/wn/11d@2x.png"
        handleSearch={mockHandleSearch}
        locationData={locationData}
        handleLocationSelect={mockGetWeatherData}
      />,
    );

    const searchInput = getByPlaceholderText('Search location...');
    fireEvent.changeText(searchInput, 'Delhi');

    expect(mockHandleSearch).toHaveBeenCalledWith('Delhi');
  });

  it('calls getWeatherData when a location is selected', () => {
    const {getAllByText} = render(
      <WeatherHeader
        location="New Delhi"
        temperature={30}
        description="Sunny"
        image="https://openweathermap.org/img/wn/11d@2x.png"
        handleSearch={mockHandleSearch}
        locationData={locationData}
        handleLocationSelect={mockGetWeatherData}
      />,
    );

    const locationItem = getAllByText('New Delhi');
    fireEvent.press(locationItem[0]);

    expect(mockGetWeatherData).toHaveBeenCalledWith(locationData[0]);
  });
});
