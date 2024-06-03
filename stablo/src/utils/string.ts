// Converts spaces to underscores in a given text
export const convertSpaceToUnderScore = (text = '') => {
  return text?.replace(/\s/g, '_');
};

// Converts underscores to spaces in a given text
export const convertUnderScoreTextToSpace = (text = '') => {
  return text?.replace(/_/g, ' ');
};

// Capitalizes the first letter of a given text
export const upperCaseFirstLetter = (text = '') => {
  return text.trimEnd().charAt(0).toUpperCase() + text.slice(1);
};
