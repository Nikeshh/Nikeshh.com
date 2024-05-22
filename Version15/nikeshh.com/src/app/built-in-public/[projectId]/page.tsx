import { redirect } from "next/navigation";
import projects_data from "../projects_data";

export default async function Page({
  params,
}: {
  params: {
    projectId: string;
  };
}) {
  const project = projects_data.filter((a) => a.id == params.projectId)[0];

  if (!project) {
    return redirect("/");
  }

  return redirect(
    `/built-in-public/${params.projectId}/chapters/${project.chapters[0].id}`
  );
}
