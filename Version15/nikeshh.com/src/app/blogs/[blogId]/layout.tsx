import Header from "@/components/layout/dashboard/header";
import type { Metadata } from "next";
import ServiceMeta from "./_components/service-meta";
import { ServiceMetaMobile } from "./_components/service-meta-mobile";

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
        <Header RightSideBar={ServiceMetaMobile} />
        <div className="flex h-screen overflow-hidden">
          <main className="w-full pt-16">{children}</main>
          <ServiceMeta />
        </div>
    </>
  );
}