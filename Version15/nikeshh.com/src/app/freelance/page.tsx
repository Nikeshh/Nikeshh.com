import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import { getServices, getTestimonials } from '@/lib/queries';
import Testimonials from './_components/testimonials';
import Services from './_components/services';
import Contact from './_components/contact';
import HoverCardC from './_components/global/hover-card';

const Home = async () => {
  const testimonials = await getTestimonials();
  const services = await getServices();

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
            <p className="mt-4 text-lg tracking-tight dark:text-gray-400 text-slate-700">Crafting digital magic with a sprinkle of <span className='underline'>UI/UX wizardry</span>, a dash of <span className='underline'>app development sorcery</span>, a pinch of <span className='underline'>AI enchantment</span>, and a whole lot of <span className='underline'>project management pizzazz</span>! Let me make your business sparkle ✨.</p>
          </div>
          <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6">
            <div>
              <div className="mx-auto max-w-2xl">
                <div className="w-9 rounded-lg bg-blue-600">
                  <svg aria-hidden="true" className="h-9 w-9" fill="none"><defs><linearGradient id=":R2menla:" x1="11.5" y1="18" x2="36" y2="15.5" gradientUnits="userSpaceOnUse"><stop offset=".194" stop-color="#fff"></stop><stop offset="1" stop-color="#6692F1"></stop></linearGradient></defs><path d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5" stroke="url(#:R2menla:)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
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
      <Services services={services} />
      <Testimonials testimonials={testimonials} />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;