'use client'

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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

const Page = () => {

    const [selectedSkill, setSelectedSkill] = useState('SAAS');

    console.log("👋 Hi! It looks like you are trying to explore the code. You can directly work with me on any of the listed projects. Feel free to submit your details through the contact form or directly mail me at nikeshhbaskaran01@gmail.com. Cheers 🍻");

    return (
        <>
            <div className="container pt-12 md:pt-22 relative flex flex-col justify-center items-center flex-wrap md:flex-nowrap gap-5">
                <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                    <h1 className="font-bold text-2xl md:text-[50px] md:leading-none">
                        Services
                    </h1>
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
                <div className="mb-48 w-full lg:max-w-5xl md:mx-auto">
                    <Carousel className="relative">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex flex-col gap-4 justify-center p-6">
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
                                                    <span className="underline">Technologies:</span>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis eveniet sequi ipsum quaerat!</p>
                                                    <Button className="w-fit">
                                                        VIEW PROJECT
                                                    </Button>
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
                {['SAAS', 'Full Stack', 'UI/UX', 'Android', 'iOS'].map((a, index) => {
                    return (
                        <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center items-center mb-32" key={index}>
                            <div className='relative'>
                                <p className='absolute text-9xl top-[-100px] left-[20%] font-bold z-[-10]'>#0{index+1}</p>
                                <Badge variant="default" className='absolute top-2 right-2'>
                                    <a
                                        className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href="#"
                                    >
                                        <span className='text-white transition'>
                                            {a}
                                        </span>
                                    </a>
                                </Badge>
                                <p className="underline absolute bottom-2 right-2 text-slate-600 hover:text-primary">Featured</p>
                                <Image
                                    src={'/assets/preview.png'}
                                    alt="banner image"
                                    height={600}
                                    width={600}
                                    className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                                />
                            </div>
                            <div className="flex flex-col gap-2"> 
                                <h2 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo dicta officiis aspernatur quam animi vero.</p>
                                <span className="underline">Technologies:</span>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis eveniet sequi ipsum quaerat!</p>
                                <Button className="w-fit">
                                    VIEW PROJECT
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
    }

export default Page
