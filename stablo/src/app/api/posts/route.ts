import { NextResponse, NextRequest } from 'next/server';

// Models
import { Post } from '@/models';

export const dynamic = 'force-dynamic';

export const GET = async (_request: NextRequest) => {
  const res = await fetch(`${process.env.API_END_POINT}/posts`);

  const postList: Post[] = await res.json();

  return NextResponse.json(postList);
};
