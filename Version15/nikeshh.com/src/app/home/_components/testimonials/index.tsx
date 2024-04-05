"use client"

import React, { useState } from 'react'
import Image from 'next/image';

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
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const switchTestimonialIndex = () => {
        if (testimonialIndex == testimonials.length - 1) {
            setTestimonialIndex(0);
        } else {
            setTestimonialIndex(testimonialIndex + 1);
        }
    }
    
    if (testimonials && testimonials[testimonialIndex]) {
        return (
            <section id="testimonials" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
                <p>TESTIMONIALS</p>
                <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                    <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
                        SOME TOOK THE SHOT
                    </h2>
                </div>
                <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8 w-full">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <Image
                        src={testimonials[testimonialIndex].companyLogoUrl}
                        alt="Company logo"
                        height={600}
                        width={600}
                        className="mx-auto h-12"
                    />
                    <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                            <p>“{testimonials[testimonialIndex].content}”</p>
                        </blockquote>
                        <figcaption className="mt-10">
                            <Image
                                src={testimonials[testimonialIndex].avatarUrl}
                                alt="User logo"
                                height={600}
                                width={600}
                                className="mx-auto h-10 w-10 rounded-full"
                            />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold">{testimonials[testimonialIndex].name}</div>
                                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                                <circle cx="1" cy="1" r="1" />
                                </svg>
                                <div className="text-gray-600">{testimonials[testimonialIndex].designation}</div>
                            </div>
                        </figcaption>
                    </figure>
                    </div>
                    <div className='mt-4 md:mt-6 w-full text-center'>
                        <div onClick={switchTestimonialIndex} className="hover:text-blue-600 underline cursor-pointer">view next.</div>
                    </div>
                </div>
            </section>
        );
    } else {
        return <></>
    }
}

export default Testimonials;