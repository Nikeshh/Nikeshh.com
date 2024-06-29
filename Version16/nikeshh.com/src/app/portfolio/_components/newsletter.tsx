"use client"

import Link from "next/link";
import { NewsletterUserFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { createRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Loading from '@/components/global/loading'
import { onCreateNewPageInDatabase } from "../../_connections/notion-connection";

const Newsletter = () => {
    // Newsletter
    const newsletterCommand = 'General';
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

    const form = useForm<z.infer<typeof NewsletterUserFormSchema>>({
        mode: 'onChange',
        resolver: zodResolver(NewsletterUserFormSchema),
        defaultValues: {
            name: '',
            email: '',
        },
    })
    const isLoading = form.formState.isLoading

    return (
        <section id="newsletter" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
            <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md sm:text-center">
                    <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Sign up for my newsletter</h2>
                    <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the AI, Tech, Automations, Roadmap progress and announcements, feel free to sign up with your email.</p>
                    <Form {...form}>
                        <form ref={newsletterRef} className="mt-4" onSubmit={form.handleSubmit(onNewsletterFormSubmit)}>
                            <div className="items-center mx-auto mb-3 max-w-screen-sm sm:flex sm:space-y-0 gap-2">
                                <div className="relative w-full">
                                <FormField
                                    disabled={isLoading}
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <>
                                            <FormItem className="space-y-0">
                                                <FormLabel className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</FormLabel>
                                                <FormControl>
                                                    <div className="flex items-center py-4">     
                                                        <Input
                                                            type="text"
                                                            className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                            placeholder="Type your name"
                                                            {...field}
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage className="absolute bottom-[-10px]" />
                                            </FormItem>
                                        </>
                                        )}
                                    />
                                </div>
                                <div className="relative w-full">
                                    <FormField
                                        disabled={isLoading}
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <>
                                                <FormItem className="space-y-0">
                                                    <FormLabel className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</FormLabel>
                                                    <FormControl>
                                                        <div className="flex items-center py-4">
                                                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                                            </div>        
                                                            <Input
                                                                type="email"
                                                                className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                                placeholder="Type your email"
                                                                {...field}
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage className="absolute bottom-[-10px]" />
                                                </FormItem>
                                            </>
                                        )}
                                    />
                                </div>
                                <div>
                                    <Button type="submit" disabled={isLoading} className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg focus:ring-4 bg-blue-700 hover:bg-blue-600">{form.formState.isSubmitting ? <Loading /> : 'Subscribe'}</Button>
                                </div>
                            </div>
                            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <Link href="/privacy-policy" className="font-medium text-blue-700 hover:text-blue-600 hover:underline">Read our Privacy Policy</Link>.</div>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;