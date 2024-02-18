import Header from "@/components/layout/dashboard/header";
import type { Metadata } from "next";
import ServiceDetail from "./_components/service-detail";
import ServiceMeta from "./_components/service-meta";
import { ServiceDetailMobile } from "./_components/service-detail-mobile";
import { ServiceMetaMobile } from "./_components/service-meta-mobile";

export const metadata: Metadata = {
  title: "Services",
  description: "Let me design and scale your business",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Header LeftSideBar={ServiceDetailMobile} RightSideBar={ServiceMetaMobile} />
        <div className="flex h-screen overflow-hidden">
          <ServiceDetail />
          <main className="w-full pt-16">{children}</main>
          <ServiceMeta />
        </div>
    </>
  );
}