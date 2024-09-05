import axios from 'axios';
import {fetchLocationData} from '..';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchLocationData API', () => {
  it('throws an error when no locations are found', async () => {
    mockedAxios.get.mockResolvedValue({data: {results: []}});

    await expect(fetchLocationData('Nonexistent Location')).rejects.toThrow(
      'No locations found',
    );
  });

  it('returns data when locations are found', async () => {
    const mockData = {results: [{name: 'New Delhi', country: 'India'}]};
    mockedAxios.get.mockResolvedValue({data: mockData});

    const result = await fetchLocationData('New Delhi');

    expect(result).toEqual(mockData);
  });
});
