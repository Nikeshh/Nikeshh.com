import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: {
    projectId: string;
  };
}) {
  const project = {
    id: "fe015b36-fefc-432e-9fb9-d28ba67ecb58",
    userId: "user_2g43837Z7FNh7daGTwMrB3svk8s",
    title: "Nextjs Crash Course",
    description: "This course is about nextjs...",
    imageUrl:
      "https://utfs.io/f/44cb2fc9-3c81-45b4-b9ed-94601b50564b-4zkn8u.jpg",
    price: 999,
    isPublished: true,
    categoryId: "1",
    createdAt: "2024-05-15T21:04:42.632Z",
    updatedAt: "2024-05-15T21:08:05.103Z",
    chapters: [
      {
        id: "fb8b5eb9-11fc-4655-87e7-37a07bf2285c",
        title: "Introduction",
        description: "<p>This is a chapter</p>",
        videoUrl:
          "https://utfs.io/f/d2d269ef-20f7-4bd8-ba53-b173bf97fd1d-ifdqzr.mp4",
        position: 1,
        isPublished: true,
        isFree: true,
        courseId: "fe015b36-fefc-432e-9fb9-d28ba67ecb58",
        createdAt: "2024-05-15T21:06:23.912Z",
        updatedAt: "2024-05-15T21:07:57.705Z",
      },
    ],
  };

  if (!project) {
    return redirect("/");
  }

  return redirect(
    `/built-in-public/${params.projectId}/chapters/${project.chapters[0].id}`
  );
}
