'use client'

import { Button } from '@/components/ui/button';
import React, { createRef, useEffect, useState } from 'react'
import { toast } from "sonner"
import Image from 'next/image';
import { CalendarDays, Eye, Info, User2 } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Badge } from "@/components/ui/badge"
import { cn, groupByKey } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import NewsletterForm from '@/components/newsletter';
import { z } from 'zod';
import { ContactUserFormSchema, NewsletterUserFormSchema } from '@/lib/types';
import ContactForm from '@/components/contact';
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import NotificationC from "@/components/layout/notification";
import { Services } from '@prisma/client';
import CustomModal from '@/components/global/custom-modal';
import { useModal } from '@/providers/modal-provider';
import { createContact, upsertNewsletter } from '@/lib/queries';

type Props = {
  testimonials: {
    id: string;
    name: string;
    content: string;
    designation: string;
    avatarUrl: string;
    companyLogoUrl: string
  }[];
  skills: {
    id: string;
    name: string;
    points: string;
    category: string;
  }[];
  services: {
    id: string;
    name: string;
    subtitle: string;
    category: string;
    subcategory: string;
  }[];
  projects: {
    id: string;
    name: string;
    category: string;
    subtitle: string;
  }[];
  blogs: {
    id: string;
    title: string;
    imageUrl: string;
    subtitle: string;
  }[];
}

