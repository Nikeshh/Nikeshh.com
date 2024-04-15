"use client"

import React, { createRef } from 'react'
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import ContactForm from '@/components/contact';
import { ContactUserFormSchema, NewsletterUserFormSchema } from '@/lib/types';
import { z } from 'zod';
import Image from 'next/image';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { User2 } from 'lucide-react';
import { createContact } from '@/lib/queries';
import { toast } from 'sonner';
import DOMPurify from "isomorphic-dompurify";

type Props = {
  params: { 
    skillId: string 
  }
}

const Page = ({ params }: Props ) => {
    
  // Contact Form
  const contactFormRef = createRef<HTMLFormElement>();
  const onContactFormSubmit = async (
    values: z.infer<typeof ContactUserFormSchema>
  ) => {
    try {
      const response = await createContact({
        ...values
      });

      toast.success("Success", {
        description: 'Successfully saved your info',
      })
      contactFormRef.current?.reset(); //@todo this is not working
    } catch (error) {
      toast.error("Failed", {
        description: 'Could not save your information',
      })
    }
  }

  console.log("👋 Hi! It looks like you are trying to explore the code. You can directly work with me on any of the listed projects. Feel free to submit your details through the contact form or directly mail me at nikeshhbaskaran01@gmail.com. Cheers 🍻");

  const skillId = params.skillId;
  console.log(skillId);

  const data = `
    <p>This is a sample content to be written</p>
    <p></p>
    <ul>
    <li>pOints</li>
    <li>Point 2</li>
    </ul>
    <p></p>
    <p>This unordered list is not visible. Not sure why</p>
  `;

  const clean = DOMPurify.sanitize(data, { USE_PROFILES: { html: true } });

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Title of the skill
            </h1>
            <p>Subtitle of the skill</p>
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
            <div dangerouslySetInnerHTML={{ __html:clean }}></div>

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
          subTitle="Let's Talk. Contact Me."
          title="Want to work on this project?"
          apiCall={onContactFormSubmit}
          contactFormRef={contactFormRef}
        />
      </div>
    </ScrollArea>
  );
}

export default Page