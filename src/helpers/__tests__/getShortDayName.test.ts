import {getShortDayName} from '../getShortDayName';

describe('getShortDayName', () => {
  it('returns the correct shortened day name for a given date', () => {
    expect(getShortDayName('2024-09-04')).toBe('Wed');
    expect(getShortDayName('2024-09-05')).toBe('Thu');
    expect(getShortDayName('2024-09-06')).toBe('Fri');
    expect(getShortDayName('2024-09-07')).toBe('Sat');
    expect(getShortDayName('2024-09-08')).toBe('Sun');
    expect(getShortDayName('2024-09-09')).toBe('Mon');
    expect(getShortDayName('2024-09-10')).toBe('Tue');
  });
});
