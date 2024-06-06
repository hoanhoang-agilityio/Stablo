import { NextResponse, NextRequest } from 'next/server';

// Models
import { Author } from '@/models';

// Utils
import { convertDashToSpace } from '@/utils';

export const dynamic = 'force-dynamic';

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || '';

  const res = await fetch(
    `${process.env.API_END_POINT}/author?name=${convertDashToSpace(name)}`,
  );

  const author: Author[] = await res.json();

  return NextResponse.json(author);
};
