import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicText, SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Navigation from "@/components/layout/navigation";
import NotificationC from "@/components/layout/notification";
import Footer from "@/components/layout/footer";
import TextReveal from "@/components/magicui/text-reveal";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Page = async () => {
    console.log("👋 Hi! It looks like you are trying to explore the code. You can directly work with me on any of the listed projects. Feel free to submit your details through the contact form or directly mail me at nikeshhbaskaran01@gmail.com. Cheers 🍻");

    const client = createClient();
    const page = await client
        .getByUID("about", "about")
        .catch(() => notFound());

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
                      <PrismicText field={page.data.company} />
                      <p className="text-lg text-yellow-500">About Me</p>
                  </h1>
                  <p className="mb-4 mt-8 max-w-xl text-lg text-slate-300">
                      <PrismicText field={page.data.description} />
                  </p>
                  <PrismicNextImage
                      field={page.data.logo_image}
                      className="rounded-lg"
                      quality={100}
                  />
              </div>
              <div className="mx-auto ml-0">
                <SliceZone slices={page.data.slices} components={components} />
              </div>
              {/*<div className="p-4">
                <div className="bg-white dark:bg-black border dark:border-white rounded-sm max-w-md">
                  <div className="flex items-center px-4 py-3">
                    <img className="h-8 w-8 rounded-full" src="https://picsum.photos/id/1027/150/150"/>
                    <div className="ml-3 ">
                      <span className="text-sm font-semibold antialiased block leading-tight">Nikeshh Vijayabaskaran</span>
                      <span className="text-gray-600 text-xs block">Developer</span>
                    </div>
                  </div>
                  <img src="https://picsum.photos/id/244/900/900"/>
                  <div className="flex items-center justify-between mx-4 mt-3 mb-2">
                    <div className="flex gap-5">
                      <svg fill="#ffffff" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                      <svg fill="#ffffff" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                      <svg fill="#ffffff" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                    </div>
                    <div className="flex">
                      <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                    </div>
                  </div>
                  <div className="font-semibold text-sm mx-4 mt-2 mb-4">92,372 likes</div>
                </div>
              </div>
          <div className="bg-gray-50 dark:bg-black p-10 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border max-w-xl">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img className="h-11 w-11 rounded-full" src="https://pbs.twimg.com/profile_images/1287562748562309122/4RLk5A_U_x96.jpg"/>
                  <div className="ml-1.5 text-sm leading-tight">
                    <span className="text-black dark:text-white font-bold block ">Visualize Value</span>
                    <span className="text-gray-500 dark:text-gray-400 font-normal block">@visualizevalue</span>
                  </div>
                </div>
                <svg className="text-blue-400 dark:text-white h-6 w-auto inline-block fill-current" viewBox="0 0 24 24"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
              </div>
              <p className="text-black dark:text-white block text-xl leading-snug mt-3">“No one ever made a decision because of a number. They need a story.” — Daniel Kahneman</p>
              <img className="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700" src="https://pbs.twimg.com/media/EpkuplDXEAEjbFc?format=jpg&name=medium"/>
              <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">10:05 AM · Dec 19, 2020</p>
              <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
              <div className="text-gray-500 dark:text-gray-400 flex mt-3">
                <div className="flex items-center mr-6">
                  <svg className="fill-current h-5 w-auto" viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>
                  <span className="ml-3">615</span>
                </div>
                <div className="flex items-center mr-6">
                  <svg className="fill-current h-5 w-auto" viewBox="0 0 24 24"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                  <span className="ml-3">93 people are Tweeting about this</span>
                </div>
              </div>
            </div>
          </div>*/}
          </Bounded>
          <Footer/>
        </>
    );
}

export default Page;
