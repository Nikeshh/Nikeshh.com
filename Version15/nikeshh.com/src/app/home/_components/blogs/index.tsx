"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import CustomModal from '@/components/global/custom-modal';
import { useModal } from '@/providers/modal-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Eye, User2 } from 'lucide-react';
import Link from 'next/link';

type Props = {
    blogs: {
        id: string;
        title: string;
        subtitle: string;
        imageUrl: string;
    }[]
}

const Blogs = ({ blogs } : Props) => {
    
    const { setOpen } = useModal();

    if (blogs && blogs.length > 0) {
        return (
            <section id="blogs" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
                <p>BLOG</p>
                <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                    <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
                        TO LEARN
                    </h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-4 gap-4'>
                    {blogs.map((blog) => {
                        return (
                            <Card key={blog.id}>
                                <CardHeader>
                                    <Image
                                        src={blog.imageUrl}
                                        alt="blog image"
                                        height={120}
                                        width={120}
                                        className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                                    />
                                </CardHeader>
                                <CardContent className="flex flex-col justify-center gap-4">
                                    <CardTitle>{blog.title}</CardTitle>
                                    <p>{blog.subtitle}</p>
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
                                    <Button className="w-full" variant="outline" onClick={() => {
                                        setOpen(
                                        <CustomModal
                                            title="⚠️ Under Construction"
                                            subheading="Should be available in 2-3 days"
                                        >
                                            <p>You can track the progress or contribute @<Link href="https://github.com/Nikeshh/Nikeshh.com/tree/main/Version15/nikeshh.com" className="underline cursor-pointer">Github</Link></p>
                                        </CustomModal>
                                        )
                                    }}>
                                        <Eye className="mr-2 h-4 w-4" /> View
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>
                <div className='mt-4 md:mt-6 w-full text-center'>
                    <div className="hover:text-blue-600 underline cursor-pointer" onClick={() => {
                        setOpen(
                            <CustomModal
                                title="⚠️ Under Construction"
                                subheading="Should be available in 2-3 days"
                            >
                                <p>You can track the progress or contribute @<Link href="https://github.com/Nikeshh/Nikeshh.com/tree/main/Version15/nikeshh.com" className="underline cursor-pointer">Github</Link></p>
                            </CustomModal>
                        )
                    }}>learn more.</div>
                </div>
            </section>
        );
    } else {
        return <></>;
    }
}

export default Blogs;