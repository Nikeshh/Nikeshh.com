import axios from 'axios'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import { columns } from './_components/columns'
import { DataTable } from './_components/data-table'
import { BlogPost } from '@prisma/client'

export type BlogPostWithAuthorDetails  = BlogPost & {
  authorName: string;
}

const BlogsPage = async () => {
  const { userId } = auth()

  if (!userId) return redirect('/')

  const blogs = await db.blogPost.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  const blogsWithAuthorDetails: BlogPostWithAuthorDetails[] = [];
  for (const blog of blogs) {
    // Use the below code if there are multiple authors in the website. If not, it is overkill because it will fetch the author name from clerk api for every blog post
    // const firstName = (await clerkClient.users.getUser(blog.authorId)).firstName ?? "";
    const firstName = "Nikeshh";
    blogsWithAuthorDetails.push({
      ...blog,
      authorName: firstName,
    })
  }

  return (
    <div className="p-6">
      <DataTable columns={columns} data={blogsWithAuthorDetails} />
    </div>
  )
}

export default BlogsPage