export const getAPIErrorMessage = <T>(
  promiseFunction: () => Promise<Response>,
): Promise<T> => {
  return promiseFunction().then(handleResponse).catch(handleError);
};

async function handleResponse(response: Response) {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'An error occurred');
  }
  return response.json();
}

function handleError(error: Error) {
  if (error.message === 'Failed to fetch') {
    throw new Error('Network error. Please try again later.');
  }
  throw error;
}
