import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";

/**
 * This component renders your homepage.
 *
 * Use Next's generateMetadata function to render page metadata.
 *
 * Use the SliceZone to render the content of the page.
 */

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("skills", "skills");

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title || undefined,
      images: [
        {
          url: home.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Index() {
  /**
   * The client queries content from the Prismic API
   */
  const client = createClient();
  const home = await client.getByUID("skills", "skills");

  return <>
    <Navigation />
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                  Management
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  4 job positions
                </p>
              </div>
              <div className="ps-3">
                <svg className="flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
          </div>
        </a>

        <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                  App Development
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  26 job positions
                </p>
              </div>
              <div className="ps-3">
                <svg className="flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
          </div>
        </a>

        <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                  Arts & Entertainment
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  9 job positions
                </p>
              </div>
              <div className="ps-3">
                <svg className="flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
          </div>
        </a>

        <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                  Accounting
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  11 job positions
                </p>
              </div>
              <div className="ps-3">
                <svg className="flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
          </div>
        </a>

        <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                  UI Designer
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  37 job positions
                </p>
              </div>
              <div className="ps-3">
                <svg className="flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
          </div>
        </a>

        <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                  Apps
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  2 job positions
                </p>
              </div>
              <div className="ps-3">
                <svg className="flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
          </div>
        </a>

        <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                  Content Writer
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  10 job positions
                </p>
              </div>
              <div className="ps-3">
                <svg className="flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
          </div>
        </a>

        <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                  Analytics
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  14 job positions
                </p>
              </div>
              <div className="ps-3">
                <svg className="flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <SliceZone slices={home.data.slices} components={components} />
    <Footer />
  </>
}
