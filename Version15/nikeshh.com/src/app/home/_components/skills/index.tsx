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
        points: string;
    }[]
}

const Skills = ({ skills } : Props) => {
    const { setOpen } = useModal();

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
                {skillTags.map((a) => {
                return (
                    <Badge variant={selectedSkill == a ? 'default' : 'outline'} key={a}>
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
                        <Image
                            src={'/assets/preview.png'}
                            alt="banner image"
                            height={120}
                            width={120}
                            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                        />
                        <div>
                        {skill.points.split(",").map((point, index) => (
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
                        <Button className="w-full" variant="outline" onClick={() => {
                            setOpen(
                                <CustomModal
                                    title="⚠️ Under Construction"
                                    subheading="Should be available in 2-3 days"
                                >
                                    <p>You can track the progress or contribute @<Link href="https://github.com/Nikeshh/Nikeshh.com/tree/main/Version15/nikeshh.com" className="underline cursor-pointer">Github</Link></p>
                                </CustomModal>
                            )
                            }}>
                            <Eye className="mr-2 h-4 w-4" /> Explore
                        </Button>
                    </CardFooter>
                    </Card>
                );
                })}
            </div>
            <div className='mt-4 md:mt-6 w-full text-center'>
                <div className="hover:text-blue-600 underline cursor-pointer" onClick={() => {
                setOpen(
                    <CustomModal
                        title="⚠️ Under Construction"
                        subheading="Should be available in 2-3 days"
                    >
                        <p>You can track the progress or contribute @<Link href="https://github.com/Nikeshh/Nikeshh.com/tree/main/Version15/nikeshh.com" className="underline cursor-pointer">Github</Link></p>
                    </CustomModal>
                )
                }}>explore more.</div>
            </div>
            </section>
        );
    } else {
        return <></>;
    }

}

export default Skills;