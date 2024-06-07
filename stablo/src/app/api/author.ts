// TODO: Refactor to use only 1 api for both getAuthorById and getAuthorByName
// TODO: Update type for all functions
export const getAuthorById = async (id: string) => {
  const res = await fetch(`${process.env.API_END_POINT}/author?id=${id}`, {
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const getAuthorByName = async (name: string) => {
  const res = await fetch(`${process.env.API_END_POINT}/author?name=${name}`, {
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const getAuthorList = async () => {
  const res = await fetch(`${process.env.API_END_POINT}/author`, {
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
