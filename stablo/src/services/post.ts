'use server';

// Utils
import { getAPIErrorMessage } from '@/utils';

export const getPostList = async () => {
  const res = await fetch(`${process.env.API_END_POINT}/posts`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error(getAPIErrorMessage(res.status, res.statusText));

  return res.json();
};

export const getPostListPagination = async (currentPage: number) => {
  const url = `${process.env.API_END_POINT}/posts?page=${currentPage}&_limit=6`;

  const res = await fetch(url, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error(getAPIErrorMessage(res.status, res.statusText));

  const postList = await res.json();
  const totalItems = Number(res.headers.get('X-Total-Count'));

  return { postList, totalItems };
};

export const getPostListByAuthorId = async (authorId: string) => {
  const res = await fetch(
    `${process.env.API_END_POINT}/posts?authorId=${authorId}`,
    {
      cache: 'no-store',
    },
  );

  if (!res.ok) throw new Error(getAPIErrorMessage(res.status, res.statusText));

  return res.json();
};

export const getPostDetail = async (title: string) => {
  const res = await fetch(`${process.env.API_END_POINT}/posts?title=${title}`, {
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) throw new Error(getAPIErrorMessage(res.status, res.statusText));

  return res.json();
};

export const getPostByCategory = async (category: string) => {
  const res = await fetch(
    `${process.env.API_END_POINT}/posts?category=${category}`,
    { cache: 'no-store' },
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) throw new Error(getAPIErrorMessage(res.status, res.statusText));

  return res.json();
};
