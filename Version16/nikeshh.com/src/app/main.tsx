"use client"

import { useState } from 'react';
import About from './_components/about';
import Blog from './_components/blog';
import Navbar from './_components/navbar';
import Portfolio from './_components/portfolio';
import Resume from './_components/resume';
import Sidebar from './_components/sidebar';
import Contact from './_components/contact';
import './style.css';

type Props = {
    skills: {
        name: string;
        category: string;
        imageUrl: string;
        description: string;
        points: string;
        view: string;
    }[],
    projects: {
        id: string;
        name: string;
        subtitle: string;
        category: string;
        link: string;
        linkType: string;
        imageUrl: string;
        tags: string[];
        view: string;
        content: string;
    }[],
    blogs: {
        uid: string;
        tag: string;
        imageUrl: string;
        title: string;
        description: string;
        content: string;
    }[],
    testimonials: {
        id: string;
        name: string;
        content: string;
        avatarUrl: string;
        designation: string;
        companyLogoUrl: string;
    }[]
}

const Main = ({ skills, projects, blogs, testimonials } : Props) => {

    const [activeNavbar, setActiveNavbar] = useState("About");
    const [activeSidebar, setActiveSidebar] = useState(false);

    return (
        <main className='mt-0'>
            <Sidebar activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar} />
            <div className="main-content">
                <Navbar activeNavbar={activeNavbar} setActiveNavbar={setActiveNavbar} />
                <About activeNavbar={activeNavbar} skills={skills} testimonials={testimonials} />
                <Resume activeNavbar={activeNavbar} />
                <Portfolio activeNavbar={activeNavbar} projects={projects} />
                <Blog activeNavbar={activeNavbar} blogs={blogs} />
                <Contact activeNavbar={activeNavbar} />
            </div>
        </main>
    );
}

export default Main;