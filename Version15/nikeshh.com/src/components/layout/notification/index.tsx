"use client"

import CustomModal from '@/components/global/custom-modal';
import { useModal } from '@/providers/modal-provider'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Copy } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const NotificationC = () => {
    const { setOpen } = useModal();

    const [dialogOpen, setDialogOpen] = useState(true);

    useEffect(() => {
        // Toast Message
        toast("Website builder for agencies", {
            description: "Monday, February 19, 2023 at 9:00 AM",
            action: {
            label: "View",
            onClick: () => {
                setOpen(
                    <CustomModal
                        title="⚠️ Under Construction"
                        subheading="Should be available in 2-3 days"
                    >
                        <p>You can track the progress or contribute @<Link href="https://github.com/Nikeshh/Nikeshh.com/tree/main/Version15/nikeshh.com" className="underline cursor-pointer">Github</Link></p>
                    </CustomModal>
                )
            },
            },
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="bg-indigo-900 text-center py-4 px-6 lg:px-4 cursor-pointer">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Please read?</DialogTitle>
                        <DialogDescription>
                            This website is in beta version. If you find any bug or have suggestions or ready to collaborate, please reach out to me directly @ nikeshhbaskaran01@gmail.com
                            <div className="mt-2">
                                <b><u>Technologies of this website:</u></b>
                                <ul>
                                    <li>1. Nextjs - Typescript</li>
                                    <li>2. Clerk authentication</li>
                                    <li>3. Prisma for ORM</li>
                                    <li>4. Planet scale and MySQL for database</li>
                                </ul>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none md:rounded lg:rounded-full flex lg:inline-flex" role="alert" onClick={() => {
                setOpen(
                    <CustomModal
                        title="⚠️ Under Construction"
                        subheading="Should be available in 2-3 days"
                    >
                        <p>You can track the progress or contribute @<Link href="https://github.com/Nikeshh/Nikeshh.com/tree/main/Version15/nikeshh.com" className="underline">Github</Link></p>
                    </CustomModal>
                )
            }}>
                <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">SAAS Alert</span>
                <span className="font-semibold mr-2 text-left flex-auto">Website builder for agencies</span>
                <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
            </div>
        </div>
    );
};

export default NotificationC