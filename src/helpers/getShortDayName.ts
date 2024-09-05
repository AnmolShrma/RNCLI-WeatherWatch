/**
 * Converts a date string to a shortened day name (first 3 letters).
 * @param dateString - A date string in ISO 8601 format (e.g., "2024-09-04").
 * @returns The abbreviated name of the day (e.g., "Mon").
 */
export const getShortDayName = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {weekday: 'long'};
  const fullDayName = new Intl.DateTimeFormat('en-US', options).format(date);
  return fullDayName.substring(0, 3);
};