export default function Home({ testimonials, skills, services, projects, blogs } : Props) {
  const { setOpen } = useModal();

  // Testimonials
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const switchTestimonialIndex = () => {
    if (testimonialIndex == testimonials.length - 1) {
      setTestimonialIndex(0);
    } else {
      setTestimonialIndex(testimonialIndex + 1);
    }
  }

  // Skills
  const skillTags = skills.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
  const [selectedSkill, setSelectedSkill] = useState(skillTags[0]);
  const [selectedSkills, setSelectedSkills] = useState(skills.filter(item => item.category == skillTags[0]));
  const updateSelectedSkill = (skill: string) => {
    setSelectedSkill(skill);
    setSelectedSkills(skills.filter(item => item.category == skill));
  }

  // Services
  const serviceTags = services.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
  const [selectedService, setSelectedService] = useState(serviceTags[0]);
  const groupedServices = groupByKey(services.filter(item => item.category == serviceTags[0]), 'subcategory');
  const [selectedServices, setSelectedServices] = useState(groupedServices);
  const updatedSelectedService = (service: string) => {
    setSelectedService(service);
    const s = services.filter(item => item.category == serviceTags[0]);
    setSelectedServices(groupByKey(s, 'subcategory'));
  }
  const [serviceCommand, setServiceCommand] = useState(Object.values(groupedServices)[0] as Services);

  // Projects
  const projectTags = projects.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
  const [selectedProject, setSelectedProject] = useState(projectTags[0]);
  const [selectedProjects, setSelectedProjects] = useState(projects.filter(item => item.category == projectTags[0]));
  const updateSelectedProject = (project: string) => {
    setSelectedProject(project);
    setSelectedProjects(projects.filter(item => item.category == project));
  }

  // Newsletter
  const [newsletterCommand, setNewsletterCommand] = useState('SAAS');
  const newsletterRef = createRef<HTMLFormElement>();
  const onNewsletterFormSubmit = async (
    values: z.infer<typeof NewsletterUserFormSchema>
  ) => {
    try {
      const response = await upsertNewsletter({
        ...values,
        newsletter: newsletterCommand,
      });

      toast.success("Success", {
        description: 'Successfully Saved your info',
      })
      newsletterRef.current?.reset();
    } catch (error) {
      toast.error("Failed", {
        description: 'Could not save your information',
      })
    }
  }

  // Toast Message
  useEffect(() => {
    toast("Website builder for agencies", {
      description: "Monday, February 19, 2023 at 9:00 AM",
      action: {
        label: "View",
        onClick: () => {
          setOpen(
            <CustomModal
                title="⚠️ Under Construction"
                subheading="Should be available in 2-3 days"
            >
                <p>You can track the progress or contribute @<Link href="https://github.com/Nikeshh/Nikeshh.com/tree/main/Version15/nikeshh.com" className="underline">Github</Link></p>
            </CustomModal>
          )
        },
      },
    })
  }, []);

  // Contact Form
  const contactFormRef = createRef<HTMLFormElement>();
  const onContactFormSubmit = async (
    values: z.infer<typeof ContactUserFormSchema>
  ) => {
    try {
      const response = await createContact({
        ...values
      });

      toast.success("Success", {
        description: 'Successfully Saved your info',
      })
      contactFormRef.current?.reset();
    } catch (error) {
      toast.error("Failed", {
        description: 'Could not save your information',
      })
    }
  }

  console.log("👋 Hi! It looks like you are trying to explore the code. You can directly work with me on any of the listed projects. Feel free to submit your details through the contact form or directly mail me at nikeshhbaskaran01@gmail.com. Cheers 🍻");

  return (
    <>
      <NotificationC />
      <Navigation />
      <section className="container pt-12 md:pt-44 relative flex items-center md:justify-center flex-wrap md:flex-nowrap gap-5">
        <div className="flex justify-center relative flex-col gap-2 md:gap-4">
          <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h1 className="font-bold text-2xl md:text-[50px] md:leading-none">
              Senior Full Stack Developer and Digital Marketer
            </h1>
          </div>
          <p className="text-[16px] md:text-2xl">
            Scaling to
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="text-[16px] md:text-2xl pl-1"><u>@perfection</u></Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarFallback>N</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@nikeshh</h4>
                    <p className="text-sm">
                      Achieving perfection involves adding more value than merely pursuing flawlessness in the end.
                    </p>
                    <div className="flex items-center pt-2">
                      <Info className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        My core principle
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </p>
          <Button className="w-fit">
            Explore Me
          </Button>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-70px]">
          <Image
            src={'/assets/preview.png'}
            alt="banner image"
            height={1200}
            width={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
      <section className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
        <p>WORKED WITH</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
              Leading Brands Across The Globe
            </h2>
          </div>
        <div className='flex flex-wrap gap-2 md:gap-9 mt-9 justify-center'>
          <Image
            src={'/assets/preview.png'}
            alt="banner image"
            height={120}
            width={120}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <Image
            src={'/assets/preview.png'}
            alt="banner image"
            height={120}
            width={120}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <Image
            src={'/assets/preview.png'}
            alt="banner image"
            height={120}
            width={120}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <Image
            src={'/assets/preview.png'}
            alt="banner image"
            height={120}
            width={120}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <Image
            src={'/assets/preview.png'}
            alt="banner image"
            height={120}
            width={120}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
        </div>
      </section>
      {skills && skills.length > 0 && skillTags && (
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
                  <Link
                      className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end uppercase"
                      href="#"
                      onClick={() => updateSelectedSkill(a)}
                  >
                      <span className={selectedSkill == a ? 'text-white transition' : 'text-gray-700 transition group-hover:text-gray-700/75'}>
                          {a}
                      </span>
                  </Link>
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
                    <Button className="w-full" variant="outline">
                      <Eye className="mr-2 h-4 w-4" /> Explore
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
          <div className='mt-4 md:mt-6 w-full text-center'>
            <Link href={'#'} className="hover:text-blue-600 underline">explore more.</Link>
          </div>
        </section>
      )}
      {services && services.length > 0 && serviceTags && (
        <section className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
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
                  <Link
                    className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <span className={selectedService == a ? 'text-white transition' : 'text-gray-700 transition group-hover:text-gray-700/75'}>
                        {a}
                    </span>
                  </Link>
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
                        {subServices.map((subService: Services) => {
                          return (
                            <CommandItem key={subService.id} onClick={() => setServiceCommand(subService)}>{subService.name}</CommandItem>
                          );
                        })}
                      </CommandGroup>
                      <CommandSeparator/>
                    </div>
                  );
                })}
              </CommandList>
            </Command>
            <Card className="max-w-[450px]">
              <CardHeader>
                <CardTitle>{serviceCommand.name}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <p>{serviceCommand.subtitle}</p>
              </CardContent>
              <CardFooter>
                <Link href={'#'} className="hover:text-blue-600 underline">explore more.</Link>
              </CardFooter>
            </Card>
          </div>
          <div className='mt-4 md:mt-6 w-full text-center'>
            <Link href={'#'} className="hover:text-blue-600 underline">view more.</Link>
          </div>
        </section>
      )}
      {projects && projects.length > 0 && projectTags && (
        <section id="projects" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
          <p>BUILT FOR IMPACT</p>
          <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
              PROJECTS
            </h2>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {projectTags.map((a) => {
              return (
                <Badge variant={selectedProject == a ? 'default' : 'outline'} key={a}>
                  <Link
                      className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end uppercase"
                      href="#"
                      onClick={() => updateSelectedProject(a)}
                  >
                    <span className={selectedProject == a ? 'text-white transition' : 'text-gray-700 transition group-hover:text-gray-700/75'}>
                        {a}
                    </span>
                  </Link>
              </Badge>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-9">
            {selectedProjects.map((a) => {
              return (
                <Card key={a.id}>
                  <CardHeader>
                    <CardTitle>{a.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <p>{a.subtitle}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={'#'} className="hover:text-blue-600 underline">explore more.</Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
          <div className='mt-4 md:mt-6 w-full text-center'>
            <Link href={'#'} className="hover:text-blue-600 underline">view more.</Link>
          </div>
        </section>
      )}
      {testimonials && testimonials[testimonialIndex] && (
        <section className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
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
              <Link onClick={switchTestimonialIndex} className="hover:text-blue-600 underline" href={''}>view next.</Link>
            </div>
          </div>
        </section>
      )}
      <section className="container pt-12 md:pt-16 relative flex flex-col items-center justify-center">
        <p>NEWSLETTER</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
            Once a week, look out for valuable content in email
          </h2>
        </div>
        <div className='flex justify-center mt-2'>
          <Badge variant="outline" key="Service">
            <Link
              className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
              href="#"
            >
              <span className='text-gray-700 transition group-hover:text-gray-700/75'>
                Trust me, I wont spam
              </span>
            </Link>
          </Badge>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 pt-9">
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Technology">
                <CommandItem onSelect={(value) => setNewsletterCommand(value)}>SAAS</CommandItem>
                <CommandItem onSelect={(value) => setNewsletterCommand(value)}>Web Design and Development</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Business">
                <CommandItem onSelect={(value) => setNewsletterCommand(value)}>Marketing</CommandItem>
                <CommandItem onSelect={(value) => setNewsletterCommand(value)}>Lead Generation</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
          <NewsletterForm
            subTitle={newsletterCommand}
            title="Subscribe to newsletter ✉️"
            apiCall={onNewsletterFormSubmit}
            newsletterRef={newsletterRef}
          />
        </div>
      </section>
      {blogs && blogs.length > 0 && (
        <section className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
          <p>BLOG</p>
          <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
              TO LEARN
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 mt-4 gap-4'>
            {blogs.map((blog) => {
              return (
                <Card key={blog.id}>
                  <CardHeader>
                    <Image
                      src={blog.imageUrl}
                      alt="blog image"
                      height={120}
                      width={120}
                      className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                    />
                  </CardHeader>
                  <CardContent className="flex flex-col justify-center gap-4">
                    <CardTitle>{blog.title}</CardTitle>
                    <p>{blog.subtitle}</p>
                    <div className='flex flex-wrap gap-3 items-center'>
                      <Avatar className="w-8 h-8">
                        <AvatarImage alt="user" />
                        <AvatarFallback className="bg-primary text-sm text-white">
                          <User2 size={14} />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p>Nikeshh Vijayabaskaran</p>
                        <span className="text-xs">Author</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">
                      <Eye className="mr-2 h-4 w-4" /> View
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
          <div className='mt-4 md:mt-6 w-full text-center'>
            <Link href={'#'} className="hover:text-blue-600 underline">learn more.</Link>
          </div>
        </section>
      )}
      <section className="container pt-12 pb-12 md:pt-44 md:pb-24 relative flex gap-4 flex-wrap md:flex-nowrap items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-12">
          <div className="hidden md:flex justify-center items-center relative">
            <Image
              src={'/assets/preview.png'}
              alt="banner image"
              height={600}
              width={600}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />
            <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
          </div>
          <Badge variant="secondary">
            <Link
              className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
              href="#"
            >
              <span className="transition group-hover:text-gray-700/75">
                Available to work
              </span>
              <span className="relative flex h-2 w-2">
                  <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
                  ></span>
                  <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
              </span>
            </Link>
          </Badge>
        </div>
        <ContactForm
          subTitle="Lets Talk"
          title="Got a opportunity or project? Or just say Hi 👋"
          apiCall={onContactFormSubmit}
          contactFormRef={contactFormRef}
        />
      </section>
      <Footer />
    </>
  );
}