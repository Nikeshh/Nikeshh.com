"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { User2 } from 'lucide-react';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import { groupByKey } from "@/lib/utils";
import { Blogs } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = {
    blogs: {
        id: string;
        title: string;
        subtitle: string;
        imageUrl: string;
        category: string;
    }[]
}

const Blog = ({ blogs } : Props) => {

    const blogTags = blogs.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
    const groupedBlogs = groupByKey(blogs.filter(item => item.category == blogTags[0]), 'category');

    const groupedVueJSBlogs = groupByKey(blogs.filter(item => item.category.toLowerCase() == 'vuejs'), 'category');

    const router = useRouter();

    if (blogs && blogs.length > 0) {
        return (
            <>
                <div className="container pt-12 md:pt-22 relative flex flex-col justify-center items-center flex-wrap md:flex-nowrap gap-5">
                    <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                        <h1 className="font-bold text-2xl md:text-[50px] md:leading-none">
                            Blogs
                        </h1>
                    </div>
                    <div className="mb-28 w-64 md:w-full lg:max-w-5xl md:mx-auto">
                        <Carousel className="relative">
                            <CarouselContent>
                                {blogs.map((blog, index) => {
                                    return (
                                        <CarouselItem key={index}>
                                            <div className="p-1">
                                                <Card>
                                                    <CardContent className="flex flex-wrap md:flex-nowrap gap-6 justify-center p-6">
                                                        <div className='relative'>
                                                            <Badge variant="default" className='absolute top-2 right-2'>
                                                                <Link
                                                                    className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                                                    href="#"
                                                                >
                                                                    <span className='text-white transition'>
                                                                        {blog.category}
                                                                    </span>
                                                                </Link>
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
                                                            <h2 className="text-xl">{blog.title}</h2>
                                                            <p>{blog.subtitle}</p>
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
                                                                        <p className="text-sm text-slate-600">72 articles</p>
                                                                        <p className="text-sm text-slate-600">last 30 days</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <Button className="w-fit" onClick={() => router.push(`/blogs/${blog.id}`)}>
                                                                    VIEW
                                                                </Button>
                                                            </div>
                                                        </div>

                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    );
                                })}
                            </CarouselContent>
                            <CarouselPrevious/>
                            <CarouselNext/>
                        </Carousel>
                    </div>
                </div>
                {Object.keys(groupedBlogs).map((type, index) => {
                    const blogs = groupedBlogs[type] as Blogs[];
                    return (
                        <div className="container flex flex-col gap-4" key={index}>
                            <div className='flex gap-2 items-center'>
                                <h2 className="text-xl uppercase">{type}.</h2>
                                <Link href={'#'} className="text-xs text-slate-500 hover:text-slate-300 underline">View More</Link>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-3 w-full justify-between'>
                                {blogs.map((blog, index) => {
                                    return (
                                        <div className="flex flex-col gap-6 justify-center p-6 pl-0" key={index}>
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
                                                <h2 className="text-xl">{blog.title}</h2>
                                                <p>{blog.subtitle}</p>
                                                <div>
                                                    <Button className="w-fit" onClick={() => router.push(`/blogs/${blog.id}`)}>
                                                        VIEW
                                                    </Button>
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
                                                            <p className="text-sm text-slate-600">72 articles</p>
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
                    );
                })}
                {Object.keys(groupedVueJSBlogs).map((type, index) => {
                    const blogs = groupedVueJSBlogs[type] as Blogs[];
                    return (
                        <>
                            <div className="container flex flex-col gap-4 mt-20">
                                <div className='flex gap-2 items-center'>
                                    <h2 className="text-xl">{type}.</h2>
                                    <Link href={'#'} className="text-xs text-slate-500 hover:text-slate-300 underline">View More</Link>
                                </div>
                            </div>
                            <div className="container pt-12 md:pt-22 relative flex flex-col justify-center items-center flex-wrap md:flex-nowrap gap-5">
                                <div className="mb-22 w-64 md:w-full lg:max-w-5xl md:mx-auto">
                                    <Carousel className="relative">
                                        <CarouselContent>
                                            {blogs.map((blog, index) => {
                                                return (
                                                    <CarouselItem key={index}>
                                                        <div className="p-1">
                                                            <Card>
                                                                <CardContent className="flex flex-wrap md:flex-nowrap gap-6 justify-center p-6">
                                                                    <div className='relative'>
                                                                        <Badge variant="default" className='absolute top-2 right-2'>
                                                                            <Link
                                                                                className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                                                                href="#"
                                                                            >
                                                                                <span className='text-white transition'>
                                                                                    {type}
                                                                                </span>
                                                                            </Link>
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
                                                                        <h2 className="text-xl">{blog.title}</h2>
                                                                        <p>{blog.subtitle}</p>
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
                                                                                    <p className="text-sm text-slate-600">72 articles</p>
                                                                                    <p className="text-sm text-slate-600">last 30 days</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <Button className="w-fit" onClick={() => router.push(`/blogs/${blog.id}`)}>
                                                                                VIEW
                                                                            </Button>
                                                                        </div>
                                                                    </div>
                                                                </CardContent>
                                                            </Card>
                                                        </div>
                                                    </CarouselItem>
                                                );
                                            })}
                                        </CarouselContent>
                                        <CarouselPrevious/>
                                        <CarouselNext/>
                                    </Carousel>
                                </div>
                            </div>
                        </>
                    );
                })}
            </>
        );
    } else {
        return <div className="flex justify-center mt-16">This guy messed up something! No data found in database</div>;
    }
}

export default Blog;