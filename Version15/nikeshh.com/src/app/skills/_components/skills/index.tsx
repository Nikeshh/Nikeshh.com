"use client"

import { useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";

type Props = {
    skills: {
        id: string;
        name: string;
        category: string;
        points: string;
    }[]
}

const Skills = ({ skills } : Props) => {
    const skillTags = skills.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
    const [selectedSkill, setSelectedSkill] = useState(skillTags[0]);
    const [selectedSkills, setSelectedSkills] = useState(skills.filter(item => item.category == skillTags[0]));
    const updateSelectedSkill = (skill: string) => {
        setSelectedSkill(skill);
        setSelectedSkills(skills.filter(item => item.category == skill));
    }

    const router = useRouter();

    if (skills && skills.length > 0 && skillTags) {
        return (
            <div className="container pt-12 md:pt-22 relative flex flex-col justify-center items-center flex-wrap md:flex-nowrap gap-5">
                <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                    <h1 className="font-bold text-2xl md:text-[50px] md:leading-none">
                        Skills
                    </h1>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                    {skillTags.map((a, index) => {
                        return (
                            <Badge variant={selectedSkill == a ? 'default' : 'outline'} key={index}>
                            <div
                                className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end uppercase cursor-pointer"
                                onClick={() => updateSelectedSkill(a)}
                            >
                                <span className={selectedSkill == a ? 'text-white transition' : 'text-gray-700 transition group-hover:text-gray-700/75'}>
                                    {a}
                                </span>
                            </div>
                        </Badge>
                        );
                    })}
                </div>
                <div className="mb-48 w-64 md:w-full lg:max-w-5xl md:mx-auto">
                    <Carousel className="relative">
                        <CarouselContent>
                            {selectedSkills.map((skill, index) => {
                                return (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card>
                                                <CardContent className="flex flex-col gap-4 justify-center p-6">
                                                    <div className='relative'>
                                                        <Badge variant="default" className='absolute top-2 right-2'>
                                                            <Link
                                                                className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                                                href="#"
                                                            >
                                                                <span className='text-white transition'>
                                                                    {skill.category}
                                                                </span>
                                                            </Link>
                                                        </Badge>
                                                        <p className="underline absolute bottom-2 right-2 text-slate-600 hover:text-primary">Featured</p>
                                                        <Image
                                                            src={'/assets/preview.png'}
                                                            alt="banner image"
                                                            height={600}
                                                            width={1200}
                                                            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-2"> 
                                                        <h2 className="text-xl">{skill.name}</h2>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo dicta officiis aspernatur quam animi vero.</p>
                                                        <span className="underline">Technologies:</span>
                                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis eveniet sequi ipsum quaerat!</p>
                                                        <Button className="w-fit" onClick={() => router.push(`/skills/${skill.id}`)}>
                                                            VIEW
                                                        </Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </div>
                {selectedSkills.map((skill, index) => {
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
                                            {skill.category}
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
                                <h2 className="text-xl">{skill.name}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo dicta officiis aspernatur quam animi vero.</p>
                                <span className="underline">Technologies:</span>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis eveniet sequi ipsum quaerat!</p>
                                <Button className="w-fit" onClick={() => router.push(`/skills/${skill.id}`)}>
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

export default Skills;