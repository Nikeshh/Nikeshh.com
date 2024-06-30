import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

import { db } from '@/lib/db'

export async function GET(req: NextRequest) {
  try {
    const categories = await db.blogCategory.findMany();
    return NextResponse.json(categories);
  } catch (error) {
    console.error('[CATEGORIES]', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}

export async function POST(req: NextRequest) {
    try {
      const { userId } = auth();
      const { name } = await req.json();
  
      if (!userId) {
        return new NextResponse('Unauthorized', { status: 401 });
      }
  
      if (!name) {
        return new NextResponse('Name is required', { status: 400 });
      }
  
      const category = await db.blogCategory.create({
        data: {
          name,
        },
      });
      return NextResponse.json(category);
    } catch (error) {
      console.error('[CATEGORIES]', error);
      return new NextResponse('Internal server error', { status: 500 });
    }
  }