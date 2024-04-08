"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import CustomModal from '@/components/global/custom-modal';
import { useModal } from '@/providers/modal-provider';
import Link from 'next/link';
import { Eye } from 'lucide-react';

type Props = {
    skills: {
        id: string;
        name: string;
        category: string;
        imageUrl: string;
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

    if (skills && skills.length > 0 && skillTags) {
        return (
            <section id="skills" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
                <p>TO MENTION</p>
                <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                    <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
                        SKILLS, CERTIFICATIONS, AWARDS & EXPERIENCES
                    </h2>
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
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    {selectedSkills.map((skill) => {
                        return (
                            <Card className={cn("w-[380px]")} key={skill.id}>
                                <CardHeader>
                                    <CardTitle>{skill.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-4">
                                    {skill.imageUrl && (
                                        <Image
                                            src={skill.imageUrl}
                                            alt="skill image"
                                            height={120}
                                            width={120}
                                            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                                        />
                                    )}

                                    <div>
                                        {skill.points.split("|").map((point, index) => (
                                            <div
                                                key={index}
                                                className="mb-2 grid grid-cols-[25px_1fr] items-start pb-2 last:mb-0 last:pb-0"
                                            >
                                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                                <div className="space-y-1">
                                                    <p className="text-sm font-medium leading-none">
                                                    {point}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Link href={`/skills/${skill.id}`}>
                                        <Button className="w-full" variant="outline">
                                            <Eye className="mr-2 h-4 w-4" /> Explore
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
                <div className='mt-4 md:mt-6 w-full text-center'>
                    <Link className="hover:text-blue-600 underline cursor-pointer" href="/skills">explore more.</Link>
                </div>
            </section>
        );
    } else {
        return <></>;
    }

}

export default Skills;