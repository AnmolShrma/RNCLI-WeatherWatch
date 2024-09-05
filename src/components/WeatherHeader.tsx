import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {WeatherHeaderProps} from '../types';

const WeatherHeader: React.FC<WeatherHeaderProps> = ({
  location,
  temperature,
  description,
  image,
  handleSearch,
  locationData,
  handleLocationSelect,
}) => (
  <View style={styles.headerContainer}>
    <>
      <TextInput
        placeholder="Search location..."
        placeholderTextColor="#aaa"
        onChangeText={handleSearch}
        style={styles.searchInput}
      />
      <View style={styles.listContainer}>
        {locationData?.map(item => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.7}
            style={styles.item}
            onPress={() => handleLocationSelect(item)}>
            <Text style={styles.text}>{item.name}</Text>
            {item.admin1 && <Text style={styles.text}>, {item.admin1}</Text>}
            {item.admin2 && <Text style={styles.text}>, {item.admin2}</Text>}
            <Text style={styles.text}>, {item.country}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>

    <View style={styles.currentWeather}>
      <Text style={styles.locationText}>{location}</Text>
      <Text style={styles.temperatureText}>{temperature}°C</Text>
      <View style={styles.weatherInfo}>
        <Text style={styles.descriptionText}>{description}</Text>
        {!!image && <Image source={{uri: image}} style={styles.weatherIcon} />}
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    padding: 8,
  },
  currentWeather: {
    padding: 32,
    alignItems: 'center',
  },
  searchInput: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  locationText: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
  },
  temperatureText: {
    fontSize: 64,
    fontWeight: '300',
    color: '#fff',
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 24,
    color: '#fff',
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginLeft: 8,
  },
  item: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  listContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 60,
    left: 8,
    right: 8,
    borderRadius: 4,
    overflow: 'hidden',
    zIndex: 10,
  },
});

export default React.memo(WeatherHeader);
