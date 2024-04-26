import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import NotificationC from "@/components/layout/notification";
import { getBlogs, getProjects, getServices, getSkills, getTestimonials } from '@/lib/queries';
import Testimonials from './_components/testimonials';
import Skills from './_components/skills';
import Blogs from './_components/blogs';
import Services from './_components/services';
import Projects from './_components/projects';
import Newsletters from './_components/newsletters';
import Contact from './_components/contact';
import HoverCardC from './_components/global/hover-card';

const Home = async () => {
  const testimonials = await getTestimonials();
  const skills = await getSkills();
  const services = await getServices();
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
            <p>Software Products & Systems that scale with <HoverCardC title="perfection" content="" subtext="" /></p>
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
      <Skills skills={skills} />
      <Services services={services} />
      <Projects projects={projects} />
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

export default Home;