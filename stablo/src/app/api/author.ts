// TODO: Refactor to use only 1 api for both getAuthorById and getAuthorByName
export const getAuthorById = async (id: string) => {
  const res = await fetch(`https://kabar-server.onrender.com/author?id=${id}`, {
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
  const res = await fetch(
    `https://kabar-server.onrender.com/author?name=${name}`,
    { cache: 'no-store' },
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};