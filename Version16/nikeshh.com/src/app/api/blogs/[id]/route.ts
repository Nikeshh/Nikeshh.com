import { NextRequest, NextResponse } from 'next/server'

import { db } from '@/lib/db'
import { isAdmin } from '@/lib/admin';
import { auth } from '@clerk/nextjs/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;

  try {
    const post = await db.blogPost.findUnique({
      where: { id: parseInt(id as string) },
      include: {
        categories: true,
        comments: true,
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    console.error('[POST]', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { userId } = auth()
    const { id } = params
    const { categoryIds, ...values } = await req.json()

    if (!userId || !isAdmin(userId)) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    let data = {}
    if (categoryIds && categoryIds.length > 0) {
      data = {
        ...values,
        categories: {
          set: categoryIds.map((categoryId: string) => ({ id: Number.parseInt(categoryId) })),
        }
      }
    } else {
      data = {
        ...values
      }
    }
    
    const blogPost = await db.blogPost.update({
      where: {
        id: Number.parseInt(id),
      },
      data: data
    })

    return NextResponse.json(blogPost)
  } catch (error) {
    console.error('[PATCH]', error)
    return new NextResponse('Internal server error', { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { userId } = auth();
    const { id } = params;

    if (!userId || !isAdmin(userId)) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    await db.blogPost.delete({
      where: {
        id: Number.parseInt(id),
      },
    });

    return new NextResponse('Blog post deleted successfully', { status: 200 });
  } catch (error) {
    console.error('[DELETE]', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}