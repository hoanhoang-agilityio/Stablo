/**
 * Formats a date string into a localized date format.
 * @param dateString The date string to format.
 * @returns The formatted date string.
 */
export const formatToLocalizedDate = (dateString: string): string => {
  // Define the options for the date format
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // Create a new Date object from the provided date string
  const date = new Date(dateString);

  // Format the date using the provided options and return the formatted string
  return date.toLocaleDateString(undefined, options);
};
