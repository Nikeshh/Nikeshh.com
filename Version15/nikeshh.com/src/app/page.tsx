'use client'

import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react'
import { toast } from "sonner"
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    toast("New Project has been added", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "View",
        onClick: () => console.log("Undo"),
      },
    })
  }, []);

  return (
    <>
      <section className="container pt-12 md:pt-44 relative flex items-center md:justify-center flex-wrap md:flex-nowrap gap-5">
        <div className="flex justify-center relative flex-col gap-2 md:gap-4">
          <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h1 className="font-bold text-2xl md:text-[50px] md:leading-none">
              Senior Full Stack Developer and Digital Marketer
            </h1>
          </div>
          <p>Scaled to <u>perfection</u></p>
          <Button className="w-fit">
            Explore Me
          </Button>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-70px]">
          <Image
            src={'/assets/preview.png'}
            alt="banner image"
            height={1200}
            width={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
    </>
  );
}
