
"use client"

import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter()

  return (
    <>
        <Navigation />
        <div className="flex flex-col gap-2 justify-center min-h-screen items-center">
            <p>Keeping projects on track page to be built here. Thanks for checking.</p>
            <Button onClick={() => router.back()}><ArrowLeft size={20} /> Back</Button>
        </div>
        <Footer />
    </>
  );
};

export default Page;
