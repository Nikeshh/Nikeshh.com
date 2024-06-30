import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;

  try {
    const category = await db.blogCategory.findUnique({
      where: { id: parseInt(id as string) },
    });
    return NextResponse.json(category);
  } catch (error) {
    console.error('[CATEGORY]', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
