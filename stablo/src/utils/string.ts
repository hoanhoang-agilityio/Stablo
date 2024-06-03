// Converts spaces to underscores in a given text
export const convertSpaceToUnderScore = (text = '') => {
  return text?.replace(/\s/g, '_');
};

// Converts underscores to spaces in a given text
export const convertUnderScoreTextToSpace = (text = '') => {
  return text?.replace(/_/g, ' ');
};
