'use server';

// Constants
import { ENDPOINT } from '@/constants';

// Utils
import { getAPIErrorMessage } from '@/utils';

export const getPostList = async () => {
  const res = await fetch(`${ENDPOINT}/posts`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error(getAPIErrorMessage(res.status, res.statusText));

  return res.json();
};

export const getPostListPagination = async (currentPage: number) => {
  const url =
    currentPage > 1
      ? `${ENDPOINT}/archive?page=${currentPage}`
      : `${ENDPOINT}/archive`;

  const res = await fetch(url, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error(getAPIErrorMessage(res.status, res.statusText));

  return res.json();
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
