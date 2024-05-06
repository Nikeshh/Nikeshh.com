import Bounded from "@/components/Bounded";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicLink,
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

      <div className="text-black dark:text-slate-100">
        <div className="wrapper pt-10">
          <div className="box-border max-w-7xl mx-4 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3">
            {caseStudies.map(
              (caseStudy, index) =>
                caseStudy && (
                  <article
                    key={caseStudy.id}
                    className="mb-4 break-inside p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border"
                  >
                    <div className="relative mb-4">
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
                      <a href="">
                        <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                          <PrismicText field={caseStudy.data.company} />
                        </div>
                      </a>
                    </div>
                    <a
                      href="#"
                      className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                    >
                      <PrismicText field={caseStudy.data.title} />
                    </a>
                    <p className="text-gray-500 text-sm">
                      <PrismicRichText field={caseStudy.data.description} />
                    </p>
                    <div className="py-4">
                      <a className="inline-flex items-center" href="#">
                        <span className="mr-2">
                          <svg
                            className="fill-rose-600 dark:fill-rose-400 hover:animate-ping"
                            style={{ width: "24px", height: "24px" }}
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                          </svg>
                        </span>
                        <span className="text-lg font-bold">34</span>
                      </a>
                    </div>
                    <div className="h-5 px-6 py-3 flex flex-row items-center justify-between bg-gray-700">
                      <span className="py-1 text-xs font-regular text-gray-100 mr-1 flex flex-row items-center">
                        <span className="ml-1">
                          MRR: <PrismicText field={caseStudy.data.mrr} />
                        </span>
                      </span>
                    </div>
                    <div className="h-5 px-6 py-3 flex flex-row items-center justify-between bg-gray-700">
                      <span className="py-1 text-xs font-regular text-gray-100 mr-1 flex flex-row items-center">
                        <span className="ml-1">
                          Target MRR:{" "}
                          <PrismicText field={caseStudy.data.target_mrr} />
                        </span>
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
                        <Link
                          href={"/entities/" + caseStudy.uid}
                          className="hover:text-indigo-600 transition duration-500 ease-in-out"
                        >
                          <span className="ml-1">Read More</span>
                        </Link>
                      </span>

                      <span className="py-1 text-xs font-regular text-gray-100 mr-1 flex flex-row items-center">
                        <Link
                          href={new URL(caseStudy.data.link ?? "")}
                          className="hover:text-indigo-600 transition duration-500 ease-in-out"
                        >
                          <span className="ml-1">Visit</span>
                        </Link>
                      </span>
                    </div>
                  </article>
                )
            )}
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Entities;
