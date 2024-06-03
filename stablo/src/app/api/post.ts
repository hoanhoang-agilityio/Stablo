// TODO: Refactor to use only 1 api for both getPostList and getPostListFiltered
export const getPostList = async () => {
  const res = await fetch(`https://kabar-server.onrender.com/posts`, {
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

export const getPostListFiltered = async (authorId: string) => {
  const res = await fetch(
    `https://kabar-server.onrender.com/posts?authorId=${authorId}`,
    {
      cache: 'no-store',
    },
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const getPostDetail = async (title: string) => {
  const res = await fetch(
    `https://kabar-server.onrender.com/posts?title=${title}`,
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
