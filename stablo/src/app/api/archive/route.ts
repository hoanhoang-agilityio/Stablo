import { NextResponse, NextRequest } from 'next/server';

// Models
import { Post } from '@/models';

export const dynamic = 'force-dynamic';

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page')) || 1;

  const url = `${process.env.API_END_POINT}/posts?_page=${page}&_limit=6`;

  const res = await fetch(url);

  const totalItems = Number(res.headers.get('X-Total-Count'));

  const postList: Post[] = await res.json();

  return NextResponse.json({ postList, totalItems });
};
