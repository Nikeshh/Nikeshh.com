"use client"

import CustomModal from '@/components/global/custom-modal';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useModal } from '@/providers/modal-provider';
import Link from 'next/link';
import React, { useState } from 'react'

type Props = {
    projects: {
        id: string;
        name: string;
        subtitle: string;
        category: string;
    }[]
}

const Projects = ({ projects } : Props) => {
    const { setOpen } = useModal();

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
            <section id="projects" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
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
                                    <span className={selectedProject == a ? 'text-white transition' : 'text-gray-700 transition group-hover:text-gray-700/75'}>
                                        {a}
                                    </span>
                                </div>
                            </Badge>
                        );
                    })}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-9">
                    {selectedProjects.map((a, index) => {
                        return (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle>{a.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-4">
                                    <p>{a.subtitle}</p>
                                </CardContent>
                                {/*<CardFooter>
                                    <Link href={`/projects/${a.id}`}>
                                        <div className="hover:text-blue-600 underline cursor-pointer">explore more.</div>
                                    </Link>
                                </CardFooter>*/}
                            </Card>
                        );
                    })}
                </div>
                {/*<div className='mt-4 md:mt-6 w-full text-center'>
                    <Link className="hover:text-blue-600 underline cursor-pointer" href="/projects">view more.</Link>
                </div>*/}
            </section>
        );
    } else {
        return <></>
    }
}

export default Projects;