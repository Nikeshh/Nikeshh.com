import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

const TopSkills = () => {
  return (
    <section
      id="top-skills"
      aria-label="Top skills of Nikeshh Vijayabaskaran"
      className="pt-12 md:pt-44"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center flex flex-col items-center">
          <h2 className="font-display text-3xl tracking-tight dark:text-white text-slate-900 sm:text-4xl">
            Top Skills & My Approach 💎
          </h2>
          <p className="mt-4 text-lg tracking-tight dark:text-gray-400 text-slate-700"></p>
        </div>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div>
            <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-neutral-200">
              Leave the hard work to me.
            </h2>
            <p className="mt-2 md:mt-4">
              I specialize in making digital stuff awesome! From designing{" "}
              <span className="underline text-white">
                user-friendly interfaces
              </span>{" "}
              to developing{" "}
              <span className="underline text-white">cool apps</span>, sprinkled
              with some <span className="underline text-white">AI magic</span>,
              and{" "}
              <span className="underline text-white">managing projects</span>{" "}
              like a pro. Let&apos;s work together to make your projects shine
              ✨.
            </p>
          </div>
          <div className="mt-5 lg:mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="10" x="3" y="11" rx="2" />
                    <circle cx="12" cy="5" r="2" />
                    <path d="M12 7v4" />
                    <line x1="8" x2="8" y1="16" y2="16" />
                    <line x1="16" x2="16" y1="16" y2="16" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Full Stack App Development
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                      I love creating cool stuff online, making it look great
                      and easy to use, and managing the whole process smoothly.
                    </p>
                    <Link
                      href="/pages/full-stack-app-development"
                      className="text-sm underline mt-2 pointer-events-auto flex items-center"
                    >
                      Read More <ArrowRightIcon className="ml-2 h-2 w-2" />
                    </Link>
                  </div>
                </div>

                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Building Apps from Start to Finish
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                      I can create apps that work from the front (what you see)
                      to the back (where the data is stored). I use languages
                      like JavaScript and Python, along with frameworks like
                      React and Node.js, to make your ideas into real digital
                      things.
                    </p>
                    <Link
                      href="/pages/building-apps-from-start-to-finish"
                      className="text-sm underline mt-2 pointer-events-auto flex items-center"
                    >
                      Read More <ArrowRightIcon className="ml-2 h-2 w-2" />
                    </Link>
                  </div>
                </div>

                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Getting Your Brand Noticed Online
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                      I help businesses stand out on the internet. I use tricks
                      like making sure they show up in search engines, running
                      ads on social media, and using tools like Google Analytics
                      to see what&apos;s working.
                    </p>
                    <Link
                      href="/pages/getting-your-brand-noticed-online"
                      className="text-sm underline mt-2 pointer-events-auto flex items-center"
                    >
                      Read More <ArrowRightIcon className="ml-2 h-2 w-2" />
                    </Link>
                  </div>
                </div>

                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Keeping Projects on Track
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                      When it comes to getting stuff done, I&apos;m your person. I
                      use methods like Agile (which is just a smart way to
                      manage projects) and tools like Trello and Jira to keep
                      everything organized and moving forward.
                    </p>
                    <Link
                      href="/pages/keeping-projects-on-track"
                      className="text-sm underline mt-2 pointer-events-auto flex items-center"
                    >
                      Read More <ArrowRightIcon className="ml-2 h-2 w-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-900">
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                My approach
              </h2>
              <p className="mt-1 text-neutral-400">
                These are the steps I follow once I get the idea/requirement.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                <Image
                  width={640}
                  height={100}
                  className="w-full object-cover rounded-xl"
                  src="/process.jpg"
                  alt="Image Description"
                />
              </div>

              <div>
                <div className="mb-4">
                  <h3 className="text-[#ff0] text-xs font-medium uppercase">
                    Steps
                  </h3>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        1
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="text-white">
                        Market Research and Analysis:{" "}
                      </span>
                      Identify your target audience and understand their needs,
                      preferences, and behaviors.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        2
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="text-white">
                        Product Development and Testing:{" "}
                      </span>
                      Develop digital products or services that address the
                      needs and preferences of your target audience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        3
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="text-white">
                        Marketing and Promotion:{" "}
                      </span>
                      Develop a comprehensive marketing strategy to promote your
                      digital products or services.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        4
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="text-white">
                        Launch and Optimization:{" "}
                      </span>
                      Launch your digital products or services to the market,
                      closely monitoring their performance and user feedback.
                    </p>
                  </div>
                </div>

                <Link
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                  href="#contact"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                      d="M14.05 2a9 9 0 0 1 8 7.94"
                    ></path>
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                      d="M14.05 6A5 5 0 0 1 18 10"
                    ></path>
                  </svg>
                  Schedule a call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSkills;
