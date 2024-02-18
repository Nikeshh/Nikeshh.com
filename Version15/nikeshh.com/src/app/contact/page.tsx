"use client"

import ContactForm from '@/components/contact'
import { Badge } from '@/components/ui/badge'
import { NewsletterUserFormSchema } from '@/lib/types'
import Image from 'next/image'
import React from 'react'
import { z } from 'zod'

const Page = () => {
    const onContactFormSubmit = async (
        values: z.infer<typeof NewsletterUserFormSchema>
    ) => {
    }

    return (
        <>
            <div className="container pt-12 md:pt-22 relative flex flex-col justify-center items-center flex-wrap md:flex-nowrap gap-5">
                <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                    <h1 className="font-bold text-2xl md:text-[50px] md:leading-none">
                        Contact Me
                    </h1>
                </div>
                <div className="container pt-12 pb-12 md:pt-16 md:pb-16 relative flex gap-4 flex-wrap md:flex-nowrap items-center justify-center">
                    <div className="flex flex-col justify-center items-center gap-12">
                        <div className="hidden md:flex justify-center items-center relative">
                            <Image
                                src={'/assets/preview.png'}
                                alt="banner image"
                                height={600}
                                width={600}
                                className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                            />
                            <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
                        </div>
                        <Badge variant="secondary">
                            <a
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
                            </a>
                        </Badge>
                    </div>
                    <ContactForm
                        subTitle="Lets Talk"
                        title="Got a opportunity or project? Or just say Hi 👋"
                        apiCall={onContactFormSubmit}
                    />
                </div>
            </div>
        </>
    )
}

export default Page
