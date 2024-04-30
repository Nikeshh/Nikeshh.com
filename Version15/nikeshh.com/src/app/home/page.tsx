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
import HoverCardC from './_components/global/hover-card';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { twMerge } from 'tailwind-merge';
import Educations from './_components/educations';
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

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
      <section id="banner" className="container pt-12 md:pt-44 relative flex items-center md:justify-center flex-wrap md:flex-nowrap gap-5">
        <div className="flex justify-center relative flex-col flex-wrap gap-2 md:gap-4 lg:flex-2">
          <h2 className="font-bold text-xl md:text-[20px] md:leading-none">
            I am Nikeshh Vijayabaskaran (aka) Nik.
          </h2>
          <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative mt-2 mb-2">
            <h1 className="font-bold text-[70px] architect-font">
              I BUILD.
            </h1>
            <p>Applications ◦ Automations ◦ Systems</p>
            <p className="inline">Software Products & Systems that scale with </p> <HoverCardC title="perfection" content="" subtext="" />
          </div>
          <p>
            👨‍💻 Lead Full Stack Developer with work spanning a decade.
          </p>
          <p>
            🧑🏻‍💻 Code, Coffee and Crazy Creativity: <u>The Nikeshh Experience!</u>
          </p>
          <p>
            ⚡ A developer who built skills with a great passion for technologies and creating impact for the end users.
          </p>
          <p>🤖 Artificial Intelligence, Automation and Blockchain Enthusiast</p>
          <p>I&apos;m reachable at 📞 +1 (416)-834-5350 (or) 📨 nikeshhbaskaran01@gmail.com</p>
          <p>(◠‿◠) ✌ 🟢 Available for full time / contract / freelancing work</p>
          <Link href={"#worked-with"} className="cursor-pointer">
            <Button className="w-fit">
              Explore Me
            </Button>
          </Link>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-70px] lg:flex-1">
          <div className="bottom-0 top-[2%] bg-gradient-to-b dark:from-background left-0 right-0 absolute z-10"></div>
          <Image
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
          <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
            Leading Brands Across The Globe
          </h2>
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
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight dark:text-white text-slate-900 sm:text-4xl">Top Skills 💎</h2>
            <p className="mt-4 text-lg tracking-tight dark:text-gray-400 text-slate-700">Crafting digital magic with a sprinkle of <span className='underline'>UI/UX wizardry</span>, a dash of <span className='underline'>app development sorcery</span>, a pinch of <span className='underline'>AI enchantment</span>, and a whole lot of <span className='underline'>project management pizzazz</span>! Let me make the work sparkle ✨.</p>
          </div>
          <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6">
            <div>
              <div className="mx-auto max-w-2xl">
                <div className="w-9 rounded-lg bg-blue-600">
                  <svg aria-hidden="true" className="h-9 w-9" fill="none"><defs><linearGradient id=":R2menla:" x1="11.5" y1="18" x2="36" y2="15.5" gradientUnits="userSpaceOnUse"><stop offset=".194" stop-color="#fff"></stop><stop offset="1" stop-color="#6692F1"></stop></linearGradient></defs><path d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5" stroke="url(#:R2menla:)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <h3 className="mt-6 text-sm font-medium dark:text-white text-blue-600">Full Stack App Development</h3>
                <p className="mt-2 font-display text-xl dark:text-gray-300 text-slate-900">Bridging the gap between pixels and databases, I wield the power of full-stack app development to bring your digital dreams to life!</p>
                <p className="mt-4 text-sm dark:text-gray-400 text-slate-600">Mastering the art of full-stack app development with languages like JavaScript and Python, frameworks like React and Node.js, and databases like MongoDB and SQL, I&apos;m your one-stop-shop for turning ideas into interactive digital wonders!</p>
              </div>
            </div>
          </div>
          <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6">
            <div>
              <div className="mx-auto max-w-2xl">
                <div className="w-9 rounded-lg bg-blue-600">
                  <svg aria-hidden="true" className="h-9 w-9" fill="none"><path opacity=".5" d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z" fill="#fff"></path><path opacity=".3" d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z" fill="#fff"></path><path d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z" fill="#fff"></path></svg>                </div>
                <h3 className="mt-6 text-sm font-medium dark:text-white text-blue-600">Digital Marketing</h3>
                <p className="mt-2 font-display text-xl dark:text-gray-300 text-slate-900">Sailing through the digital seas with SEO compasses and social media sails, I chart a course to boost your brand&apos;s visibility and navigate you to success!.</p>
                <p className="mt-4 text-sm dark:text-gray-400 text-slate-600">Navigating the digital realm with SEO strategies, PPC campaigns, and social media prowess, I leverage tools like Google Analytics, Facebook Ads, and Hootsuite to steer your brand toward online dominance!</p>
              </div>
            </div>
          </div>
          <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6">
            <div>
              <div className="mx-auto max-w-2xl">
                <div className="w-9 rounded-lg bg-blue-600">
                  <svg aria-hidden="true" className="h-9 w-9" fill="none"><path opacity=".5" d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z" fill="#fff"></path><path d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z" fill="#fff"></path></svg>                </div>
                <h3 className="mt-6 text-sm font-medium dark:text-white text-blue-600">Project Management</h3>
                <p className="mt-2 font-display text-xl dark:text-gray-300 text-slate-900">Guiding projects from inception to fruition, I wield Agile methodologies and Gantt chart magic to keep timelines on track and stakeholders smiling!</p>
                <p className="mt-4 text-sm dark:text-gray-400 text-slate-600">Steering projects to success with Agile methodologies and Trello boards, I harness the power of Jira, Asana, and Slack to keep teams aligned and milestones within reach!</p>
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
          <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              {workExperiences.map((item, index) => (
                <div key={`content-${index}`} className="mb-10">
                  <h2 className="bg-black dark:bg-white dark:text-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {item.badge}
                  </h2>
      
                  <p className={twMerge("text-xl mb-4 flex justify-between items-end")}>
                    {item.title} <span className='italic text-sm'>{item.type}</span>
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
                </div>
              ))}
            </div>
          </TracingBeam>
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
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard text="Google" />
            <h2 className="dark:text-white text-black mt-4">
              Google Data Analytics Professional Certificate
            </h2>
            <ul className='text-sm font-light'>
              <li>Issued: Nov 2021</li>
              <li>Credential ID: KAR7PTDN2R3U</li>
            </ul>
            <Link href={"https://www.credly.com/badges/39aaaa1e-6676-4854-b8e6-1fe8aab100c0/linked_in_profile"} className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              Check Credential
            </Link>
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard text="Google" />
            <h2 className="dark:text-white text-black mt-4">
              Google Project Management: Professional Certificate
            </h2>
            <ul className='text-sm font-light'>
              <li>Issued: Nov 2021</li>
              <li>Credential ID: KDQVVYVXGU3Z</li>
            </ul>
            <Link href={"https://www.credly.com/badges/adc3e6e6-4072-4154-92a8-777c1abc2dc4/linked_in_profile"} className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              Check Credential
            </Link>
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard text="LinkedIn" />
            <h2 className="dark:text-white text-black mt-4">
              NLP with Python for Machine Learning Essential Training
            </h2>
            <ul className='text-sm font-light'>
              <li>Issued: July 2022</li>
            </ul>
            <Link href={"https://www.linkedin.com/learning/certificates/1ca1142a98bbc60dd891517f1735fa967f07bb2984ca4266a8ace8aafa6b3804"} className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              Check Credential
            </Link>
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard text="LinkedIn" />
            <h2 className="dark:text-white text-black mt-4">
              Python for Data Science Essential Training
            </h2>
            <ul className='text-sm font-light'>
              <li>Issued: July 2022</li>
            </ul>
            <Link href={"https://www.linkedin.com/learning/certificates/b67f2e1c32a250c525e858f6a805c92e2326cd82095ebb409f6d1e60235c0068"} className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              Check Credential
            </Link>
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard text="LinkedIn" />
            <h2 className="dark:text-white text-black mt-4">
              SQL for Statistics Essential Training
            </h2>
            <ul className='text-sm font-light'>
              <li>Issued: July 2022</li>
            </ul>
            <Link href={"https://www.linkedin.com/learning/certificates/6737152efdc0bd69af83ffb125b9e38b689f23292cfca6888f1a174b9afd63c4"} className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              Check Credential
            </Link>
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard text="Udemy" />
            <h2 className="dark:text-white text-black mt-4">
              Artificial Intelligence A-Z™: Learn How To Build An AI
            </h2>
            <ul className='text-sm font-light'>
              <li>Issued: June 2018</li>
            </ul>
            <Link href={"https://www.udemy.com/certificate/UC-H95OPLWW/"} className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              Check Credential
            </Link>
          </div>
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
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard text="SNIST" />
            <h2 className="dark:text-white text-black mt-4">
              INDIAN SOCIETY OF TECHNICAL EDUCATION-SNIST
            </h2>
            <ul className='text-sm font-light'>
              <li>President, Indian Society Of Technical Education (Jun 2016 - Jun 2019)</li>
            </ul>
            <Link href={""} className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              View
            </Link>
          </div>
        </div>
      </section>
      <Testimonials testimonials={testimonials} />
      <Newsletters />
      <Blogs blogs={blogs.slice(0, 3)} />
      <Contact />
      <section id="nikeshhcodes" className="container pt-12 md:pt-22 relative flex flex-col items-center justify-center">
        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Want to learn programming?</h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date with NikeshhCodes.com. I am building this website live in public.</p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a href="https://nikeshhcodes.com" target='_blank' className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <div className="text-left rtl:text-right">
                <div className="mb-1 text-xs">View NikeshhCodes.com</div>
                <div className="-mt-1 font-sans text-sm font-semibold">(Site under construction)</div>
              </div>
            </a>
          </div>
        </div>
      </section>
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