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
import Educations from './_components/educations';
import Globe from '@/components/magicui/globe';
import Meteors from '@/components/magicui/meteors';
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Certification from './_components/certification';
import Honor from './_components/honor';
import Volunteer from './_components/volunteer';
import Newsletter from './_components/newsletter';
import StarGrid from '@/components/StarGrid';
import ExpertJourneys from './_components/expert-journeys';

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
      <StarGrid />
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
      <Newsletter />
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
                    <a href="/pages/full-stack-development">
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
                    <a href="/pages/building-apps-from-start-to-finish">
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
                    <a href="/pages/getting-your-brand-noticed-online">
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
                    <a href="/pages/keeping-projects-on-track">
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
      {/* <ExpertJourneys /> */}
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

export default Home;