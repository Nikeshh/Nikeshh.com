"use client"

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react'

type Props = {
    projects: {
        name: string;
        subtitle: string;
        category: string;
        link: string;
        imageUrl: string;
        tags: Array<string>;
    }[],
    inlineElement: boolean
}

const Projects = ({ projects, inlineElement } : Props) => {

    // Projects
    const projectTags = projects.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
    const [selectedProject, setSelectedProject] = useState(projectTags[0]);
    const [selectedProjects, setSelectedProjects] = useState(projects.filter(item => item.category == projectTags[0]));
    const updateSelectedProject = (project: string) => {
        setSelectedProject(project);
        setSelectedProjects(projects.filter(item => item.category == project));
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
                    {selectedProjects.map((a, index) => {
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
                                    {a.tags.map((tag) => (
                                        <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        );
    } else {
        return <></>
    }
}

export default Projects;