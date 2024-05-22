"use client"

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react'
import LoadingC from '@/components/global/loading'
import { Switch } from '@/components/ui/switch';

type Props = {
    projects: {
        name: string;
        subtitle: string;
        category: string;
        link: string;
        imageUrl: string;
        tags: Array<string>;
        view: string;
    }[],
    inlineElement: boolean
}

const Projects = ({ projects, inlineElement } : Props) => {

    const [loading, setLoading] = useState(false);
    const [view, setView] = useState("Business Prespective");

    let filteredProjects = projects.filter(item => item.view == view);
    let projectTags = filteredProjects.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
    const [selectedProject, setSelectedProject] = useState(projectTags[0]);
    const [selectedProjects, setSelectedProjects] = useState(filteredProjects.filter(item => item.category == projectTags[0]));

    const updateView = (view: string) => {
        setLoading(true);
        setView(view);
        filteredProjects = projects.filter(item => item.view == view);
        projectTags = filteredProjects.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
        setSelectedProject(projectTags[0]);
        setSelectedProjects(filteredProjects.filter(item => item.category == projectTags[0]));
        setLoading(false);
    }

    const updateSelectedProject = (project: string) => {
        setLoading(true);
        setSelectedProject(project);
        setSelectedProjects(filteredProjects.filter(item => item.category == project));
        setLoading(false);
    }

    if (projects && projects.length > 0 && projectTags) {
        return (
            <section id="projects" className={
                cn(
                    "container relative flex flex-col items-center justify-center",
                    inlineElement ? "pt-12 md:pt-44" : "py-12"
                )
            }>
                <p>BUILT FOR IMPACT</p>
                <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                    <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
                        PROJECTS
                    </h2>
                </div>
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="flex justify-center items-center">
                        <label className={cn(
                            'min-w-14 text-sm text-gray-500 me-3 dark:text-neutral-400',
                            view == "Business Prespective" && 'dark:text-white',
                        )}>Business Prespective</label>

                        <Switch onClick={() => {
                            if (view == "Business Prespective") {
                                updateSelectedProject("WEB APP");
                                updateView("Technical Prespective");
                            } else if (view == "Technical Prespective") {
                                updateSelectedProject("WEB APP");
                                updateView("Business Prespective");
                            }
                        }} checked={view == "Technical Prespective"}/>
                        <label className={cn(
                            'relative min-w-14 text-sm text-gray-500 ms-3 dark:text-neutral-400',
                            view == "Technical Prespective" && 'dark:text-white',
                        )}>
                            Technical Prespective
                            <span className="absolute -top-10 start-auto -end-[64px]">
                                <span className="flex items-center">
                                    <svg className="w-14 h-8 -me-6" width="45" height="25" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z" fill="currentColor" className="fill-gray-300 dark:fill-neutral-700"/>
                                    </svg>
                                    <span className="mt-3 inline-block whitespace-nowrap text-[11px] leading-5 font-semibold tracking-wide uppercase bg-blue-600 text-white rounded-full py-1 px-2.5">Switch</span>
                                </span>
                            </span>
                        </label>
                    </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                    {projectTags.map((a, index) => {
                        return (
                            <Badge variant={selectedProject == a ? 'default' : 'outline'} key={index}>
                                <div
                                    className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end uppercase cursor-pointer"
                                    onClick={() => updateSelectedProject(a)}
                                >
                                    <span className={selectedProject == a ? 'text-white transition' : 'text-gray-400 transition group-hover:text-gray-700/75'}>
                                        {a}
                                    </span>
                                </div>
                            </Badge>
                        );
                    })}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-12 pt-9">
                    {!loading ? selectedProjects.map((a, index) => {
                        return (
                            <Link href={`/projects/${a.name.toLowerCase().replace(/ /g, '-').replace(/\//g, '').replace(/\(/g, '').replace(/\)/g, '')}`} key={index} className="group block cursor-pointer">
                                <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                                    <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" src={a.imageUrl} alt="Image Description" />
                                </div>

                                <div className="pt-4">
                                <Link href={`/projects/${a.name.toLowerCase().replace(/ /g, '-').replace(/\//g, '').replace(/\(/g, '').replace(/\)/g, '')}`}>
                                    <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-blue-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                                        {a.name}
                                    </h3>
                                </Link>
                                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                    {a.subtitle}
                                </p>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {a.tags.map((tag, index) => (
                                        <span key={index} className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                </div>
                            </Link>
                        );
                    }) : <LoadingC />}
                </div>
            </section>
        );
    } else {
        return <></>
    }
}

export default Projects;