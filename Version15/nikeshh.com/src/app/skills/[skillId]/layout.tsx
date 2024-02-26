import Header from "@/components/layout/dashboard/header";
import type { Metadata } from "next";
import ProjectDetail from "./_components/project-detail";
import ProjectMeta from "./_components/project-meta";
import { ProjectDetailMobile } from "./_components/project-detail-mobile";
import { ProjectMetaMobile } from "./_components/project-meta-mobile";

export const metadata: Metadata = {
  title: "Projects",
  description: "See what I have done. Open for colloborations",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Header LeftSideBar={ProjectDetailMobile} RightSideBar={ProjectMetaMobile} />
        <div className="flex h-screen overflow-hidden">
          <ProjectDetail />
          <main className="w-full pt-16">{children}</main>
          <ProjectMeta />
        </div>
    </>
  );
}