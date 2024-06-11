'use server';

// Utils
import { getAPIErrorMessage } from '@/utils';

export const getAuthorById = async (id: string) => {
  const res = await fetch(`${process.env.API_END_POINT}/author?id=${id}`, {
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) throw new Error(getAPIErrorMessage(res.status, res.statusText));

  return res.json();
};

export const getAuthorByName = async (name: string) => {
  const res = await fetch(`${process.env.API_END_POINT}/author?name=${name}`, {
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) throw new Error(getAPIErrorMessage(res.status, res.statusText));

  return res.json();
};

export const getAuthorList = async () => {
  const res = await fetch(`${process.env.API_END_POINT}/author`, {
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) throw new Error(getAPIErrorMessage(res.status, res.statusText));

  return res.json();
};
