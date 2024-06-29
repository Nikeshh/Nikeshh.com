import { ProjectSidebar } from "./_components/project-sidebar";
import { CourseNavbar } from "./_components/course-navbar";
import projects_data from "../projects_data";

export default async function ProjectLayout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: { projectId: string };
}) {
  const project = projects_data.filter((a) => a.id == params.projectId)[0];

  return (
    <>
      <div className="h-full">
        <CourseNavbar progressCount={0} course={project} />
        <div className="fixed inset-y-0 z-50 flex-col hidden md:flex mt-44 ml-16 w-80">
          <ProjectSidebar course={project} progressCount={project.progressCount} />
        </div>
        <main className="h-full md:pl-96 xl:pl-80 pt-[80px]">{children}</main>
      </div>
    </>
  );
}
