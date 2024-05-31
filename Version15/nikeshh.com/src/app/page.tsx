import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import { getBlogs, getProjects, getSkills, getTestimonials } from '@/lib/queries';
import Testimonials from './_components/testimonials';
import Skills from './_components/skills';
import Blogs from './_components/blogs';
import Projects from './_components/projects';
import Contact from './_components/contact';
import Educations from './_components/educations';
import Globe from '@/components/magicui/globe';
import Certification from './_components/certification';
import Newsletter from './_components/newsletter';
import StarGrid from '@/components/StarGrid';
import TopSkills from './_components/top-skills';
import Notification from "./_components/notification";

const Home = () => {
  const testimonials = getTestimonials();
  const skills = getSkills();
  const projects = getProjects();
  const blogs = getBlogs();

  console.log("👋 Hi! It looks like you are trying to explore the code. You can directly work with me on any of the listed projects. Feel free to submit your details through the contact form or directly mail me at nikeshhbaskaran01@gmail.com. Cheers 🍻");

  return (
    <>
      {/*<NotificationC />*/}
      {/*<Notification />*/}
      <Navigation />
      <StarGrid />
      <section id="banner" className="container pt-24 md:pt-24 xl:pt-[5rem] relative flex items-center md:justify-center flex-wrap md:flex-nowrap gap-5">
        <div className="flex justify-center relative flex-col flex-wrap gap-2 md:gap-4 lg:flex-2">
          <Link href="/built-in-public">
            <span className="absolute -top-16 left-0 right-auto cursor-pointer lg:-top-20">
              <span className="flex items-center">
                <span className="mt-3 inline-block whitespace-nowrap rounded-full bg-neutral-800 px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white">Explore built in public projects!</span>
                <svg className="mr-6 h-8 w-14 [transform:rotateY(180deg)rotateX(0deg)]" width="45" height="25" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z" fill="currentColor" className="fill-gray-300 dark:fill-gray-700"></path></svg>
              </span>
            </span>
          </Link>
          <h2 className="font-bold text-xl md:text-[20px] md:leading-none">
            I am Nikeshh Vijayabaskaran (aka) Nik.
          </h2>
          <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative mt-2 mb-2">
            <h1 className="font-bold text-[70px] architect-font">
              I BUILD.
            </h1>
            {/*<span className='py-2 text-white'><Link href="/business-solutions" className='underline hover:text-blue-700'>Business Solutions</Link> ◦ <Link href="/applications" className='underline hover:text-blue-700'>Applications</Link> ◦ <Link href="/software-products" className='underline hover:text-blue-700'>Software Products</Link> ◦ <Link href="/automations" className='underline hover:text-blue-700'>Automations</Link> ◦ <Link href="/systems-to-scale" className='underline hover:text-blue-700'>Systems to scale</Link></span>*/}
            <span className='py-2 text-white'>Business Solutions ◦ Applications ◦ Software Products ◦ Automations ◦ Systems to scale</span>
          </div>
          <p>
            👨‍💻 Lead Full Stack Developer and Digital Marketer with work spanning a decade.
          </p>
          <p>
            🧑🏻‍💻 Code, Coffee and Crazy Creativity: <u>The Nikeshh Experience!</u>
          </p>
          <p>
            ⚡ A developer who built skills with a great passion for technologies and creating impact for the end users.
          </p>
          <p>🤖 Artificial Intelligence, Automation and Blockchain Enthusiast</p>
          <p>📞 +1 (416)-834-5350 (or) 📨 nikeshhbaskaran01@gmail.com</p>
          <p>🟢 Available for full time / contract / freelancing work</p>
          <div className="flex flex-wrap gap-2">
            <Link href={"#worked-with"} className="cursor-pointer">
              <Button className="w-fit dark:border-white" variant="outline">
                Explore Me
              </Button>
            </Link>
            <Link href="https://nikeshh.substack.com/" className="cursor-pointer">
              <Button className="w-fit dark:border-white" variant="outline">
                My Writings!
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-70px] lg:flex-1">
          {/*<div className="bottom-0 top-[2%] bg-gradient-to-b dark:from-background left-0 right-0 absolute z-10"></div>*/}
          <Image
            priority={false}
            src={'/assets/myphoto.png'}
            alt="banner image"
            height={600}
            width={600}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>    
      <section id="worked-with" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
        <p>WORKED WITH</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h2 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Leading Brands Across The Globe
          </h2>
        </div>
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl mt-4">
          <Globe />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
        <div className='flex flex-wrap gap-2 md:gap-9 mt-9 justify-center items-center'>
          <Link
            href="https://www.rbcroyalbank.com/"
            target='_blank'
            className='cursor-pointer flex flex-col items-center'
          >
            <Image
              src={'/assets/clients/rbc.jpeg'}
              alt="client image"
              height={240}
              width={240}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />
            <span>Contractor</span>
          </Link>
          <Link
            href="https://www.temenos.com/"
            target='_blank'
            className='cursor-pointer flex flex-col items-center'
          >
            <Image
              src={'/assets/clients/temenos.svg'}
              alt="client image"
              height={240}
              width={240}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />
            <span>Full time employee</span>
          </Link>
          <Link
            href="https://altinteriors.ca/"
            target='_blank'
            className='cursor-pointer flex flex-col items-center'
          >
            <Image
              src={'/assets/clients/altinteriors.png'}
              alt="client image"
              height={240}
              width={240}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />
            <span>Contractor</span>
          </Link>
          <Link
            href="https://www.spadesbrand.com/"
            target='_blank'
            className='cursor-pointer flex flex-col items-center'
          >
            <Image
              src={'/assets/clients/spadesbrand.png'}
              alt="client image"
              height={240}
              width={240}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />
            <span>Contractor</span>
          </Link>
          <Link
            href="https://www.ppe-supply.com/"
            target='_blank'
            className='cursor-pointer flex flex-col items-center'
          >
            <Image
              src={'/assets/clients/ppesupply.png'}
              alt="client image"
              height={240}
              width={240}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />
            <span>Contractor</span>
          </Link>
          <Link
            href="https://www.skinessence.ca/"
            target='_blank'
            className='cursor-pointer flex flex-col items-center'
          >
            <Image
              src={'/assets/clients/skinessence.png'}
              alt="client image"
              height={240}
              width={240}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />
            <span>Contractor</span>
          </Link>
          <Link
            href="https://superchargewithsuzan.com/"
            target='_blank'
            className='cursor-pointer flex flex-col items-center'
          >
            <Image
              src={'/assets/clients/suzan-peltekian.png'}
              alt="client image"
              height={240}
              width={240}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />
            <span>Contractor</span>
          </Link>
        </div>
      </section>
      <Educations />
      <TopSkills />
      <Skills skills={skills} inlineElement={true} />
      <Projects projects={projects} inlineElement={true} />
      <section className="bg-neutral-900 mt-12 md:mt-44">
        <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
          <div className="border border-neutral-800 rounded-xl">
            <div className="p-4 lg:p-8 bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg className="flex-shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">50+</h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">Number of Projects Delivered</p>
                  </div>
                </div>

                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <div className="flex justify-center items-center -space-x-5">
                    <Image width={100} height={100} className="relative z-[2] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800" src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                    <Image width={100} height={100} className="relative z-[1] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800 -mt-7" src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                    <Image width={100} height={100} className="relative flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800" src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Image Description" />
                  </div>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">99%</h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">Client Satisfaction Rate</p>
                  </div>
                </div>

                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg className="flex-shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">500+</h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">Automation Scripts Written</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-neutral-800 rounded-xl mt-4">
            <div className="p-4 lg:p-8 bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg className="flex-shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">10+</h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">Years of Experience</p>
                  </div>
                </div>

                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <div className="flex justify-center items-center -space-x-5">
                    <Image width={100} height={100} className="relative z-[2] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800" src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                    <Image width={100} height={100} className="relative z-[1] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800 -mt-7" src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                    <Image width={100} height={100} className="relative flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800" src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Image Description" />
                  </div>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">99%</h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">Project Success Rate</p>
                  </div>
                </div>

                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg className="flex-shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">1,000,000+</h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">Lines of Code Written</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-neutral-800 rounded-xl mt-4">
            <div className="p-4 lg:p-8 bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg className="flex-shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">25+ Technologies</h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">Tech Stack Proficiency</p>
                  </div>
                </div>

                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <div className="flex justify-center items-center -space-x-5">
                    <Image width={100} height={100} className="relative z-[2] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800" src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                    <Image width={100} height={100} className="relative z-[1] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800 -mt-7" src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                    <Image width={100} height={100} className="relative flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800" src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Image Description" />
                  </div>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">$5M+</h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">Leads to conversion revenue</p>
                  </div>
                </div>

                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg className="flex-shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">99.9%</h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">Uptime for Deployed Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ExpertJourneys /> */}
      <section id="certifications" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
        <p>CERTIFIED TRIUMPHS</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
                CERTIFICATIONS
            </h2>
        </div>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
            <Certification
              headline='Issued: Nov 2021'
              title='Google Data Analytics Professional Certificate'
              id='KAR7PTDN2R3U'
              link='https://www.credly.com/badges/39aaaa1e-6676-4854-b8e6-1fe8aab100c0/linked_in_profile'
              badges={["Google", "Data Analytics"]}
              imageUrl='/google_logo.jpg'
            />
            <Certification
              headline='Issued: Nov 2021'
              title='Google Project Management: Professional Certificate'
              id='KDQVVYVXGU3Z'
              link='https://www.credly.com/badges/adc3e6e6-4072-4154-92a8-777c1abc2dc4/linked_in_profile'
              badges={["Google", "Project Management"]}
              imageUrl='/google_logo.jpg'
            />
            {/*<Certification
              headline='Issued: July 2022'
              title='NLP with Python for Machine Learning Essential Training'
              id='AeihXv3ISiAX1xnxqu9pX5w01VId'
              link='https://www.linkedin.com/learning/certificates/1ca1142a98bbc60dd891517f1735fa967f07bb2984ca4266a8ace8aafa6b3804'
              badges={["LinkedIn", "NLP"]}
              imageUrl='/linkedin_logo.jpeg'
            />
            <Certification
              headline='Issued: July 2022'
              title='Python for Data Science Essential Training'
              id=''
              link='https://www.linkedin.com/learning/certificates/b67f2e1c32a250c525e858f6a805c92e2326cd82095ebb409f6d1e60235c0068'
              badges={["LinkedIn", "Python", "Data Science"]}
              imageUrl='/linkedin_logo.jpeg'
            />
            <Certification
              headline='Issued: July 2022'
              title='SQL for Statistics Essential Training'
              id=''
              link='https://www.linkedin.com/learning/certificates/6737152efdc0bd69af83ffb125b9e38b689f23292cfca6888f1a174b9afd63c4'
              badges={["LinkedIn", "SQL", "Statistics"]}
              imageUrl='/linkedin_logo.jpeg'
            />
            <Certification
              headline='Issued: June 2018'
              title='Artificial Intelligence A-Z™: Learn How To Build An AI'
              id=''
              link='https://www.udemy.com/certificate/UC-H95OPLWW/'
              badges={["AI"]}
              imageUrl='/udemy_logo.jpg'
            />*/}
          </div>
        </div>
      </section>
      {/*<HonorsAndAwards />*/}
      {/*<Volunteering />*/}
      <Testimonials testimonials={testimonials} />
      {/*<FAQ />*/}
      <Contact />
      <Newsletter />
      {/*<Newsletters />*/}
      <Blogs blogs={blogs.slice(0, 3)} />
      <section id="nikeshhcodes" className="container py-4 relative pt-12 md:pt-44 flex flex-col items-center justify-center">
        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Want to learn programming?</h5>
          <p>Stay up to date with NikeshhCodes.com</p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a href="https://nikeshhcodes.com" target='_blank' className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 mt-2">
              <div className="text-left rtl:text-right">
                <div className="mb-1 text-xs">View NikeshhCodes.com</div>
                <div className="-mt-1 font-sans text-sm font-semibold">(Site under construction)</div>
              </div>
            </a>
          </div>
        </div>
        <Link href="/built-in-public">
            <span className="relative cursor-pointer">
              <span className="flex items-center">
                <span className="mt-3 inline-block whitespace-nowrap rounded-full bg-neutral-800 px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white">Explore other built in public projects!</span>
              </span>
            </span>
          </Link>
      </section>
      <Footer />
    </>
  );
}

export default Home;