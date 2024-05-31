import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";
import Link from "next/link";
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <Navigation />
      <section className="px-4 py-14 first:pt-10 md:px-6 md:py-20 lg:py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
          <div className="py-12 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <Link className="group block" href="/built-in-public/nikeshhcodes">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                <Image
                  width={640}
                  height={100}
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                  src="/nikeshhcodes-thumbnail.jpg"
                  alt="Image Description"
                />
              </div>

              <div className="pt-4">
                <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-blue-700 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                  Nikeshh Codes
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Learn coding the easy way with focusing of preparing the end user or prospect for interviews
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    Programming
                  </span>
                  <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    Education
                  </span>
                </div>
              </div>
            </Link>
            <Link className="group block" href="/built-in-public/interconnect">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                <Image
                  width={640}
                  height={100}
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                  src="/interconnect.jpg"
                  alt="Image Description"
                />
              </div>

              <div className="pt-4">
                <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-blue-700 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                  Interconnect
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Helps businesses to build seamless connectivity and integrated dashboard with messaging, billing and thousands of apps
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    Business Connectivity
                  </span>
                  <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    Easy to use
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
