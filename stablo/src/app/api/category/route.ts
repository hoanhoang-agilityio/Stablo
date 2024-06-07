import { NextResponse, NextRequest } from 'next/server';

// Models
import { Post } from '@/models';

// Utils
import { convertDashToSpace } from '@/utils';

export const dynamic = 'force-dynamic';

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || '';

  const url = `${process.env.API_END_POINT}/posts?category=${convertDashToSpace(category)}`;

  const res = await fetch(url);

  const postList: Post[] = await res.json();

  return NextResponse.json(postList);
};
