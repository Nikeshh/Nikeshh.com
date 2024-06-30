import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

import { db } from '@/lib/db'
import { isAdmin } from '@/lib/admin'

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { userId } = auth()
    const { id } = params

    if (!userId || !isAdmin(userId)) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const blog = await db.blogPost.findUnique({
      where: {
        id: Number.parseInt(id),
      },
      include: {
        categories: {
          orderBy: {
            name: 'asc',
          },
        },
      }
    })

    if (!id) {
      return new NextResponse('Not found', { status: 404 })
    }

    if (!blog?.title || !blog?.content || !(blog?.categories.length > 0)) {
      return new NextResponse('Missing required fields', { status: 401 })
    }

    const publishedBlogPost = await db.blogPost.update({
      where: {
        id: Number.parseInt(id),
      },
      data: {
        published: true,
      },
    })

    return NextResponse.json(publishedBlogPost)
  } catch (error) {
    console.error('[BLOG_POST_ID_PUBLISH]', error)
    return new NextResponse('Internal server error', { status: 500 })
  }
}
