import React from 'react'

import Navigation from '@/components/layout/navigation';
import NotificationC from '@/components/layout/notification';
import Footer from '@/components/layout/footer';
import { getAllBlogs } from '@/lib/queries';
import Blogs from './_components/blogs';

const Page = async () => {

    const blogs = await getAllBlogs();

    console.log("👋 Hi! It looks like you are trying to explore the code. You can directly work with me on any of the listed projects. Feel free to submit your details through the contact form or directly mail me at nikeshhbaskaran01@gmail.com. Cheers 🍻");

    return (
        <>
            <NotificationC />
            <Navigation />
            <Blogs blogs={blogs} />
            <Footer/>
        </>
    )
}

export default Page