import Header from "@/components/layout/dashboard/header";
import Sidebar from "@/components/layout/dashboard/sidebar";
import type { Metadata } from "next";

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
        <Header />
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="w-full pt-16">{children}</main>
        </div>
    </>
  );
}