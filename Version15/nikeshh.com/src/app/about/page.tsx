import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import TextReveal from "@/components/magicui/text-reveal";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Page = async () => {
  console.log(
    "👋 Hi! It looks like you are trying to explore the code. You can directly work with me on any of the listed projects. Feel free to submit your details through the contact form or directly mail me at nikeshhbaskaran01@gmail.com. Cheers 🍻"
  );

  return (
    <>
      {/*<NotificationC />*/}
      <Navigation />
      <StarGrid />
      <Separator />
      <div className="flex justify-center gap-2 underline">
        <p>Scroll Down</p> <ChevronDown />
      </div>
      <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg bg-white dark:bg-black">
        <TextReveal text="Driven by curiosity and creativity, I love bringing ideas to life to make a difference." />
      </div>
      <Bounded as="article">
        <div className="relative grid place-items-center text-center">
          <h1 className="text-4xl font-medium">
            Nik.
            <p className="text-lg text-yellow-500">About Me</p>
          </h1>
          <p className="mb-4 mt-8 max-w-xl text-lg text-slate-300">
            A little info of me
          </p>
          <Image 
            src="/nikeshhcodes-thumbnail.jpg" 
            alt="About me image"
            width={640}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="mx-auto ml-0">
          <section className="px-4 py-14 first:pt-10 md:px-6 md:py-20 lg:py-24">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
              <div className="prose prose-invert prose-lg prose-slate rich-text">
                <p>
                  *All the content and free resources I provide reflect my own
                  voice and personal brand and not my employers*
                </p>
                <br />
                <p>
                  Hey there! I&apos;m Nikeshh Vijayabaskaran, and I&apos;m all about
                  building and fixing software. With over 6 years of experience
                  leading teams as a Full Stack Engineer and 7 years of
                  freelancing under my belt, I&apos;ve developed a real knack for
                  making things work
                </p>
                <p>
                  Every software application has its own unique story, and I
                  love diving into those stories and bringing them to life.
                  Whether it&apos;s creating stunning websites or solving complex
                  problems with a team, I&apos;m always up for the challenge.
                </p>
                <br />
                <p>Here&apos;s a bit more about what I do:</p>
                <p>
                  <strong>Web Development:</strong> I&apos;m skilled in crafting
                  beautiful and functional websites using tools like ReactJS,
                  NodeJS, and ExpressJS. From the frontend to the backend, I&apos;ve
                  got you covered.
                </p>
                <p>
                  <strong>Database Management:</strong> Need help storing and
                  managing your data? No problem! I&apos;m experienced with databases
                  like MySQL, MongoDB, and PostgreSQL, ensuring your data is
                  secure and accessible.
                </p>
                <p>
                  <strong>Cloud Services:</strong> I&apos;m well-versed in cloud
                  technologies like AWS and Azure, helping businesses leverage
                  the power of the cloud to scale and grow their applications.
                </p>
                <p>
                  <strong>Programming Languages:</strong> Whether it&apos;s Python,
                  Java, or C++, I&apos;m comfortable writing code in multiple
                  languages and always eager to learn more.
                </p>
                <br />
                <p>
                  But it&apos;s not just about writing code for me. I&apos;m passionate
                  about using technology to make a positive impact on the world.
                  Whether it&apos;s building tools to help non-profits or
                  contributing to open-source projects, I&apos;m always looking for
                  ways to give back.
                </p>
                <br />
                <p>
                  When I&apos;m not coding, you can find me exploring new
                  technologies, hiking in the great outdoors, or enjoying a good
                  book. Oh, and I&apos;m a big fan of coffee – it&apos;s the fuel that
                  keeps me going!
                </p>
                <br />
                <p>
                  If you&apos;re looking for someone who&apos;s not only passionate about
                  technology but also committed to delivering top-notch results,
                  look no further. Feel free to drop me a line at{" "}
                  <a
                    target="_blank"
                    href="mailto:nikeshhbaskaran01@gmail.com"
                    rel="noreferrer"
                  >
                    nikeshhbaskaran01@gmail.com
                  </a>{" "}
                  or connect with me on{" "}
                  <a
                    target="_blank"
                    href="https://stackoverflow.com/users/9869837/nikeshh-vijayabaskaran"
                    rel="noreferrer"
                  >
                    Stack Overflow
                  </a>
                  ,{" "}
                  <a
                    target="_blank"
                    href="https://github.com/Nikeshh"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  , or{" "}
                  <a
                    target="_blank"
                    href="https://www.instagram.com/nikeshhvijayabaskaran"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                  .{" "}
                </p>
                <p>Let&apos;s make something amazing together!</p>
              </div>
            </div>
          </section>
        </div>
      </Bounded>
      <Footer />
    </>
  );
};

export default Page;
