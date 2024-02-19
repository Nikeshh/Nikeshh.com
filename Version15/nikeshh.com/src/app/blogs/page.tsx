'use client'

import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Navigation from '@/components/layout/navigation';
import NotificationC from '@/components/layout/notification';
import Footer from '@/components/layout/footer';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { User2 } from 'lucide-react';
import Link from 'next/link';

const Page = () => {

    const [selectedSkill, setSelectedSkill] = useState('SAAS');

    console.log("👋 Hi! It looks like you are trying to explore the code. You can directly work with me on any of the listed projects. Feel free to submit your details through the contact form or directly mail me at nikeshhbaskaran01@gmail.com. Cheers 🍻");

    return (
        <>
            <NotificationC />
            <Navigation />
            <div className="container pt-12 md:pt-22 relative flex flex-col justify-center items-center flex-wrap md:flex-nowrap gap-5">
                <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                    <h1 className="font-bold text-2xl md:text-[50px] md:leading-none">
                        Blogs
                    </h1>
                </div>
                <div className="mb-28 w-64 md:w-full lg:max-w-5xl md:mx-auto">
                    <Carousel className="relative">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex flex-wrap md:flex-nowrap gap-6 justify-center p-6">
                                                <div className='relative'>
                                                    <Badge variant="default" className='absolute top-2 right-2'>
                                                        <a
                                                            className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                                            href="#"
                                                        >
                                                            <span className='text-white transition'>
                                                                SAAS
                                                            </span>
                                                        </a>
                                                    </Badge>
                                                    <p className="underline absolute bottom-2 right-2 text-slate-600 hover:text-primary">Featured</p>
                                                    <Image
                                                        src={'/assets/preview.png'}
                                                        alt="banner image"
                                                        height={600}
                                                        width={1200}
                                                        className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2"> 
                                                    <h2 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo dicta officiis aspernatur quam animi vero.</p>
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
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </div>
            </div>
            <div className="container flex flex-col gap-4">
                <div className='flex gap-2 items-center'>
                    <h2 className="text-xl">SAAS.</h2>
                    <Link href={'#'} className="text-xs text-slate-500 hover:text-slate-300 underline">View More</Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 w-full justify-between'>
                    {['saas', 'full stack', 'vue'].map((a) => {
                        return (
                            <div className="flex flex-col gap-6 justify-center p-6 pl-0" key={a}>
                                <div className='relative'>
                                    <Image
                                        src={'/assets/preview.png'}
                                        alt="banner image"
                                        height={600}
                                        width={1200}
                                        className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                                    />
                                </div>
                                <div className="flex flex-col gap-2"> 
                                    <h2 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo dicta officiis aspernatur quam animi vero.</p>
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
                        );
                    })}
                </div>
            </div>
            <div className="container flex flex-col gap-4 mt-20">
                <div className='flex gap-2 items-center'>
                    <h2 className="text-xl">REACTJS.</h2>
                    <Link href={'#'} className="text-xs text-slate-500 hover:text-slate-300 underline">View More</Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 w-full justify-between'>
                    {['saas', 'full stack', 'vue'].map((a) => {
                        return (
                            <div className="flex flex-col gap-6 justify-center p-6 pl-0" key={a}>
                                <div className='relative'>
                                    <Image
                                        src={'/assets/preview.png'}
                                        alt="banner image"
                                        height={600}
                                        width={1200}
                                        className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                                    />
                                </div>
                                <div className="flex flex-col gap-2"> 
                                    <h2 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo dicta officiis aspernatur quam animi vero.</p>
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
                        );
                    })}
                </div>
            </div>
            <div className="container flex flex-col gap-4 mt-20">
                <div className='flex gap-2 items-center'>
                    <h2 className="text-xl">VUEJS.</h2>
                    <Link href={'#'} className="text-xs text-slate-500 hover:text-slate-300 underline">View More</Link>
                </div>
            </div>
            <div className="container pt-12 md:pt-22 relative flex flex-col justify-center items-center flex-wrap md:flex-nowrap gap-5">
                <div className="mb-22 w-64 md:w-full lg:max-w-5xl md:mx-auto">
                    <Carousel className="relative">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex flex-wrap md:flex-nowrap gap-6 justify-center p-6">
                                                <div className='relative'>
                                                    <Badge variant="default" className='absolute top-2 right-2'>
                                                        <a
                                                            className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                                            href="#"
                                                        >
                                                            <span className='text-white transition'>
                                                                SAAS
                                                            </span>
                                                        </a>
                                                    </Badge>
                                                    <p className="underline absolute bottom-2 right-2 text-slate-600 hover:text-primary">Featured</p>
                                                    <Image
                                                        src={'/assets/preview.png'}
                                                        alt="banner image"
                                                        height={600}
                                                        width={1200}
                                                        className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2"> 
                                                    <h2 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo dicta officiis aspernatur quam animi vero.</p>
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
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Page
