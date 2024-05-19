"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import { UserIcon } from 'lucide-react';
import { CgProfile } from 'react-icons/cg';

type Props = {
    testimonials: { 
        id: string;
        name: string;
        content: string;
        avatarUrl: string;
        designation: string;
        companyLogoUrl: string;
    }[]
}

const Testimonials = ({ testimonials } : Props) => {
    if (testimonials) {
        return (
            <section id="testimonials" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
                <p>TESTIMONIALS</p>
                <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                    <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
                        SOME TOOK THE SHOT
                    </h2>
                </div>
                <div className="overflow-hidden bg-gray-800 dark:bg-neutral-950">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
                        {testimonials.map((testimonial, index) => (
                            <div className="flex h-auto" key={index}>
                                <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
                                    <div className="flex-auto p-4 md:p-6">
                                        {testimonial.companyLogoUrl && (
                                            <div className="flex-shrink-0">
                                                <img className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full" src={testimonial.companyLogoUrl} alt="Image Description" />
                                            </div>
                                        )}
                                        <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                                            " {testimonial.content} "
                                        </p>
                                    </div>

                                    <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                                        <div className="flex items-center">
                                            {testimonial.avatarUrl && (
                                                <div className="flex-shrink-0">
                                                    <img className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full" src={testimonial.avatarUrl} alt="Image Description" />
                                                </div>
                                            )}

                                            <div className="grow ms-3">
                                                <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                                                    {testimonial.name}
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-neutral-400">
                                                    {testimonial.designation}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } else {
        return <></>
    }
}

export default Testimonials;