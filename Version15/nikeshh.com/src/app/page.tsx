'use client'

import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react'
import { toast } from "sonner"
import Image from 'next/image';
import { CalendarDays, Eye, User2 } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import NewsletterForm from '@/components/newsletter';
import { z } from 'zod';
import { NewsletterUserFormSchema } from '@/lib/types';
import ContactForm from '@/components/contact';
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import NotificationC from "@/components/layout/notification";

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

  const [selectedSkill, setSelectedSkill] = useState('SAAS');

  const notifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ]

  const onNewsletterFormSubmit = async (
    values: z.infer<typeof NewsletterUserFormSchema>
  ) => {
  }

  const onContactFormSubmit = async (
    values: z.infer<typeof NewsletterUserFormSchema>
  ) => {
  }

  return (
    <>
      <NotificationC />
      <Navigation />
      <section className="container pt-12 md:pt-44 relative flex items-center md:justify-center flex-wrap md:flex-nowrap gap-5">
        <div className="flex justify-center relative flex-col gap-2 md:gap-4">
          <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h1 className="font-bold text-2xl md:text-[50px] md:leading-none">
              Senior Full Stack Developer and Digital Marketer
            </h1>
          </div>
          <p className="text-[16px] md:text-2xl">
            Scaling to
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="text-[16px] md:text-2xl pl-1"><u>@perfection</u></Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/vercel.png" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@nextjs</h4>
                    <p className="text-sm">
                      The React Framework – created and maintained by @vercel.
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </p>
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
      <section className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
        <p>WORKED WITH</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
              Leading Brands Across The Globe
            </h2>
          </div>
        <div className='flex flex-wrap gap-2 md:gap-9 mt-9 justify-center'>
          <Image
            src={'/assets/preview.png'}
            alt="banner image"
            height={120}
            width={120}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <Image
            src={'/assets/preview.png'}
            alt="banner image"
            height={120}
            width={120}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <Image
            src={'/assets/preview.png'}
            alt="banner image"
            height={120}
            width={120}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <Image
            src={'/assets/preview.png'}
            alt="banner image"
            height={120}
            width={120}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <Image
            src={'/assets/preview.png'}
            alt="banner image"
            height={120}
            width={120}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
        </div>
      </section>
      <section className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
        <p>TO MENTION</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
            SKILLS, CERTIFICATIONS, AWARDS & EXPERIENCES
          </h2>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {['SAAS', 'Full Stack', 'UI/UX', 'Android', 'iOS'].map((a) => {
            return (
              <Badge variant={selectedSkill == a ? 'default' : 'outline'} key={a}>
                <a
                    className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                >
                    <span className={selectedSkill == a ? 'text-white transition' : 'text-gray-700 transition group-hover:text-gray-700/75'}>
                        {a}
                    </span>
                </a>
            </Badge>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {['SAAS', 'Full Stack', 'UI/UX', 'Android', 'iOS'].map((a) => {
            return (
              <Card className={cn("w-[380px]")} key={a}>
                <CardHeader>
                  <CardTitle>{a}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <Image
                    src={'/assets/preview.png'}
                    alt="banner image"
                    height={120}
                    width={120}
                    className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                  />
                  <div>
                    {notifications.map((notification, index) => (
                      <div
                        key={index}
                        className="mb-2 grid grid-cols-[25px_1fr] items-start pb-2 last:mb-0 last:pb-0"
                      >
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {notification.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    <Eye className="mr-2 h-4 w-4" /> Explore
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className='mt-4 md:mt-6 w-full text-center'>
         <Link href={'#'} className="hover:text-blue-600 underline">explore more.</Link>
        </div>
      </section>
      <section className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
        <p>BUILT FOR SCALING & VALUE</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
            SERVICES
          </h2>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {['SAAS', 'Full Stack', 'UI/UX', 'Android', 'iOS'].map((a) => {
            return (
              <Badge variant={selectedSkill == a ? 'default' : 'outline'} key={a}>
                <a
                    className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                >
                    <span className={selectedSkill == a ? 'text-white transition' : 'text-gray-700 transition group-hover:text-gray-700/75'}>
                        {a}
                    </span>
                </a>
            </Badge>
            );
          })}
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 pt-9">
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>Profile</CommandItem>
                <CommandItem>Billing</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
          <Card className="max-w-[450px]" key="service">
            <CardHeader>
              <CardTitle>Service</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam, sapiente necessitatibus magnam ad totam esse. Officia natus aperiam itaque vitae quia, eligendi illo sed dolorum impedit quaerat, sapiente atque!</p>
            </CardContent>
            <CardFooter>
              <Link href={'#'} className="hover:text-blue-600 underline">explore more.</Link>
            </CardFooter>
          </Card>
        </div>
        <div className='mt-4 md:mt-6 w-full text-center'>
         <Link href={'#'} className="hover:text-blue-600 underline">view more.</Link>
        </div>
      </section>
      <section className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
        <p>BUILT FOR IMPACT</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
            PROJECTS
          </h2>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {['SAAS', 'Full Stack', 'UI/UX', 'Android', 'iOS'].map((a) => {
            return (
              <Badge variant={selectedSkill == a ? 'default' : 'outline'} key={a}>
                <a
                    className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                >
                    <span className={selectedSkill == a ? 'text-white transition' : 'text-gray-700 transition group-hover:text-gray-700/75'}>
                        {a}
                    </span>
                </a>
            </Badge>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-9">
          {['SAAS', 'Full Stack', 'UI/UX', 'Android', 'iOS'].map((a) => {
            return (
              <Card key="service">
                <CardHeader>
                  <CardTitle>Service</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam, sapiente necessitatibus magnam ad totam esse. Officia natus aperiam itaque vitae quia, eligendi illo sed dolorum impedit quaerat, sapiente atque!</p>
                </CardContent>
                <CardFooter>
                  <Link href={'#'} className="hover:text-blue-600 underline">explore more.</Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className='mt-4 md:mt-6 w-full text-center'>
         <Link href={'#'} className="hover:text-blue-600 underline">view more.</Link>
        </div>
      </section>
      <section className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
        <p>TESTIMONIALS</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
            SOME TOOK THE SHOT
          </h2>
        </div>
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8 w-full">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
              </blockquote>
              <figcaption className="mt-10">
                <img className="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold">Judith Black</div>
                  <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="text-gray-600">CEO of Workcation</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className='mt-4 md:mt-6 w-full text-center'>
            <Link href={'#'} className="hover:text-blue-600 underline">view next.</Link>
          </div>
        </div>
      </section>
      <section className="container pt-12 md:pt-16 relative flex flex-col items-center justify-center">
        <p>NEWSLETTER</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
            Once a week, look out for valuable content in email
          </h2>
        </div>
        <div className='flex justify-center mt-2'>
          <Badge variant="outline" key="Service">
            <a
                className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="#"
            >
                <span className='text-gray-700 transition group-hover:text-gray-700/75'>
                  Trust me, I wont spam
                </span>
            </a>
          </Badge>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 pt-9">
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>Profile</CommandItem>
                <CommandItem>Billing</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
          <NewsletterForm
            subTitle="Technology"
            title="Subscribe to newsletter ✉️"
            apiCall={onNewsletterFormSubmit}
          />
        </div>
      </section>
      <section className="container pt-12 md:pt-16 relative flex flex-col items-center justify-center">
        <p>BLOG</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
            TO LEARN
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-4 gap-4'>
          <Card key="blog">
            <CardHeader>
              <Image
                src={'/assets/preview.png'}
                alt="banner image"
                height={120}
                width={120}
                className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
              />
            </CardHeader>
            <CardContent className="flex flex-col justify-center gap-4">
              <CardTitle>This is the blog title</CardTitle>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eaque quas hic eius mollitia incidunt voluptatem officia magnam, perferendis ab voluptate fugit, perspiciatis nobis deserunt? Itaque, sit quod. Voluptate, perspiciatis.</p>
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
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                <Eye className="mr-2 h-4 w-4" /> View
              </Button>
            </CardFooter>
          </Card>
          <Card key="blog">
            <CardHeader>
              <Image
                src={'/assets/preview.png'}
                alt="banner image"
                height={120}
                width={120}
                className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
              />
            </CardHeader>
            <CardContent className="flex flex-col justify-center gap-4">
              <CardTitle>This is the blog title</CardTitle>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eaque quas hic eius mollitia incidunt voluptatem officia magnam, perferendis ab voluptate fugit, perspiciatis nobis deserunt? Itaque, sit quod. Voluptate, perspiciatis.</p>
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
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                <Eye className="mr-2 h-4 w-4" /> View
              </Button>
            </CardFooter>
          </Card>
          <Card key="blog">
            <CardHeader>
              <Image
                src={'/assets/preview.png'}
                alt="banner image"
                height={120}
                width={120}
                className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
              />
            </CardHeader>
            <CardContent className="flex flex-col justify-center gap-4">
              <CardTitle>This is the blog title</CardTitle>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eaque quas hic eius mollitia incidunt voluptatem officia magnam, perferendis ab voluptate fugit, perspiciatis nobis deserunt? Itaque, sit quod. Voluptate, perspiciatis.</p>
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
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                <Eye className="mr-2 h-4 w-4" /> View
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className='mt-4 md:mt-6 w-full text-center'>
          <Link href={'#'} className="hover:text-blue-600 underline">learn more.</Link>
        </div>
      </section>
      <section className="container pt-12 pb-12 md:pt-16 md:pb-16 relative flex gap-4 flex-wrap md:flex-nowrap items-center justify-center">
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
      </section>
      <Footer />
    </>
  );
}