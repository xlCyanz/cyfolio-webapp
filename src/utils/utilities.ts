export const calculateAge = (birthday: string) => {
  const birthdayArr = birthday.split("-");
  const birthdayDate = new Date(
    Number(birthdayArr[0]),
    Number(birthdayArr[1]) - 1,
    Number(birthdayArr[2]),
  );

  const ageDifference = Date.now() - birthdayDate.getTime();
  const ageDate = new Date(ageDifference);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

/**
 * Convert a title string to a slug string.
 * @param {string} title - The title string to convert.
 * @return {string} The resulting slug string.
 */
export const titleToSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

/**
 * Check if any of the values in an array are present in a string.
 * @param {string} str - The string to check.
 * @param {string[]} values - The array of values to check against.
 * @returns {boolean} - Returns true if any of the values are present in the string, otherwise false.
 */
export const containsAny = (str: string, values: string[]): boolean => {
  return values.some((value) => str.includes(value));
};
