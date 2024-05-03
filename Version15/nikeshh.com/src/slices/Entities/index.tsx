import Bounded from "@/components/Bounded";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";
import StarGrid from "@/components/StarGrid";
import Link from "next/link";

/**
 * Props for `Entities`.
 */
export type EntitiesProps = SliceComponentProps<Content.EntitiesSlice>;

/**
 * Component for "Entities" Slices.
 */
const Entities = async ({ slice }: EntitiesProps): Promise<JSX.Element> => {
  const client = createClient();

  const caseStudies = await Promise.all(
    slice.items.map(async (item) => {
      if (isFilled.contentRelationship(item.entity)) {
        return await client.getByID<Content.EntityDocument>(item.entity.id);
      }
    })
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <StarGrid />
      <h2 className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
        <PrismicText field={slice.primary.heading} />
      </h2>

      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        <PrismicRichText field={slice.primary.body} />
      </div>

      <div className="mt-20 max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {caseStudies.map(
            (caseStudy, index) =>
              caseStudy && (
                <div
                  key={caseStudy.id}
                  className="rounded overflow-hidden shadow-lg flex flex-col"
                >
                  <div className="relative">
                    <PrismicNextImage
                      field={caseStudy.data.logo_image}
                      quality={100}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={clsx(
                        "rounded-xl lg:col-span-2",
                        index % 2 && "md:-order-1"
                      )}
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                    <a href="#!">
                      <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        <PrismicText field={caseStudy.data.company} />
                      </div>
                    </a>
                  </div>
                  <div className="px-6 py-4 mb-auto">
                    <a
                      href="#"
                      className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                    >
                      <PrismicText field={caseStudy.data.title} />
                    </a>
                    <p className="text-gray-500 text-sm">
                      <PrismicRichText field={caseStudy.data.description} />
                    </p>
                  </div>
                  <div className="h-5 px-6 py-3 flex flex-row items-center justify-between bg-gray-700">
                    <span className="py-1 text-xs font-regular text-gray-100 mr-1 flex flex-row items-center">
                      <span className="ml-1">MRR: $1000</span>
                    </span>
                  </div>
                  <div className="h-5 px-6 py-3 flex flex-row items-center justify-between bg-gray-700">
                    <span className="py-1 text-xs font-regular text-gray-100 mr-1 flex flex-row items-center">
                      <span className="ml-1">Target MRR: $4000</span>
                    </span>
                  </div>
                  <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-900">
                    <span className="py-1 text-xs font-regular text-gray-100 mr-1 flex flex-row items-center">
                      <svg
                        className="h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        ></path>
                      </svg>
                      <PrismicNextLink
                        document={caseStudy}
                        className="hover:text-indigo-600 transition duration-500 ease-in-out"
                      >
                        <span className="ml-1">Read More</span>
                      </PrismicNextLink>
                    </span>

                    <span className="py-1 text-xs font-regular text-gray-100 mr-1 flex flex-row items-center">
                      <Link
                        href="#"
                        className="hover:text-indigo-600 transition duration-500 ease-in-out"
                      >
                        <span className="ml-1">Visit</span>
                      </Link>
                    </span>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default Entities;
