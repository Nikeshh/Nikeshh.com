import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import TextReveal from "@/components/magicui/text-reveal";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

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
                <p className="mb-8 dark:text-neutral-400 text-xl">Hey!</p>
                <h2 className="text-lg font-semibold mb-2 dark:text-white">If you have landed on this page, that means, you have checked all my tech skills and projects, but want to learn more about me.</h2>
                <h2 className="text-lg font-semibold mb-2 dark:text-white">Is it? If not, go to <Link href={"https://nikeshh.com"} className="hover:text-blue-500">https://nikeshh.com/</Link></h2>
                <p className="text-lg mb-5 dark:text-neutral-400">Okey, got it read below.</p>
                <p className="text-lg mb-5 dark:text-neutral-400">First, I love to build softwares and scale them. Sometimes I also help business owners to get their brand up and running online as well promote them using my digital marketing skills.</p>
                <p className="text-lg mb-5 dark:text-neutral-400">Mostly I love to code and explore new technologies. When I&apos;m not coding, you can find me hiking in the great outdoors, or enjoying a good book. Oh, and I&apos;m a big fan of coffee – it&apos;s the fuel that keeps me going!</p>
                <p className="text-lg mb-5 dark:text-neutral-400">Some of my instagram posts:</p>
                <div className="p-4 flex flex-wrap gap-2 justify-center text-lg mb-5">
                  {[
                    '/instagram/instagram_1.jpg',
                    '/instagram/instagram_2.jpg',
                    '/instagram/instagram_3.jpg',
                    '/instagram/instagram_4.jpg',
                    '/instagram/instagram_5.jpg',
                    '/instagram/instagram_6.jpg',
                    '/instagram/instagram_7.jpg'
                  ].map((i, index) => (
                    <div key={index} className="bg-white border rounded-sm max-w-md">
                      <div className="flex items-center px-4 py-3">
                        <Image 
                          src="/assets/myphoto3.png" 
                          alt="thumbnail"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <div className="ml-3">
                          <span className="text-sm font-semibold antialiased block leading-tight text-black">Nikeshh Vijayabaskaran</span>
                          <span className="text-gray-600 text-xs block">Toronto, Canada</span>
                        </div>
                      </div>
                      <Image 
                        src={i}
                        alt="instagram post"
                        width={500}
                        height={500}
                      />
                      <div className="flex items-center justify-between mx-4 mt-3 mb-2">
                        <div className="flex gap-5">
                          <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                          <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                          <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                        </div>
                        <div className="flex">
                          <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                        </div>
                      </div>
                      <div className="font-semibold text-sm mx-4 mt-2 mb-4 text-black">340 likes</div>
                    </div>
                  ))}
                </div>
                <p className="text-lg mb-5 dark:text-neutral-400">Also, I love to be productive. Suffered ADHD for a while (realized after a long time that I had one), I started developing systems and products that tackle them. Used my development skills to keep me focused and not get distracted from the outside world. Every now and then, I stumble upon people who lack focus and I help them to overcome using my techniques. Nothing much, have a schedule, focus on the top tasks and tackle them during the hyper focused hours. Simple but effective. </p>
                <p className="text-lg mb-5 dark:text-neutral-400">“Don’t half bake things”, something I tell myself a lot of times. Nowadays, I  finish what I start, even if it takes months.</p>
                <p className="text-lg mb-5 dark:text-neutral-400">I have also started writing a lot. It really helps me to keeps things on track and narrow down my thoughts. If you lack focus, please start writing. Even if you get distracted you can come back and complete things.</p>
                <p className="text-lg mb-5 dark:text-neutral-400">I love food. Good food, Good Mood. If you like food and like to explore multiple places for food, then you will gel well with me.</p>
                <div className="p-4 flex flex-wrap gap-2 justify-center text-lg mb-5">
                  {[
                    '/instagram/instagram_food_1.jpg',
                    '/instagram/instagram_food_2.jpg'
                  ].map((i, index) => (
                    <div key={index} className="bg-white border rounded-sm max-w-md">
                      <div className="flex items-center px-4 py-3">
                        <Image 
                          src="/assets/myphoto3.png" 
                          alt="thumbnail"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <div className="ml-3">
                          <span className="text-sm font-semibold antialiased block leading-tight text-black">Nikeshh Vijayabaskaran</span>
                          <span className="text-gray-600 text-xs block">Toronto, Canada</span>
                        </div>
                      </div>
                      <Image 
                        src={i}
                        alt="instagram post"
                        width={500}
                        height={500}
                      />
                      <div className="flex items-center justify-between mx-4 mt-3 mb-2">
                        <div className="flex gap-5">
                          <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                          <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                          <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                        </div>
                        <div className="flex">
                          <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                        </div>
                      </div>
                      <div className="font-semibold text-sm mx-4 mt-2 mb-4 text-black">340 likes</div>
                    </div>
                  ))}
                </div>
                <p className="text-lg mb-5 dark:text-neutral-400">I am also building <Link href="https://nikeshhcodes.com/" className="hover:text-blue-500">nikeshhcodes.com</Link>. I always wanted to teach others, my development skills. This website is my one way of doing it. Also, building a tool, to keep track of your side projects and focus on things. Every day, you will get a email, ting ting, you got to complete this. The project is yet to be deployed, will add it here once it is alteast half baked.</p>
                <p className="text-lg mb-5 dark:text-neutral-400">Okey! Enough of talking, below are some of the links, I thought might be useful to know more about you.</p>
                <ul className="text-lg mb-5 dark:text-neutral-400">
                  <li>Projects: <Link href="https://nikeshh.com/#projects" className="hover:text-blue-500">https://nikeshh.com/#projects</Link></li>
                  <li>Development Showcase: <Link href="https://nikeshh.com/development-showcase" className="hover:text-blue-500">https://nikeshh.com/development-showcase</Link></li>
                  <li>Skills: <Link href="https://nikeshh.com/#skills" className="hover:text-blue-500">https://nikeshh.com/#skills</Link></li>
                  <li>Contact me: <Link href="https://nikeshh.com/contact" className="hover:text-blue-500">https://nikeshh.com/contact</Link></li>
                  <li>Linkedin: <Link href="https://www.linkedin.com/in/nikeshh/" className="hover:text-blue-500">https://www.linkedin.com/in/nikeshh/</Link></li>
                  <li>Facebook: <Link href="https://www.facebook.com/vnikeshh/" className="hover:text-blue-500">https://www.facebook.com/vnikeshh/</Link></li>
                  <li>Instagram: <Link href="https://www.instagram.com/nikeshhvijayabaskaran/" className="hover:text-blue-500">https://www.instagram.com/nikeshhvijayabaskaran/</Link></li>
                  <li>Twitter: <Link href="https://x.com/NikeshhV" className="hover:text-blue-500">https://x.com/NikeshhV</Link></li>
                  <li>Github: <Link href="https://github.com/Nikeshh" className="hover:text-blue-500">https://github.com/Nikeshh</Link></li>
                  <li>Dribbble: <Link href="https://dribbble.com/nikeshh" className="hover:text-blue-500">https://dribbble.com/nikeshh</Link></li>

                </ul>
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
