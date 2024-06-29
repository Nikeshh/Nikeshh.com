"use client"

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Switch } from "@/components/ui/switch"
import { Info } from 'lucide-react';

type Props = {
    skills: {
        name: string;
        category: string;
        imageUrl: string;
        points: string;
        description: string;
        view: string;
    }[],
    inlineElement: boolean
}

const Skills = ({ skills, inlineElement } : Props) => {
    const [view, setView] = useState("Business Perspective");

    let filteredSkills = skills.filter(item => item.view == view);
    let skillTags = filteredSkills.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
    const [selectedSkill, setSelectedSkill] = useState(skillTags[0]);
    const [selectedSkills, setSelectedSkills] = useState(filteredSkills.filter(item => item.category == skillTags[0]));

    const updateView = (view: string) => {
        setView(view);
        filteredSkills = skills.filter(item => item.view == view);
        skillTags = filteredSkills.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
        setSelectedSkill(skillTags[0]);
        setSelectedSkills(filteredSkills.filter(item => item.category == skillTags[0]));
    }

    const updateSelectedSkill = (skill: string) => {
        setSelectedSkill(skill);
        setSelectedSkills(filteredSkills.filter(item => item.category == skill));
    }


    if (skills && skills.length > 0 && skillTags) {
        return (
            <section id="skills" className={
                cn(
                    "container relative flex flex-col items-center justify-center",
                    inlineElement ? "pt-12 md:pt-44" : "py-12"
                )
            }>
                <p>TO MENTION</p>
                <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                    <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
                        SKILLS & SERVICES
                    </h2>
                </div>
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="flex justify-center items-center">
                        <label className={cn(
                            'min-w-14 text-sm text-gray-500 me-3 dark:text-neutral-400',
                            view == "Business Perspective" && 'dark:text-white',
                        )}>Business Perspective</label>

                        <Switch onClick={() => {
                            if (view == "Business Perspective") {
                                updateSelectedSkill("Development");
                                updateView("Technical Perspective");
                            } else if (view == "Technical Perspective") {
                                updateSelectedSkill("Development For Business Solutions");
                                updateView("Business Perspective");
                            }
                        }} checked={view == "Technical Perspective"}/>
                        <label className={cn(
                            'relative min-w-14 text-sm text-gray-500 ms-3 dark:text-neutral-400',
                            view == "Technical Perspective" && 'dark:text-white',
                        )}>
                            Technical Perspective
                            <span className="absolute -top-10 start-auto -end-[3rem]">
                                <span className="flex items-center">
                                    <svg className="w-14 h-8 -me-6" width="45" height="25" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z" fill="currentColor" className="fill-gray-300 dark:fill-neutral-700"/>
                                    </svg>
                                    <span className="mt-3 inline-block whitespace-nowrap text-[11px] leading-5 font-semibold tracking-wide uppercase bg-blue-600 text-white rounded-full py-1 px-2.5">Switch</span>
                                </span>
                            </span>
                        </label>
                    </div>
                    {view == "Technical Perspective" && (
                        <div className='flex justify-center mt-4 text-sm gap-2 items-center'>
                            <Info />
                            <p>Please note data presented below are more technical in nature.</p>
                        </div>
                    )}
                </div>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                    {skillTags.map((a, index) => {
                        return (
                            <Badge variant={selectedSkill == a ? 'default' : 'outline'} key={index}>
                            <div
                                className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end uppercase cursor-pointer"
                                onClick={() => updateSelectedSkill(a)}
                            >
                                <span className={selectedSkill == a ? 'text-white transition' : 'text-gray-400 transition group-hover:text-gray-700/75'}>
                                    {a}
                                </span>
                            </div>
                        </Badge>
                        );
                    })}
                </div>
                <div className="mt-6 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="lg:w-3/4">
                            <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
                                {selectedSkill}
                            </h2>
                            {/*<p className="mt-3 text-gray-800 dark:text-neutral-400"></p>*/}
                            {/*<p className="mt-5">
                                <Link className="inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500" href="#">
                                    Read More
                                    <svg className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                </Link>
                            </p>*/}
                        </div>

                        <div className="space-y-6 lg:space-y-10">
                            {selectedSkills.map((skill, index) => {
                                return (
                                    <div className="flex" key={index}>
                                        <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                                            <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                                        </span>
                                        <div className="ms-5 sm:ms-8">
                                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                                {skill.name}
                                            </h3>
                                            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                                {skill.description}
                                            </p>
                                            <ul className="mt-1 text-gray-600 dark:text-neutral-400">
                                                {skill.points.split("|").map((point, index) => (
                                                    <li key={index}>{point}</li>
                                                ))}
                                            </ul>
                                            {/*<p className="mt-2">
                                                <Link className="inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500 text-sm" href={`/skills/${skill.name.toLowerCase().replace(/ /g, '-').replace(/\//g, '').replace(/\(/g, '').replace(/\)/g, '').replace(/\&/g, '-')}`}>
                                                    Read More
                                                    <svg className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                                </Link>
                                            </p>*/}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    } else {
        return <></>;
    }

}

export default Skills;