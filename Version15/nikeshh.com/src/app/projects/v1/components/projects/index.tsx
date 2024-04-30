"use client"

import { useState } from "react";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";

type Props = {
    projects: {
        id: string;
        name: string;
        subtitle: string;
        category: string;
    }[]
}

const Projects = ({ projects } : Props) => {
    const projectTags = projects.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
    const [selectedService, setSelectedService] = useState(projectTags[0]);
    const [selectedProjects, setSelectedProjects] = useState(projects.filter(item => item.category == projectTags[0]));
    const updateSelectedService = (project: string) => {
        setSelectedService(project);
        setSelectedProjects(projects.filter(item => item.category == project));
    }

    const router = useRouter();

    if (projects && projects.length > 0 && projectTags) {
        return (
            <div className="container pt-12 md:pt-22 relative flex flex-col justify-center items-center flex-wrap md:flex-nowrap gap-5">
                <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                    <h1 className="font-bold text-2xl md:text-[50px] md:leading-none">
                        Projects
                    </h1>
                </div>
                <div className="mt-6 mb-48 flex flex-wrap gap-2 justify-center">
                    {projectTags.map((a, index) => {
                        return (
                            <Badge variant={selectedService == a ? 'default' : 'outline'} key={index}>
                            <div
                                className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end uppercase cursor-pointer"
                                onClick={() => updateSelectedService(a)}
                            >
                                <span className={selectedService == a ? 'text-white transition' : 'text-gray-300 transition group-hover:text-gray-700/75'}>
                                    {a}
                                </span>
                            </div>
                        </Badge>
                        );
                    })}
                </div>
                {selectedProjects.map((project, index) => {
                    return (
                        <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center items-center mb-32" key={index}>
                            <div className='relative'>
                                <p className='absolute text-9xl top-[-100px] left-[20%] font-bold z-[-10]'>#0{index+1}</p>
                                <Badge variant="default" className='absolute top-2 right-2'>
                                    <Link
                                        className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href="#"
                                    >
                                        <span className='text-white transition'>
                                            {project.category}
                                        </span>
                                    </Link>
                                </Badge>
                                <p className="underline absolute bottom-2 right-2 text-slate-600 hover:text-primary">Featured</p>
                                <Image
                                    src={'/assets/preview.png'}
                                    alt="banner image"
                                    height={600}
                                    width={600}
                                    className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                                />
                            </div>
                            <div className="flex flex-col gap-2"> 
                                <h2 className="text-xl">{project.name}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo dicta officiis aspernatur quam animi vero.</p>
                                <span className="underline">Technologies:</span>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis eveniet sequi ipsum quaerat!</p>
                                <Button className="w-fit" onClick={() => router.push(`/projects/${project.id}`)}>
                                    VIEW
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return <div className="flex justify-center mt-16">This guy messed up something! No data found in database</div>;
    }
    
}

export default Projects;