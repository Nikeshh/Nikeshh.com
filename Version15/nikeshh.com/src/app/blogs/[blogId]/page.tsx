"use client"

import React from 'react'
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from 'next/image';
import { ThumbsDown, ThumbsUp } from 'lucide-react';

type Props = {
  params: { 
    blogId: string 
  }
}

const Page = ({ params }: Props ) => {

  const blogId = params.blogId;
  console.log(blogId);
  
  console.log("👋 Hi! It looks like you are trying to explore the code. You can directly work with me on any of the listed projects. Feel free to submit your details through the contact form or directly mail me at nikeshhbaskaran01@gmail.com. Cheers 🍻");

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex flex-wrap items-center justify-between mt-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, sequi.
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" className='flex gap-2'>
              <ThumbsUp />
              454 likes
            </Button>
            <Button variant="outline" className='flex gap-2'>
              <ThumbsDown />
              12 dislikes
            </Button>
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
        </div>
      </div>
    </ScrollArea>
  );
}

export default Page