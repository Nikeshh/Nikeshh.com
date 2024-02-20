import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Info } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
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

const Home = async () => {
  const testimonials = await getTestimonials();
  const skills = await getSkills();
  const services = await getServices();
  const projects = await getProjects();
  const blogs = await getBlogs();

  console.log("👋 Hi! It looks like you are trying to explore the code. You can directly work with me on any of the listed projects. Feel free to submit your details through the contact form or directly mail me at nikeshhbaskaran01@gmail.com. Cheers 🍻");

  return (
    <>
      <NotificationC />
      <Navigation />
      <section id="banner" className="container pt-12 md:pt-44 relative flex items-center md:justify-center flex-wrap md:flex-nowrap gap-5">
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
                <Button variant="link" className="text-[16px] md:text-2xl pl-1 cursor-wait"><u>@perfection</u></Button>
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
          <p>
            Code, Coffee and Crazy Creativity: The Nikeshh Experience!
          </p>
          <Link href={"#worked-with"} className="cursor-pointer">
            <Button className="w-fit">
              Explore Me
            </Button>
          </Link>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-70px]">
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
            href="https://altinteriors.ca/"
            target='_blank'
            className='cursor-pointer'
          >
            <Image
              src={'/assets/clients/altinteriors.png'}
              alt="client image"
              height={240}
              width={240}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />
          </Link>
          <Link
            href="https://www.spadesbrand.com/"
            target='_blank'
            className='cursor-pointer'
          >
            <Image
              src={'/assets/clients/spadesbrand.png'}
              alt="client image"
              height={240}
              width={240}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />
          </Link>
          <Link
            href="https://www.ppe-supply.com/"
            target='_blank'
            className='cursor-pointer'
          >
            <Image
              src={'/assets/clients/ppesupply.png'}
              alt="client image"
              height={240}
              width={240}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />
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
      <Footer />
    </>
  );
}

export default Home;