import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

import { db } from '@/lib/db'
import { isAdmin } from '@/lib/admin';

export async function GET(req: NextRequest) {
  try {
    const posts = await db.blogPost.findMany({
      include: {
        categories: true,
        comments: true,
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error('[POSTS]', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const { title } = await req.json()

    if (!userId || !isAdmin(userId)) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    if (!title) {
      return new NextResponse('Title is required', { status: 400 })
    }

    const blog = await db.blogPost.create({
      data: {
        title,
        authorId: userId,
      },
    })

    return NextResponse.json(blog)
  } catch (error) {
    console.error('[COURSES]', error)
    return new NextResponse('Internal server error', { status: 500 })
  }
}