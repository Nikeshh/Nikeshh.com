import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import NotificationC from "@/components/layout/notification";
import { getBlogs, getProjects, getSkills, getTestimonials } from '@/lib/queries';
import Testimonials from './_components/testimonials';
import Skills from './_components/skills';
import Blogs from './_components/blogs';
import Projects from './_components/projects';
import Newsletters from './_components/newsletters';
import Contact from './_components/contact';
import { twMerge } from 'tailwind-merge';
import Educations from './_components/educations';
import Globe from '@/components/magicui/globe';
import Meteors from '@/components/magicui/meteors';
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import Certification from './_components/certification';
import Honor from './_components/honor';
import Volunteer from './_components/volunteer';

const Home = async () => {
  const testimonials = await getTestimonials();
  const skills = await getSkills();
  const projects = await getProjects();
  const blogs = await getBlogs();

  console.log("👋 Hi! It looks like you are trying to explore the code. You can directly work with me on any of the listed projects. Feel free to submit your details through the contact form or directly mail me at nikeshhbaskaran01@gmail.com. Cheers 🍻");

  return (
    <>
      {/*<NotificationC />*/}
      <Navigation />
      <section id="banner" className="container pt-28 md:pt-26 xl:pt-24 relative flex items-center md:justify-center flex-wrap md:flex-nowrap gap-5">
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
            <p>Applications ◦ Automations ◦ Systems ◦ Software Products</p>
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
      <section id="newsletter" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
        <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md sm:text-center">
                <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Sign up for my newsletter</h2>
                <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the AI, Tech, Automations, Roadmap progress and announcements, feel free to sign up with your email.</p>
                <form action="#">
                    <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                        <div className="relative w-full">
                            <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" />
                        </div>
                        <div>
                            <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg focus:ring-4 bg-blue-700 hover:bg-blue-600">Subscribe</button>
                        </div>
                    </div>
                    <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-blue-700 hover:text-blue-600 hover:underline">Read our Privacy Policy</a>.</div>
                </form>
            </div>
        </div>
      </section>
      <section id="nikeshhcodes" className="container py-4 relative pt-12 md:pt-44 flex flex-col items-center justify-center">
        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Want to learn programming?</h5>
          <p>Stay up to date with NikeshhCodes.com</p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a href="https://nikeshhcodes.com" target='_blank' className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
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
            <span>Freelancer</span>
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
            <span>Freelancer</span>
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
            <span>Freelancer</span>
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
            <span>Freelancer</span>
          </Link>
        </div>
      </section>
      <section id="top-skills" aria-label="Top skills of Nikeshh Vijayabaskaran" className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl md:text-center flex flex-col items-center">
            <h2 className="font-display text-3xl tracking-tight dark:text-white text-slate-900 sm:text-4xl">Top Skills 💎</h2>
            <p className="mt-4 text-lg tracking-tight dark:text-gray-400 text-slate-700">I specialize in making digital stuff awesome! From designing <span className='underline text-purple-600'>user-friendly interfaces</span> to developing <span className='underline text-purple-600'>cool apps</span>, sprinkled with some <span className='underline text-purple-600'>AI magic</span>, and <span className='underline text-purple-600'>managing projects</span> like a pro. Let&apos;s work together to make your projects shine ✨.</p>
          </div>
          <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border hover:dark:border-white bg-background p-10 lg:p-20 md:shadow-xl">
              <Meteors number={30} />
              <div>
                <p className="z-10 whitespace-pre-wrap text-center text-2xl font-medium tracking-tighter text-black dark:text-white underline">
                  Full Stack App Development
                </p>
                <p className="mt-2 font-display text-xl dark:text-gray-300 text-slate-900">I love creating cool stuff online, <span className='italic text-purple-600'>making it look great and easy to use,</span> and managing the whole process smoothly.</p>
                <div className="flex justify-center">
                  <Button variant="ghost" asChild size="sm" className="mt-2 pointer-events-auto">
                    <a href="/full-stack-development">
                      Learn More
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border hover:dark:border-white bg-background p-10 lg:p-20 md:shadow-xl">
              <Meteors number={30} />
              <div>
                <p className="z-10 whitespace-pre-wrap text-center text-2xl font-medium tracking-tighter text-black dark:text-white underline">
                  Building Apps from Start to Finish
                </p>
                <p className="mt-2 font-display text-xl dark:text-gray-300 text-slate-900">I can create apps that work from the <span className='italic text-purple-600'>front (what you see) to the back (where the data is stored).</span> I use languages like JavaScript and Python, along with frameworks like React and Node.js, to make your ideas into real digital things.</p>
                <div className="flex justify-center">
                  <Button variant="ghost" asChild size="sm" className="mt-2 pointer-events-auto">
                    <a href="/building-apps-from-start-to-finish">
                      Learn More
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border hover:dark:border-white bg-background p-10 lg:p-20 md:shadow-xl">
              <Meteors number={30} />
              <div>
                <p className="z-10 whitespace-pre-wrap text-center text-2xl font-medium tracking-tighter text-black dark:text-white underline">
                  Getting Your Brand Noticed Online
                </p>
                <p className="mt-2 font-display text-xl dark:text-gray-300 text-slate-900"><span className='italic text-purple-600'>I help businesses stand out on the internet.</span> I use tricks like making sure they show up in search engines, running ads on social media, and using tools like Google Analytics to see what&apos;s working.</p>
                <div className="flex justify-center">
                  <Button variant="ghost" asChild size="sm" className="mt-2 pointer-events-auto">
                    <a href="/getting-your-brand-noticed-online">
                      Learn More
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border hover:dark:border-white bg-background p-10 lg:p-20 md:shadow-xl">
              <Meteors number={30} />
              <div>
                <p className="z-10 whitespace-pre-wrap text-center text-2xl font-medium tracking-tighter text-black dark:text-white underline">
                  Keeping Projects on Track
                </p>
                <p className="mt-2 font-display text-xl dark:text-gray-300 text-slate-900">When it comes to getting stuff done, I&apos;m your person. I use methods like Agile (which is just a smart way to manage projects) and tools like Trello and Jira to <span className='italic text-purple-600'>keep everything organized and moving forward.</span></p>
                <div className="flex justify-center">
                  <Button variant="ghost" asChild size="sm" className="mt-2 pointer-events-auto">
                    <a href="/keeping-projects-on-track">
                      Learn More
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills skills={skills} />
      <section id="work-experience" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
        <p>EXPERT JOURNEYS</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
              WORK EXPERIENCE
          </h2>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              {workExperiences.map((item, index) => (
                <div key={`content-${index}`} className="mb-10">
                  <h2 className="bg-black dark:bg-white dark:text-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {item.badge}
                  </h2>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger><p className="lg:min-w-[800px] flex text-left">{item.title}</p></AccordionTrigger>
                      <AccordionContent>
                        <p className={twMerge("text-xl mb-4 flex justify-between items-end")}>
                          <span className='italic text-sm'>{item.type}</span>
                        </p>
                        <p className={twMerge("text-md mb-4 italic underline")}>
                          {item.company}
                        </p>
            
                        <div className="text-sm  prose prose-sm dark:prose-invert">
                          {item?.image && (
                            <Image
                              src={item.image}
                              alt="blog thumbnail"
                              height="1000"
                              width="1000"
                              className="rounded-lg mb-10 object-cover"
                            />
                          )}
                          {item.description}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
        </div>
      </section>
      <Educations />
      <section id="certifications" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
        <p>CERTIFIED TRIUMPHS</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
                CERTIFICATIONS
            </h2>
        </div>
        <div className="mt-14 flex flex-wrap gap-2 gap-y-12 justify-center">
          <Certification
            headline='Issued: Nov 2021'
            title='Google Data Analytics Professional Certificate'
            id='KAR7PTDN2R3U'
            link='https://www.credly.com/badges/39aaaa1e-6676-4854-b8e6-1fe8aab100c0/linked_in_profile'
            badges={["Google", "Data Analytics"]}
          />
          <Certification
            headline='Issued: Nov 2021'
            title='Google Project Management: Professional Certificate'
            id='KDQVVYVXGU3Z'
            link='https://www.credly.com/badges/adc3e6e6-4072-4154-92a8-777c1abc2dc4/linked_in_profile'
            badges={["Google", "Project Management"]}
          />
          <Certification
            headline='Issued: July 2022'
            title='NLP with Python for Machine Learning Essential Training'
            id='AeihXv3ISiAX1xnxqu9pX5w01VId'
            link='https://www.linkedin.com/learning/certificates/1ca1142a98bbc60dd891517f1735fa967f07bb2984ca4266a8ace8aafa6b3804'
            badges={["LinkedIn", "NLP"]}
          />
          <Certification
            headline='Issued: July 2022'
            title='Python for Data Science Essential Training'
            id=''
            link='https://www.linkedin.com/learning/certificates/b67f2e1c32a250c525e858f6a805c92e2326cd82095ebb409f6d1e60235c0068'
            badges={["LinkedIn", "Python", "Data Science"]}
          />
          <Certification
            headline='Issued: July 2022'
            title='SQL for Statistics Essential Training'
            id=''
            link='https://www.linkedin.com/learning/certificates/6737152efdc0bd69af83ffb125b9e38b689f23292cfca6888f1a174b9afd63c4'
            badges={["LinkedIn", "SQL", "Statistics"]}
          />
          <Certification
            headline='Issued: June 2018'
            title='Artificial Intelligence A-Z™: Learn How To Build An AI'
            id=''
            link='https://www.udemy.com/certificate/UC-H95OPLWW/'
            badges={["AI"]}
          />
        </div>
      </section>
      <section id="honors-and-awards" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
        <p>GLORY TROPHIES</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
                HONORS AND AWARDS
            </h2>
        </div>
        <div className="mt-14 flex flex-wrap gap-2 gap-y-12 justify-center">
          <Honor
            title='TCS Enginx - Top 100'
            description='Got selected in TCS Enginx - Top 100 (June 2018)'
            badges={["TCS", "Hackathon"]}
          />
          <Honor
            title='Salesforce Trailhead'
            description='University Topper (Rank:Ranger) (June 2018)'
            badges={["Salesforce", "University Topper"]}
          />
          <Honor
            title='Proficiency award'
            description='1st Rank holder ( 2017 ) - Department of Computer Science and Engineering (June 2017)'
            badges={["PSG iTech", "University Topper"]}
          />
          <Honor
            title='Proficiency award'
            description='1st Rank holder ( 2018 ) - Department of Computer Science and Engineering (June 2018)'
            badges={["PSG iTech", "University Topper"]}
          />
          <Honor
            title='Proficiency award'
            description='1st Rank holder ( 2019 ) - Department of Computer Science and Engineering (June 2019)'
            badges={["PSG iTech", "University Topper"]}
          />
          <Honor
            title='Proficiency award'
            description='3rd Rank holder ( 2015-2019 ) - Department of Computer Science and Engineering (June 2019)'
            badges={["PSG iTech", "University Topper"]}
          />
        </div>
      </section>
      <Projects projects={projects} />
      <section id="volunteering" className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center">
        <p>HEART WORK</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
              VOLUNTEERING
            </h2>
        </div>
        <div className="mt-14 flex flex-wrap gap-2 gap-y-12 justify-center">
          <Volunteer
            title='President, Indian Society Of Technical Education'
            description='INDIAN SOCIETY OF TECHNICAL EDUCATION-SNIST - (Jun 2016 - Jun 2019)'
            badges={["SNIST", "President"]}
          />
          <Volunteer
            title='President, Coding Club'
            description='PSG Institute Of Technology and Applied Research - (Jun 2016 - Jun 2019)'
            badges={["President", "PSG iTech", "Coding Club"]}
          />
          <Volunteer
            title='Education and Technical Mentor'
            description='Mentored SRM students and was involved in designing and developing Australian based educational platform - (July 2021 - April 2022)'
            badges={["Mentor", "SRM University"]}
          />
          <Volunteer
            title='Chief Designer and Coordinator'
            description='Tarangini - Intra college magazine - (June 2016 - June 2018)'
            badges={["PSG iTech", "Magazine"]}
          />
          <Volunteer
            title='IV coordinator'
            description='Companies: 24/7[ai] and SAP Solutions Pvt Ltd - Bangalore - (June 2015 - October 2017)'
            badges={["PSG iTech", "Coordinator", "24/7[ai]", "SAP"]}
          />
          <Volunteer
            title='Student Partner'
            description='Internshala - (June 2017 - December 2018)'
            badges={["Coordinator"]}
          />
          <Volunteer
            title='Academic Tutor - Android Development'
            description='Yuktaha, PSG iTech - Conducted a workshop on Android Development during Yuktaha&apos;17 - (June 2018 - June 2018)'
            badges={["Yuktaha", "Tutor"]}
          />
          <Volunteer
            title='President, Designer, Organiser'
            description='Institute of Engineers NSS (June 2016 - September 2019)'
            badges={["Civil Rights and Social Action"]}
          />
        </div>
      </section>
      <Testimonials testimonials={testimonials} />
      <Newsletters />
      <Blogs blogs={blogs.slice(0, 3)} />
      <Contact />
      <Footer />
    </>
  );
}

const workExperiences = [
  {
    title: "Senior Full Stack Developer - SME ( AI and ML FOCUSED )",
    company: "Royal Bank Of Canada",
    type: "Contract Full Time",
    description: (
      <>
        <ul>
          <li>● Developed a banking asset management and delegation engine using Recurrent Neural Networks and Deep Learning. Focused on cleaning data, modelling, deployment and release management.</li>
          <li>● I worked on a highly intensive and important project with time constraints.</li>
          <li>● Worked in a fast-paced environment to complete the deliverables even before the deadline to cope with the incoming requirements from the client.</li>
          <li>● Followed scrum and agile methodologies and prepared departmental meetings, video conferences, and presentations using effective strategies.</li>
        </ul>
        <p>💎 Primary skill: Domain-Driven Design (DDD)</p>
      </>
    ),
    badge: "Feb 2023 - Present",
    image: ""
  },
  {
    title: "Senior Full Stack Developer - SME",
    company: "Royal Bank Of Canada",
    type: "Contract Full Time",
    description: (
      <>
        <ul>
          <li>● Developed a banking purchase management and delegation system using VueJS, NodeJS, JavaScript and Typescript involving an admin panel written in AngularJs and end-to-end selenium UI testing written in Python. Deployed the product on the Redhat OpenShift container platform (Kubernetes pods).</li>
          <li>● I worked on a highly intensive and important project with time constraints.</li>
          <li>● Worked in a fast-paced environment to complete the deliverables even before the deadline to cope with the incoming requirements from the client.</li>
          <li>● Followed scrum and agile methodologies and prepared departmental meetings, video conferences, and presentations using effective strategies.</li>
        </ul>
      </>
    ),
    badge: "Sep 2022 - Feb 2023",
    image: ""
  },
  {
    title: "Software Engineer",
    company: "Temenos, Canada",
    type: "Contract Full Time",
    description: (
      <>
        <ul>
          <li>● Developed a data payload streaming and monitoring application using Java8 and Spring Boot framework involving Event-driven architecture / Microservices / Monolithic Architecture, which supports streaming data to and from Kafka, Kinesis and EventHub with support for H2, Oracle, PostgreSQL, MySQL and NuoDB databases</li>
          <li>● Automated deployment process using Helm charts in Kubernetes by Jenkins pipeline.</li>
          <li>● Created custom common Helm Charts to support a custom project using CNCF Landscape tools.</li>
          <li>● Provisioning and working with AWS resources as per the need while saving cost by doing extensive research.</li>
          <li>● Troubleshoot issues related to networking and deployment in the SDLC. Troubleshooting the Kubernetes resources to keep it up and running.</li>
          <li>● Deployed observability stack to support monitoring (Prometheus) and tracing in the Kubernetes Cluster.</li>
          <li>● Created and deployed a fully automated Ansible playbook to provision using Terraform and configure various environments to fulfill the specific needs like DynamoDB and EKS upgrade for the project with the team.</li>
          <li>● Implemented ELK Stack on Kubernetes cluster using Filebeat agent.</li>
          <li>● Led my team for better performance and reliable application development. Solved various problems while working on algorithmic instances of an application. Implemented a responsive UI along with Firebase authentication and state management for data payload monitoring Webapp, Android and IOS.</li>
          <li>● Improved the UI of the application with my creative skills of Adobe XD. Implemented Material Design User Interface in ReactJs and NextJS. Managed the team workflow and project using Project Management software, JIRA.</li>
          <li>● Mentored and managed a team of 5 junior developers with cross-domain expertise.</li>
          <li>● Always been a leader, team player, problem solver, transparent, curious, adaptable and flexible person</li>
        </ul>
        <p>💎 Google Cloud Platform (GCP)</p>
      </>
    ),
    badge: "Feb 2022 - Sep 2022",
    image: ""
  },
  {
    title: "Web Developer, Digitial Marketer and Shopify Expert",
    company: "PPE Supply Canada",
    type: "Contract Full Time",
    description: (
      <>
        <ul>
          <li>● I started to work as an Order Fulfillment Associate and then got transferred to the Website development department.</li>
          <li>● Developed and hosted a ReactJs with Redux based eCommerce website and an admin panel which shows analytical results from the Nodejs application connected to the MongoDB database and a system running on Ruby on Rails.</li>
          <li>● Taught the basics of Web development and Cloud Computing to juniors in the company.</li>
        </ul>
      </>
    ),
    badge: "Jan 2022 - Feb 2022",
    image: ""
  },
  {
    title: "Senior Software Engineer",
    company: "Temenos India Pvt Ltd",
    type: "Full Time",
    description: (
      <>
        <p>Involved in Full Stack Development primarily focusing on Java ( Spring, Spring Boot, Java 8 ), ReactJS with HTML, CSS, Javascript for frontend, Kafka, Kinesis, Event Hub, Apache Atlas, AWS, Azure, Google Cloud, Git, Maven, Gradle, JMS ( ApacheMQ, RabbitMQ ), SQL, MongoDB, H2, NuoDB, Oracle, Postgresql, SQLServer, DBeaver, DBVisualizer, Docker, Kubernetes, Microservices, Eureka, PHP, Apache Camel, MDB ( Message Driven Bean ), EJB, Elastic Search, Jenkins, Grafana, Prometheus, Opentelemetry and Micrometer for monitoring, InfluxDB, Log4j, Jaegar, Logstash, ESB - Enterprise Service Bus (IIB, Mule, OSB), Servers ( Jboss, Websphere, Weblogic, Tomcat ).</p>
        <p>💎 Spring Framework and Full-Stack Development</p>
      </>
    ),
    badge: "July 2021 - December 2021",
    image: ""
  },
  {
    title: "Software Engineer",
    company: "Temenos India Pvt Ltd",
    type: "Full Time",
    description: (
      <>
        <p>Involved in Full Stack Development primarily focusing on Java ( Spring, Spring Boot, Java 8 ), ReactJS with HTML, CSS, Javascript for frontend, Kafka, Kinesis, Event Hub, Apache Atlas, AWS, Azure, Google Cloud, Git, Maven, Gradle, JMS ( ApacheMQ, RabbitMQ ), SQL, MongoDB, H2, NuoDB, Oracle, Postgresql, SQLServer, DBeaver, DBVisualizer, Docker, Kubernetes, Microservices, Eureka, PHP, Apache Camel, MDB ( Message Driven Bean ), EJB, Elastic Search, Jenkins, Grafana, Prometheus, Opentelemetry and Micrometer for monitoring, InfluxDB, Log4j, Jaegar, Logstash, ESB - Enterprise Service Bus (IIB, Mule, OSB), Servers ( Jboss, Websphere, Weblogic, Tomcat ).</p>
        <p>💎 Spring Framework and Full-Stack Development</p>
      </>
    ),
    badge: "June 2019 - July 2021",
    image: ""
  },
  {
    title: "Intern",
    company: "Temenos India Pvt Ltd",
    type: "Full Time",
    description: (
      <>
        <p>Primary language : Java</p>
        <p>💎 Spring Framework and Full-Stack Development</p>
      </>
    ),
    badge: "Jan 2019 - June 2019",
    image: ""
  },
  {
    title: "Senior Full Stack Developer - Freelancer",
    company: "Leadup Global",
    type: "Full Time",
    description: (
      <>
      </>
    ),
    badge: "Jan 2015 - Jan 2019",
    image: ""
  },
  {
    title: "Software Intern",
    company: "Qikonnect - NASSCOM 10K Startup",
    type: "Full Time",
    description: (
      <>
        <p>I was working as a software intern at Qikonnect Technologies Pvt Ltd under the MOE signed between PSG iTech college and the company. I was working on App Development and Web Development.</p>
      </>
    ),
    badge: "Jun 2017 - Jun 2018",
    image: ""
  },
  {
    title: "Software Intern",
    company: "Nexmoo Solutions (India) Private Limited",
    type: "Full Time",
    description: (
      <>
        <p>I was working as a software intern at Nexmoo Solutions Pvt Ltd under the MOE signed between PSG iTech college and the company. I was working on App Development and Web Development.</p>
      </>
    ),
    badge: "Jun 2017 - Jun 2018",
    image: ""
  },
  {
    title: "Software Intern",
    company: "Hewlett Packard Enterprise",
    type: "Full Time",
    description: (
      <>
        <p>During this internship, I developed an android application called HPADWEB which is a listing application that allows the end-users to list and interact with various data.</p>
      </>
    ),
    badge: "Jun 2016 - July 2016",
    image: ""
  },
  {
    title: "Software Intern",
    company: "Clhuble Pvt Ltd",
    type: "Full Time",
    description: (
      <>
        <p>I was responsible for creating a grocery android and ios application. I developed the Android application using Android Studio and IOS application using XCode.</p>
      </>
    ),
    badge: "March 2016 - March 2016",
    image: ""
  }
];

export default Home;