import { auth } from '@clerk/nextjs/server'
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { Banner } from '@/components/banner'
import { Actions } from './_components/actions'
import { IconBadge } from "@/components/icon-badge";
import { LayoutDashboard, ListChecks } from "lucide-react";
import { TitleForm } from "./_components/title-form";
import { ContentEditor } from "./_components/content-editor";
import { CategoryForm } from "./_components/category-form";

const BlogIdPage = async ({
  params,
}: {
  params: {
    blogId: string;
  };
}) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const blog = await db.blogPost.findUnique({
    where: {
      id: Number.parseInt(params.blogId),
    },
    include: {
      comments: {
        orderBy: {
          createdAt: 'desc',
        },
      },
      categories: {
        orderBy: {
          name: 'asc',
        },
      },
    },
  })


  const categories = await db.blogCategory.findMany({
    orderBy: {
      name: 'asc',
    },
  })

  if (!blog) {
    return redirect('/')
  }

  const requiredFields = [
    blog.title,
    blog.content,
    blog.categories.length > 0,
  ]

  const totalFields = requiredFields.length
  const completedFields = requiredFields.filter(Boolean).length

  const completionText = `(${completedFields}/${totalFields})`

  const isCompleted = requiredFields.every(Boolean)

  return (
    <>
        {!blog.published && (
            <Banner
                variant="warning"
                label="This blog post is unpublished. It will not be visible to readers."
            />
        )}

        <div className="p-6">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-2">
                    <h1 className="text-2xl font-medium">Blog setup</h1>

                    <span className="text-sm text-slate-700">
                    Complete all fields {completionText}
                    </span>
                </div>

                <Actions
                    blogId={blog.id}
                    disabled={!isCompleted}
                    isPublished={blog.published}
                />
            </div>
            <div className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-2">
                <div>
                    <div className="flex items-center gap-x-2">
                        <IconBadge icon={LayoutDashboard} />
                        <h2 className="text-xl">Customize your course</h2>
                    </div>

                    <TitleForm initialData={blog} blogId={blog.id} />
                    <CategoryForm
                        initialData={blog}
                        blogId={String(blog.id)}
                        options={categories.map(category => ({
                            label: category.name,
                            value: String(category.id),
                        }))}
                    />
                </div>
                <div className="space-y-6">
                    <div>
                        <div className="flex items-center gap-x-2">
                            <IconBadge icon={ListChecks} />

                            <h2 className="text-xl">Content</h2>
                        </div>

                        <ContentEditor initialData={blog} blogId={blog.id} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};

export default BlogIdPage;
