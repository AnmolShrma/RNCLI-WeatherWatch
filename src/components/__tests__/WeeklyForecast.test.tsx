import React from 'react';
import {render} from '@testing-library/react-native';
import WeeklyForecast from '../WeeklyForecast';
import {getShortDayName} from '../../helpers/getShortDayName';

jest.mock('../../helpers/getShortDayName', () => ({
  getShortDayName: jest.fn(),
}));

describe('WeeklyForecast', () => {
  const dailyData = [
    {
      date: '2024-09-04',
      image: 'https://openweathermap.org/img/wn/11d@2x.png',
      avgTemp: 30,
      weatherCode: 1,
    },
    {
      date: '2024-09-05',
      image: 'https://openweathermap.org/img/wn/11d@2x.png',
      avgTemp: 28,
      weatherCode: 1,
    },
  ];

  beforeEach(() => {
    (getShortDayName as jest.Mock).mockImplementation((date: string) => {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const dayIndex = new Date(date).getDay();
      return days[dayIndex];
    });
  });

  it('renders the component correctly', () => {
    const {getByText} = render(<WeeklyForecast dailyData={dailyData} />);

    expect(getByText('Wed')).toBeTruthy();
    expect(getByText('30°C')).toBeTruthy();
    expect(getByText('28°C')).toBeTruthy();
  });

  it('calls getShortDayName with the correct date', () => {
    render(<WeeklyForecast dailyData={dailyData} />);

    expect(getShortDayName).toHaveBeenCalledWith('2024-09-04');
    expect(getShortDayName).toHaveBeenCalledWith('2024-09-05');
  });
});
