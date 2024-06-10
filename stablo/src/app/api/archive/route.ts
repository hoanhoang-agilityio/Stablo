import { NextResponse, NextRequest } from 'next/server';

// Models
import { Post } from '@/models';

export const dynamic = 'force-dynamic';

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page')) || 1;

  const url =
    page > 1
      ? `${process.env.API_END_POINT}/posts?_page=${page}&_limit=6`
      : `${process.env.API_END_POINT}/posts`;

  const res = await fetch(url);

  const postList: Post[] = await res.json();

  const totalPages = res.headers.get('X-Total-Pages');

  return NextResponse.json({ postList, totalPages });
};
