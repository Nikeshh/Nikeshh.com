import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

import { db } from '@/lib/db'

export async function GET(req: NextRequest) {
  try {
    const comments = await db.blogComment.findMany({
      include: {
        post: true,
      },
    });
    return NextResponse.json(comments);
  } catch (error) {
    console.error('[COMMENTS]', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}

export async function POST(req: NextRequest) {
    try {
      const { userId } = auth();
      const { content, postId } = await req.json();
  
      if (!userId) {
        return new NextResponse('Unauthorized', { status: 401 });
      }
  
      if (!content || !postId) {
        return new NextResponse('Content and postId are required', { status: 400 });
      }
  
      const comment = await db.blogComment.create({
        data: {
          content,
          post: {
            connect: { id: postId },
          },
          authorId: userId
        },
      });
      return NextResponse.json(comment);
    } catch (error) {
      console.error('[COMMENTS]', error);
      return new NextResponse('Internal server error', { status: 500 });
    }
  }