"use client"

import NewsletterForm from "@/components/newsletter";
import { Badge } from "@/components/ui/badge";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { NewsletterUserFormSchema } from "@/lib/types";
import { createRef, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { onCreateNewPageInDatabase } from "@/app/_connections/notion-connection";

const Newsletters = () => {
    // Newsletter
    const [newsletterCommand, setNewsletterCommand] = useState('SAAS');
    const newsletterRef = createRef<HTMLFormElement>();
    const onNewsletterFormSubmit = async (
        values: z.infer<typeof NewsletterUserFormSchema>
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
                                "name": "Newsletter",
                                "color": "yellow"
                            },
                            {
                                "name": newsletterCommand,
                                "color": "blue"
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

            newsletterRef.current?.reset(); //@todo this is not working
        } catch (error) {
            toast.error("Failed", {
                description: 'Could not save your information',
            })
        }
    }

    return (
        <section id="newsletters" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
            <p>NEWSLETTER</p>
            <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
                    Once a week, look out for valuable content in email
                </h2>
            </div>
            <div className='flex justify-center mt-2'>
                <Badge variant="outline" key="Service">
                    <div
                        className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end cursor-pointer"
                    >
                        <span className='text-gray-400 transition group-hover:text-gray-700/75'>
                            Trust me, I wont spam
                        </span>
                    </div>
                </Badge>
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 pt-9">
                <Command>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Technology">
                            <CommandItem onSelect={(value) => setNewsletterCommand(value)} className='cursor-pointer'>SAAS</CommandItem>
                            <CommandItem onSelect={(value) => setNewsletterCommand(value)} className='cursor-pointer'>Web Design and Development</CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Business">
                            <CommandItem onSelect={(value) => setNewsletterCommand(value)} className='cursor-pointer'>Marketing</CommandItem>
                            <CommandItem onSelect={(value) => setNewsletterCommand(value)} className='cursor-pointer'>Lead Generation</CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
                <NewsletterForm
                    subTitle={newsletterCommand}
                    title="Subscribe to newsletter ✉️"
                    apiCall={onNewsletterFormSubmit}
                    newsletterRef={newsletterRef}
                />
            </div>
        </section>
    );
}

export default Newsletters