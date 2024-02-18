"use client"

import React from 'react'
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import ContactForm from '@/components/contact';
import { NewsletterUserFormSchema } from '@/lib/types';
import { z } from 'zod';
import Image from 'next/image';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { User2 } from 'lucide-react';

type Props = {
  params: { 
    projectId: string 
  }
}

const Page = ({ params }: Props ) => {
    
  const onContactFormSubmit = async (
    values: z.infer<typeof NewsletterUserFormSchema>
  ) => {
  }

  const projectId = params.projectId;
  console.log(projectId);

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Service Name
            </h1>
            <p>Subtitle of the service</p>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Button>Contact</Button>
          </div>
        </div>
        <div className="space-x-2 space-y-3">
          <Image
            src={'/assets/preview.png'}
            alt="banner image"
            height={1200}
            width={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <div className="flex flex-col gap-2">
            <h2 className="mt-4 backdrop:text-xl font-bold tracking-tight">Subheading</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora dolore itaque qui doloremque sint libero rerum, corrupti odit ipsum blanditiis nobis possimus! Voluptatem possimus, quasi aliquid veniam distinctio atque quisquam.</p>
            <h2 className="mt-4 text-xl font-bold tracking-tight">Subheading</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora dolore itaque qui doloremque sint libero rerum, corrupti odit ipsum blanditiis nobis possimus! Voluptatem possimus, quasi aliquid veniam distinctio atque quisquam.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora dolore itaque qui doloremque sint libero rerum, corrupti odit ipsum blanditiis nobis possimus! Voluptatem possimus, quasi aliquid veniam distinctio atque quisquam.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora dolore itaque qui doloremque sint libero rerum, corrupti odit ipsum blanditiis nobis possimus! Voluptatem possimus, quasi aliquid veniam distinctio atque quisquam.</p>
          </div>
          <div className="flex flex-col gap-2 py-9">
            <p className="text-sm">Article written by</p>
            <div className="flex flex-wrap justify-between gap-y-3">
              <div className='flex flex-wrap gap-3 items-center'>
                <Avatar className="w-8 h-8">
                  <AvatarImage alt="user" />
                  <AvatarFallback className="bg-primary text-sm text-white">
                    <User2 size={14} />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p>Nikeshh Vijayabaskaran</p>
                  <span className="text-xs">Author</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-slate-600">72 commits</p>
                <p className="text-sm text-slate-600">last 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 px-4 py-4 w-full flex justify-center">
        <ContactForm
          subTitle="Let's Talk"
          title="Contact Me"
          apiCall={onContactFormSubmit}
        />
      </div>
    </ScrollArea>
  );
}

export default Page