import { NextRequest, NextResponse } from 'next/server'

import { db } from '@/lib/db'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;

  try {
    const comment = await db.blogComment.findUnique({
      where: { id: parseInt(id as string) },
      include: {
        post: true,
      },
    });
    return NextResponse.json(comment);
  } catch (error) {
    console.error('[COMMENT]', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
