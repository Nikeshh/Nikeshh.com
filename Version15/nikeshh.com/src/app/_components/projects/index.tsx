"use client"

import { Badge } from '@/components/ui/badge';
import { cn, delay } from '@/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react'
import LoadingC from '@/components/global/loading'
import { Switch } from '@/components/ui/switch';
import { Info } from 'lucide-react';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Props = {
    projects: {
        name: string;
        subtitle: string;
        category: string;
        link: string;
        linkType: string;
        imageUrl: string;
        tags: Array<string>;
        view: string;
    }[],
    inlineElement: boolean,
    defaultView?: String
}

const Projects = ({ projects, inlineElement, defaultView = "Business Perspective" } : Props) => {

    const [loading, setLoading] = useState(false);
    const [view, setView] = useState(defaultView);

    let filteredProjects = projects.filter(item => item.view == view);
    let projectTags = filteredProjects.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
    const [selectedProject, setSelectedProject] = useState(projectTags[0]);
    const [selectedProjects, setSelectedProjects] = useState(filteredProjects.filter(item => item.category == projectTags[0]));

    const updateView = async (view: string) => {
        setLoading(true);
        setView(view);
        filteredProjects = projects.filter(item => item.view == view);
        projectTags = filteredProjects.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
        setSelectedProject(projectTags[0]);
        setSelectedProjects(filteredProjects.filter(item => item.category == projectTags[0]));
        await delay(1000);
        setLoading(false);
    }

    const updateSelectedProject = async (project: string) => {
        setLoading(true);
        setSelectedProject(project);
        setSelectedProjects(filteredProjects.filter(item => item.category == project));
        await delay(1000);
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
                <Tabs defaultValue={defaultView == "Business Perspective" ? "business-perspective" : "development-showcase"}>
                <div className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="flex justify-center items-center">
                        <TabsList className='shadow-lg shadow-indigo-500/100'>
                            <TabsTrigger value="business-perspective" onClick={() => {
                                updateSelectedProject("WEB APP");
                                updateView("Business Perspective");
                            }}>Business Perspective</TabsTrigger>
                            <TabsTrigger value="development-showcase" onClick={() => {
                                updateSelectedProject("WEB APP");
                                updateView("Development Showcase");
                            }}>Development Showcase</TabsTrigger>
                        </TabsList>
                    </div>
                    {view == "Development Showcase" && (
                        <div className='flex justify-center mt-4 text-sm gap-2 items-center'>
                            <Info />
                            <p>This is not project project. It is more like components of the projects. More technical in nature.</p>
                        </div>
                    )}
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
                                    <Image width={720} height={468} className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" src={a.imageUrl} alt="Image Description" />
                                </div>

                                <div className="pt-4">
                                    <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-blue-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                                        {a.name}
                                    </h3>
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
                    }) : <div className='flex justify-center'><LoadingC /></div>}
                </div>
                </Tabs>
            </section>
        );
    } else {
        return <></>
    }
}

export default Projects;