"use client"

import React, { useState } from 'react'

const Educations = () => {
    return (
        <section id="education" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
            <div
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent"
            >
                Armed with a post graduation in <span className='font-bold text-white'>Artificial Intelligence and Machine Learning</span>
                <br />
                {" & "}
                <br />
                Bachelor&apos;s in <span className='font-bold text-white'>Computer Science Engineering</span>
            </div>
        </section>
    );
}

export default Educations;