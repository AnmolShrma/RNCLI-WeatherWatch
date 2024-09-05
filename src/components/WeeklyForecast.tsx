import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {WeeklyForecastProps} from '../types';
import {getShortDayName} from '../helpers/getShortDayName';

const WeeklyForecast: React.FC<WeeklyForecastProps> = ({dailyData}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.forecastContainer}>
      {dailyData.map((day, index) => (
        <View key={index} style={styles.dayContainer}>
          <Text style={styles.dayText}>{getShortDayName(day.date)}</Text>
          <Image source={{uri: day.image}} style={styles.weatherIcon} />
          <Text style={styles.temperatureText}>{day.avgTemp}°C</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  forecastContainer: {
    padding: 16,
  },
  dayContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  dayText: {
    fontSize: 16,
    color: '#fff',
  },
  weatherIcon: {
    width: 40,
    height: 40,
    marginVertical: 8,
  },
  temperatureText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default React.memo(WeeklyForecast);
