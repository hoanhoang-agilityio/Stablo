import { NextResponse, NextRequest } from 'next/server';

// Models
import { Post } from '@/models';

// Utils
import { convertDashToSpace } from '@/utils';

export const dynamic = 'force-dynamic';

export const GET = async (
  _request: NextRequest,
  { params: { title } }: { params: { title: string } },
) => {
  const res = await fetch(
    `${process.env.API_END_POINT}/posts?title=${convertDashToSpace(title)}`,
  );

  const post: Post[] = await res.json();

  return NextResponse.json(post);
};
