// Converts spaces to underscores in a given text
export const convertSpaceToDash = (text = '') => {
  return text?.replace(/\s/g, '-');
};

// Converts underscores to spaces in a given text
export const convertDashToSpace = (text = '') => {
  return text?.replace(/-/g, ' ');
};

// Capitalizes the first letter of a given text
export const upperCaseFirstLetter = (text = '') => {
  return text.trimEnd().charAt(0).toUpperCase() + text.slice(1);
};
