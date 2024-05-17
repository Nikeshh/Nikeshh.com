"use client"

import ContactForm from '@/components/contact'
import Navigation from '@/components/layout/navigation';
import NotificationC from '@/components/layout/notification';
import Footer from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge'
import { ContactUserFormSchema, NewsletterUserFormSchema } from '@/lib/types'
import Image from 'next/image'
import React, { createRef } from 'react'
import { z } from 'zod'
import Link from 'next/link';
import { toast } from 'sonner';
import { onCreateNewPageInDatabase } from "@/app/_connections/notion-connection";

const Page = () => {
    const contactFormRef = createRef<HTMLFormElement>();
    const onContactFormSubmit = async (
      values: z.infer<typeof ContactUserFormSchema>
    ) => {
      try {
        const notionResponse = await onCreateNewPageInDatabase(
            "5b0b7647b75b419bbe54f88bf4b34c15",
            {
                "Name": {
                    "title": [
                        {
                            "text": {
                                "content": values.name
                            }
                        }
                    ]
                },
                "Email": {
                    "email": values.email
                },
                "Tags": {
                    "type": "multi_select",
                    "multi_select": [
                        {
                          "name": "Nikeshh.com",
                          "color": "gray"
                        },
                        {
                            "name": "Contact",
                            "color": "green"
                        }
                    ]
                },
            }
        )
  
        if (notionResponse) {
            toast.success("Success", {
                description: 'Successfully saved your info',
            });
        } else {
            toast.success("Failed", {
                description: 'Could not save your information',
            });
        }
        
        contactFormRef.current?.reset(); //@todo this is not working
      } catch (error) {
        toast.error("Failed", {
          description: 'Could not save your information',
        })
      }
    }

    console.log("👋 Hi! It looks like you are trying to explore the code. You can directly work with me on any of the listed projects. Feel free to submit your details through the contact form or directly mail me at nikeshhbaskaran01@gmail.com. Cheers 🍻");

    return (
        <>
            {/*<NotificationC />*/}
            <Navigation />
            <div className="container pt-12 md:pt-22 relative flex flex-col justify-center items-center flex-wrap md:flex-nowrap gap-5">
                <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                    <h1 className="font-bold text-2xl md:text-[50px] md:leading-none">
                        Contact Me
                    </h1>
                </div>
                <div className="container pt-12 pb-12 md:pt-16 md:pb-16 relative flex gap-4 flex-wrap md:flex-nowrap items-center justify-center">
                    <div className="flex flex-col justify-center items-center gap-12">
                        <div className="hidden md:flex justify-center items-center relative">
                            {/*<div className="bottom-0 top-[2%] bg-gradient-to-b dark:from-background left-0 right-0 absolute z-10"></div>*/}
                            <Image
                                priority={false}
                                src={'/assets/myphoto.png'}
                                alt="contact image"
                                height={300}
                                width={300}
                                className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                            />
                            <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
                        </div>
                        <Badge variant="secondary">
                            <Link
                                className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                href="#"
                            >
                            <span className="transition group-hover:text-gray-700/75">
                                Available to work
                            </span>
                            <span className="relative flex h-2 w-2">
                                <span
                                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
                                ></span>
                                <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
                            </span>
                            </Link>
                        </Badge>
                    </div>
                    <ContactForm
                        subTitle="Lets Talk"
                        title="Got a opportunity or project? Or just say Hi 👋"
                        apiCall={onContactFormSubmit} 
                        contactFormRef={contactFormRef}                   
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Page
