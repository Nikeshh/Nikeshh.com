"use client"

import React, { useState } from 'react'
import { useModal } from '@/providers/modal-provider';
import { groupByKey } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';
import CustomModal from '@/components/global/custom-modal';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Services as ServicesType } from '@prisma/client';

type Props = {
    services: {
        id: string;
        name: string;
        category: string;
        subcategory: string;
        subtitle: string;
    }[]
}

const Services = ({ services } : Props) => {
    const { setOpen } = useModal();

    const serviceTags = services.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
    const [selectedService, setSelectedService] = useState(serviceTags[0]);
    const groupedServices = groupByKey(services.filter(item => item.category == serviceTags[0]), 'subcategory');
    const [selectedServices, setSelectedServices] = useState(groupedServices);
    const updateSelectedService = (service: string) => {
        setSelectedService(service);
        const s = services.filter(item => item.category == service);
        const groupedServices = groupByKey(s, 'subcategory');
        setSelectedServices(groupedServices);
    }

    if (services && services.length > 0 && serviceTags) {
        return (
            <section id="services" className="container pt-12 md:pt-22 relative flex flex-col items-center justify-center">
                <p>BUILT FOR SCALING & VALUE</p>
                <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                    <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
                        SERVICES
                    </h2>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                    {serviceTags.map((a, index) => {
                        return (
                            <Badge variant={selectedService == a ? 'default' : 'outline'} key={index}>
                                <div
                                    className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end cursor-pointer"
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
                <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 pt-9">
                    {Object.keys(selectedServices).map((service) => {
                        const subServices = selectedServices[service];
                        return (
                            <ul key={subServices.id} className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
                                {subServices.map((subService: ServicesType) => {
                                    return (
                                        <li key={subService.id} className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                                            <div className="order-1 sm:ml-6 xl:ml-0">
                                                <h3 className="mb-1 text-slate-900 dark:text-white font-semibold">
                                                    <span className="mb-1 block text-sm leading-6 text-indigo-500">{subService.category}</span>{subService.name}
                                                </h3>
                                                <div className="prose prose-slate prose-sm text-slate-600 dark:text-slate-400">
                                                    <p>{subService.subtitle}</p>
                                                </div>
                                                <Link
                                                    className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                                                    href={`/services/${subService.name.toLowerCase().replace(/ /g, '-').replace(/\//g, '').replace(/\(/g, '').replace(/\)/g, '')}`}>Learn more
                                                    <span className="sr-only">{subService.name}</span>
                                                    <svg className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                                                        width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M0 0L3 3L0 6"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                            <img src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg" alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640" />
                                        </li>
                                    );
                                })}
                            </ul>
                        );
                    })}
                </div>
            </section>
        );
    } else {
        return <></>;
    }
}

export default Services;