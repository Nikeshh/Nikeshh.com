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
    const groupedService = Object.values(groupedServices)[0] as ServicesType[]
    const [serviceCommand, setServiceCommand] = useState(groupedService ? groupedService[0] as ServicesType : {
        id: '',
        name: '',
        category: '',
        subcategory: '',
        subtitle: ''
    });
    const updateSelectedService = (service: string) => {
        setSelectedService(service);
        const s = services.filter(item => item.category == service);
        const groupedServices = groupByKey(s, 'subcategory');
        setSelectedServices(groupedServices);
        const groupedService = Object.values(groupedServices)[0] as ServicesType[]
        setServiceCommand(groupedService ? groupedService[0] as ServicesType : {
            id: '',
            name: '',
            category: '',
            subcategory: '',
            subtitle: ''
        });
    }

    if (services && services.length > 0 && serviceTags) {
        <section id="services" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
            <p>BUILT FOR SCALING & VALUE</p>
            <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
                    SERVICES
                </h2>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {serviceTags.map((a) => {
                    return (
                        <Badge variant={selectedService == a ? 'default' : 'outline'} key={a}>
                            <div
                                className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end cursor-pointer"
                                onClick={() => updateSelectedService(a)}
                            >
                                <span className={selectedService == a ? 'text-white transition' : 'text-gray-700 transition group-hover:text-gray-700/75'}>
                                    {a}
                                </span>
                            </div>
                        </Badge>
                    );
                })}
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 pt-9">
                <Command>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        {Object.keys(selectedServices).map((service) => {
                            const subServices = selectedServices[service];
                            return (
                            <div key={service}>
                                <CommandGroup heading={service}>
                                    {subServices.map((subService: ServicesType) => {
                                        return (
                                            <CommandItem key={subService.id} onSelect={() => setServiceCommand(subService)} className="cursor-pointer">{subService.name}</CommandItem>
                                        );
                                    })}
                                </CommandGroup>
                                <CommandSeparator/>
                            </div>
                            );
                        })}
                    </CommandList>
                </Command>
                <Card className="min-w-[200px] max-w-[450px]">
                    <CardHeader>
                        <CardTitle>{serviceCommand.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <p>{serviceCommand.subtitle}</p>
                    </CardContent>
                    <CardFooter>
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
                    </CardFooter>
                </Card>
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
            }}>view more.</div>
            </div>
        </section>
    } else {
        return <></>;
    }
}

export default Services;