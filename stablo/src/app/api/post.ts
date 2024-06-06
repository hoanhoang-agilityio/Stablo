// TODO: Refactor to use only 1 api for both getPostList and getPostListFiltered
// TODO: Update type for all functions
// export const getPostList = async () => {
//   const res = await fetch(`${process.env.API_END_POINT}/posts`, {
//     cache: 'no-store',
//   });
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// };

export const getPostListPagination = async (page?: number) => {
  const url = page
    ? `${process.env.API_END_POINT}/posts?_page=${page}&_limit=6`
    : `${process.env.API_END_POINT}/posts`;

  const res = await fetch(url, {
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const postListResponse = await res.json();
  const totalItem = res.headers.get('X-Total-Count');

  return {
    post: postListResponse,
    totalItem,
  };
};

export const getPostListFiltered = async (authorId: string) => {
  const res = await fetch(
    `${process.env.API_END_POINT}/posts?authorId=${authorId}`,
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
  const res = await fetch(`${process.env.API_END_POINT}/posts?title=${title}`, {
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

export const getPostByCategory = async (category: string) => {
  const res = await fetch(
    `${process.env.API_END_POINT}/posts?category=${category}`,
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
