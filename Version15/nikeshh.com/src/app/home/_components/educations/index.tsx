"use client"

import React, { useState } from 'react'
import { motion } from "framer-motion";
import { LampContainer } from '@/components/ui/lamp';

const Educations = () => {
    return (
        <section id="education" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
            <LampContainer>
                <motion.h1
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent"
                >
                    Armed with a post graduation in <span className='font-bold text-white'>Artificial Intelligence and Machine Learning</span>
                    <br />
                    {" & "}
                    <br />
                    Bachelor&apos;s in <span className='font-bold text-white'>Computer Science Engineering</span>
                </motion.h1>
            </LampContainer>
        </section>
    );
}

export default Educations;