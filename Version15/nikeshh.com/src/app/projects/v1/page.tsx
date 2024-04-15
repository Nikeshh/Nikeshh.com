import Navigation from '@/components/layout/navigation';
import NotificationC from '@/components/layout/notification';
import Footer from '@/components/layout/footer';
import React from 'react'
import Projects from './components/projects';
import { getAllProjects } from '@/lib/queries';

const Page = async () => {

    const projects = await getAllProjects();
    
    console.log("👋 Hi! It looks like you are trying to explore the code. You can directly work with me on any of the listed projects. Feel free to submit your details through the contact form or directly mail me at nikeshhbaskaran01@gmail.com. Cheers 🍻");

    return (
        <>
            <NotificationC />
            <Navigation />
            <Projects projects={projects} />
            <Footer />
        </>
    )
    }

export default Page
