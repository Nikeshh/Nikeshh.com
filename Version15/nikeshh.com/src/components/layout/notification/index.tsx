"use client"

import CustomModal from '@/components/global/custom-modal';
import { useModal } from '@/providers/modal-provider'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog"
import { DialogTitle } from '@radix-ui/react-dialog'
import { useRouter } from 'next/navigation';

const NotificationC = () => {
    const { setOpen } = useModal();

    const [dialogOpen, setDialogOpen] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Toast Message
        toast("Website builder for agencies", {
            description: "Monday, February 19, 2023 at 9:00 AM",
            action: {
                label: "View",
                onClick: () => router.push("/projects/ab9fd4b2-20bf-4f4c-bb30-7f2b725399c1")
            }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="bg-indigo-900 text-center py-4 px-6 lg:px-4 cursor-pointer">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent className="overflow-auto md:max-h-[700px] md:h-fit h-screen bg-card">
                    <DialogHeader className="pt-8 text-left">
                        <DialogTitle className="text-2xl font-bold">Please read?</DialogTitle>
                        <DialogDescription>
                            This website is in beta version. If you find any bug or have suggestions or ready to collaborate, please reach out to me directly @ nikeshhbaskaran01@gmail.com
                        </DialogDescription>
                        <DialogFooter>
                            <ul>
                                <li><b><u>Technologies of this website:</u></b></li>
                                <li>1. Nextjs - Typescript</li>
                                <li>2. Clerk authentication</li>
                                <li>3. Prisma for ORM</li>
                                <li>4. Planet scale and MySQL for database</li>
                            </ul>
                        </DialogFooter>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none md:rounded lg:rounded-full flex lg:inline-flex" role="alert" onClick={() => router.push("/projects/ab9fd4b2-20bf-4f4c-bb30-7f2b725399c1")}>
                <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">SAAS Alert</span>
                <span className="font-semibold mr-2 text-left flex-auto">Website builder for agencies</span>
                <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
            </div>
        </div>
    );
};

export default NotificationC