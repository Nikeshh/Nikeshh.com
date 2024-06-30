import { ModeToggle } from "@/components/global/mode-toggle";
import AdminSearch from "./_components/admin-search";
import { UserButton } from "@clerk/nextjs";
import { isAdmin } from '@/lib/admin'
import { auth } from "@clerk/nextjs/server";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Sidebar from "./_components/sidebar";
import MobileSidebar from "./_components/mobile-sidebar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const { userId } = auth()
    
    if (!userId) {
        return <div className="before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
            <Header />
            <div className="w-full h-full flex justify-center items-center mt-12">
                <p>No user id found</p>
            </div>
            <Footer />
        </div>
    }
    
    if (!isAdmin(userId)) {
        return <div className="before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
            <Header />
            <div className="w-full h-full flex justify-center items-center mt-12">
                <p>Only accessible by admin</p>
            </div>
            <Footer />
        </div>
    }

    return (
        <div className="h-full">
            <header className="z-50 flex items-center gap-4 border-b bg-muted/40 h-[64px] px-4 md:pl-[19rem] fixed inset-y-0 w-full">
                <MobileSidebar />
                <div className="w-full flex-1">
                <AdminSearch />
                </div>
                <ModeToggle />
                <UserButton />
            </header>
            <Sidebar />
            <main className="mx-4 md:pl-72 h-full pt-[80px]">
                {children}
            </main>
        </div>
    );
}