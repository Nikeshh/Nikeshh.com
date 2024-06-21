"use client"

import { useState } from 'react';
import About from './_components/about';
import Blog from './_components/blog';
import Navbar from './_components/navbar';
import Portfolio from './_components/portfolio';
import Resume from './_components/resume';
import Sidebar from './_components/sidebar';
import './style.css';
import Contact from './_components/contact';
import { getBlogs, getProjects, getSkills, getTestimonials } from '@/lib/queries';

const Page = () => {

    const [activeNavbar, setActiveNavbar] = useState("About");
    const [activeSidebar, setActiveSidebar] = useState(false);

    const testimonials = getTestimonials();

    return (
        <main className='mt-0'>
            <Sidebar activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar} />
            <div className="main-content">
                <Navbar activeNavbar={activeNavbar} setActiveNavbar={setActiveNavbar} />
                <About activeNavbar={activeNavbar} testimonials={testimonials} />
                <Resume activeNavbar={activeNavbar} />
                <Portfolio activeNavbar={activeNavbar} />
                <Blog activeNavbar={activeNavbar} />
                <Contact activeNavbar={activeNavbar} />
            </div>
        </main>
    );
}

export default Page;