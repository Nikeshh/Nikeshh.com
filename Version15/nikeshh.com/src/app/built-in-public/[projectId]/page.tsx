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
    chapters: [
      {
        id: "fb8b5eb9-11fc-4655-87e7-37a07bf2285c",
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
