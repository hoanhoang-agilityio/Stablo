export const getAPIErrorMessage = (statusCode: number, statusText: string) => {
  const errorMessage = `An error has occurred: ${statusCode} - ${statusText}`;
  return errorMessage;
};
