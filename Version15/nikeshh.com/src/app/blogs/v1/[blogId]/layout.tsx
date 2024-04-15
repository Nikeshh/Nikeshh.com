import Header from "@/components/layout/dashboard/header";
import type { Metadata } from "next";
import BlogMeta from "./_components/blog-meta";
import { BlogMetaMobile } from "./_components/blog-meta-mobile";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Learn more on the content",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Header RightSideBar={BlogMetaMobile} />
        <div className="flex h-screen overflow-hidden">
          <main className="w-full pt-16">{children}</main>
          <BlogMeta />
        </div>
    </>
  );
}